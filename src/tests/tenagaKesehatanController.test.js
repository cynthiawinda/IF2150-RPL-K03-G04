jest.mock('../config/db', () => ({ query: jest.fn(), withTransaction: jest.fn() }));
jest.mock('../models/TenagaKesehatan', () => ({
  findSemuaDenganFasilitas: jest.fn(),
  findDetailDenganFasilitas: jest.fn(),
  findById: jest.fn(),
  findByIdPengguna: jest.fn(),
}));
jest.mock('../models/Pelajar', () => ({ findByIdPengguna: jest.fn() }));

const TenagaKesehatan = require('../models/TenagaKesehatan');
const Pelajar = require('../models/Pelajar');
const controller = require('../controllers/TenagaKesehatanController');

function buatRes() {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
}

async function panggil(handler, req) {
  const res = buatRes();
  const next = jest.fn();
  await handler(req, res, next);
  return { res, next, data: res.json.mock.calls[0] ? res.json.mock.calls[0][0].data : undefined };
}

const BANDUNG = { id_tenaga_kesehatan: 'N1', nama: 'Siti', jenis_tenaga_kesehatan: 'Psikolog', nama_fasilitas: 'Klinik Bandung', lokasi: '-6.9175,107.6191' };
const JAKARTA = { id_tenaga_kesehatan: 'N2', nama: 'Hendra', jenis_tenaga_kesehatan: 'Psikiater', nama_fasilitas: 'Klinik Jakarta', lokasi: '-6.2088,106.8456' };
const TANPA_LOKASI = { id_tenaga_kesehatan: 'N3', nama: 'Nadia', jenis_tenaga_kesehatan: 'Psikolog', nama_fasilitas: null, lokasi: null, lokasi_kerja: null };
const PENGGUNA = { lat: '-6.9', lng: '107.6' };

beforeEach(() => {
  jest.clearAllMocks();
  TenagaKesehatan.findSemuaDenganFasilitas.mockResolvedValue([JAKARTA, TANPA_LOKASI, BANDUNG]);
});

