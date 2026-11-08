// UC02 Konfirmasi Registrasi, UC09 Masuk Akun (termasuk reset password), UC10 Keluar Akun.
// Berjalan bila TEST_DATABASE_URL diisi; isi basis data tersebut akan dihapus.
jest.mock('../utils/mailer', () => ({
  kirimEmailKonfirmasiWali: jest.fn().mockResolvedValue(undefined),
  kirimEmailResetPassword: jest.fn().mockResolvedValue(undefined),
}));

const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');
const request = require('supertest');
const app = require('../app');
const db = require('../config/db');
const mailer = require('../utils/mailer');

const PASSWORD = 'Password123!';
const adaDatabase = Boolean(process.env.TEST_DATABASE_URL);
const pakai = (token) => ({ Authorization: `Bearer ${token}` });

async function login(email, password = PASSWORD) {
  return request(app).post('/api/auth/login').send({ email, password });
}

(adaDatabase ? describe : describe.skip)('Auth: konfirmasi wali, masuk, keluar, reset password', () => {
  beforeAll(async () => {
    const baca = (nama) => fs.readFileSync(path.join(__dirname, '../config', nama), 'utf8');
    await db.query(baca('schema.sql'));
    await db.query(baca('seed.sql'));
    await db.query('UPDATE pengguna SET password_hash = $1;', [await bcrypt.hash(PASSWORD, 4)]);
  });

  beforeEach(() => jest.clearAllMocks());

  afterAll(() => db.pool.end());

  describe('UC02 konfirmasi registrasi oleh wali', () => {
    const TOKEN_ANDI = 'TOKEN-WALI-ANDI-2026';

    test('data pendaftaran untuk I-06 tanpa riwayat kesehatan', async () => {
      const res = await request(app).get(`/api/auth/confirm/${TOKEN_ANDI}`);
      expect(res.status).toBe(200);
      expect(res.body.data).toEqual({
        nama: 'Andi Pratama',
        email: 'andi.siswa@mahasehat.id',
        nomor_telepon: '081298765433',
      });
    });

    test('token yang tidak ada ditolak', async () => {
      await request(app).get('/api/auth/confirm/TIDAK-ADA').expect(404);
      await request(app).post('/api/auth/confirm/TIDAK-ADA').expect(404);
      await request(app).post('/api/auth/reject/TIDAK-ADA').expect(404);
    });

    test('pelajar belum bisa masuk sebelum dikonfirmasi', async () => {
      const res = await login('andi.siswa@mahasehat.id');
      expect(res.status).toBe(403);
      expect(res.body.message).toContain('belum dikonfirmasi');
    });

    test('setuju mengaktifkan akun dan menghubungkan pelajar ke akun wali', async () => {
      const res = await request(app).post(`/api/auth/confirm/${TOKEN_ANDI}`);
      expect(res.status).toBe(200);
      expect(res.body.data).toEqual({ status_akun: 'Aktif', terhubung_ke_wali: true });

      const { rows } = await db.query(
        `SELECT u.status_akun, u.token_konfirmasi, p.id_wali FROM pengguna u
         JOIN pelajar p USING (id_pengguna) WHERE u.email = 'andi.siswa@mahasehat.id';`
      );
      expect(rows[0]).toEqual({ status_akun: 'Aktif', token_konfirmasi: null, id_wali: 'WALI-001' });
      expect((await login('andi.siswa@mahasehat.id')).status).toBe(200);
    });

    test('token hanya bisa dipakai sekali, setuju maupun tolak', async () => {
      await request(app).post(`/api/auth/confirm/${TOKEN_ANDI}`).expect(404);
      await request(app).post(`/api/auth/reject/${TOKEN_ANDI}`).expect(404);
      await request(app).get(`/api/auth/confirm/${TOKEN_ANDI}`).expect(404);
    });

    async function daftarPelajarDiBawahUmur(email, emailWali) {
      await request(app)
        .post('/api/auth/register')
        .send({
          nama: 'Siswa Uji',
          email,
          telepon: '081200000099',
          role: 'pelajar',
          password: PASSWORD,
          confirm_password: PASSWORD,
          tanggal_lahir: '2012-05-05',
          email_orang_tua: emailWali,
          riwayat_kesehatan: 'Riwayat rahasia',
        })
        .expect(201);
      return mailer.kirimEmailKonfirmasiWali.mock.calls.at(-1)[0].token;
    }

    test('tidak setuju membuat akun Ditolak, tidak terhubung ke wali, dan tidak bisa masuk', async () => {
      const token = await daftarPelajarDiBawahUmur('ditolak@contoh.test', 'santoso.wali@mahasehat.id');
      const res = await request(app).post(`/api/auth/reject/${token}`);
      expect(res.body.data).toEqual({ status_akun: 'Ditolak', terhubung_ke_wali: false });

      const { rows } = await db.query(
        `SELECT p.id_wali FROM pelajar p JOIN pengguna u USING (id_pengguna) WHERE u.email = 'ditolak@contoh.test';`
      );
      expect(rows[0].id_wali).toBeNull();

      const masuk = await login('ditolak@contoh.test');
      expect(masuk.status).toBe(403);
      expect(masuk.body.message).toContain('ditolak');
    });

    test('setuju tetap mengaktifkan akun walau wali belum punya akun', async () => {
      const token = await daftarPelajarDiBawahUmur('tanpawali@contoh.test', 'belum.daftar@contoh.test');
      const res = await request(app).post(`/api/auth/confirm/${token}`);
      expect(res.body.data).toEqual({ status_akun: 'Aktif', terhubung_ke_wali: false });
    });
  });

  describe('UC09 masuk akun', () => {
    test('login berhasil mengembalikan token dan profil tanpa hash password', async () => {
      const res = await login('budi.pelajar@mahasehat.id');
      expect(res.status).toBe(200);
      expect(typeof res.body.data.token).toBe('string');
      expect(res.body.data.pengguna).toEqual({
        id_pengguna: 1,
        email: 'budi.pelajar@mahasehat.id',
        role: 'Pelajar',
        id_profil: 'PLJ-001',
        nama: 'Budi Pratama',
      });
      expect(JSON.stringify(res.body)).not.toContain('$2a$');
    });

    test.each(['identifier', 'username_or_email'])(
      'email tidak membedakan huruf besar dan bisa dikirim sebagai %s',
      async (field) => {
        const res = await request(app)
          .post('/api/auth/login')
          .send({ [field]: 'BUDI.Pelajar@mahasehat.id', password: PASSWORD });
        expect(res.status).toBe(200);
      }
    );

    test('id profil sesuai peran wali dan tenaga kesehatan', async () => {
      expect((await login('santoso.wali@mahasehat.id')).body.data.pengguna.id_profil).toBe('WALI-001');
      expect((await login('siti.psikolog@mahasehat.id')).body.data.pengguna.id_profil).toBe('NAKES-001');
    });

    test('password salah dan email tidak terdaftar memberi pesan yang sama', async () => {
      const salah = await login('budi.pelajar@mahasehat.id', 'SalahSekali1');
      const tidakAda = await login('tidak.ada@contoh.test', 'SalahSekali1');
      expect(salah.status).toBe(401);
      expect(tidakAda.status).toBe(401);
      expect(salah.body.message).toBe(tidakAda.body.message);
    });

    test.each([
      ['tanpa email', { password: PASSWORD }],
      ['tanpa password', { email: 'budi.pelajar@mahasehat.id' }],
      ['password bukan teks', { email: 'budi.pelajar@mahasehat.id', password: 12345678 }],
      ['body kosong', {}],
    ])('menolak permintaan %s', async (_, body) => {
      await request(app).post('/api/auth/login').send(body).expect(400);
    });

    test('profil pengguna yang login untuk dashboard', async () => {
      const { token } = (await login('santoso.wali@mahasehat.id')).body.data;
      const res = await request(app).get('/api/auth/me').set(pakai(token));
      expect(res.status).toBe(200);
      expect(res.body.data).toMatchObject({ role: 'OrangTuaWali', id_profil: 'WALI-001', nama: 'Bapak Santoso Pratama' });
      await request(app).get('/api/auth/me').expect(401);
    });
  });

  describe('UC10 keluar akun', () => {
    test('token tidak berlaku lagi setelah logout, lalu bisa login ulang', async () => {
      const { token } = (await login('hendra.psikiater@mahasehat.id')).body.data;
      await request(app).get('/api/auth/me').set(pakai(token)).expect(200);
      await request(app).post('/api/auth/logout').set(pakai(token)).expect(200);
      await request(app).get('/api/auth/me').set(pakai(token)).expect(401);
      await request(app).post('/api/auth/logout').set(pakai(token)).expect(401);

      const ulang = (await login('hendra.psikiater@mahasehat.id')).body.data.token;
      await request(app).get('/api/auth/me').set(pakai(ulang)).expect(200);
    });

    test('logout tanpa token ditolak', async () => {
      await request(app).post('/api/auth/logout').expect(401);
    });
  });

  describe('UC09 lupa dan reset password', () => {
    const EMAIL = 'nadia.psikolog@mahasehat.id';
    const BARU = 'KataSandiBaru9';
    let token;
    let tokenSesiLama;

    test('format email salah dan email tidak terdaftar ditolak', async () => {
      await request(app).post('/api/auth/forgot-password').send({ email: 'bukan-email' }).expect(400);
      await request(app).post('/api/auth/forgot-password').send({ email: 'tidak.ada@contoh.test' }).expect(404);
      expect(mailer.kirimEmailResetPassword).not.toHaveBeenCalled();
    });

    test('tautan dikirim ke email dan basis data hanya menyimpan hash token', async () => {
      tokenSesiLama = (await login(EMAIL)).body.data.token;
      await request(app).post('/api/auth/forgot-password').send({ email: 'NADIA.psikolog@mahasehat.id' }).expect(200);

      const panggilan = mailer.kirimEmailResetPassword.mock.calls[0][0];
      expect(panggilan.email).toBe(EMAIL);
      token = panggilan.token;
      const { rows } = await db.query('SELECT reset_token FROM pengguna WHERE email = $1;', [EMAIL]);
      expect(rows[0].reset_token).not.toBe(token);
      expect(rows[0].reset_token).toBe(crypto.createHash('sha256').update(token).digest('hex'));
    });

    test.each([
      ['kata sandi pendek', () => ({ token, password: 'pendek', confirm_password: 'pendek' })],
      ['konfirmasi berbeda', () => ({ token, password: BARU, confirm_password: 'BedaSandi99' })],
      ['token salah', () => ({ token: 'salah', password: BARU, confirm_password: BARU })],
      ['tanpa token', () => ({ password: BARU, confirm_password: BARU })],
    ])('menolak reset dengan %s', async (_, body) => {
      await request(app).post('/api/auth/reset-password').send(body()).expect(400);
    });

    test('reset berhasil: sandi baru berlaku, sandi lama dan sesi lama tidak', async () => {
      await request(app)
        .post('/api/auth/reset-password')
        .send({ token, password: BARU, confirm_password: BARU })
        .expect(200);

      expect((await login(EMAIL, BARU)).status).toBe(200);
      expect((await login(EMAIL)).status).toBe(401);
      await request(app).get('/api/auth/me').set(pakai(tokenSesiLama)).expect(401);
    });

    test('tautan reset hanya bisa dipakai sekali', async () => {
      await request(app)
        .post('/api/auth/reset-password')
        .send({ token, password: 'LainLagi123', confirm_password: 'LainLagi123' })
        .expect(400);
    });

    test('tautan reset yang lewat 1 jam ditolak', async () => {
      await request(app).post('/api/auth/forgot-password').send({ email: EMAIL }).expect(200);
      const lama = mailer.kirimEmailResetPassword.mock.calls[0][0].token;
      await db.query(
        "UPDATE pengguna SET reset_token_expires = NOW() - INTERVAL '1 minute' WHERE email = $1;",
        [EMAIL]
      );
      await request(app)
        .post('/api/auth/reset-password')
        .send({ token: lama, password: 'Kadaluarsa99', confirm_password: 'Kadaluarsa99' })
        .expect(400);
    });
  });
});
