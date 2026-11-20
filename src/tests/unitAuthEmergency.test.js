jest.mock('../config/db', () => ({
  query: jest.fn(),
  withTransaction: jest.fn(),
  getClient: jest.fn(),
  pool: { end: jest.fn() },
}));

jest.mock('../utils/mailer', () => ({
  kirimEmailKonfirmasiWali: jest.fn().mockResolvedValue(undefined),
  kirimEmailResetPassword: jest.fn().mockResolvedValue(undefined),
}));

jest.mock('../utils/kirimEmail', () => ({
  kirimEmail: jest.fn().mockResolvedValue(undefined),
  urlAplikasi: () => 'http://localhost:3000',
}));

const crypto = require('crypto');
const bcrypt = require('bcryptjs');
const request = require('supertest');
const db = require('../config/db');
const mailer = require('../utils/mailer');
const { kirimEmail } = require('../utils/kirimEmail');
const app = require('../app');
const AppError = require('../utils/AppError');
const Pengguna = require('../models/Pengguna');
const Pelajar = require('../models/Pelajar');
const OrangTuaWali = require('../models/OrangTuaWali');
const NotifikasiDarurat = require('../models/NotifikasiDarurat');
const NotifikasiDaruratController = require('../controllers/NotifikasiDaruratController');
const CheckIn = require('../models/CheckIn');
const { generateToken } = require('../middleware/authMiddleware');
const { hariIni, tambahHari } = require('../utils/waktu');

const HASH_CEPAT = bcrypt.hashSync('Password123!', 4);

beforeEach(() => {
  jest.clearAllMocks();
  jest.spyOn(console, 'error').mockImplementation(() => {});
  db.query.mockResolvedValue({ rows: [], rowCount: 0 });
  db.withTransaction.mockImplementation(async (fn) =>
    fn({
      query: jest.fn().mockResolvedValue({ rows: [], rowCount: 1 }),
    })
  );
  mailer.kirimEmailKonfirmasiWali.mockResolvedValue(undefined);
  mailer.kirimEmailResetPassword.mockResolvedValue(undefined);
  kirimEmail.mockResolvedValue(undefined);
});

afterEach(() => {
  jest.restoreAllMocks();
});

// =============================================================================
// C01 - Pengguna (Mendalam)
// =============================================================================
describe('C01 Pengguna (Unit)', () => {
  test('C01-UT01: findByUsernameOrEmail menormalisasi input dan mengembalikan subkelas Pelajar', async () => {
    db.query.mockResolvedValueOnce({
      rows: [
        {
          id_pengguna: 1,
          username: 'budi.pelajar@mahasehat.id',
          email: 'budi.pelajar@mahasehat.id',
          password_hash: HASH_CEPAT,
          role: 'Pelajar',
          status_akun: 'Aktif',
          versi_token: 0,
        },
      ],
    });

    const user = await Pengguna.findByUsernameOrEmail('  BUDI.Pelajar@mahasehat.id  ');
    expect(user).toBeInstanceOf(Pelajar);
    expect(db.query).toHaveBeenCalledWith(expect.any(String), ['budi.pelajar@mahasehat.id']);
  });

  test('C01-UT02: findByUsernameOrEmail mengembalikan null untuk input kosong atau null', async () => {
    expect(await Pengguna.findByUsernameOrEmail('')).toBeNull();
    expect(await Pengguna.findByUsernameOrEmail('   ')).toBeNull();
    expect(await Pengguna.findByUsernameOrEmail(null)).toBeNull();
    expect(db.query).not.toHaveBeenCalled();
  });

  test('C01-UT03: findByUsernameOrEmail mengembalikan null jika akun tidak ditemukan', async () => {
    db.query.mockResolvedValueOnce({ rows: [] });
    expect(await Pengguna.findByUsernameOrEmail('tidakada@test.id')).toBeNull();
  });

  test('C01-UT04: findByEmail mengembalikan instance OrangTuaWali dan TenagaKesehatan sesuai role', async () => {
    const TenagaKesehatan = require('../models/TenagaKesehatan');
    db.query
      .mockResolvedValueOnce({
        rows: [
          {
            id_pengguna: 3,
            username: 'wali@test.id',
            email: 'wali@test.id',
            password_hash: HASH_CEPAT,
            role: 'OrangTuaWali',
            status_akun: 'Aktif',
            versi_token: 0,
          },
        ],
      })
      .mockResolvedValueOnce({
        rows: [
          {
            id_pengguna: 4,
            username: 'nakes@test.id',
            email: 'nakes@test.id',
            password_hash: HASH_CEPAT,
            role: 'TenagaKesehatan',
            status_akun: 'Aktif',
            versi_token: 0,
          },
        ],
      });

    expect(await Pengguna.findByEmail('  WALI@test.id ')).toBeInstanceOf(OrangTuaWali);
    expect(await Pengguna.findByEmail('nakes@test.id')).toBeInstanceOf(TenagaKesehatan);
  });

  test('C01-UT05 & C01-UT06: findByEmail menolak format salah dan mengembalikan null bila tidak ditemukan', async () => {
    expect(await Pengguna.findByEmail('bukan-email')).toBeNull();
    expect(await Pengguna.findByEmail(null)).toBeNull();
    expect(db.query).not.toHaveBeenCalled();

    db.query.mockResolvedValueOnce({ rows: [] });
    expect(await Pengguna.findByEmail('kosong@test.id')).toBeNull();
  });

  test('C01-UT07 & C01-UT08: verifyPassword mencocokkan hash dengan benar dan menolak kosong/salah', async () => {
    const hash = await Pengguna.hashPassword('Rahasia123!');
    const p = new Pengguna({
      id_pengguna: 1,
      username: 'u@test.id',
      email: 'u@test.id',
      password_hash: hash,
      role: 'Pelajar',
      status_akun: 'Aktif',
      versi_token: 0,
    });

    expect(await p.verifyPassword('Rahasia123!')).toBe(true);
    expect(await p.verifyPassword('Salah!')).toBe(false);
    expect(await p.verifyPassword('')).toBe(false);
    expect(await p.verifyPassword(null)).toBe(false);
  });

  test('C01-UT09: getStatusAkun, getRole, dan toJSON menyembunyikan password dan versiToken', () => {
    const p = new Pengguna({
      id_pengguna: 9,
      username: 'a@test.id',
      email: 'a@test.id',
      password_hash: 'secret-hash',
      role: 'Pelajar',
      status_akun: 'Aktif',
      versi_token: 2,
    });

    expect(p.getStatusAkun()).toBe('Aktif');
    expect(p.getRole()).toBe('Pelajar');
    const json = p.toJSON();
    expect(json.password).toBeUndefined();
    expect(json.versiToken).toBeUndefined();
    expect(json.email).toBe('a@test.id');
  });

  test('C01-UT10 & C01-UT11: setPassword memperbarui hash bila rowCount=1 dan mengembalikan false bila rowCount=0', async () => {
    const p = new Pengguna({
      id_pengguna: 5,
      username: 'u5@test.id',
      email: 'u5@test.id',
      password_hash: HASH_CEPAT,
      role: 'Pelajar',
      status_akun: 'Aktif',
      versi_token: 0,
    });

    db.query.mockResolvedValueOnce({ rowCount: 1 });
    expect(await p.setPassword('SandiBaru123!')).toBe(true);
    expect(p.password).not.toBe(HASH_CEPAT);
    expect(await p.verifyPassword('SandiBaru123!')).toBe(true);

    const hashSebelumnya = p.password;
    db.query.mockResolvedValueOnce({ rowCount: 0 });
    expect(await p.setPassword('LainLagi123!')).toBe(false);
    expect(p.password).toBe(hashSebelumnya);
  });

  test('C01-UT12: findByTokenKonfirmasi, findByResetToken, ubahStatusKonfirmasi, simpanResetToken, ubahEmail, akhiriSesiById', async () => {
    const row = {
      id_pengguna: 2,
      username: 'andi@test.id',
      email: 'andi@test.id',
      password_hash: HASH_CEPAT,
      role: 'Pelajar',
      status_akun: 'Belum Terverifikasi',
      versi_token: 0,
      tanggal_daftar: '2026-11-10',
      konfirmasi_kedaluwarsa: false,
    };

    const customExec = { query: jest.fn().mockResolvedValueOnce({ rows: [row] }) };
    const foundLock = await Pengguna.findByTokenKonfirmasi('TOK', customExec, { kunci: true });
    expect(foundLock).toBeInstanceOf(Pelajar);
    expect(customExec.query.mock.calls[0][0]).toContain('FOR UPDATE');

    db.query.mockResolvedValueOnce({ rows: [] });
    expect(await Pengguna.findByTokenKonfirmasi('TIDAK-ADA')).toBeNull();

    db.query.mockResolvedValueOnce({ rows: [row] }).mockResolvedValueOnce({ rows: [] });
    expect(await Pengguna.findByResetToken('hash-ok')).toBeInstanceOf(Pelajar);
    expect(await Pengguna.findByResetToken('hash-kosong')).toBeNull();

    db.query.mockResolvedValueOnce({ rowCount: 1 }).mockResolvedValueOnce({ rowCount: 0 });
    expect(await foundLock.ubahStatusKonfirmasi('Aktif')).toBe(true);
    expect(foundLock.statusAkun).toBe('Aktif');
    expect(await foundLock.ubahStatusKonfirmasi('Ditolak')).toBe(false);

    await foundLock.simpanResetToken('hash-baru');
    await Pengguna.ubahEmail(2, 'baru@test.id');
    await Pengguna.akhiriSesiById(2);
    expect(db.query).toHaveBeenCalledWith(expect.stringContaining('reset_token = $1'), ['hash-baru', 2]);
    expect(db.query).toHaveBeenCalledWith(expect.stringContaining('UPDATE pengguna SET email = $1'), [
      'baru@test.id',
      2,
    ]);
    expect(db.query).toHaveBeenCalledWith(expect.stringContaining('versi_token = versi_token + 1'), [2]);
  });
});