describe('C20 TenagaKesehatanController', () => {
  test('C20-UT23 | loadTenagaKesehatan() | Normal | Tanpa koordinat pengguna | Mengembalikan 3 tenaga kesehatan dengan jarak_km null dan urutan asli', async () => {
    const { res, data } = await panggil(controller.loadTenagaKesehatan, { query: {}, user: {} });
    expect(res.status).toHaveBeenCalledWith(200);
    expect(data.map((n) => n.id_tenaga_kesehatan)).toEqual(['N2', 'N3', 'N1']);
    expect(data.every((n) => n.jarak_km === null)).toBe(true);
  });

  test('C20-UT24 | loadTenagaKesehatan() | Normal | Koordinat pengguna di Bandung (-6.9,107.6) | Urut dari terdekat (Bandung lalu Jakarta), yang tanpa lokasi di urutan terakhir dengan jarak_km null', async () => {
    const { data } = await panggil(controller.loadTenagaKesehatan, { query: PENGGUNA, user: {} });
    expect(data.map((n) => n.id_tenaga_kesehatan)).toEqual(['N1', 'N2', 'N3']);
    expect(data[0].jarak_km).toBeLessThan(5);
    expect(data[1].jarak_km).toBeGreaterThan(100);
    expect(data[2].jarak_km).toBeNull();
  });

  test('C20-UT25 | loadTenagaKesehatan() | Normal | Filter spesialisasi "psikiater" (huruf kecil) | Hanya Hendra yang dikembalikan', async () => {
    const { data } = await panggil(controller.loadTenagaKesehatan, { query: { spesialisasi: 'psikiater' }, user: {} });
    expect(data.map((n) => n.nama)).toEqual(['Hendra']);
  });

  test('C20-UT26 | loadTenagaKesehatan() | Normal | Pencarian "jakarta" pada nama fasilitas | Hanya tenaga kesehatan di Klinik Jakarta yang dikembalikan', async () => {
    const { data } = await panggil(controller.loadTenagaKesehatan, { query: { search: 'jakarta' }, user: {} });
    expect(data.map((n) => n.nama)).toEqual(['Hendra']);
  });

  test('C20-UT27 | loadTenagaKesehatan() | Negatif | Latitude 95 (di luar rentang) | Koordinat diabaikan, seluruh jarak_km null', async () => {
    const { data } = await panggil(controller.loadTenagaKesehatan, { query: { lat: '95', lng: '107.6' }, user: {} });
    expect(data.every((n) => n.jarak_km === null)).toBe(true);
  });

  test('C20-UT28 | loadTenagaKesehatan() | Negatif | Latitude berupa string kosong dan longitude "abc" | Koordinat diabaikan, seluruh jarak_km null', async () => {
    const { data } = await panggil(controller.loadTenagaKesehatan, { query: { lat: '', lng: '107.6' }, user: {} });
    expect(data.every((n) => n.jarak_km === null)).toBe(true);
    const lain = await panggil(controller.loadTenagaKesehatan, { query: { lat: '-6.9', lng: 'abc' }, user: {} });
    expect(lain.data.every((n) => n.jarak_km === null)).toBe(true);
  });

  test('C20-UT29 | loadTenagaKesehatan() | Batas | Koordinat dikirim lewat nama latitude dan longitude | Koordinat dipakai, jarak_km Bandung terisi', async () => {
    const { data } = await panggil(controller.loadTenagaKesehatan, { query: { latitude: '-6.9', longitude: '107.6' }, user: {} });
    expect(data[0].id_tenaga_kesehatan).toBe('N1');
    expect(data[0].jarak_km).not.toBeNull();
  });

  test('C20-UT30 | processLocationPermission() | Negatif | Koordinat tidak valid (lat "abc") | Diteruskan ke next sebagai AppError 400', async () => {
    const { next } = await panggil(controller.processLocationPermission, { query: {}, body: { lat: 'abc', lng: '107.6' }, user: { role: 'Pelajar' } });
    expect(next.mock.calls[0][0]).toMatchObject({ status: 400, message: 'Koordinat lokasi tidak valid.' });
  });

  test('C20-UT31 | processLocationPermission() | Normal | Pelajar memberi izin lokasi (-6.9,107.6) | Lokasi disimpan "-6.9,107.6" dan daftar berjarak dikembalikan dengan status 200', async () => {
    const pelajar = { setLokasiSaatIni: jest.fn().mockResolvedValue() };
    Pelajar.findByIdPengguna.mockResolvedValue(pelajar);
    const { res, data } = await panggil(controller.processLocationPermission, {
      query: {},
      body: { lat: -6.9, lng: 107.6 },
      user: { role: 'Pelajar', idPengguna: 'U-1' },
    });
    expect(res.status).toHaveBeenCalledWith(200);
    expect(pelajar.setLokasiSaatIni).toHaveBeenCalledWith('-6.9,107.6');
    expect(data[0].jarak_km).not.toBeNull();
  });

  test('C20-UT32 | processLocationPermission() | Normal | Pengguna bukan Pelajar (OrangTuaWali) memberi lokasi | Lokasi tidak disimpan, daftar tetap dikembalikan', async () => {
    const { res } = await panggil(controller.processLocationPermission, {
      query: {},
      body: { lat: -6.9, lng: 107.6 },
      user: { role: 'OrangTuaWali', idPengguna: 'U-2' },
    });
    expect(Pelajar.findByIdPengguna).not.toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(200);
  });

  test('C20-UT33 | processLocationPermission() | Batas | Role Pelajar tetapi profil pelajar tidak ditemukan | Tidak melempar kesalahan, daftar tetap dikembalikan (200)', async () => {
    Pelajar.findByIdPengguna.mockResolvedValue(null);
    const { res, next } = await panggil(controller.processLocationPermission, {
      query: {},
      body: { lat: -6.9, lng: 107.6 },
      user: { role: 'Pelajar', idPengguna: 'U-1' },
    });
    expect(next).not.toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(200);
  });

  test('C20-UT34 | updateTarif() | Negatif | Tarif 0, -5, "abc", dan tidak diisi | Seluruhnya diteruskan ke next sebagai AppError 400', async () => {
    for (const estimasi_biaya of [0, -5, 'abc', undefined]) {
      const { next } = await panggil(controller.updateTarif, { body: { estimasi_biaya }, user: { idPengguna: 'U-3' } });
      expect(next.mock.calls[0][0]).toMatchObject({ status: 400, message: 'Tarif konsultasi tidak valid.' });
    }
  });

  test('C20-UT35 | updateTarif() | Negatif | Pengguna bukan tenaga kesehatan (profil tidak ditemukan) | Diteruskan ke next sebagai AppError 403', async () => {
    TenagaKesehatan.findByIdPengguna.mockResolvedValue(null);
    const { next } = await panggil(controller.updateTarif, { body: { estimasi_biaya: 150000 }, user: { idPengguna: 'U-3' } });
    expect(next.mock.calls[0][0]).toMatchObject({ status: 403 });
  });

  test('C20-UT36 | updateTarif() | Negatif | Tenaga kesehatan belum terhubung ke fasilitas (setEstimasiBiaya false) | Diteruskan ke next sebagai AppError 400', async () => {
    TenagaKesehatan.findByIdPengguna.mockResolvedValue({ setEstimasiBiaya: jest.fn().mockResolvedValue(false) });
    const { next } = await panggil(controller.updateTarif, { body: { estimasi_biaya: 150000 }, user: { idPengguna: 'U-3' } });
    expect(next.mock.calls[0][0]).toMatchObject({ status: 400 });
  });

  test('C20-UT37 | updateTarif() | Normal | Tarif 150000.6 dari tenaga kesehatan terhubung fasilitas | Tarif dibulatkan menjadi 150001, respons 200 memuat estimasi_biaya 150001', async () => {
    const nakes = { setEstimasiBiaya: jest.fn().mockResolvedValue(true) };
    TenagaKesehatan.findByIdPengguna.mockResolvedValue(nakes);
    const { res, data } = await panggil(controller.updateTarif, { body: { estimasi_biaya: 150000.6 }, user: { idPengguna: 'U-3' } });
    expect(res.status).toHaveBeenCalledWith(200);
    expect(nakes.setEstimasiBiaya).toHaveBeenCalledWith(150001);
    expect(data.estimasi_biaya).toBe(150001);
  });

  test('C20-UT38 | selectTenagaKesehatan() | Negatif | ID tenaga kesehatan tidak ada | Diteruskan ke next sebagai AppError 404', async () => {
    TenagaKesehatan.findDetailDenganFasilitas.mockResolvedValue(null);
    const { next } = await panggil(controller.selectTenagaKesehatan, { params: { id: 'N-X' }, query: {}, user: {} });
    expect(next.mock.calls[0][0]).toMatchObject({ status: 404 });
  });

  test('C20-UT39 | selectTenagaKesehatan() | Normal | ID N1 ada, punya 1 jadwal tersedia, koordinat pengguna (-6.9,107.6) | Detail dengan jarak_km terisi dan jadwal_tersedia berisi 1 slot', async () => {
    TenagaKesehatan.findDetailDenganFasilitas.mockResolvedValue(BANDUNG);
    TenagaKesehatan.findById.mockResolvedValue({
      getJadwalTersedia: jest.fn().mockResolvedValue([{ idJadwal: 'J1', tanggal: '2099-01-01', waktu: '10:00', statusKetersediaan: true }]),
    });
    const { res, data } = await panggil(controller.selectTenagaKesehatan, { params: { id: 'N1' }, query: PENGGUNA, user: {} });
    expect(res.status).toHaveBeenCalledWith(200);
    expect(data.jarak_km).toBeGreaterThan(0);
    expect(data.jadwal_tersedia).toEqual([{ id_jadwal: 'J1', tanggal: '2099-01-01', waktu: '10:00', status_ketersediaan: true }]);
  });

  test('C20-UT40 | selectTenagaKesehatan() | Batas | Tanpa koordinat pengguna | jarak_km bernilai null', async () => {
    TenagaKesehatan.findDetailDenganFasilitas.mockResolvedValue(BANDUNG);
    TenagaKesehatan.findById.mockResolvedValue({ getJadwalTersedia: jest.fn().mockResolvedValue([]) });
    const { data } = await panggil(controller.selectTenagaKesehatan, { params: { id: 'N1' }, query: {}, user: {} });
    expect(data.jarak_km).toBeNull();
    expect(data.jadwal_tersedia).toEqual([]);
  });

  test('C20-UT41 | selectTenagaKesehatan() | Negatif | Koordinat pengguna valid tetapi lokasi faskes tidak ada | jarak_km seharusnya null (sama seperti loadTenagaKesehatan)', async () => {
    TenagaKesehatan.findDetailDenganFasilitas.mockResolvedValue(TANPA_LOKASI);
    TenagaKesehatan.findById.mockResolvedValue({ getJadwalTersedia: jest.fn().mockResolvedValue([]) });
    const { data } = await panggil(controller.selectTenagaKesehatan, { params: { id: 'N3' }, query: PENGGUNA, user: {} });
    expect(data.jarak_km).toBeNull();
  });

  test('C20-UT42 | selectTenagaKesehatan() | Batas | Detail ada tetapi profil tenaga kesehatan tidak ditemukan (findById null) | Jadwal tersedia berupa array kosong', async () => {
    TenagaKesehatan.findDetailDenganFasilitas.mockResolvedValue(BANDUNG);
    TenagaKesehatan.findById.mockResolvedValue(null);
    const { data } = await panggil(controller.selectTenagaKesehatan, { params: { id: 'N1' }, query: {}, user: {} });
    expect(data.jadwal_tersedia).toEqual([]);
  });
});