jest.mock('../config/db', () => ({ query: jest.fn(), withTransaction: jest.fn() }));

const db = require('../config/db');
const TenagaKesehatan = require('../models/TenagaKesehatan');

const BARIS = {
  id_tenaga_kesehatan: 'NAKES-1',
  id_fasilitas: 'FAS-1',
  nama: 'Siti Rahma',
  email: 'siti@mahasehat.id',
  nomor_telepon: '08123456789',
  jenis_tenaga_kesehatan: 'Psikolog',
  nomor_str: 'STR-001',
  lokasi: '-6.9175,107.6191',
};

function buatNakes(ubahan = {}) {
  return new TenagaKesehatan({ ...BARIS, ...ubahan });
}

beforeEach(() => {
  jest.clearAllMocks();
});

describe('C04 TenagaKesehatan', () => {
  test('C04-UT01 | getProfil() | Normal | Tenaga kesehatan Siti Rahma, Psikolog | Teks profil memuat nama, jenis, e-mail, dan telepon', () => {
    expect(buatNakes().getProfil()).toBe(
      'Siti Rahma (Psikolog)\nE-mail: siti@mahasehat.id\nTelepon: 08123456789'
    );
  });

  test('C04-UT02 | findAll() | Normal | Basis data mengembalikan 2 baris | Mengembalikan 2 objek TenagaKesehatan sesuai urutan query', async () => {
    db.query.mockResolvedValue({ rows: [BARIS, { ...BARIS, id_tenaga_kesehatan: 'NAKES-2', nama: 'Hendra' }] });
    const hasil = await TenagaKesehatan.findAll();
    expect(hasil).toHaveLength(2);
    expect(hasil[0]).toBeInstanceOf(TenagaKesehatan);
    expect(hasil[1].idTenagaKesehatan).toBe('NAKES-2');
  });

  test('C04-UT03 | findAll() | Batas | Basis data tidak punya data | Mengembalikan array kosong', async () => {
    db.query.mockResolvedValue({ rows: [] });
    expect(await TenagaKesehatan.findAll()).toEqual([]);
  });

  test('C04-UT04 | findById() | Normal | ID NAKES-1 ada di basis data | Mengembalikan objek dengan atribut sesuai baris', async () => {
    db.query.mockResolvedValue({ rows: [BARIS] });
    const nakes = await TenagaKesehatan.findById('NAKES-1');
    expect(nakes.nama).toBe('Siti Rahma');
    expect(nakes.jenisTenagaKesehatan).toBe('Psikolog');
    expect(db.query.mock.calls[0][1]).toEqual(['NAKES-1']);
  });

  test('C04-UT05 | findById() | Negatif | ID tidak ada di basis data | Mengembalikan null', async () => {
    db.query.mockResolvedValue({ rows: [] });
    expect(await TenagaKesehatan.findById('NAKES-X')).toBeNull();
  });

  test('C04-UT06 | findDetailDenganFasilitas() | Negatif | ID tidak ada di basis data | Mengembalikan null', async () => {
    db.query.mockResolvedValue({ rows: [] });
    expect(await TenagaKesehatan.findDetailDenganFasilitas('NAKES-X')).toBeNull();
  });

  test('C04-UT07 | getJadwalTersedia() | Normal | 3 slot: masa depan tersedia, masa depan terisi, masa lalu tersedia | Hanya slot masa depan yang tersedia dikembalikan', async () => {
    const slot = (id, tanggal, tersedia) => ({
      id_jadwal: id,
      id_tenaga_kesehatan: 'NAKES-1',
      tanggal,
      waktu: '10:00:00',
      status_ketersediaan: tersedia,
      status_pengajuan: 'Belum Diajukan',
    });
    db.query.mockResolvedValue({
      rows: [slot('J1', '2099-01-01', true), slot('J2', '2099-01-02', false), slot('J3', '2000-01-01', true)],
    });
    const hasil = await buatNakes().getJadwalTersedia();
    expect(hasil.map((j) => j.idJadwal)).toEqual(['J1']);
    expect(db.query.mock.calls[0][1]).toEqual(['NAKES-1']);
  });

  test('C04-UT08 | getJadwalTersedia() | Batas | Tenaga kesehatan belum punya slot | Mengembalikan array kosong', async () => {
    db.query.mockResolvedValue({ rows: [] });
    expect(await buatNakes().getJadwalTersedia()).toEqual([]);
  });

  test('C04-UT09 | perbaruiProfil() | Normal | Nama, telepon, e-mail, jenis, STR, lokasi diisi semua | Query UPDATE dijalankan dan atribut objek ikut berubah', async () => {
    const executor = { query: jest.fn().mockResolvedValue({}) };
    const nakes = buatNakes();
    await nakes.perbaruiProfil(
      {
        nama: 'Siti R.',
        nomorTelepon: '0899',
        email: 'baru@mahasehat.id',
        jenisTenagaKesehatan: 'Psikiater',
        nomorStr: 'STR-9',
        lokasi: '-6.9,107.6',
      },
      executor
    );
    expect(executor.query.mock.calls[0][1]).toEqual([
      'Siti R.', '0899', 'baru@mahasehat.id', 'Psikiater', 'STR-9', '-6.9,107.6', 'NAKES-1',
    ]);
    expect(nakes.nama).toBe('Siti R.');
    expect(nakes.email).toBe('baru@mahasehat.id');
    expect(nakes.nomorTelepon).toBe('0899');
  });

  test('C04-UT10 | perbaruiProfil() | Batas | Jenis, STR, dan lokasi tidak diisi | Ketiganya dikirim sebagai null agar nilai lama dipertahankan (COALESCE)', async () => {
    const executor = { query: jest.fn().mockResolvedValue({}) };
    await buatNakes().perbaruiProfil({ nama: 'Siti', nomorTelepon: '0812', email: 'siti@mahasehat.id' }, executor);
    const params = executor.query.mock.calls[0][1];
    expect(params.slice(3, 6)).toEqual([null, null, null]);
  });

  test('C04-UT11 | setEstimasiBiaya() | Negatif | Tenaga kesehatan belum terhubung ke fasilitas | Mengembalikan false tanpa menjalankan query', async () => {
    const executor = { query: jest.fn() };
    const hasil = await buatNakes({ id_fasilitas: null }).setEstimasiBiaya(150000, executor);
    expect(hasil).toBe(false);
    expect(executor.query).not.toHaveBeenCalled();
  });

  test('C04-UT12 | setEstimasiBiaya() | Normal | Tarif 150000 dan fasilitas FAS-1 ada | Mengembalikan true dan query memakai tarif serta ID fasilitas', async () => {
    const executor = { query: jest.fn().mockResolvedValue({ rowCount: 1 }) };
    const hasil = await buatNakes().setEstimasiBiaya(150000, executor);
    expect(hasil).toBe(true);
    expect(executor.query.mock.calls[0][1]).toEqual([150000, 'FAS-1']);
  });

  test('C04-UT13 | setEstimasiBiaya() | Negatif | Query tidak mengubah baris apa pun (rowCount 0) | Mengembalikan false', async () => {
    const executor = { query: jest.fn().mockResolvedValue({ rowCount: 0 }) };
    expect(await buatNakes().setEstimasiBiaya(150000, executor)).toBe(false);
  });

  test('C04-UT14 | tambah() | Normal | Data baru tanpa ID fasilitas | Mengembalikan ID berawalan NAKES- dan ID fasilitas dikirim sebagai null', async () => {
    const executor = { query: jest.fn().mockResolvedValue({}) };
    const id = await TenagaKesehatan.tambah(executor, {
      idPengguna: 'U-1',
      nama: 'Nadia',
      email: 'nadia@mahasehat.id',
      nomorTelepon: '0812',
      jenisTenagaKesehatan: 'Psikolog',
      lokasi: '-6.9,107.6',
    });
    expect(id).toMatch(/^NAKES-/);
    const params = executor.query.mock.calls[0][1];
    expect(params[2]).toBeNull();
    expect(params[7]).toBeNull();
  });
});