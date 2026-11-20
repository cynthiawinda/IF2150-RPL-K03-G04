jest.mock('../config/db', () => ({ query: jest.fn(), withTransaction: jest.fn() }));
jest.mock('../models/Pelajar', () => ({ findByIdPengguna: jest.fn() }));
jest.mock('../models/JadwalKonsultasi', () => ({
  findById: jest.fn(),
  findByPelajar: jest.fn(),
  findPengajuanMasuk: jest.fn(),
  findByTenagaKesehatan: jest.fn(),
}));

const Pelajar = require('../models/Pelajar');
const JadwalKonsultasi = require('../models/JadwalKonsultasi');
const AppError = require('../utils/AppError');
const controller = require('../controllers/KonsultasiController');

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

function buatJadwal(ubahan = {}) {
  return {
    idJadwal: 'J1',
    idTenagaKesehatan: 'NAKES-1',
    statusPengajuan: 'Belum Diajukan',
    tanggal: '2099-01-01',
    waktu: '10:00',
    updateStatus: jest.fn().mockResolvedValue(),
    updateSchedule: jest.fn().mockResolvedValue(),
    tolakPengajuan: jest.fn().mockResolvedValue(),
    ...ubahan,
  };
}

const KELUHAN = 'Saya sulit tidur dan cemas';
const REQ_PELAJAR = (body) => ({ user: { idPengguna: 'U-1' }, body });
const REQ_NAKES = (body, id = 'J1') => ({ user: { idProfil: 'NAKES-1' }, params: { id }, body });

beforeEach(() => {
  jest.clearAllMocks();
});