// =============================================================================
// C02 - Pelajar (Sedang)
// =============================================================================
describe('C02 Pelajar (Unit)', () => {
  const pelajarDasar = () =>
    new Pelajar({
      id_pelajar: 'PLJ-1',
      id_pengguna: 1,
      id_wali: 'WALI-1',
      nama: 'Budi',
      lokasi_saat_ini: '',
      status_darurat: false,
      tanggal_lahir: '2006-05-14',
      nomor_telepon: '081234567890',
      nomor_telepon_wali: '081234567891',
      email_wali: 'wali@test.id',
      username: 'budi@test.id',
      email: 'budi@test.id',
      role: 'Pelajar',
      status_akun: 'Aktif',
    });

  test('C02-UT01: getCheckInHistory, getCheckInSejak (dengan/tanpa jurnal), dan getTanggalCheckInTerakhir', async () => {
    const p = pelajarDasar();
    const rowCheckIn = {
      id_check_in: 'CHK-1',
      tanggal_check_in: hariIni(),
      skala_mood: 4,
      jam_tidur: '22:30:00',
      jam_bangun: '06:00:00',
      pola_makan: 'Teratur',
      pemicu_stres: 'Akademik',
      catatan_refleksi: 'cipher',
    };

    db.query
      .mockResolvedValueOnce({ rows: [rowCheckIn] })
      .mockResolvedValueOnce({ rows: [rowCheckIn] })
      .mockResolvedValueOnce({ rows: [rowCheckIn] })
      .mockResolvedValueOnce({ rows: [{ terakhir: hariIni() }] });

    const hist = await p.getCheckInHistory(5);
    expect(hist).toHaveLength(1);
    expect(hist[0]).toBeInstanceOf(CheckIn);

    await p.getCheckInSejak('2026-11-01', { denganJurnal: false });
    expect(db.query.mock.calls[1][0]).not.toContain('catatan_refleksi');

    await p.getCheckInSejak('2026-11-01', { denganJurnal: true });
    expect(db.query.mock.calls[2][0]).toContain('catatan_refleksi');

    expect(await p.getTanggalCheckInTerakhir()).toBe(hariIni());
  });

  test('C02-UT02: setCheckIn sukses, menolak duplikat 409, dan meneruskan error DB lain', async () => {
    const p = pelajarDasar();
    const chk = CheckIn.createCheckIn({
      skalaMood: 4,
      jamTidur: '22:30',
      jamBangun: '06:00',
      polaMakan: 'Teratur',
    });

    db.query.mockResolvedValueOnce({ rowCount: 1 });
    await expect(p.setCheckIn(chk)).resolves.toBeUndefined();

    const dup = new Error('duplicate');
    dup.code = '23505';
    db.query.mockRejectedValueOnce(dup);
    await expect(p.setCheckIn(chk)).rejects.toMatchObject({ status: 409 });

    const lain = new Error('fk error');
    lain.code = '23503';
    db.query.mockRejectedValueOnce(lain);
    await expect(p.setCheckIn(chk)).rejects.toMatchObject({ code: '23503' });
  });

  test('C02-UT03: setLokasiSaatIni dan getLokasiSaatIni menerima koordinat sah dan menolak format invalid', async () => {
    const p = pelajarDasar();
    expect(p.getLokasiSaatIni()).toBe('');

    db.query.mockResolvedValueOnce({ rowCount: 1 });
    await p.setLokasiSaatIni('-6.8915,107.6107');
    expect(p.getLokasiSaatIni()).toBe('-6.8915,107.6107');

    await expect(p.setLokasiSaatIni('999,abc')).rejects.toMatchObject({ status: 400 });
  });

  test('C02-UT04: updateEmergencyStatus memperbarui DB dan idempoten jika status sama', async () => {
    const p = pelajarDasar();
    db.query.mockResolvedValueOnce({ rowCount: 1 });

    await p.updateEmergencyStatus(true);
    expect(p.statusDarurat).toBe(true);
    expect(db.query).toHaveBeenCalledTimes(1);

    await p.updateEmergencyStatus(true);
    expect(db.query).toHaveBeenCalledTimes(1);
  });

  test('C02-UT05: ajukanKonsultasi berhasil bila tersedia dan menolak keluhan kosong / jadwal tidak tersedia', async () => {
    const p = pelajarDasar();
    const jadwalOk = {
      isAvailable: () => true,
      reservasi: jest.fn().mockResolvedValue(true),
    };
    expect(await p.ajukanKonsultasi(jadwalOk, 'Cemas menghadapi ujian akhir')).toBe(true);
    expect(jadwalOk.reservasi).toHaveBeenCalledWith('PLJ-1', 'Cemas menghadapi ujian akhir');

    await expect(p.ajukanKonsultasi(jadwalOk, '   ')).rejects.toMatchObject({ status: 400 });

    const jadwalPenuh = { isAvailable: () => false, reservasi: jest.fn() };
    expect(await p.ajukanKonsultasi(jadwalPenuh, 'Keluhan valid')).toBe(false);
    expect(jadwalPenuh.reservasi).not.toHaveBeenCalled();
  });

  test('C02-UT06: findById, findByIdPengguna, findSemuaAktif, getRiwayatTerbaruSemuaAktif, setWali, hubungkanKeWali, perbaruiProfil', async () => {
    const rowP = {
      id_pelajar: 'PLJ-1',
      id_pengguna: 1,
      nama: 'Budi',
      tanggal_lahir: '2006-05-14',
      nomor_telepon: '0812',
      role: 'Pelajar',
      status_akun: 'Aktif',
    };
    db.query
      .mockResolvedValueOnce({ rows: [rowP] })
      .mockResolvedValueOnce({ rows: [] })
      .mockResolvedValueOnce({ rows: [rowP] })
      .mockResolvedValueOnce({ rows: [] })
      .mockResolvedValueOnce({ rows: [rowP] })
      .mockResolvedValueOnce({
        rows: [
          {
            id_pelajar: 'PLJ-1',
            id_check_in: 'C-1',
            tanggal_check_in: hariIni(),
            skala_mood: 2,
            jam_tidur: '01:00',
            jam_bangun: '05:00',
            pola_makan: 'Kurang',
          },
        ],
      });

    expect(await Pelajar.findById('PLJ-1')).toBeInstanceOf(Pelajar);
    expect(await Pelajar.findById('NOPE')).toBeNull();
    expect(await Pelajar.findByIdPengguna(1)).toBeInstanceOf(Pelajar);
    expect(await Pelajar.findByIdPengguna(999)).toBeNull();
    expect(await Pelajar.findSemuaAktif()).toHaveLength(1);

    const map = await Pelajar.getRiwayatTerbaruSemuaAktif(7);
    expect(map.get('PLJ-1')).toHaveLength(1);

    const exec = {
      query: jest
        .fn()
        .mockResolvedValueOnce({ rows: [{ id_pelajar: 'PLJ-1' }] })
        .mockResolvedValueOnce({ rowCount: 1 })
        .mockResolvedValueOnce({ rowCount: 1 }),
    };
    const linked = await Pelajar.hubungkanKeWali(exec, {
      idWali: 'WALI-1',
      email: 'wali@test.id',
      nomorTelepon: '0812',
    });
    expect(linked).toEqual(['PLJ-1']);

    const p = pelajarDasar();
    await p.setWali('WALI-2', exec);
    expect(p.idWali).toBe('WALI-2');
    db.query.mockResolvedValueOnce({ rowCount: 1 });
    await p.perbaruiProfil({ nama: 'Budi Baru', nomorTelepon: '0813' });
    expect(p.nama).toBe('Budi Baru');
  });
});

