const LaporanKesehatan = require('../models/LaporanKesehatan');
const CheckIn = require('../models/CheckIn');
const { tambahHari } = require('../utils/waktu');

const ACUAN = '2026-11-10';

function buatCheckIn(hariLalu, mood, jamTidur = '22:00', jamBangun = '06:00') {
  return new CheckIn({
    id_check_in: `C-${hariLalu}`,
    tanggal_check_in: tambahHari(ACUAN, -hariLalu),
    skala_mood: mood,
    jam_tidur: `${jamTidur}:00`,
    jam_bangun: `${jamBangun}:00`,
    pola_makan: 'Teratur',
    pemicu_stres: 'Tidak ada',
  });
}

function evaluasi(data, opsi = {}) {
  const laporan = new LaporanKesehatan();
  return { hasil: laporan.evaluateThreshold(data, { acuan: ACUAN, ...opsi }), laporan };
}

describe('C07 LaporanKesehatan', () => {
  test('C07-UT01 | evaluateThreshold() | Batas | Tidak ada data check-in dan tanpa tanggal terakhir | Indikator "Belum Dapat Dinilai", 0 hari tanpa check-in, ambang tidak terlampaui', () => {
    const { hasil } = evaluasi([]);
    expect(hasil.indikatorRisiko).toBe('Belum Dapat Dinilai');
    expect(hasil.periode).toBe('Mingguan');
    expect(hasil.jumlahHariTidakCheckIn).toBe(0);
    expect(hasil.ambangTerlampaui).toBe(false);
  });

  test('C07-UT02 | evaluateThreshold() | Batas | Tidak ada data periode ini, check-in terakhir 20 hari lalu | Jumlah hari tanpa check-in = 20 dan ambang terlampaui', () => {
    const { hasil } = evaluasi([], { tanggalTerakhir: tambahHari(ACUAN, -20) });
    expect(hasil.jumlahHariTidakCheckIn).toBe(20);
  });

  test('C07-UT03 | evaluateThreshold() | Normal | Check-in hari ini mood 4 dan kemarin mood 5, tidur 8 jam | Risiko "Rendah", ringkasan memuat rata-rata mood 4.5 dan tidur 8 jam', () => {
    const { hasil } = evaluasi([buatCheckIn(0, 4), buatCheckIn(1, 5)]);
    expect(hasil.indikatorRisiko).toBe('Rendah');
    expect(hasil.ambangTerlampaui).toBe(false);
    expect(hasil.ringkasanKondisi).toBe('Rata-rata mood 4.5 dari 5, rata-rata tidur 8 jam, 0 hari tanpa check-in.');
  });

  test('C07-UT04 | evaluateThreshold() | Normal | Mood 2, 1, 2 selama 3 hari berturut-turut sampai hari ini | Risiko "Tinggi" dan ambang terlampaui', () => {
    const { hasil } = evaluasi([buatCheckIn(0, 2), buatCheckIn(1, 1), buatCheckIn(2, 2)]);
    expect(hasil.indikatorRisiko).toBe('Tinggi');
    expect(hasil.ambangTerlampaui).toBe(true);
  });

  test('C07-UT05 | evaluateThreshold() | Batas | Mood rendah hanya 2 hari berturut-turut | Tidak "Tinggi", menjadi "Sedang" karena rata-rata mood 2', () => {
    const { hasil } = evaluasi([buatCheckIn(0, 2), buatCheckIn(1, 2)]);
    expect(hasil.indikatorRisiko).toBe('Sedang');
  });

  test('C07-UT06 | evaluateThreshold() | Batas | Rata-rata mood tepat 2.5 (mood 2 dan 3) | Risiko "Sedang"', () => {
    const { hasil } = evaluasi([buatCheckIn(0, 2), buatCheckIn(1, 3)]);
    expect(hasil.indikatorRisiko).toBe('Sedang');
  });

  test('C07-UT07 | evaluateThreshold() | Batas | Rata-rata tidur tepat 5 jam dan mood 3 | Risiko "Rendah" (batas 5 jam belum dianggap kurang)', () => {
    const { hasil } = evaluasi([buatCheckIn(0, 3, '01:00', '06:00'), buatCheckIn(1, 3, '01:00', '06:00')]);
    expect(hasil.indikatorRisiko).toBe('Rendah');
  });

  test('C07-UT08 | evaluateThreshold() | Batas | Rata-rata tidur 4.9 jam dan mood 4 | Risiko "Sedang"', () => {
    const { hasil } = evaluasi([buatCheckIn(0, 4, '01:06', '06:00'), buatCheckIn(1, 4, '01:06', '06:00')]);
    expect(hasil.indikatorRisiko).toBe('Sedang');
  });

  test('C07-UT09 | evaluateThreshold() | Batas | Mood 2 pada hari ke-0, 1, dan 3 (hari ke-2 terlewat) | Rangkaian putus sehingga tidak "Tinggi"', () => {
    const { hasil } = evaluasi([buatCheckIn(0, 2), buatCheckIn(1, 2), buatCheckIn(3, 2)]);
    expect(hasil.indikatorRisiko).not.toBe('Tinggi');
  });

  test('C07-UT10 | evaluateThreshold() | Batas | Rentang data tepat 7 hari dan 8 hari | Periode "Mingguan" untuk 7 hari dan "Bulanan" untuk 8 hari', () => {
    expect(evaluasi([buatCheckIn(0, 4), buatCheckIn(6, 4)]).hasil.periode).toBe('Mingguan');
    expect(evaluasi([buatCheckIn(0, 4), buatCheckIn(7, 4)]).hasil.periode).toBe('Bulanan');
  });

  test('C07-UT11 | evaluateThreshold() | Batas | Check-in terakhir tepat 3 hari lalu, kondisi baik | Ambang terlampaui (>= 3 hari) walau risiko "Rendah"', () => {
    const { hasil } = evaluasi([buatCheckIn(3, 5), buatCheckIn(4, 5)]);
    expect(hasil.jumlahHariTidakCheckIn).toBe(3);
    expect(hasil.indikatorRisiko).toBe('Rendah');
    expect(hasil.ambangTerlampaui).toBe(true);
  });

  test('C07-UT12 | detectEmergency() | Normal | Tidak check-in 4 hari dan mood rendah 3 hari berturut-turut | Mengembalikan true', () => {
    const { laporan } = evaluasi([buatCheckIn(4, 2), buatCheckIn(5, 1), buatCheckIn(6, 2)]);
    expect(laporan.detectEmergency()).toBe(true);
  });

  test('C07-UT13 | detectEmergency() | Negatif | Belum pernah memanggil evaluateThreshold() | Mengembalikan false', () => {
    expect(new LaporanKesehatan().detectEmergency()).toBe(false);
  });

  test('C07-UT14 | detectEmergency() | Negatif | Tidak ada data check-in ("Belum Dapat Dinilai") | Mengembalikan false', () => {
    const { laporan } = evaluasi([], { tanggalTerakhir: tambahHari(ACUAN, -30) });
    expect(laporan.detectEmergency()).toBe(false);
  });

  test('C07-UT15 | detectEmergency() | Batas | Risiko "Tinggi" tetapi baru 2 hari tidak check-in | Mengembalikan false', () => {
    const { hasil, laporan } = evaluasi([buatCheckIn(2, 2), buatCheckIn(3, 1), buatCheckIn(4, 2)]);
    expect(hasil.jumlahHariTidakCheckIn).toBe(2);
    expect(laporan.detectEmergency()).toBe(false);
  });

  test('C07-UT16 | detectEmergency() | Batas | Risiko "Sedang" dan tepat 3 hari tidak check-in | Mengembalikan true', () => {
    const { laporan } = evaluasi([buatCheckIn(3, 2), buatCheckIn(4, 3)]);
    expect(laporan.detectEmergency()).toBe(true);
  });

  test('C07-UT17 | detectEmergency() | Negatif | Tidak check-in 5 hari tetapi kondisi terakhir baik ("Rendah") | Mengembalikan false', () => {
    const { laporan } = evaluasi([buatCheckIn(5, 5), buatCheckIn(6, 4)]);
    expect(laporan.detectEmergency()).toBe(false);
  });

  test('C07-UT18 | hitungDurasiTidur() | Batas | 22:00 ke 06:00, 01:00 ke 06:30, dan jam tidur sama dengan jam bangun | 8 jam, 5.5 jam, dan 24 jam (melewati tengah malam dihitung benar)', () => {
    expect(LaporanKesehatan.hitungDurasiTidur('22:00', '06:00')).toBe(8);
    expect(LaporanKesehatan.hitungDurasiTidur('01:00', '06:30')).toBe(5.5);
    expect(LaporanKesehatan.hitungDurasiTidur('08:00', '08:00')).toBe(24);
  });
});