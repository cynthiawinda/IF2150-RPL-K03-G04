// Pengujian Integrasi Antarkomponen (Subbab 4.3 HIUPL, INT-TC01 s.d. INT-TC16).
// Memakai komponen nyata (tanpa mock): Express app, Controller, Model, PostgreSQL, Mailer, dan node-cron.
// Berjalan bila TEST_DATABASE_URL diisi; isi basis data tersebut akan diinisialisasi ulang.
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const request = require('supertest');
const cron = require('node-cron');
const app = require('../app');
const db = require('../config/db');
const { aturPasswordAkunUji } = require('../config/initDb');
const Pengguna = require('../models/Pengguna');
const NotifikasiDarurat = require('../models/NotifikasiDarurat');
const NotifikasiDaruratController = require('../controllers/NotifikasiDaruratController');
const { decryptAES256 } = require('../utils/encryption');
const { kirimEmail } = require('../utils/kirimEmail');
const { kirimEmailKonfirmasiWali, kirimEmailResetPassword } = require('../utils/mailer');
const { mulaiScheduler } = require('../jobs/scheduler');
const { hariIni, tambahHari } = require('../utils/waktu');

const PASSWORD = 'Password123!';
const adaDatabase = Boolean(process.env.TEST_DATABASE_URL);
const pakai = (token) => ({ Authorization: `Bearer ${token}` });

async function login(email, password = PASSWORD) {
  const res = await request(app).post('/api/auth/login').send({ email, password });
  return res;
}