// =============================================================================
// C03 - OrangTuaWali (Sedang)
// =============================================================================
describe('C03 OrangTuaWali (Unit)', () => {
  const buatWali = () =>
    new OrangTuaWali({
      id_wali: 'WALI-1',
      id_pengguna: 3,
      nama: 'Santoso',
      email: 'wali@test.id',
      nomor_telepon: '081234567890',
      username: 'wali@test.id',
      role: 'OrangTuaWali',
      status_akun: 'Aktif',
    });

  test('C03-UT01: getSummaryReport mengembalikan SummaryData tanpa teks catatan refleksi', async () => {
    const wali = buatWali();
    db.query.mockImplementation(async (sql) => {
      if (/FROM pelajar p\s+JOIN pengguna/i.test(sql)) {
        return { rows: [{ id_pelajar: 'PLJ-1', nama: 'Budi' }] };
      }
      if (/WHERE p\.id_pelajar = \$1/i.test(sql)) {
        return {
          rows: [
            {
              id_pelajar: 'PLJ-1',
              id_pengguna: 1,
              nama: 'Budi',
              tanggal_lahir: '2006-05-14',
              nomor_telepon: '0812',
              role: 'Pelajar',
              status_akun: 'Aktif',
            },
          ],
        };
      }
      if (/FROM check_in/i.test(sql)) {
        return {
          rows: [
            {
              id_check_in: 'C1',
              tanggal_check_in: hariIni(),
              skala_mood: 4,
              jam_tidur: '22:00:00',
              jam_bangun: '06:00:00',
              pola_makan: 'Teratur',
              pemicu_stres: 'Tidak ada',
            },
          ],
        };
      }
      if (/MAX\(tanggal_check_in\)/i.test(sql)) {
        return { rows: [{ terakhir: hariIni() }] };
      }
      return { rows: [] };
    });

    const summary = await wali.getSummaryReport();
    expect(summary).toMatchObject({
      namaPelajar: 'Budi',
      periode: 'Mingguan',
      indikatorRisiko: 'Rendah',
      jumlahHariTidakCheckIn: 0,
    });
    expect(summary.catatanRefleksi).toBeUndefined();
  });

  test('C03-UT02: pilihPelajar melempar 404 saat belum terhubung pelajar', async () => {
    const wali = buatWali();
    db.query.mockResolvedValueOnce({ rows: [] });
    await expect(wali.getSummaryReport()).rejects.toMatchObject({ status: 404 });
  });

  test('C03-UT03: pilihPelajar melempar 403 saat idPelajar bukan milik wali', async () => {
    const wali = buatWali();
    db.query.mockResolvedValueOnce({ rows: [{ id_pelajar: 'PLJ-1', nama: 'Budi' }] });
    await expect(wali.pilihPelajar('PLJ-LAIN')).rejects.toMatchObject({ status: 403 });
  });

  test('C03-UT04: operasi tambahan findById, findByIdPengguna, findIdByEmail, tambah, getPengajuanMenunggu, perbaruiProfil', async () => {
    const rowW = {
      id_wali: 'WALI-1',
      id_pengguna: 3,
      nama: 'Santoso',
      email: 'wali@test.id',
      nomor_telepon: '0812',
      username: 'wali@test.id',
      role: 'OrangTuaWali',
      status_akun: 'Aktif',
    };
    db.query
      .mockResolvedValueOnce({ rows: [rowW] })
      .mockResolvedValueOnce({ rows: [] })
      .mockResolvedValueOnce({ rows: [rowW] })
      .mockResolvedValueOnce({ rows: [] })
      .mockResolvedValueOnce({ rows: [{ id_wali: 'WALI-1' }] })
      .mockResolvedValueOnce({ rows: [] })
      .mockResolvedValueOnce({ rows: [{ nama: 'Andi', tanggal_daftar: '2026-11-18' }] })
      .mockResolvedValueOnce({ rows: [] });

    expect(await OrangTuaWali.findByIdPengguna(3)).toBeInstanceOf(OrangTuaWali);
    expect(await OrangTuaWali.findByIdPengguna(999)).toBeNull();
    expect(await OrangTuaWali.findById('WALI-1')).toBeInstanceOf(OrangTuaWali);
    expect(await OrangTuaWali.findById('NOPE')).toBeNull();
    expect(await OrangTuaWali.findIdByEmail('wali@test.id')).toBe('WALI-1');
    expect(await OrangTuaWali.findIdByEmail('x@test.id')).toBeNull();

    const wali = buatWali();
    expect(await wali.getPengajuanMenunggu()).toEqual({ nama: 'Andi', tanggalDaftar: '2026-11-18' });
    expect(await wali.getPengajuanMenunggu()).toBeNull();

    const exec = { query: jest.fn().mockResolvedValue({ rowCount: 1 }) };
    const idBaru = await OrangTuaWali.tambah(exec, {
      idPengguna: 10,
      nama: 'Ibu',
      email: 'ibu@test.id',
      nomorTelepon: '0812',
    });
    expect(idBaru).toMatch(/^WALI-/);
    await wali.perbaruiProfil({ nama: 'Santoso B', nomorTelepon: '0813', email: 'wali2@test.id' }, exec);
    expect(wali.email).toBe('wali2@test.id');
  });
});

