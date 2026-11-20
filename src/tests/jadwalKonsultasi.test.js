jest.mock('../config/db', () => ({ query: jest.fn(), withTransaction: jest.fn() }));

const db = require('../config/db');
const JadwalKonsultasi = require('../models/JadwalKonsultasi');

const BARIS = {
  id_jadwal: 'J1',
  id_tenaga_kesehatan: 'NAKES-1',
  tanggal: '2099-01-01',
  waktu: '10:00:00',
  status_ketersediaan: true,
  status_pengajuan: 'Belum Diajukan',
  id_pelajar: null,
  keluhan: null,
};

function buatJadwal(ubahan = {}) {
  return new JadwalKonsultasi({ ...BARIS, ...ubahan });
}

function pasangTransaksi(queryClient) {
  const client = { query: queryClient };
  db.withTransaction.mockImplementation(async (fn) => fn(client));
  return client;
}

beforeEach(() => {
  jest.resetAllMocks();
});

describe('C09 JadwalKonsultasi', () => {
  test('C09-UT01 | getDate(), getTime(), getStatus() | Normal | Baris basis data dengan waktu "10:00:00" | Tanggal "2099-01-01", waktu dipotong "10:00", status "Belum Diajukan"', () => {
    const jadwal = buatJadwal();
    expect(jadwal.getDate()).toBe('2099-01-01');
    expect(jadwal.getTime()).toBe('10:00');
    expect(jadwal.getStatus()).toBe('Belum Diajukan');
  });

  test('C09-UT02 | isAvailable() | Normal | Slot masa depan dan statusKetersediaan true | Mengembalikan true', () => {
    expect(buatJadwal().isAvailable()).toBe(true);
  });

  test('C09-UT03 | isAvailable() | Negatif | Slot masa depan tetapi statusKetersediaan false | Mengembalikan false', () => {
    expect(buatJadwal({ status_ketersediaan: false }).isAvailable()).toBe(false);
  });

  test('C09-UT04 | isAvailable() | Negatif | Slot sudah lewat (tanggal 2000-01-01) walau statusKetersediaan true | Mengembalikan false', () => {
    expect(buatJadwal({ tanggal: '2000-01-01' }).isAvailable()).toBe(false);
  });

  test('C09-UT05 | findById() | Normal | ID J1 ada di basis data | Mengembalikan objek JadwalKonsultasi dengan atribut sesuai', async () => {
    db.query.mockResolvedValue({ rows: [BARIS] });
    const jadwal = await JadwalKonsultasi.findById('J1');
    expect(jadwal.idJadwal).toBe('J1');
    expect(jadwal.idTenagaKesehatan).toBe('NAKES-1');
  });

  test('C09-UT06 | findById() | Negatif | ID tidak ada di basis data | Mengembalikan null', async () => {
    db.query.mockResolvedValue({ rows: [] });
    expect(await JadwalKonsultasi.findById('J-X')).toBeNull();
  });

  test('C09-UT07 | updateAvailability() | Normal | Ubah ketersediaan menjadi false | Query UPDATE dijalankan dan statusKetersediaan objek menjadi false', async () => {
    const executor = { query: jest.fn().mockResolvedValue({}) };
    const jadwal = buatJadwal();
    await jadwal.updateAvailability(false, executor);
    expect(executor.query.mock.calls[0][1]).toEqual([false, 'J1']);
    expect(jadwal.statusKetersediaan).toBe(false);
  });

  test('C09-UT08 | updateStatus() | Negatif | Status "Ditolak" (tidak dikenal) | Melempar AppError status 400', async () => {
    await expect(buatJadwal().updateStatus('Ditolak')).rejects.toMatchObject({ status: 400 });
  });

  test('C09-UT09 | updateStatus() | Negatif | Menyetujui slot berstatus "Belum Diajukan" | Melempar AppError status 409 dan status tidak berubah', async () => {
    const jadwal = buatJadwal();
    await expect(jadwal.updateStatus('Disetujui')).rejects.toMatchObject({ status: 409 });
    expect(jadwal.statusPengajuan).toBe('Belum Diajukan');
  });

  test('C09-UT10 | updateStatus() | Normal | Menyetujui slot berstatus "Diajukan" | Query UPDATE dijalankan dan status menjadi "Disetujui"', async () => {
    const executor = { query: jest.fn().mockResolvedValue({}) };
    const jadwal = buatJadwal({ status_pengajuan: 'Diajukan' });
    await jadwal.updateStatus('Disetujui', executor);
    expect(executor.query.mock.calls[0][1]).toEqual(['Disetujui', 'J1']);
    expect(jadwal.statusPengajuan).toBe('Disetujui');
  });

  test('C09-UT11 | updateStatus() | Batas | Menyetujui slot berstatus "Rescheduled" | Diterima, status menjadi "Disetujui"', async () => {
    const executor = { query: jest.fn().mockResolvedValue({}) };
    const jadwal = buatJadwal({ status_pengajuan: 'Rescheduled' });
    await jadwal.updateStatus('Disetujui', executor);
    expect(jadwal.statusPengajuan).toBe('Disetujui');
  });

  test('C09-UT12 | updateStatus() | Negatif | Menjadwalkan ulang slot berstatus "Belum Diajukan" | Melempar AppError status 409', async () => {
    await expect(buatJadwal().updateStatus('Rescheduled')).rejects.toMatchObject({ status: 409 });
  });

  test('C09-UT13 | updateStatus() | Normal | Menjadwalkan ulang slot berstatus "Disetujui" | Status menjadi "Rescheduled"', async () => {
    const executor = { query: jest.fn().mockResolvedValue({}) };
    const jadwal = buatJadwal({ status_pengajuan: 'Disetujui' });
    await jadwal.updateStatus('Rescheduled', executor);
    expect(jadwal.statusPengajuan).toBe('Rescheduled');
  });

  test('C09-UT14 | reservasi() | Normal | Slot tersedia, pelajar PLJ-1 dengan keluhan | Mengembalikan true, slot tidak tersedia, status "Diajukan", pelajar dan keluhan tercatat', async () => {
    pasangTransaksi(jest.fn().mockResolvedValue({ rows: [{ status_ketersediaan: true }] }));
    const jadwal = buatJadwal();
    const hasil = await jadwal.reservasi('PLJ-1', 'Sulit tidur dan cemas');
    expect(hasil).toBe(true);
    expect(jadwal.statusKetersediaan).toBe(false);
    expect(jadwal.statusPengajuan).toBe('Diajukan');
    expect(jadwal.idPelajar).toBe('PLJ-1');
    expect(jadwal.keluhan).toBe('Sulit tidur dan cemas');
  });

  test('C09-UT15 | reservasi() | Negatif | Slot sudah diambil pelajar lain (status_ketersediaan false di basis data) | Mengembalikan false dan tidak ada UPDATE yang dijalankan', async () => {
    const queryClient = jest.fn().mockResolvedValue({ rows: [{ status_ketersediaan: false }] });
    pasangTransaksi(queryClient);
    const jadwal = buatJadwal();
    expect(await jadwal.reservasi('PLJ-2', 'Keluhan apa saja')).toBe(false);
    expect(jadwal.statusKetersediaan).toBe(false);
    expect(queryClient).toHaveBeenCalledTimes(1);
  });

  test('C09-UT16 | reservasi() | Negatif | Slot tidak ditemukan di basis data (baris kosong) | Mengembalikan false', async () => {
    pasangTransaksi(jest.fn().mockResolvedValue({ rows: [] }));
    expect(await buatJadwal().reservasi('PLJ-1', 'Keluhan apa saja')).toBe(false);
  });

  test('C09-UT17 | updateSchedule() | Negatif | Jadwal baru di masa lalu (2000-01-01 09:00) | Melempar AppError status 400 dan transaksi tidak dijalankan', async () => {
    await expect(buatJadwal({ status_pengajuan: 'Diajukan' }).updateSchedule('2000-01-01', '09:00')).rejects.toMatchObject({
      status: 400,
    });
    expect(db.withTransaction).not.toHaveBeenCalled();
  });

  test('C09-UT18 | updateSchedule() | Negatif | Waktu baru bentrok dengan jadwal lain tenaga kesehatan yang sama | Melempar AppError status 409 dan jadwal tidak berubah', async () => {
    pasangTransaksi(jest.fn().mockResolvedValue({ rowCount: 1 }));
    const jadwal = buatJadwal({ status_pengajuan: 'Diajukan' });
    await expect(jadwal.updateSchedule('2099-02-02', '13:00')).rejects.toMatchObject({ status: 409 });
    expect(jadwal.tanggal).toBe('2099-01-01');
  });

  test('C09-UT19 | updateSchedule() | Normal | Waktu baru di masa depan dan tidak bentrok, status "Diajukan" | Tanggal dan waktu berubah, status menjadi "Rescheduled"', async () => {
    pasangTransaksi(jest.fn().mockResolvedValue({ rowCount: 0 }));
    const jadwal = buatJadwal({ status_pengajuan: 'Diajukan' });
    await jadwal.updateSchedule('2099-02-02', '13:00');
    expect(jadwal.tanggal).toBe('2099-02-02');
    expect(jadwal.waktu).toBe('13:00');
    expect(jadwal.statusPengajuan).toBe('Rescheduled');
  });

  test('C09-UT20 | updateSchedule() | Negatif | Slot berstatus "Belum Diajukan" dijadwalkan ulang | Melempar AppError status 409 dan tanggal tidak berubah', async () => {
    pasangTransaksi(jest.fn().mockResolvedValue({ rowCount: 0 }));
    const jadwal = buatJadwal();
    await expect(jadwal.updateSchedule('2099-02-02', '13:00')).rejects.toMatchObject({ status: 409 });
    expect(jadwal.tanggal).toBe('2099-01-01');
  });

  test('C09-UT21 | tolakPengajuan() | Negatif | Menolak slot berstatus "Belum Diajukan" | Melempar AppError status 409 dan tidak ada query dijalankan', async () => {
    await expect(buatJadwal().tolakPengajuan()).rejects.toMatchObject({ status: 409 });
    expect(db.query).not.toHaveBeenCalled();
  });

  test('C09-UT22 | tolakPengajuan() | Normal | Menolak slot berstatus "Diajukan" milik PLJ-1 | Slot kembali kosong: pelajar dan keluhan null, status "Belum Diajukan", tersedia true', async () => {
    db.query.mockResolvedValue({});
    const jadwal = buatJadwal({ status_pengajuan: 'Diajukan', status_ketersediaan: false, id_pelajar: 'PLJ-1', keluhan: 'Cemas' });
    await jadwal.tolakPengajuan();
    expect(jadwal.idPelajar).toBeNull();
    expect(jadwal.keluhan).toBeNull();
    expect(jadwal.statusPengajuan).toBe('Belum Diajukan');
    expect(jadwal.statusKetersediaan).toBe(true);
  });

  test('C09-UT23 | findPengajuanMasuk() | Normal | Basis data mengembalikan 1 pengajuan dengan nama pelajar | Mengembalikan objek JadwalKonsultasi yang memuat namaPelajar', async () => {
    db.query.mockResolvedValue({ rows: [{ ...BARIS, status_pengajuan: 'Diajukan', nama_pelajar: 'Budi' }] });
    const hasil = await JadwalKonsultasi.findPengajuanMasuk('NAKES-1');
    expect(hasil).toHaveLength(1);
    expect(hasil[0].namaPelajar).toBe('Budi');
    expect(db.query.mock.calls[0][1]).toEqual(['NAKES-1']);
  });

  test('C09-UT24 | findByPelajar() dan findByTenagaKesehatan() | Normal | Basis data mengembalikan 1 baris untuk masing-masing | Objek memuat nama tenaga kesehatan (findByPelajar) dan nama pelajar (findByTenagaKesehatan)', async () => {
    db.query.mockResolvedValueOnce({ rows: [{ ...BARIS, nama_tenaga_kesehatan: 'Siti', jenis_tenaga_kesehatan: 'Psikolog' }] });
    const milikPelajar = await JadwalKonsultasi.findByPelajar('PLJ-1');
    expect(milikPelajar[0].namaTenagaKesehatan).toBe('Siti');
    expect(milikPelajar[0].jenisTenagaKesehatan).toBe('Psikolog');
    db.query.mockResolvedValueOnce({ rows: [{ ...BARIS, nama_pelajar: 'Budi' }] });
    const milikNakes = await JadwalKonsultasi.findByTenagaKesehatan('NAKES-1');
    expect(milikNakes[0].namaPelajar).toBe('Budi');
  });
});