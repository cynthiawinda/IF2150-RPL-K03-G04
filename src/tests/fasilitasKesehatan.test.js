jest.mock('../config/db', () => ({ query: jest.fn(), withTransaction: jest.fn() }));

const db = require('../config/db');
const FasilitasKesehatan = require('../models/FasilitasKesehatan');

const BARIS = {
  id_fasilitas: 'FAS-1',
  nama_fasilitas: 'Klinik Sehat Jiwa',
  lokasi: '-6.9175,107.6191',
  estimasi_biaya: 150000,
};

beforeEach(() => {
  jest.clearAllMocks();
});

describe('C08 FasilitasKesehatan', () => {
  test('C08-UT01 | getLokasi() | Normal | Fasilitas dengan lokasi "-6.9175,107.6191" | Mengembalikan string lokasi tersebut', () => {
    expect(new FasilitasKesehatan(BARIS).getLokasi()).toBe('-6.9175,107.6191');
  });

  test('C08-UT02 | getEstimasiBiaya() | Normal | Fasilitas dengan estimasi biaya 150000 | Mengembalikan 150000', () => {
    expect(new FasilitasKesehatan(BARIS).getEstimasiBiaya()).toBe(150000);
  });

  test('C08-UT03 | getLokasi() | Batas | Fasilitas dengan lokasi null | Mengembalikan null tanpa kesalahan', () => {
    expect(new FasilitasKesehatan({ ...BARIS, lokasi: null }).getLokasi()).toBeNull();
  });

  test('C08-UT04 | findAll() | Normal | Basis data mengembalikan 2 fasilitas | Mengembalikan 2 objek FasilitasKesehatan dengan atribut terisi', async () => {
    db.query.mockResolvedValue({ rows: [BARIS, { ...BARIS, id_fasilitas: 'FAS-2', nama_fasilitas: 'Klinik B' }] });
    const hasil = await FasilitasKesehatan.findAll();
    expect(hasil).toHaveLength(2);
    expect(hasil[0]).toBeInstanceOf(FasilitasKesehatan);
    expect(hasil[1].namaFasilitas).toBe('Klinik B');
  });

  test('C08-UT05 | findAll() | Batas | Basis data tidak punya fasilitas | Mengembalikan array kosong', async () => {
    db.query.mockResolvedValue({ rows: [] });
    expect(await FasilitasKesehatan.findAll()).toEqual([]);
  });

  test('C08-UT06 | findAll() | Negatif | Query ke basis data gagal | Galat diteruskan ke pemanggil (promise ditolak)', async () => {
    db.query.mockRejectedValue(new Error('koneksi putus'));
    await expect(FasilitasKesehatan.findAll()).rejects.toThrow('koneksi putus');
  });
});