// =============================================================================
// C11 - AuthController & authMiddleware (Mendalam)
// =============================================================================
describe('C11 AuthController & authMiddleware (Unit)', () => {
  test('C11-UT01 s.d. C11-UT03: validasi batas registrasi & ketahanan saat mailer gagal', async () => {
    const payload = (u = {}) => ({
      nama: 'Budi Santoso',
      email: 'budi@test.id',
      telepon: '081234567890',
      role: 'pelajar',
      password: 'Password123!',
      confirm_password: 'Password123!',
      tanggal_lahir: '2014-01-01',
      riwayat_kesehatan: 'Sehat',
      email_orang_tua: 'wali@test.id',
      ...u,
    });

    await request(app).post('/api/auth/register').send(payload({ nama: 'A' })).expect(400);
    await request(app).post('/api/auth/register').send(payload({ telepon: '123' })).expect(400);
    await request(app).post('/api/auth/register').send(payload({ confirm_password: 'Beda' })).expect(400);
    await request(app).post('/api/auth/register').send(payload({ tanggal_lahir: 'bukan-tgl' })).expect(400);
    await request(app).post('/api/auth/register').send(payload({ riwayat_kesehatan: '' })).expect(400);
    await request(app).post('/api/auth/register').send(payload({ email_orang_tua: 'x' })).expect(400);
    await request(app)
      .post('/api/auth/register')
      .send({ nama: 'Dr. Budi', email: 'n@test.id', telepon: '081234567890', role: 'tenagakesehatan', password: 'Password123!' })
      .expect(400);
    await request(app)
      .post('/api/auth/register')
      .send({ nama: 'Dr. Budi', email: 'n@test.id', telepon: '081234567890', role: 'tenagakesehatan', password: 'Password123!', jenis_tenaga_kesehatan: 'Psikolog', lokasi: '' })
      .expect(400);

    // Gagal kirim email konfirmasi tetap return 201
    db.withTransaction.mockImplementationOnce(async (fn) =>
      fn({
        query: jest.fn(async (sql) => {
          if (/INSERT INTO pengguna/i.test(sql)) {
            return { rows: [{ id_pengguna: 42 }], rowCount: 1 };
          }
          return { rows: [], rowCount: 1 };
        }),
      })
    );
    mailer.kirimEmailKonfirmasiWali.mockRejectedValueOnce(new Error('SMTP down'));
    const res = await request(app).post('/api/auth/register').send(payload());
    expect(res.status).toBe(201);
  });

  test('C11-UT04 s.d. C11-UT07: dataKonfirmasi, setujuiRegistrasi, tolakRegistrasi', async () => {
    const rowPending = {
      id_pengguna: 2,
      username: 'andi@test.id',
      email: 'andi@test.id',
      password_hash: HASH_CEPAT,
      role: 'Pelajar',
      status_akun: 'Belum Terverifikasi',
      versi_token: 0,
      tanggal_daftar: '2026-11-15',
      konfirmasi_kedaluwarsa: false,
    };

    // dataKonfirmasi valid
    db.query
      .mockResolvedValueOnce({ rows: [rowPending] })
      .mockResolvedValueOnce({
        rows: [{ id_pelajar: 'PLJ-2', id_pengguna: 2, nama: 'Andi', email: 'andi@test.id', nomor_telepon: '0812', role: 'Pelajar', status_akun: 'Aktif' }],
      });
    const ok = await request(app).get('/api/auth/confirm/TOK1');
    expect(ok.status).toBe(200);
    expect(ok.body.data.nama).toBe('Andi');

    // dataKonfirmasi tidak ada -> 404
    db.query.mockResolvedValueOnce({ rows: [] });
    await request(app).get('/api/auth/confirm/TIDAK-ADA').expect(404);

    // dataKonfirmasi kedaluwarsa (rowCount 1 -> 410, rowCount 0 -> 404)
    db.query
      .mockResolvedValueOnce({ rows: [{ ...rowPending, konfirmasi_kedaluwarsa: true }] })
      .mockResolvedValueOnce({ rowCount: 1 });
    await request(app).get('/api/auth/confirm/KEDALUWARSA').expect(410);

    db.query
      .mockResolvedValueOnce({ rows: [{ ...rowPending, konfirmasi_kedaluwarsa: true }] })
      .mockResolvedValueOnce({ rowCount: 0 });
    await request(app).get('/api/auth/confirm/SUDAH-DIPUTUS').expect(404);

    // setujuiRegistrasi terhubung ke wali
    db.withTransaction.mockImplementationOnce(async (fn) => {
      const c = {
        query: jest
          .fn()
          .mockResolvedValueOnce({ rows: [rowPending] })
          .mockResolvedValueOnce({ rowCount: 1 })
          .mockResolvedValueOnce({
            rows: [{ id_pelajar: 'PLJ-2', id_pengguna: 2, nama: 'Andi', email_wali: 'wali@test.id', role: 'Pelajar', status_akun: 'Aktif' }],
          })
          .mockResolvedValueOnce({ rows: [{ id_wali: 'WALI-1' }] })
          .mockResolvedValueOnce({ rowCount: 1 }),
      };
      return fn(c);
    });
    const setuju = await request(app).post('/api/auth/confirm/TOK1');
    expect(setuju.status).toBe(200);
    expect(setuju.body.data).toEqual({ status_akun: 'Aktif', terhubung_ke_wali: true });

    // tolakRegistrasi
    db.withTransaction.mockImplementationOnce(async (fn) => {
      const c = {
        query: jest
          .fn()
          .mockResolvedValueOnce({ rows: [rowPending] })
          .mockResolvedValueOnce({ rowCount: 1 }),
      };
      return fn(c);
    });
    const tolak = await request(app).post('/api/auth/reject/TOK1');
    expect(tolak.status).toBe(200);
    expect(tolak.body.data.status_akun).toBe('Ditolak');

    // token hilang / kedaluwarsa saat putuskanKonfirmasi
    db.withTransaction.mockImplementationOnce(async (fn) => fn({ query: jest.fn().mockResolvedValueOnce({ rows: [] }) }));
    await request(app).post('/api/auth/confirm/TIDAK-ADA').expect(404);

    db.withTransaction.mockImplementationOnce(async (fn) => {
      const c = {
        query: jest
          .fn()
          .mockResolvedValueOnce({ rows: [{ ...rowPending, konfirmasi_kedaluwarsa: true }] })
          .mockResolvedValueOnce({ rowCount: 1 }),
      };
      return fn(c);
    });
    await request(app).post('/api/auth/confirm/EXPIRED').expect(410);
  });

  test('C11-UT08 s.d. C11-UT10: masuk() berbagai peran, kredensial salah, dan status non-Aktif', async () => {
    await request(app).post('/api/auth/login').send({ email: '', password: '' }).expect(400);

    // Email tidak ada & sandi salah -> 401
    db.query.mockResolvedValueOnce({ rows: [] });
    await request(app).post('/api/auth/login').send({ email: 'x@test.id', password: 'Password123!' }).expect(401);

    db.query.mockResolvedValueOnce({
      rows: [{ id_pengguna: 1, username: 'b@test.id', email: 'b@test.id', password_hash: HASH_CEPAT, role: 'Pelajar', status_akun: 'Aktif', versi_token: 0 }],
    });
    await request(app).post('/api/auth/login').send({ email: 'b@test.id', password: 'Salah' }).expect(401);

    // Belum Terverifikasi & Ditolak -> 403
    db.query.mockResolvedValueOnce({
      rows: [{ id_pengguna: 2, username: 'a@test.id', email: 'a@test.id', password_hash: HASH_CEPAT, role: 'Pelajar', status_akun: 'Belum Terverifikasi', versi_token: 0 }],
    });
    await request(app).post('/api/auth/login').send({ email: 'a@test.id', password: 'Password123!' }).expect(403);

    db.query.mockResolvedValueOnce({
      rows: [{ id_pengguna: 3, username: 'd@test.id', email: 'd@test.id', password_hash: HASH_CEPAT, role: 'Pelajar', status_akun: 'Ditolak', versi_token: 0 }],
    });
    await request(app).post('/api/auth/login').send({ email: 'd@test.id', password: 'Password123!' }).expect(403);

    // Sukses Pelajar
    db.query
      .mockResolvedValueOnce({
        rows: [{ id_pengguna: 1, username: 'b@test.id', email: 'b@test.id', password_hash: HASH_CEPAT, role: 'Pelajar', status_akun: 'Aktif', versi_token: 0 }],
      })
      .mockResolvedValueOnce({
        rows: [{ id_pelajar: 'PLJ-1', id_pengguna: 1, nama: 'Budi', email: 'b@test.id', role: 'Pelajar', status_akun: 'Aktif' }],
      });
    const loginOk = await request(app).post('/api/auth/login').send({ email: 'b@test.id', password: 'Password123!' });
    expect(loginOk.status).toBe(200);
    expect(loginOk.body.data.pengguna.id_profil).toBe('PLJ-1');
  });

  test('C11-UT11 s.d. C11-UT13: profilSaya, perbaruiProfil, pengajuanMenunggu, dan keluar', async () => {
    const tokenPelajar = generateToken({ idPengguna: 1, email: 'b@test.id', role: 'Pelajar', idProfil: 'PLJ-1', versiToken: 0 });
    const tokenWali = generateToken({ idPengguna: 3, email: 'w@test.id', role: 'OrangTuaWali', idProfil: 'WALI-1', versiToken: 0 });

    // profilSaya sukses & 404
    db.query
      .mockResolvedValueOnce({ rows: [{ versi_token: 0, status_akun: 'Aktif' }] })
      .mockResolvedValueOnce({
        rows: [{ id_pelajar: 'PLJ-1', id_pengguna: 1, nama: 'Budi', email: 'b@test.id', nomor_telepon: '0812', role: 'Pelajar', status_akun: 'Aktif' }],
      });
    await request(app).get('/api/auth/me').set('Authorization', `Bearer ${tokenPelajar}`).expect(200);

    db.query
      .mockResolvedValueOnce({ rows: [{ versi_token: 0, status_akun: 'Aktif' }] })
      .mockResolvedValueOnce({ rows: [] });
    await request(app).get('/api/auth/me').set('Authorization', `Bearer ${tokenPelajar}`).expect(404);

    // perbaruiProfil validasi 400, 404, 409, dan 200 (termasuk ubah email)
    db.query.mockResolvedValue({ rows: [{ versi_token: 0, status_akun: 'Aktif' }] });
    await request(app)
      .patch('/api/auth/me')
      .set('Authorization', `Bearer ${tokenPelajar}`)
      .send({ nama: 'A', nomor_telepon: '081234567890', email: 'b@test.id' })
      .expect(400);
    await request(app)
      .patch('/api/auth/me')
      .set('Authorization', `Bearer ${tokenPelajar}`)
      .send({ nama: 'Budi', nomor_telepon: '123', email: 'b@test.id' })
      .expect(400);
    await request(app)
      .patch('/api/auth/me')
      .set('Authorization', `Bearer ${tokenPelajar}`)
      .send({ nama: 'Budi', nomor_telepon: '081234567890', email: 'salah' })
      .expect(400);

    db.query
      .mockResolvedValueOnce({ rows: [{ versi_token: 0, status_akun: 'Aktif' }] })
      .mockResolvedValueOnce({ rows: [] });
    await request(app)
      .patch('/api/auth/me')
      .set('Authorization', `Bearer ${tokenPelajar}`)
      .send({ nama: 'Budi', nomor_telepon: '081234567890', email: 'b@test.id' })
      .expect(404);

    // Email dipakai akun lain -> 409
    db.query
      .mockResolvedValueOnce({ rows: [{ versi_token: 0, status_akun: 'Aktif' }] })
      .mockResolvedValueOnce({
        rows: [{ id_pelajar: 'PLJ-1', id_pengguna: 1, nama: 'Budi', email: 'b@test.id', nomor_telepon: '0812', role: 'Pelajar', status_akun: 'Aktif' }],
      })
      .mockResolvedValueOnce({
        rows: [{ id_pengguna: 99, username: 'lain@test.id', email: 'lain@test.id', password_hash: HASH_CEPAT, role: 'Pelajar', status_akun: 'Aktif', versi_token: 0 }],
      });
    await request(app)
      .patch('/api/auth/me')
      .set('Authorization', `Bearer ${tokenPelajar}`)
      .send({ nama: 'Budi', nomor_telepon: '081234567890', email: 'lain@test.id' })
      .expect(409);

    // Sukses ubah profil & email
    db.query
      .mockResolvedValueOnce({ rows: [{ versi_token: 0, status_akun: 'Aktif' }] })
      .mockResolvedValueOnce({
        rows: [{ id_pelajar: 'PLJ-1', id_pengguna: 1, nama: 'Budi', email: 'b@test.id', nomor_telepon: '0812', role: 'Pelajar', status_akun: 'Aktif' }],
      })
      .mockResolvedValueOnce({ rows: [] });
    const upd = await request(app)
      .patch('/api/auth/me')
      .set('Authorization', `Bearer ${tokenPelajar}`)
      .send({ nama: 'Budi Baru', nomor_telepon: '081234567899', email: 'baru@test.id' });
    expect(upd.status).toBe(200);

    // pengajuanMenunggu sukses & 404
    db.query
      .mockResolvedValueOnce({ rows: [{ versi_token: 0, status_akun: 'Aktif' }] })
      .mockResolvedValueOnce({ rows: [{ id_wali: 'WALI-1', id_pengguna: 3, nama: 'Wali', email: 'w@test.id', nomor_telepon: '0812', role: 'OrangTuaWali', status_akun: 'Aktif' }] })
      .mockResolvedValueOnce({ rows: [{ nama: 'Andi', tanggal_daftar: '2026-11-19' }] });
    await request(app).get('/api/auth/wali/menunggu').set('Authorization', `Bearer ${tokenWali}`).expect(200);

    db.query
      .mockResolvedValueOnce({ rows: [{ versi_token: 0, status_akun: 'Aktif' }] })
      .mockResolvedValueOnce({ rows: [] });
    await request(app).get('/api/auth/wali/menunggu').set('Authorization', `Bearer ${tokenWali}`).expect(404);

    // keluar()
    db.query
      .mockResolvedValueOnce({ rows: [{ versi_token: 0, status_akun: 'Aktif' }] })
      .mockResolvedValueOnce({ rowCount: 1 });
    await request(app).post('/api/auth/logout').set('Authorization', `Bearer ${tokenPelajar}`).expect(200);
  });

  test('C11-UT14: authMiddleware authenticate, authorizeRoles, dan error jika JWT_SECRET kosong', async () => {
    const token = generateToken({ idPengguna: 1, email: 'b@test.id', role: 'Pelajar', idProfil: 'PLJ-1', versiToken: 1 });

    await request(app).get('/api/auth/me').expect(401);
    await request(app).get('/api/auth/me').set('Authorization', 'Bearer token.rusak').expect(401);

    // versi_token tidak cocok -> 401
    db.query.mockResolvedValueOnce({ rows: [{ versi_token: 2, status_akun: 'Aktif' }] });
    await request(app).get('/api/auth/me').set('Authorization', `Bearer ${token}`).expect(401);

    // status bukan Aktif -> 401
    db.query.mockResolvedValueOnce({ rows: [{ versi_token: 1, status_akun: 'Ditolak' }] });
    await request(app).get('/api/auth/me').set('Authorization', `Bearer ${token}`).expect(401);

    // DB error diteruskan ke error handler -> 500
    db.query.mockRejectedValueOnce(new Error('DB mati'));
    await request(app).get('/api/auth/me').set('Authorization', `Bearer ${token}`).expect(500);

    // authorizeRoles -> 403 untuk role salah
    db.query.mockResolvedValueOnce({ rows: [{ versi_token: 1, status_akun: 'Aktif' }] });
    await request(app).get('/api/auth/wali/menunggu').set('Authorization', `Bearer ${token}`).expect(403);

    // JWT_SECRET kosong melempar Error
    const awal = process.env.JWT_SECRET;
    try {
      delete process.env.JWT_SECRET;
      expect(() => generateToken({ idPengguna: 1 })).toThrow(/JWT_SECRET/);
    } finally {
      process.env.JWT_SECRET = awal;
    }
  });
});