(adaDatabase ? describe : describe.skip)('Pengujian Integrasi Komponen Nyata (I-24 s.d. I-33)', () => {
  beforeAll(async () => {
    const baca = (nama) => fs.readFileSync(path.join(__dirname, '../config', nama), 'utf8');
    await db.query(baca('schema.sql'));
    await db.query(baca('seed.sql'));
    await aturPasswordAkunUji();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  afterAll(async () => {
    for (const task of cron.getTasks().values()) {
      task.stop();
      if (typeof task.destroy === 'function') task.destroy();
    }
    await db.pool.end();
  });

  test('INT-TC01 (I-24): registrasi pelajar <18 thn menyimpan data & riwayat terenkripsi lalu konfirmasi wali mengaktifkan akun', async () => {
    const emailPelajar = 'integrasi.muda@mahasehat.id';
    const reg = await request(app).post('/api/auth/register').send({
      nama: 'Pelajar Muda Integrasi',
      email: emailPelajar,
      telepon: '081277778888',
      role: 'pelajar',
      password: PASSWORD,
      confirm_password: PASSWORD,
      tanggal_lahir: '2012-03-03',
      riwayat_kesehatan: 'Asma ringan dan cemas ujian',
      email_orang_tua: 'santoso.wali@mahasehat.id',
    });
    expect(reg.status).toBe(201);
    expect(reg.body.data.status_akun).toBe('Belum Terverifikasi');

    const { rows: rowsU } = await db.query(
      'SELECT id_pengguna, status_akun, token_konfirmasi FROM pengguna WHERE email = $1;',
      [emailPelajar]
    );
    expect(rowsU[0].status_akun).toBe('Belum Terverifikasi');
    const tokenKonfirmasi = rowsU[0].token_konfirmasi;
    expect(tokenKonfirmasi).toMatch(/^[a-f0-9]{64}$/);

    const { rows: rowsR } = await db.query(
      `SELECT r.riwayat_kesehatan FROM riwayat_kesehatan r
       JOIN pelajar p USING (id_pelajar) WHERE p.id_pengguna = $1;`,
      [rowsU[0].id_pengguna]
    );
    expect(rowsR[0].riwayat_kesehatan).not.toBe('Asma ringan dan cemas ujian');
    expect(decryptAES256(rowsR[0].riwayat_kesehatan)).toBe('Asma ringan dan cemas ujian');

    const konf = await request(app).post(`/api/auth/confirm/${tokenKonfirmasi}`);
    expect(konf.status).toBe(200);
    expect(konf.body.data).toEqual({ status_akun: 'Aktif', terhubung_ke_wali: true });

    const { rows: rowsP } = await db.query(
      'SELECT p.id_wali, u.status_akun FROM pelajar p JOIN pengguna u USING (id_pengguna) WHERE u.email = $1;',
      [emailPelajar]
    );
    expect(rowsP[0]).toEqual({ id_wali: 'WALI-001', status_akun: 'Aktif' });
  });

  test('INT-TC02 (I-24): login menerbitkan JWT, me memverifikasi sesi, dan logout menaikkan versi_token di DB', async () => {
    const resLogin = await login('budi.pelajar@mahasehat.id');
    expect(resLogin.status).toBe(200);
    const token = resLogin.body.data.token;

    await request(app).get('/api/auth/me').set(pakai(token)).expect(200);
    const sebelum = (await db.query("SELECT versi_token FROM pengguna WHERE email = 'budi.pelajar@mahasehat.id';")).rows[0].versi_token;

    await request(app).post('/api/auth/logout').set(pakai(token)).expect(200);
    const sesudah = (await db.query("SELECT versi_token FROM pengguna WHERE email = 'budi.pelajar@mahasehat.id';")).rows[0].versi_token;
    expect(sesudah).toBe(sebelum + 1);

    await request(app).get('/api/auth/me').set(pakai(token)).expect(401);
  });

  test('INT-TC03 (I-25): forgot-password menyimpan hash SHA-256 dan reset-password mengaktifkan sandi baru serta mengakhiri sesi lama', async () => {
    const email = 'nadia.psikolog@mahasehat.id';
    const sandiBaru = 'SandiBaruIntegrasi9!';
    const sesiLama = (await login(email)).body.data.token;

    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    await request(app).post('/api/auth/forgot-password').send({ email }).expect(200);
    const pesanLog = logSpy.mock.calls.flat().join('\n');
    const match = pesanLog.match(/reset-password\?token=([a-f0-9]{64})/);
    expect(match).not.toBeNull();
    const tokenReset = match[1];
    logSpy.mockRestore();

    const { rows } = await db.query('SELECT reset_token FROM pengguna WHERE email = $1;', [email]);
    expect(rows[0].reset_token).toBe(crypto.createHash('sha256').update(tokenReset).digest('hex'));

    await request(app)
      .post('/api/auth/reset-password')
      .send({ token: tokenReset, password: sandiBaru, confirm_password: sandiBaru })
      .expect(200);

    expect((await login(email, sandiBaru)).status).toBe(200);
    expect((await login(email, PASSWORD)).status).toBe(401);
    await request(app).get('/api/auth/me').set(pakai(sesiLama)).expect(401);
  });

  test('INT-TC04 (I-26): CheckInController menyimpan daily check-in dan mengenkripsi catatan_refleksi di PostgreSQL', async () => {
    const token = (await login('citra.pelajar@mahasehat.id')).body.data.token;
    const res = await request(app)
      .post('/api/check-in')
      .set(pakai(token))
      .send({
        mood: 4,
        sleep: { bed: '22:30', wake: '06:00' },
        meal: 'teratur',
        triggers: ['Akademik'],
        note: 'Jurnal integrasi rahasia',
      });
    expect(res.status).toBe(201);

    const { rows } = await db.query(
      "SELECT skala_mood, catatan_refleksi FROM check_in WHERE id_pelajar = 'PLJ-003' AND tanggal_check_in = CURRENT_DATE;"
    );
    expect(rows).toHaveLength(1);
    expect(rows[0].skala_mood).toBe(4);
    expect(rows[0].catatan_refleksi).not.toBe('Jurnal integrasi rahasia');
    expect(decryptAES256(rows[0].catatan_refleksi)).toBe('Jurnal integrasi rahasia');
  });

  test('INT-TC05 (I-26): check-in kedua pada hari yang sama ditolak 409 oleh unique index PostgreSQL', async () => {
    const token = (await login('citra.pelajar@mahasehat.id')).body.data.token;
    const res = await request(app)
      .post('/api/check-in')
      .set(pakai(token))
      .send({ mood: 3, sleep: { bed: '23:00', wake: '06:00' }, meal: 'kurang', triggers: [], note: 'Kedua' });
    expect(res.status).toBe(409);
  });

  test('INT-TC06 (I-27): ReportController menyajikan statistik dan catatan refleksi terdekripsi untuk pelajar', async () => {
    const token = (await login('citra.pelajar@mahasehat.id')).body.data.token;
    const sum = await request(app).get('/api/reports/summary').set(pakai(token));
    expect(sum.status).toBe(200);
    expect(sum.body.data.catatan.some((c) => c.catatan === 'Jurnal integrasi rahasia')).toBe(true);

    const riw = await request(app).get('/api/reports/riwayat').set(pakai(token));
    expect(riw.status).toBe(200);
    expect(riw.body.data.some((r) => r.catatan === 'Jurnal integrasi rahasia')).toBe(true);
  });

  test('INT-TC07 (I-27): ReportController menyembunyikan teks jurnal dari wali (KNF02) dan menolak akses riwayat', async () => {
    const tokenWali = (await login('ratna.wali@mahasehat.id')).body.data.token;
    const sum = await request(app).get('/api/reports/summary').set(pakai(tokenWali));
    expect(sum.status).toBe(200);
    expect(sum.body.data.catatan).toEqual([]);
    expect(JSON.stringify(sum.body)).not.toContain('Jurnal integrasi rahasia');

    await request(app).get('/api/reports/riwayat').set(pakai(tokenWali)).expect(403);
  });

  test('INT-TC08 (I-28): TenagaKesehatanController menyimpan lokasi pelajar di DB dan mengurutkan berdasarkan jarak', async () => {
    const token = (await login('budi.pelajar@mahasehat.id')).body.data.token;
    const res = await request(app)
      .put('/api/tenaga-kesehatan/lokasi-pelajar')
      .set(pakai(token))
      .send({ lat: -6.8915, lng: 107.6107 });
    expect(res.status).toBe(200);

    const { rows } = await db.query("SELECT lokasi_saat_ini FROM pelajar WHERE id_pelajar = 'PLJ-001';");
    expect(rows[0].lokasi_saat_ini).toBe('-6.8915,107.6107');

    const jarak = res.body.data.map((n) => n.jarak_km);
    expect(jarak[0]).toBe(0);
    for (let i = 1; i < jarak.length; i += 1) {
      expect(jarak[i]).toBeGreaterThanOrEqual(jarak[i - 1]);
    }
  });

  test('INT-TC09 (I-29): pengajuan konsultasi mengunci slot di DB dan menolak pengajuan ganda (409)', async () => {
    const token = (await login('budi.pelajar@mahasehat.id')).body.data.token;
    const ok = await request(app)
      .post('/api/konsultasi')
      .set(pakai(token))
      .send({ id_jadwal: 'JDW-001', keluhan: 'Kesulitan tidur dan cemas menjelang ujian.' });
    expect(ok.status).toBe(201);

    const { rows } = await db.query("SELECT status_ketersediaan, status_pengajuan FROM jadwal_konsultasi WHERE id_jadwal = 'JDW-001';");
    expect(rows[0]).toEqual({ status_ketersediaan: false, status_pengajuan: 'Diajukan' });

    await request(app)
      .post('/api/konsultasi')
      .set(pakai(token))
      .send({ id_jadwal: 'JDW-001', keluhan: 'Pengajuan ganda pada slot yang sama.' })
      .expect(409);
  });

  test('INT-TC10 (I-29): tenaga kesehatan menyetujui JDW-001 dan menjadwalkan ulang JDW-003 di PostgreSQL', async () => {
    const tokenNakes = (await login('siti.psikolog@mahasehat.id')).body.data.token;
    await request(app)
      .put('/api/konsultasi/JDW-001/status')
      .set(pakai(tokenNakes))
      .send({ status: 'Disetujui' })
      .expect(200);

    const tanggalBaru = tambahHari(hariIni(), 5);
    await request(app)
      .put('/api/konsultasi/JDW-003/jadwal')
      .set(pakai(tokenNakes))
      .send({ tanggal: tanggalBaru, waktu: '11:30' })
      .expect(200);

    const { rows } = await db.query(
      "SELECT id_jadwal, status_pengajuan FROM jadwal_konsultasi WHERE id_jadwal IN ('JDW-001', 'JDW-003') ORDER BY id_jadwal;"
    );
    expect(rows).toEqual([
      { id_jadwal: 'JDW-001', status_pengajuan: 'Disetujui' },
      { id_jadwal: 'JDW-003', status_pengajuan: 'Rescheduled' },
    ]);
  });

  test('INT-TC11 (I-30): evaluasi darurat membuat notifikasi di DB dan mengubah status_darurat pelajar menjadi TRUE', async () => {
    await db.query("DELETE FROM check_in WHERE id_pelajar = 'PLJ-003' AND tanggal_check_in = CURRENT_DATE;");
    jest.spyOn(console, 'log').mockImplementation(() => {});

    const hasil = await NotifikasiDaruratController.jalankanEvaluasiHarian();
    expect(hasil.jumlahDarurat).toBe(1);

    const { rows: pRows } = await db.query("SELECT status_darurat FROM pelajar WHERE id_pelajar = 'PLJ-003';");
    expect(pRows[0].status_darurat).toBe(true);

    const { rows: nRows } = await db.query("SELECT status, status_tindak_lanjut FROM notifikasi_darurat WHERE id_pelajar = 'PLJ-003';");
    expect(nRows).toEqual([{ status: 'Terkirim', status_tindak_lanjut: 'Belum Ditindaklanjuti' }]);
  });

  test('INT-TC12 (I-30): wali mengonfirmasi diterima dan tindak lanjut memulihkan status_darurat pelajar di DB', async () => {
    const tokenWali = (await login('ratna.wali@mahasehat.id')).body.data.token;
    const daftar = await request(app).get('/api/emergency/wali').set(pakai(tokenWali)).expect(200);
    const idNotif = daftar.body.data[0].id;

    await request(app).put(`/api/emergency/${idNotif}/confirm`).set(pakai(tokenWali)).expect(200);
    await request(app).put(`/api/emergency/${idNotif}/follow-up`).set(pakai(tokenWali)).expect(200);

    const { rows: nRows } = await db.query('SELECT status, status_tindak_lanjut FROM notifikasi_darurat WHERE id = $1;', [idNotif]);
    expect(nRows[0]).toEqual({ status: 'Diterima', status_tindak_lanjut: 'Sudah Ditindaklanjuti' });

    const { rows: pRows } = await db.query("SELECT status_darurat FROM pelajar WHERE id_pelajar = 'PLJ-003';");
    expect(pRows[0].status_darurat).toBe(false);
  });

  test('INT-TC13 (I-31): db.withTransaction melakukan ROLLBACK penuh ke PostgreSQL saat terjadi galat', async () => {
    const emailBatal = 'rollback.integrasi@mahasehat.id';
    await expect(
      db.withTransaction(async (client) => {
        await Pengguna.tambah(client, {
          email: emailBatal,
          passwordHash: 'hash',
          role: 'Pelajar',
          statusAkun: 'Aktif',
        });
        throw new Error('Simulasi gagal tengah transaksi');
      })
    ).rejects.toThrow('Simulasi gagal tengah transaksi');

    const { rowCount } = await db.query('SELECT 1 FROM pengguna WHERE email = $1;', [emailBatal]);
    expect(rowCount).toBe(0);
  });

  test('INT-TC14 (I-32): modul mailer dan kirimEmail mode lokal mencetak pesan tanpa teks jurnal pribadi', async () => {
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    await kirimEmailKonfirmasiWali({ emailWali: 'w@test.id', namaPelajar: 'Budi', token: 'tok123' });
    await kirimEmailResetPassword({ email: 'u@test.id', token: 'rst123' });
    await kirimEmail({ to: 'w@test.id', subject: 'Darurat', text: 'Rata-rata mood 1,7 dari 5.' });

    const gabungan = logSpy.mock.calls.flat().join('\n');
    expect(gabungan).toContain('/konfirmasi-registrasi?token=tok123');
    expect(gabungan).toContain('/reset-password?token=rst123');
    expect(gabungan).toContain('Rata-rata mood 1,7 dari 5.');
    expect(gabungan).not.toMatch(/jurnal|catatan refleksi/i);
  });

  test('INT-TC15 (I-32): kegagalan koneksi SMTP memicu 3x retry otomatis (total 4 percobaan) dan tercatat di PostgreSQL (KNF06)', async () => {
    const notif = await NotifikasiDarurat.tambah(db, {
      idPelajar: 'PLJ-001',
      idWali: 'WALI-001',
      emailTujuan: 'santoso.wali@mahasehat.id',
      ringkasanKondisi: 'Simulasi uji retry SMTP KNF06',
    });

    const hostAwal = process.env.SMTP_HOST;
    const portAwal = process.env.SMTP_PORT;
    const jedaAwal = process.env.NOTIF_RETRY_DELAY_MS;
    jest.spyOn(console, 'error').mockImplementation(() => {});

    try {
      process.env.SMTP_HOST = '127.0.0.1';
      process.env.SMTP_PORT = '1';
      process.env.NOTIF_RETRY_DELAY_MS = '20';

      const terkirim = await NotifikasiDaruratController.sendEmergencyNotification(notif);
      expect(terkirim).toBe(false);

      const { rows } = await db.query('SELECT status, jumlah_percobaan FROM notifikasi_darurat WHERE id = $1;', [notif.id]);
      expect(rows[0]).toEqual({ status: 'Gagal Terkirim', jumlah_percobaan: 4 });
    } finally {
      process.env.SMTP_HOST = hostAwal;
      process.env.SMTP_PORT = portAwal;
      process.env.NOTIF_RETRY_DELAY_MS = jedaAwal;
    }
  });

  test('INT-TC16 (I-33): mulaiScheduler mendaftarkan job cron valid dengan node-cron tanpa mock', () => {
    const cronAwal = process.env.EMERGENCY_CRON;
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    try {
      process.env.EMERGENCY_CRON = '0 8 * * *';
      expect(cron.validate('0 8 * * *')).toBe(true);
      mulaiScheduler();
      expect(cron.getTasks().size).toBeGreaterThanOrEqual(1);
    } finally {
      for (const task of cron.getTasks().values()) {
        task.stop();
        if (typeof task.destroy === 'function') task.destroy();
      }
      process.env.EMERGENCY_CRON = cronAwal;
      logSpy.mockRestore();
    }
  });
});

