jest.mock('../config/db', () => ({ query: jest.fn(), withTransaction: jest.fn() }));
jest.mock('../models/Pelajar', () => ({ findByIdPengguna: jest.fn(), findById: jest.fn() }));
jest.mock('../models/OrangTuaWali', () => ({ findByIdPengguna: jest.fn() }));

const Pelajar = require('../models/Pelajar');
const OrangTuaWali = require('../models/OrangTuaWali');
const CheckIn = require('../models/CheckIn');
const controller = require('../controllers/ReportController');
const { encryptAES256 } = require('../utils/encryption');
const { hariIni, tambahHari } = require('../utils/waktu');

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

function buatCheckIn(hariLalu, mood, ubahan = {}) {
  return new CheckIn({
    id_check_in: `C-${hariLalu}`,
    tanggal_check_in: tambahHari(hariIni(), -hariLalu),
    skala_mood: mood,
    jam_tidur: '22:00:00',
    jam_bangun: '06:00:00',
    pola_makan: 'Teratur',
    pemicu_stres: 'Tidak ada',
    ...ubahan,
  });
}

function buatPelajar(daftar = [], terakhir = null) {
  return {
    nama: 'Budi',
    tanggalLahir: '2008-01-15',
    getCheckInSejak: jest.fn(async (awal) => daftar.filter((c) => c.tanggalCheckIn >= awal)),
    getTanggalCheckInTerakhir: jest.fn().mockResolvedValue(terakhir || (daftar[0] && daftar[0].tanggalCheckIn) || null),
    getCheckInHistory: jest.fn().mockResolvedValue(daftar),
  };
}

const REQ_PELAJAR = { user: { role: 'Pelajar', idPengguna: 'U-1' } };
const REQ_WALI = { user: { role: 'OrangTuaWali', idPengguna: 'U-2' } };

beforeEach(() => {
  jest.clearAllMocks();
});