// =============================================================================
// C24 - NotifikasiDaruratController & NotifikasiDarurat (Mendalam)
// =============================================================================
describe('C24 NotifikasiDaruratController & NotifikasiDarurat (Unit)', () => {
  test('C24-UT01: sendEmergencyNotification sukses di percobaan pertama (jumlahPercobaan = 1)', async () => {
    const notif = new NotifikasiDarurat({
      id: 'DRT-1',
      id_pelajar: 'PLJ-1',
      id_wali: 'WALI-1',
      email_tujuan: 'wali@test.id',
      ringkasan_kondisi: 'Rata-rata mood 1,5 dari 5.',
      status: 'Menunggu Pengiriman',
      jumlah_percobaan: 0,
      status_tindak_lanjut: 'Belum Ditindaklanjuti',
      nama_pelajar: 'Citra',
    });
    db.query.mockResolvedValueOnce({ rowCount: 1 });

    expect(await NotifikasiDaruratController.sendEmergencyNotification(notif)).toBe(true);
    expect(kirimEmail).toHaveBeenCalledTimes(1);
    expect(notif.status).toBe('Terkirim');
  });

  test('C24-UT02 s.d. C24-UT03: retry 3x sampai gagal total atau tanpa email tujuan', async () => {
    const notif = new NotifikasiDarurat({
      id: 'DRT-2',
      email_tujuan: 'wali@test.id',
      ringkasan_kondisi: 'Darurat',
      status: 'Menunggu Pengiriman',
    });
    kirimEmail.mockRejectedValue(new Error('SMTP timeout'));
    db.query.mockResolvedValueOnce({ rowCount: 1 });

    expect(await NotifikasiDaruratController.sendEmergencyNotification(notif)).toBe(false);
    expect(kirimEmail).toHaveBeenCalledTimes(4);
    expect(notif.status).toBe('Gagal Terkirim');

    const tanpaEmail = new NotifikasiDarurat({ id: 'DRT-3', email_tujuan: null, ringkasan_kondisi: 'Darurat' });
    db.query.mockResolvedValueOnce({ rowCount: 1 });
    expect(await NotifikasiDaruratController.sendEmergencyNotification(tanpaEmail)).toBe(false);
  });

  test('C24-UT04: loadEmergencyDetail mengembalikan daftar aktif dan melempar 404 bila wali tidak ditemukan', async () => {
    db.query
      .mockResolvedValueOnce({ rows: [{ id_wali: 'WALI-1', id_pengguna: 3, nama: 'Wali', email: 'w@test.id', nomor_telepon: '0812', role: 'OrangTuaWali', status_akun: 'Aktif' }] })
      .mockResolvedValueOnce({
        rows: [{ id: 'DRT-1', id_pelajar: 'PLJ-1', id_wali: 'WALI-1', ringkasan_kondisi: 'Darurat', status: 'Terkirim', status_tindak_lanjut: 'Belum Ditindaklanjuti', nama_pelajar: 'Citra' }],
      });
    const list = await NotifikasiDaruratController.loadEmergencyDetail(3);
    expect(list).toHaveLength(1);
    expect(list[0]).toBeInstanceOf(NotifikasiDarurat);

    db.query.mockResolvedValueOnce({ rows: [] });
    await expect(NotifikasiDaruratController.loadEmergencyDetail(999)).rejects.toMatchObject({ status: 404 });
  });

  test('C24-UT05 & C24-UT06: confirmReceived sukses, validasi id kosong (400), tidak ada (404), bukan milik wali (403)', async () => {
    await expect(NotifikasiDaruratController.confirmReceived(3, '')).rejects.toMatchObject({ status: 400 });

    db.query
      .mockResolvedValueOnce({ rows: [{ id_wali: 'WALI-1', id_pengguna: 3, nama: 'Wali', email: 'w@test.id', nomor_telepon: '0812', role: 'OrangTuaWali', status_akun: 'Aktif' }] })
      .mockResolvedValueOnce({ rows: [] });
    await expect(NotifikasiDaruratController.confirmReceived(3, 'DRT-X')).rejects.toMatchObject({ status: 404 });

    db.query
      .mockResolvedValueOnce({ rows: [{ id_wali: 'WALI-1', id_pengguna: 3, nama: 'Wali', email: 'w@test.id', nomor_telepon: '0812', role: 'OrangTuaWali', status_akun: 'Aktif' }] })
      .mockResolvedValueOnce({ rows: [{ id: 'DRT-9', id_wali: 'WALI-LAIN' }] });
    await expect(NotifikasiDaruratController.confirmReceived(3, 'DRT-9')).rejects.toMatchObject({ status: 403 });

    db.query
      .mockResolvedValueOnce({ rows: [{ id_wali: 'WALI-1', id_pengguna: 3, nama: 'Wali', email: 'w@test.id', nomor_telepon: '0812', role: 'OrangTuaWali', status_akun: 'Aktif' }] })
      .mockResolvedValueOnce({ rows: [{ id: 'DRT-1', id_wali: 'WALI-1', status: 'Terkirim', status_tindak_lanjut: 'Belum Ditindaklanjuti' }] })
      .mockResolvedValueOnce({ rowCount: 1 });
    expect(await NotifikasiDaruratController.confirmReceived(3, 'DRT-1')).toBe(true);
  });

  test('C24-UT07: markFollowUp mencatat tindak lanjut dalam transaksi dan idempoten jika sudah ditindaklanjuti', async () => {
    // Idempoten bila sudah ditindaklanjuti
    db.query
      .mockResolvedValueOnce({ rows: [{ id_wali: 'WALI-1', id_pengguna: 3, nama: 'Wali', email: 'w@test.id', nomor_telepon: '0812', role: 'OrangTuaWali', status_akun: 'Aktif' }] })
      .mockResolvedValueOnce({ rows: [{ id: 'DRT-1', id_wali: 'WALI-1', id_pelajar: 'PLJ-1', status: 'Diterima', status_tindak_lanjut: 'Sudah Ditindaklanjuti' }] });
    expect(await NotifikasiDaruratController.markFollowUp(3, 'DRT-1')).toBe(true);
    expect(db.withTransaction).not.toHaveBeenCalled();

    // Belum ditindaklanjuti -> transaksi update notifikasi & pelajar
    db.query
      .mockResolvedValueOnce({ rows: [{ id_wali: 'WALI-1', id_pengguna: 3, nama: 'Wali', email: 'w@test.id', nomor_telepon: '0812', role: 'OrangTuaWali', status_akun: 'Aktif' }] })
      .mockResolvedValueOnce({ rows: [{ id: 'DRT-1', id_wali: 'WALI-1', id_pelajar: 'PLJ-1', status: 'Terkirim', status_tindak_lanjut: 'Belum Ditindaklanjuti' }] })
      .mockResolvedValueOnce({ rows: [{ id_pelajar: 'PLJ-1', id_pengguna: 1, nama: 'Citra', status_darurat: true, tanggal_lahir: '2005-03-02', nomor_telepon: '0812', role: 'Pelajar', status_akun: 'Aktif' }] });
    const txExec = { query: jest.fn().mockResolvedValue({ rowCount: 1 }) };
    db.withTransaction.mockImplementationOnce((fn) => fn(txExec));

    expect(await NotifikasiDaruratController.markFollowUp(3, 'DRT-1')).toBe(true);
    expect(txExec.query).toHaveBeenCalledTimes(2);
  });

  test('C24-UT08 & C24-UT09: evaluasiPelajar, tentukanEmailTujuan, dan race condition 23505', async () => {
    const pelajar = new Pelajar({
      id_pelajar: 'PLJ-3',
      id_wali: 'WALI-2',
      nama: 'Citra',
      email_wali: 'fallback@test.id',
      status_darurat: false,
    });
    const riwayatBuruk = [4, 5, 6].map(
      (h) =>
        new CheckIn({
          id_check_in: `C-${h}`,
          tanggal_check_in: tambahHari(hariIni(), -h),
          skala_mood: 1,
          jam_tidur: '02:00:00',
          jam_bangun: '05:00:00',
          pola_makan: 'Kurang',
        })
    );

    // Kondisi aman -> null
    const riwayatAman = [
      new CheckIn({ id_check_in: 'A1', tanggal_check_in: hariIni(), skala_mood: 5, jam_tidur: '22:00:00', jam_bangun: '06:00:00', pola_makan: 'Teratur' }),
    ];
    expect(await NotifikasiDaruratController.evaluasiPelajar(pelajar, riwayatAman)).toBeNull();

    // Sudah dilaporkan -> null
    db.query.mockResolvedValueOnce({ rowCount: 1 });
    expect(await NotifikasiDaruratController.evaluasiPelajar(pelajar, riwayatBuruk)).toBeNull();

    // Darurat baru + email dari wali
    db.query
      .mockResolvedValueOnce({ rowCount: 0 }) // sudahDilaporkanSejak
      .mockResolvedValueOnce({ rows: [{ id_wali: 'WALI-2', email: 'ratna@test.id', role: 'OrangTuaWali', status_akun: 'Aktif' }] }) // OrangTuaWali.findById
      .mockResolvedValueOnce({ rowCount: 1 }); // catatPengiriman
    db.withTransaction.mockImplementationOnce((fn) =>
      fn({
        query: jest
          .fn()
          .mockResolvedValueOnce({ rows: [{ id: 'DRT-NEW', id_pelajar: 'PLJ-3', id_wali: 'WALI-2', email_tujuan: 'ratna@test.id', ringkasan_kondisi: 'Darurat', status: 'Menunggu Pengiriman' }] })
          .mockResolvedValueOnce({ rowCount: 1 }),
      })
    );
    const baru = await NotifikasiDaruratController.evaluasiPelajar(pelajar, riwayatBuruk);
    expect(baru).toBeInstanceOf(NotifikasiDarurat);
    expect(kirimEmail).toHaveBeenCalledWith(expect.objectContaining({ to: 'ratna@test.id' }));

    // Race condition 23505 -> null; error non-23505 -> throw
    db.query.mockResolvedValueOnce({ rowCount: 0 }).mockResolvedValueOnce({ rows: [] });
    const dup = new Error('unique');
    dup.code = '23505';
    db.withTransaction.mockRejectedValueOnce(dup);
    expect(await NotifikasiDaruratController.evaluasiPelajar(pelajar, riwayatBuruk)).toBeNull();

    db.query.mockResolvedValueOnce({ rowCount: 0 }).mockResolvedValueOnce({ rows: [] });
    db.withTransaction.mockRejectedValueOnce(new Error('DB crash'));
    await expect(NotifikasiDaruratController.evaluasiPelajar(pelajar, riwayatBuruk)).rejects.toThrow('DB crash');
  });

  test('C24-UT10: jalankanEvaluasiHarian & NotifikasiDarurat findBelumDirespons/findById', async () => {
    db.query
      .mockResolvedValueOnce({ rows: [{ id_pelajar: 'PLJ-1', nama: 'A', role: 'Pelajar', status_akun: 'Aktif' }, { id_pelajar: 'PLJ-2', nama: 'B', role: 'Pelajar', status_akun: 'Aktif' }] }) // findSemuaAktif
      .mockResolvedValueOnce({ rows: [] }) // getRiwayatTerbaruSemuaAktif
      .mockResolvedValueOnce({
        rows: [{ id: 'DRT-OLD', id_pelajar: 'PLJ-1', email_tujuan: 'w@test.id', ringkasan_kondisi: 'Lama', status: 'Terkirim', status_tindak_lanjut: 'Belum Ditindaklanjuti', nama_pelajar: 'A' }],
      }) // findBelumDirespons
      .mockResolvedValueOnce({ rowCount: 1 }); // catatPengiriman

    const ringkas = await NotifikasiDaruratController.jalankanEvaluasiHarian();
    expect(ringkas).toEqual({ jumlahPelajar: 2, jumlahDarurat: 0, jumlahDikirimUlang: 1 });

    // Error per pelajar tidak menghentikan loop
    jest.spyOn(NotifikasiDaruratController, 'evaluasiPelajar').mockRejectedValueOnce(new Error('fail p1'));
    db.query
      .mockResolvedValueOnce({ rows: [{ id_pelajar: 'PLJ-1', nama: 'A', role: 'Pelajar', status_akun: 'Aktif' }] })
      .mockResolvedValueOnce({ rows: [] })
      .mockResolvedValueOnce({ rows: [] });
    const resErr = await NotifikasiDaruratController.jalankanEvaluasiHarian();
    expect(resErr.jumlahDarurat).toBe(0);

    // NotifikasiDarurat.findById null case
    db.query.mockResolvedValueOnce({ rows: [] });
    expect(await NotifikasiDarurat.findById('NONE')).toBeNull();
  });
});

