const CheckIn = require('../models/CheckIn');
const { hariIni, tambahHari } = require('../utils/waktu');

const DATA_SAH = {
  skalaMood: 3,
  jamTidur: '22:00',
  jamBangun: '06:00',
  polaMakan: 'Teratur',
  pemicuStres: 'Akademik',
};

describe('C06 CheckIn', () => {
  test('C06-UT01 | createCheckIn() | Normal | Mood 3, tidur 22:00, bangun 06:00, pola makan " Teratur " | Objek terbentuk dengan ID, tanggal hari ini, dan pola makan terpotong spasi', () => {
    const checkIn = CheckIn.createCheckIn({ ...DATA_SAH, polaMakan: ' Teratur ' });
    expect(checkIn.idCheckIn).toBeTruthy();
    expect(checkIn.tanggalCheckIn).toBe(hariIni());
    expect(checkIn.polaMakan).toBe('Teratur');
    expect(checkIn.catatanRefleksi).toBeNull();
  });

  test('C06-UT02 | createCheckIn() | Batas | Mood 1 dan mood 5 | Keduanya diterima', () => {
    expect(CheckIn.createCheckIn({ ...DATA_SAH, skalaMood: 1 }).skalaMood).toBe(1);
    expect(CheckIn.createCheckIn({ ...DATA_SAH, skalaMood: 5 }).skalaMood).toBe(5);
  });

  test('C06-UT03 | createCheckIn() | Negatif | Mood 0 dan mood 6 | Melempar AppError status 400 "Data check-in tidak valid."', () => {
    [0, 6].forEach((mood) => {
      expect(() => CheckIn.createCheckIn({ ...DATA_SAH, skalaMood: mood })).toThrow('Data check-in tidak valid.');
    });
    try {
      CheckIn.createCheckIn({ ...DATA_SAH, skalaMood: 0 });
    } catch (err) {
      expect(err.status).toBe(400);
    }
  });

  test('C06-UT04 | createCheckIn() | Negatif | Mood 2.5 (bukan bilangan bulat) dan mood "3" (string) | Melempar kesalahan data tidak valid', () => {
    expect(() => CheckIn.createCheckIn({ ...DATA_SAH, skalaMood: 2.5 })).toThrow('Data check-in tidak valid');
    expect(() => CheckIn.createCheckIn({ ...DATA_SAH, skalaMood: '3' })).toThrow('Data check-in tidak valid');
  });

  test('C06-UT05 | createCheckIn() | Negatif | Jam tidur "25:00" dan jam bangun "6:00" (format salah) | Melempar kesalahan data tidak valid', () => {
    expect(() => CheckIn.createCheckIn({ ...DATA_SAH, jamTidur: '25:00' })).toThrow('Data check-in tidak valid');
    expect(() => CheckIn.createCheckIn({ ...DATA_SAH, jamBangun: '6:00' })).toThrow('Data check-in tidak valid');
  });

  test('C06-UT06 | createCheckIn() | Negatif | Jam tidur sama dengan jam bangun | Melempar kesalahan data tidak valid', () => {
    expect(() => CheckIn.createCheckIn({ ...DATA_SAH, jamTidur: '22:00', jamBangun: '22:00' })).toThrow(
      'Data check-in tidak valid'
    );
  });

  test('C06-UT07 | createCheckIn() | Negatif | Pola makan kosong, spasi saja, atau tidak diisi | Melempar kesalahan data tidak valid', () => {
    ['', '   ', undefined].forEach((polaMakan) => {
      expect(() => CheckIn.createCheckIn({ ...DATA_SAH, polaMakan })).toThrow('Data check-in tidak valid');
    });
  });

  test('C06-UT08 | createCheckIn() | Negatif | Catatan refleksi berupa string kosong | Melempar kesalahan data tidak valid', () => {
    expect(() => CheckIn.createCheckIn({ ...DATA_SAH, catatanRefleksi: '' })).toThrow('Data check-in tidak valid');
  });

  test('C06-UT09 | createCheckIn() | Batas | Catatan refleksi null dan pemicu stres tidak diisi | Diterima, catatan tetap null dan pemicu menjadi string kosong', () => {
    const { pemicuStres, ...tanpaPemicu } = DATA_SAH;
    const checkIn = CheckIn.createCheckIn({ ...tanpaPemicu, catatanRefleksi: null });
    expect(checkIn.catatanRefleksi).toBeNull();
    expect(checkIn.pemicuStres).toBe('');
  });

  test('C06-UT10 | validateData() | Negatif | Tanggal check-in besok (masa depan) | Mengembalikan false', () => {
    const checkIn = new CheckIn({
      id_check_in: 'C-1',
      tanggal_check_in: tambahHari(hariIni(), 1),
      skala_mood: 3,
      jam_tidur: '22:00:00',
      jam_bangun: '06:00:00',
      pola_makan: 'Teratur',
    });
    expect(checkIn.validateData()).toBe(false);
  });

  test('C06-UT11 | validateData() | Normal | Baris basis data dengan jam format HH:mm:ss | Jam dipotong menjadi HH:mm dan data dinyatakan valid', () => {
    const checkIn = new CheckIn({
      id_check_in: 'C-1',
      tanggal_check_in: hariIni(),
      skala_mood: 4,
      jam_tidur: '22:30:00',
      jam_bangun: '06:00:00',
      pola_makan: 'Teratur',
    });
    expect(checkIn.jamTidur).toBe('22:30');
    expect(checkIn.jamBangun).toBe('06:00');
    expect(checkIn.validateData()).toBe(true);
  });

  test('C06-UT12 | getCheckInData() | Normal | Check-in valid dengan catatan terenkripsi | Mengembalikan objek berisi seluruh atribut check-in', () => {
    const checkIn = CheckIn.createCheckIn({ ...DATA_SAH, catatanRefleksi: 'iv:cipher' });
    expect(checkIn.getCheckInData()).toMatchObject({
      idCheckIn: checkIn.idCheckIn,
      skalaMood: 3,
      jamTidur: '22:00',
      jamBangun: '06:00',
      polaMakan: 'Teratur',
      pemicuStres: 'Akademik',
      catatanRefleksi: 'iv:cipher',
    });
  });
});