describe('C23 KonsultasiController', () => {
  test('C23-UT01 | ajukan() | Negatif | Profil pelajar tidak ditemukan | Diteruskan ke next sebagai AppError 404', async () => {
    Pelajar.findByIdPengguna.mockResolvedValue(null);
    const { next } = await panggil(controller.ajukan, REQ_PELAJAR({ id_jadwal: 'J1', keluhan: KELUHAN }));
    expect(next.mock.calls[0][0]).toMatchObject({ status: 404 });
  });

  test('C23-UT02 | ajukan() | Negatif | ID jadwal kosong atau tidak dikirim | Diteruskan ke next sebagai AppError 400', async () => {
    Pelajar.findByIdPengguna.mockResolvedValue({});
    const { next } = await panggil(controller.ajukan, REQ_PELAJAR({ id_jadwal: '  ', keluhan: KELUHAN }));
    expect(next.mock.calls[0][0]).toMatchObject({ status: 400, message: 'Pilih slot konsultasi terlebih dahulu.' });
  });

  test('C23-UT03 | ajukan() | Batas | Keluhan 9 karakter | Diteruskan ke next sebagai AppError 400 "Keluhan minimal 10 karakter."', async () => {
    Pelajar.findByIdPengguna.mockResolvedValue({});
    const { next } = await panggil(controller.ajukan, REQ_PELAJAR({ id_jadwal: 'J1', keluhan: '123456789' }));
    expect(next.mock.calls[0][0]).toMatchObject({ status: 400, message: 'Keluhan minimal 10 karakter.' });
  });

  test('C23-UT04 | ajukan() | Batas | Keluhan tepat 10 karakter | Diterima, respons 201', async () => {
    const jadwal = buatJadwal();
    Pelajar.findByIdPengguna.mockResolvedValue({ ajukanKonsultasi: jest.fn().mockResolvedValue(true) });
    JadwalKonsultasi.findById.mockResolvedValue(jadwal);
    const { res } = await panggil(controller.ajukan, REQ_PELAJAR({ id_jadwal: 'J1', keluhan: '1234567890' }));
    expect(res.status).toHaveBeenCalledWith(201);
  });

  test('C23-UT05 | ajukan() | Negatif | Jadwal dengan ID tersebut tidak ada | Diteruskan ke next sebagai AppError 404', async () => {
    Pelajar.findByIdPengguna.mockResolvedValue({});
    JadwalKonsultasi.findById.mockResolvedValue(null);
    const { next } = await panggil(controller.ajukan, REQ_PELAJAR({ id_jadwal: 'J-X', keluhan: KELUHAN }));
    expect(next.mock.calls[0][0]).toMatchObject({ status: 404 });
  });

  test('C23-UT06 | ajukan() | Negatif | Slot berstatus "Diajukan" (sudah diambil pelajar lain) | Diteruskan ke next sebagai AppError 409 dan pengajuan tidak dibuat', async () => {
    const pelajar = { ajukanKonsultasi: jest.fn() };
    Pelajar.findByIdPengguna.mockResolvedValue(pelajar);
    JadwalKonsultasi.findById.mockResolvedValue(buatJadwal({ statusPengajuan: 'Diajukan' }));
    const { next } = await panggil(controller.ajukan, REQ_PELAJAR({ id_jadwal: 'J1', keluhan: KELUHAN }));
    expect(next.mock.calls[0][0]).toMatchObject({ status: 409 });
    expect(pelajar.ajukanKonsultasi).not.toHaveBeenCalled();
  });

  test('C23-UT07 | ajukan() | Negatif | Slot direbut pelajar lain saat transaksi (ajukanKonsultasi false) | Diteruskan ke next sebagai AppError 409 "Slot sudah tidak tersedia."', async () => {
    Pelajar.findByIdPengguna.mockResolvedValue({ ajukanKonsultasi: jest.fn().mockResolvedValue(false) });
    JadwalKonsultasi.findById.mockResolvedValue(buatJadwal());
    const { next } = await panggil(controller.ajukan, REQ_PELAJAR({ id_jadwal: 'J1', keluhan: KELUHAN }));
    expect(next.mock.calls[0][0]).toMatchObject({ status: 409 });
  });

  test('C23-UT08 | ajukan() | Normal | Slot J1 kosong dan keluhan 26 karakter | Respons 201 memuat id_jadwal J1 dan pengajuan dibuat dengan keluhan yang sudah dipangkas spasinya', async () => {
    const pelajar = { ajukanKonsultasi: jest.fn().mockResolvedValue(true) };
    const jadwal = buatJadwal();
    Pelajar.findByIdPengguna.mockResolvedValue(pelajar);
    JadwalKonsultasi.findById.mockResolvedValue(jadwal);
    const { res, data } = await panggil(controller.ajukan, REQ_PELAJAR({ id_jadwal: ' J1 ', keluhan: `  ${KELUHAN}  ` }));
    expect(res.status).toHaveBeenCalledWith(201);
    expect(pelajar.ajukanKonsultasi).toHaveBeenCalledWith(jadwal, KELUHAN);
    expect(data.id_jadwal).toBe('J1');
  });

  test('C23-UT09 | daftarSaya() | Normal | Pelajar punya 1 pengajuan | Respons 200 berisi daftar pengajuan milik pelajar tersebut', async () => {
    Pelajar.findByIdPengguna.mockResolvedValue({ idPelajar: 'PLJ-1' });
    JadwalKonsultasi.findByPelajar.mockResolvedValue([{ idJadwal: 'J1' }]);
    const { res, data } = await panggil(controller.daftarSaya, { user: { idPengguna: 'U-1' } });
    expect(res.status).toHaveBeenCalledWith(200);
    expect(JadwalKonsultasi.findByPelajar).toHaveBeenCalledWith('PLJ-1');
    expect(data).toEqual([{ id_jadwal: 'J1' }]);
  });

  test('C23-UT10 | daftarSaya() | Negatif | Profil pelajar tidak ditemukan | Diteruskan ke next sebagai AppError 404', async () => {
    Pelajar.findByIdPengguna.mockResolvedValue(null);
    const { next } = await panggil(controller.daftarSaya, { user: { idPengguna: 'U-1' } });
    expect(next.mock.calls[0][0]).toMatchObject({ status: 404 });
  });

  test('C23-UT11 | daftarMasuk() dan daftarJadwal() | Normal | Tenaga kesehatan NAKES-1 membuka daftar pengajuan dan daftar jadwal | Kedua daftar diambil berdasarkan ID profil tenaga kesehatan, respons 200', async () => {
    JadwalKonsultasi.findPengajuanMasuk.mockResolvedValue([{ idJadwal: 'J1' }]);
    JadwalKonsultasi.findByTenagaKesehatan.mockResolvedValue([{ idJadwal: 'J1' }, { idJadwal: 'J2' }]);
    const masuk = await panggil(controller.daftarMasuk, { user: { idProfil: 'NAKES-1' } });
    const jadwal = await panggil(controller.daftarJadwal, { user: { idProfil: 'NAKES-1' } });
    expect(JadwalKonsultasi.findPengajuanMasuk).toHaveBeenCalledWith('NAKES-1');
    expect(JadwalKonsultasi.findByTenagaKesehatan).toHaveBeenCalledWith('NAKES-1');
    expect(masuk.data).toHaveLength(1);
    expect(jadwal.data).toHaveLength(2);
  });

  test('C23-UT12 | ubahStatus() | Negatif | Status "Ditolak" dan status kosong | Diteruskan ke next sebagai AppError 400 tanpa mengambil jadwal', async () => {
    for (const status of ['Ditolak', '', undefined]) {
      const { next } = await panggil(controller.ubahStatus, REQ_NAKES({ status }));
      expect(next.mock.calls[0][0]).toMatchObject({ status: 400 });
    }
    expect(JadwalKonsultasi.findById).not.toHaveBeenCalled();
  });

  test('C23-UT13 | ubahStatus() | Negatif | Jadwal tidak ditemukan | Diteruskan ke next sebagai AppError 404', async () => {
    JadwalKonsultasi.findById.mockResolvedValue(null);
    const { next } = await panggil(controller.ubahStatus, REQ_NAKES({ status: 'Disetujui' }));
    expect(next.mock.calls[0][0]).toMatchObject({ status: 404 });
  });

  test('C23-UT14 | ubahStatus() | Negatif | Jadwal milik tenaga kesehatan lain (NAKES-9) | Diteruskan ke next sebagai AppError 403 dan status tidak diubah', async () => {
    const jadwal = buatJadwal({ idTenagaKesehatan: 'NAKES-9' });
    JadwalKonsultasi.findById.mockResolvedValue(jadwal);
    const { next } = await panggil(controller.ubahStatus, REQ_NAKES({ status: 'Disetujui' }));
    expect(next.mock.calls[0][0]).toMatchObject({ status: 403, message: 'Jadwal ini bukan milik Anda.' });
    expect(jadwal.updateStatus).not.toHaveBeenCalled();
  });

  test('C23-UT15 | ubahStatus() | Normal | Tenaga kesehatan pemilik menyetujui pengajuan berstatus "Diajukan" | updateStatus("Disetujui") dipanggil, respons 200 memuat status baru', async () => {
    const jadwal = buatJadwal({ statusPengajuan: 'Diajukan' });
    jadwal.updateStatus.mockImplementation(async (s) => {
      jadwal.statusPengajuan = s;
    });
    JadwalKonsultasi.findById.mockResolvedValue(jadwal);
    const { res, data } = await panggil(controller.ubahStatus, REQ_NAKES({ status: 'Disetujui' }));
    expect(res.status).toHaveBeenCalledWith(200);
    expect(jadwal.updateStatus).toHaveBeenCalledWith('Disetujui');
    expect(data.status_pengajuan).toBe('Disetujui');
  });

  test('C23-UT16 | ubahStatus() | Normal | Status "Rescheduled" dikirim oleh pemilik jadwal | Diterima dan updateStatus("Rescheduled") dipanggil', async () => {
    const jadwal = buatJadwal({ statusPengajuan: 'Diajukan' });
    JadwalKonsultasi.findById.mockResolvedValue(jadwal);
    const { res } = await panggil(controller.ubahStatus, REQ_NAKES({ status: ' Rescheduled ' }));
    expect(res.status).toHaveBeenCalledWith(200);
    expect(jadwal.updateStatus).toHaveBeenCalledWith('Rescheduled');
  });

  test('C23-UT17 | ubahStatus() | Negatif | Model menolak transisi status (melempar AppError 409) | Galat diteruskan ke next apa adanya', async () => {
    const jadwal = buatJadwal();
    jadwal.updateStatus.mockRejectedValue(new AppError(409, 'Hanya pengajuan yang sudah diajukan yang dapat disetujui.'));
    JadwalKonsultasi.findById.mockResolvedValue(jadwal);
    const { next } = await panggil(controller.ubahStatus, REQ_NAKES({ status: 'Disetujui' }));
    expect(next.mock.calls[0][0]).toMatchObject({ status: 409 });
  });

  test('C23-UT18 | jadwalUlang() | Negatif | Tanggal "01-01-2099" dan jam "10:00:00" (format salah) | Diteruskan ke next sebagai AppError 400 dan jadwal tidak dipindah', async () => {
    const jadwal = buatJadwal({ statusPengajuan: 'Diajukan' });
    JadwalKonsultasi.findById.mockResolvedValue(jadwal);
    const salahTanggal = await panggil(controller.jadwalUlang, REQ_NAKES({ tanggal: '01-01-2099', waktu: '10:00' }));
    const salahWaktu = await panggil(controller.jadwalUlang, REQ_NAKES({ tanggal: '2099-01-01', waktu: '10:00:00' }));
    expect(salahTanggal.next.mock.calls[0][0]).toMatchObject({ status: 400 });
    expect(salahWaktu.next.mock.calls[0][0]).toMatchObject({ status: 400 });
    expect(jadwal.updateSchedule).not.toHaveBeenCalled();
  });

  test('C23-UT19 | jadwalUlang() | Negatif | Jadwal milik tenaga kesehatan lain | Diteruskan ke next sebagai AppError 403', async () => {
    JadwalKonsultasi.findById.mockResolvedValue(buatJadwal({ idTenagaKesehatan: 'NAKES-9' }));
    const { next } = await panggil(controller.jadwalUlang, REQ_NAKES({ tanggal: '2099-01-01', waktu: '10:00' }));
    expect(next.mock.calls[0][0]).toMatchObject({ status: 403 });
  });

  test('C23-UT20 | jadwalUlang() | Normal | Pemilik jadwal memindah ke 2099-02-02 13:00 | updateSchedule dipanggil dengan tanggal dan waktu baru, respons 200', async () => {
    const jadwal = buatJadwal({ statusPengajuan: 'Diajukan' });
    jadwal.updateSchedule.mockImplementation(async (tanggal, waktu) => {
      Object.assign(jadwal, { tanggal, waktu, statusPengajuan: 'Rescheduled' });
    });
    JadwalKonsultasi.findById.mockResolvedValue(jadwal);
    const { res, data } = await panggil(controller.jadwalUlang, REQ_NAKES({ tanggal: '2099-02-02', waktu: '13:00' }));
    expect(res.status).toHaveBeenCalledWith(200);
    expect(jadwal.updateSchedule).toHaveBeenCalledWith('2099-02-02', '13:00');
    expect(data).toMatchObject({ tanggal: '2099-02-02', waktu: '13:00', status_pengajuan: 'Rescheduled' });
  });

  test('C23-UT21 | jadwalUlang() | Negatif | Model menolak jadwal bentrok (AppError 409) | Galat diteruskan ke next', async () => {
    const jadwal = buatJadwal({ statusPengajuan: 'Diajukan' });
    jadwal.updateSchedule.mockRejectedValue(new AppError(409, 'Tenaga kesehatan sudah memiliki jadwal pada waktu tersebut.'));
    JadwalKonsultasi.findById.mockResolvedValue(jadwal);
    const { next } = await panggil(controller.jadwalUlang, REQ_NAKES({ tanggal: '2099-02-02', waktu: '13:00' }));
    expect(next.mock.calls[0][0]).toMatchObject({ status: 409 });
  });

  test('C23-UT22 | tolakPengajuan() | Normal | Pemilik jadwal menolak pengajuan berstatus "Diajukan" | tolakPengajuan dipanggil pada model, respons 200 dengan status "Belum Diajukan"', async () => {
    const jadwal = buatJadwal({ statusPengajuan: 'Diajukan' });
    jadwal.tolakPengajuan.mockImplementation(async () => {
      jadwal.statusPengajuan = 'Belum Diajukan';
    });
    JadwalKonsultasi.findById.mockResolvedValue(jadwal);
    const { res, data } = await panggil(controller.tolakPengajuan, REQ_NAKES({}));
    expect(res.status).toHaveBeenCalledWith(200);
    expect(jadwal.tolakPengajuan).toHaveBeenCalled();
    expect(data.status_pengajuan).toBe('Belum Diajukan');
  });

  test('C23-UT23 | tolakPengajuan() | Negatif | Jadwal milik tenaga kesehatan lain | Diteruskan ke next sebagai AppError 403 dan pengajuan tidak ditolak', async () => {
    const jadwal = buatJadwal({ idTenagaKesehatan: 'NAKES-9' });
    JadwalKonsultasi.findById.mockResolvedValue(jadwal);
    const { next } = await panggil(controller.tolakPengajuan, REQ_NAKES({}));
    expect(next.mock.calls[0][0]).toMatchObject({ status: 403 });
    expect(jadwal.tolakPengajuan).not.toHaveBeenCalled();
  });

  test('C23-UT24 | tolakPengajuan() | Negatif | Model menolak karena pengajuan belum menunggu (AppError 409) | Galat diteruskan ke next', async () => {
    const jadwal = buatJadwal();
    jadwal.tolakPengajuan.mockRejectedValue(new AppError(409, 'Hanya pengajuan yang menunggu yang dapat ditolak.'));
    JadwalKonsultasi.findById.mockResolvedValue(jadwal);
    const { next } = await panggil(controller.tolakPengajuan, REQ_NAKES({}));
    expect(next.mock.calls[0][0]).toMatchObject({ status: 409 });
  });
});