// =============================================================================
// C27 - PasswordController (Mendalam)
// =============================================================================
describe('C27 PasswordController (Unit)', () => {
  test('C27-UT01: lupaPassword email terdaftar menyimpan hash SHA-256 dan mengirim tautan reset (200)', async () => {
    db.query
      .mockResolvedValueOnce({
        rows: [{ id_pengguna: 6, username: 'nadia@test.id', email: 'nadia@test.id', password_hash: HASH_CEPAT, role: 'TenagaKesehatan', status_akun: 'Aktif', versi_token: 0 }],
      })
      .mockResolvedValueOnce({ rowCount: 1 });

    const res = await request(app).post('/api/auth/forgot-password').send({ email: '  NADIA@test.id ' });
    expect(res.status).toBe(200);
    expect(mailer.kirimEmailResetPassword).toHaveBeenCalledTimes(1);
    const { email, token } = mailer.kirimEmailResetPassword.mock.calls[0][0];
    expect(email).toBe('nadia@test.id');
    const expectedHash = crypto.createHash('sha256').update(token).digest('hex');
    expect(db.query.mock.calls[1][1][0]).toBe(expectedHash);
  });

  test('C27-UT02: lupaPassword menolak email kosong atau format tidak valid (400)', async () => {
    await request(app).post('/api/auth/forgot-password').send({}).expect(400);
    await request(app).post('/api/auth/forgot-password').send({ email: 'bukan-email' }).expect(400);
    expect(mailer.kirimEmailResetPassword).not.toHaveBeenCalled();
  });

  test('C27-UT03: lupaPassword mengembalikan 404 saat email tidak terdaftar', async () => {
    db.query.mockResolvedValueOnce({ rows: [] });
    await request(app).post('/api/auth/forgot-password').send({ email: 'tidakada@test.id' }).expect(404);
    expect(mailer.kirimEmailResetPassword).not.toHaveBeenCalled();
  });

  test('C27-UT04 & C27-UT05: resetPassword menerima password tepat 8 karakter (dengan/tanpa confirm_password) dan menolak 7 karakter', async () => {
    // 7 karakter -> 400
    await request(app)
      .post('/api/auth/reset-password')
      .send({ token: 'tok', password: '1234567', confirm_password: '1234567' })
      .expect(400);

    // tepat 8 karakter dengan konfirmasi cocok -> 200
    db.query
      .mockResolvedValueOnce({
        rows: [{ id_pengguna: 6, username: 'n@test.id', email: 'n@test.id', password_hash: HASH_CEPAT, role: 'TenagaKesehatan', status_akun: 'Aktif', versi_token: 0 }],
      })
      .mockResolvedValueOnce({ rowCount: 1 });
    await request(app)
      .post('/api/auth/reset-password')
      .send({ token: 'tok-valid', password: 'Pass1234', confirm_password: 'Pass1234' })
      .expect(200);

    // tanpa confirm_password -> 200
    db.query
      .mockResolvedValueOnce({
        rows: [{ id_pengguna: 6, username: 'n@test.id', email: 'n@test.id', password_hash: HASH_CEPAT, role: 'TenagaKesehatan', status_akun: 'Aktif', versi_token: 0 }],
      })
      .mockResolvedValueOnce({ rowCount: 1 });
    await request(app).post('/api/auth/reset-password').send({ token: 'tok-valid', password: 'Pass1234' }).expect(200);
  });

  test('C27-UT06: resetPassword menolak tipe bukan string atau konfirmasi tidak cocok (400)', async () => {
    await request(app).post('/api/auth/reset-password').send({ token: 't', password: 12345678 }).expect(400);
    await request(app)
      .post('/api/auth/reset-password')
      .send({ token: 't', password: 'Password1!', confirm_password: 'Password2!' })
      .expect(400);
  });

  test('C27-UT07: resetPassword mengembalikan 404 bila token kosong, bukan string, tidak ada, atau kedaluwarsa', async () => {
    await request(app).post('/api/auth/reset-password').send({ password: 'Password1!' }).expect(404);
    await request(app).post('/api/auth/reset-password').send({ token: '', password: 'Password1!' }).expect(404);
    await request(app).post('/api/auth/reset-password').send({ token: 12345, password: 'Password1!' }).expect(404);

    db.query.mockResolvedValueOnce({ rows: [] });
    await request(app).post('/api/auth/reset-password').send({ token: 'kedaluwarsa', password: 'Password1!' }).expect(404);
  });
});