describe('C17 ReportController', () => {
  test('C17-UT01 | summary() | Negatif | Pengguna berperan TenagaKesehatan | Diteruskan ke next sebagai AppError 403', async () => {
    const { next } = await panggil(controller.summary, { user: { role: 'TenagaKesehatan', idPengguna: 'U-3' } });
    expect(next.mock.calls[0][0]).toMatchObject({ status: 403 });
  });

  test('C17-UT02 | summary() | Normal | Pelajar dengan 3 check-in (mood 4, 4, 5; tidur 8 jam) sampai hari ini | Respons 200: rata-rata mood 4.3, rata-rata tidur 8, streak 3, risiko "Rendah", sudah_check_in true', async () => {
    Pelajar.findByIdPengguna.mockResolvedValue(buatPelajar([buatCheckIn(0, 4), buatCheckIn(1, 4), buatCheckIn(2, 5)]));
    const { res, data } = await panggil(controller.summary, REQ_PELAJAR);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(data.nama).toBe('Budi');
    expect(data.statistik.rerata_mood).toBe(4.3);
    expect(data.statistik.rerata_tidur).toBe(8);
    expect(data.statistik.streak).toBe(3);
    expect(data.indikator_risiko).toBe('Rendah');
    expect(data.sudah_check_in).toBe(true);
    expect(data.statistik.indeks).toBe(87);
  });

  test('C17-UT03 | summary() | Normal | Pelajar membuka laporan sendiri, check-in memuat catatan terenkripsi "Saya cemas" | Catatan didekripsi pada respons dan jurnal diminta dari basis data (denganJurnal true)', async () => {
    const pelajar = buatPelajar([buatCheckIn(0, 3, { catatan_refleksi: encryptAES256('Saya cemas') })]);
    Pelajar.findByIdPengguna.mockResolvedValue(pelajar);
    const { data } = await panggil(controller.summary, REQ_PELAJAR);
    expect(data.catatan).toEqual([{ tanggal: hariIni(), catatan: 'Saya cemas' }]);
    expect(pelajar.getCheckInSejak.mock.calls[0][1]).toEqual({ denganJurnal: true });
  });

  test('C17-UT04 | summary() | Normal | Wali membuka laporan pelajar yang punya catatan terenkripsi (KNF02) | Catatan kosong, jurnal tidak pernah diminta (denganJurnal false), ringkasan memakai data wali', async () => {
    const pelajar = buatPelajar([buatCheckIn(0, 3, { catatan_refleksi: encryptAES256('Rahasia pelajar') })]);
    Pelajar.findById.mockResolvedValue(pelajar);
    OrangTuaWali.findByIdPengguna.mockResolvedValue({
      getSummaryReport: jest.fn().mockResolvedValue({
        ringkasanKondisi: 'Ringkasan wali',
        indikatorRisiko: 'Sedang',
        jumlahHariTidakCheckIn: 1,
        periode: 'Mingguan',
      }),
      pilihPelajar: jest.fn().mockResolvedValue({ idPelajar: 'PLJ-1' }),
    });
    const { res, data } = await panggil(controller.summary, REQ_WALI);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(data.catatan).toEqual([]);
    expect(JSON.stringify(data)).not.toContain('Rahasia pelajar');
    pelajar.getCheckInSejak.mock.calls.forEach((panggilan) => {
      expect((panggilan[1] || {}).denganJurnal).not.toBe(true);
    });
    expect(data.indikator_risiko).toBe('Sedang');
    expect(data.ringkasan_kondisi).toBe('Ringkasan wali');
  });

  test('C17-UT05 | summary() | Negatif | Profil wali tidak ditemukan | Diteruskan ke next sebagai AppError 404', async () => {
    OrangTuaWali.findByIdPengguna.mockResolvedValue(null);
    const { next } = await panggil(controller.summary, REQ_WALI);
    expect(next.mock.calls[0][0]).toMatchObject({ status: 404 });
  });

  test('C17-UT06 | summary() | Negatif | Profil pelajar tidak ditemukan | Diteruskan ke next sebagai AppError 404', async () => {
    Pelajar.findByIdPengguna.mockResolvedValue(null);
    const { next } = await panggil(controller.summary, REQ_PELAJAR);
    expect(next.mock.calls[0][0]).toMatchObject({ status: 404 });
  });

  test('C17-UT07 | summary() | Batas | Pelajar belum pernah check-in | Risiko "Belum Dapat Dinilai", streak 0, indeks 0, pola makan "-", sudah_check_in false', async () => {
    Pelajar.findByIdPengguna.mockResolvedValue(buatPelajar([]));
    const { data } = await panggil(controller.summary, REQ_PELAJAR);
    expect(data.indikator_risiko).toBe('Belum Dapat Dinilai');
    expect(data.statistik.streak).toBe(0);
    expect(data.statistik.indeks).toBe(0);
    expect(data.statistik.pola_makan).toBe('-');
    expect(data.sudah_check_in).toBe(false);
  });

  test('C17-UT08 | summary() | Normal | Pola makan "Teratur", "kurang teratur", "Tidak teratur" masing-masing 1 kali | jenis_makan menghitung 1 untuk tiga kategori resmi', async () => {
    Pelajar.findByIdPengguna.mockResolvedValue(
      buatPelajar([
        buatCheckIn(0, 4, { pola_makan: 'Teratur' }),
        buatCheckIn(1, 4, { pola_makan: 'kurang teratur' }),
        buatCheckIn(2, 4, { pola_makan: 'Tidak teratur' }),
      ])
    );
    const { data } = await panggil(controller.summary, REQ_PELAJAR);
    expect(data.jenis_makan).toEqual([
      { nama: 'Teratur', nilai: 1 },
      { nama: 'Kurang teratur', nilai: 1 },
      { nama: 'Tidak teratur', nilai: 1 },
    ]);
  });

  test('C17-UT09 | summary() | Normal | Pemicu "Ujian, Keluarga" (hari ini) dan "Tugas" (kemarin) | stres: Akademik 67% dan Keluarga 33%, rerata pemicu 1.5', async () => {
    Pelajar.findByIdPengguna.mockResolvedValue(
      buatPelajar([buatCheckIn(0, 4, { pemicu_stres: 'Ujian, Keluarga' }), buatCheckIn(1, 4, { pemicu_stres: 'Tugas' })])
    );
    const { data } = await panggil(controller.summary, REQ_PELAJAR);
    expect(data.stres).toEqual([
      { nama: 'Akademik', persen: 67 },
      { nama: 'Keluarga', persen: 33 },
    ]);
    expect(data.rerata_pemicu).toBe(1.5);
  });

  test('C17-UT10 | summary() | Batas | Check-in hari ini dan 2 hari lalu (kemarin terlewat), serta check-in hanya kemarin | Streak 1 untuk kasus pertama dan streak 0 untuk kasus kedua', async () => {
    Pelajar.findByIdPengguna.mockResolvedValue(buatPelajar([buatCheckIn(0, 4), buatCheckIn(2, 4)]));
    const pertama = await panggil(controller.summary, REQ_PELAJAR);
    expect(pertama.data.statistik.streak).toBe(1);
    Pelajar.findByIdPengguna.mockResolvedValue(buatPelajar([buatCheckIn(1, 4), buatCheckIn(2, 4)]));
    const kedua = await panggil(controller.summary, REQ_PELAJAR);
    expect(kedua.data.statistik.streak).toBe(0);
  });

  test('C17-UT11 | summary() | Normal | Check-in 2 hari terakhir dengan mood 3 (kemarin) dan 5 (hari ini) | Seri grafik 7 hari berurutan lama ke baru dengan mood [3, 5]', async () => {
    Pelajar.findByIdPengguna.mockResolvedValue(buatPelajar([buatCheckIn(0, 5), buatCheckIn(1, 3)]));
    const { data } = await panggil(controller.summary, REQ_PELAJAR);
    expect(data.seri['7'].mood).toEqual([3, 5]);
    expect(data.seri['7'].tidur).toEqual([8, 8]);
  });

  test('C17-UT12 | riwayat() | Negatif | Pengguna berperan OrangTuaWali | Diteruskan ke next sebagai AppError 403', async () => {
    const { next } = await panggil(controller.riwayat, REQ_WALI);
    expect(next.mock.calls[0][0]).toMatchObject({ status: 403 });
  });

  test('C17-UT13 | riwayat() | Normal | Pelajar punya 1 check-in dengan catatan terenkripsi, tidur 22:00-06:00 | Respons 200 memuat tanggal, mood, tidur 8, catatan terdekripsi; riwayat diminta 30 entri', async () => {
    const pelajar = buatPelajar([buatCheckIn(0, 4, { catatan_refleksi: encryptAES256('Hari yang berat') })]);
    Pelajar.findByIdPengguna.mockResolvedValue(pelajar);
    const { res, data } = await panggil(controller.riwayat, REQ_PELAJAR);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(pelajar.getCheckInHistory).toHaveBeenCalledWith(30);
    expect(data[0]).toMatchObject({ tanggal: hariIni(), mood: 4, tidur: 8, catatan: 'Hari yang berat' });
  });

  test('C17-UT14 | riwayat() | Batas | Check-in tanpa catatan refleksi | Catatan berupa string kosong', async () => {
    Pelajar.findByIdPengguna.mockResolvedValue(buatPelajar([buatCheckIn(0, 4)]));
    const { data } = await panggil(controller.riwayat, REQ_PELAJAR);
    expect(data[0].catatan).toBe('');
  });

  test('C17-UT15 | riwayat() | Negatif | Profil pelajar tidak ditemukan | Diteruskan ke next sebagai AppError 404', async () => {
    Pelajar.findByIdPengguna.mockResolvedValue(null);
    const { next } = await panggil(controller.riwayat, REQ_PELAJAR);
    expect(next.mock.calls[0][0]).toMatchObject({ status: 404 });
  });
});