jest.mock('../config/db', () => ({ query: jest.fn(), withTransaction: jest.fn() }));
jest.mock('../models/Pelajar', () => ({ findByIdPengguna: jest.fn() }));

const Pelajar = require('../models/Pelajar');
const CheckIn = require('../models/CheckIn');
const controller = require('../controllers/checkInController');
const { encryptAES256, decryptAES256 } = require('../utils/encryption');
const { hariIni } = require('../utils/waktu');

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
  return { res, next };
}

function buatPelajar() {
  return {
    idPelajar: 'PLJ-1',
    setCheckIn: jest.fn().mockResolvedValue(),
    getCheckInHistory: jest.fn().mockResolvedValue([]),
    getCheckInSejak: jest.fn().mockResolvedValue([]),
  };
}

const REQ_DASAR = { user: { idPengguna: 'U-1' } };

beforeEach(() => {
  jest.clearAllMocks();
});

describe('C14 CheckInController', () => {
  test('C14-UT17 | validateCheckInFormat() | Normal | Mood 3 | Mengembalikan true', () => {
    expect(controller.validateCheckInFormat({ mood: 3 })).toBe(true);
  });

  test('C14-UT18 | validateCheckInFormat() | Batas | Mood 1 dan 5 (diterima), mood 0 dan 6 (ditolak) | true untuk 1 dan 5, false untuk 0 dan 6', () => {
    expect(controller.validateCheckInFormat({ mood: 1 })).toBe(true);
    expect(controller.validateCheckInFormat({ mood: 5 })).toBe(true);
    expect(controller.validateCheckInFormat({ mood: 0 })).toBe(false);
    expect(controller.validateCheckInFormat({ mood: 6 })).toBe(false);
  });

  test('C14-UT19 | validateCheckInFormat() | Normal | Mood berupa string "4" | Mengembalikan true (dikonversi ke angka)', () => {
    expect(controller.validateCheckInFormat({ mood: '4' })).toBe(true);
  });

  test('C14-UT20 | validateCheckInFormat() | Negatif | Mood undefined, null, "", 2.5, "abc", dan tanpa argumen | Seluruhnya mengembalikan false', () => {
    [undefined, null, '', 2.5, 'abc'].forEach((mood) => {
      expect(controller.validateCheckInFormat({ mood })).toBe(false);
    });
    expect(controller.validateCheckInFormat()).toBe(false);
  });

  test('C14-UT21 | validateCheckInFormat() | Normal | Hanya properti skalaMood (tanpa mood) bernilai 2 | Mengembalikan true', () => {
    expect(controller.validateCheckInFormat({ skalaMood: 2 })).toBe(true);
  });

  test('C14-UT22 | encryptJournal() | Negatif | null, undefined, "", dan "   " | Seluruhnya mengembalikan null', () => {
    [null, undefined, '', '   '].forEach((catatan) => {
      expect(controller.encryptJournal(catatan)).toBeNull();
    });
  });

  test('C14-UT23 | encryptJournal() | Normal | Catatan "Hari ini saya cemas" | Ciphertext berformat iv:data yang bila didekripsi kembali ke teks asli', () => {
    const hasil = controller.encryptJournal('Hari ini saya cemas');
    expect(hasil).toMatch(/^[0-9a-f]{32}:[0-9a-f]+$/);
    expect(hasil).not.toContain('cemas');
    expect(decryptAES256(hasil)).toBe('Hari ini saya cemas');
  });

  test('C14-UT24 | encryptJournal() | Normal | Catatan berupa objek { cipher, iv, key } | Objek diubah ke JSON lalu dienkripsi, dekripsi menghasilkan JSON yang sama', () => {
    const objek = { cipher: 'abc', iv: 'def', key: 'ghi' };
    expect(decryptAES256(controller.encryptJournal(objek))).toBe(JSON.stringify(objek));
  });

  test('C14-UT25 | submitCheckIn() | Normal | Mood 4, tidur 23:00-06:30, makan "Teratur", pemicu ["Akademik","Keluarga"], catatan "Saya cemas" | Respons 201, check-in tersimpan, pemicu digabung, catatan tersimpan terenkripsi', async () => {
    const pelajar = buatPelajar();
    Pelajar.findByIdPengguna.mockResolvedValue(pelajar);
    const req = {
      ...REQ_DASAR,
      body: { mood: 4, sleep: { bed: '23:00', wake: '06:30' }, meal: 'Teratur', triggers: ['Akademik', 'Keluarga'], note: 'Saya cemas' },
    };
    const { res, next } = await panggil(controller.submitCheckIn, req);
    expect(next).not.toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(201);
    const tersimpan = pelajar.setCheckIn.mock.calls[0][0];
    expect(tersimpan).toBeInstanceOf(CheckIn);
    expect(tersimpan.skalaMood).toBe(4);
    expect(tersimpan.pemicuStres).toBe('Akademik, Keluarga');
    expect(tersimpan.catatanRefleksi).not.toBe('Saya cemas');
    expect(decryptAES256(tersimpan.catatanRefleksi)).toBe('Saya cemas');
  });

  test('C14-UT26 | submitCheckIn() | Batas | Hanya mood 3 (tanpa tidur, makan, pemicu, catatan) | Memakai nilai bawaan tidur 22:30, bangun 06:00, makan "Teratur", catatan null', async () => {
    const pelajar = buatPelajar();
    Pelajar.findByIdPengguna.mockResolvedValue(pelajar);
    const { res } = await panggil(controller.submitCheckIn, { ...REQ_DASAR, body: { mood: 3 } });
    expect(res.status).toHaveBeenCalledWith(201);
    const tersimpan = pelajar.setCheckIn.mock.calls[0][0];
    expect(tersimpan.jamTidur).toBe('22:30');
    expect(tersimpan.jamBangun).toBe('06:00');
    expect(tersimpan.polaMakan).toBe('Teratur');
    expect(tersimpan.catatanRefleksi).toBeNull();
  });

  test('C14-UT27 | submitCheckIn() | Batas | Catatan berisi spasi saja | Check-in tetap diterima dan catatan disimpan null', async () => {
    const pelajar = buatPelajar();
    Pelajar.findByIdPengguna.mockResolvedValue(pelajar);
    const { res } = await panggil(controller.submitCheckIn, { ...REQ_DASAR, body: { mood: 3, note: '   ' } });
    expect(res.status).toHaveBeenCalledWith(201);
    expect(pelajar.setCheckIn.mock.calls[0][0].catatanRefleksi).toBeNull();
  });

  test('C14-UT28 | submitCheckIn() | Negatif | Mood 9 (di luar 1-5) | Diteruskan ke next sebagai AppError 400 dan check-in tidak disimpan', async () => {
    const pelajar = buatPelajar();
    Pelajar.findByIdPengguna.mockResolvedValue(pelajar);
    const { next } = await panggil(controller.submitCheckIn, { ...REQ_DASAR, body: { mood: 9 } });
    expect(next.mock.calls[0][0]).toMatchObject({ status: 400, message: 'Skala mood wajib diisi (1-5).' });
    expect(pelajar.setCheckIn).not.toHaveBeenCalled();
  });

  test('C14-UT29 | submitCheckIn() | Negatif | Body kosong (tanpa mood) | Diteruskan ke next sebagai AppError 400', async () => {
    Pelajar.findByIdPengguna.mockResolvedValue(buatPelajar());
    const { next } = await panggil(controller.submitCheckIn, { ...REQ_DASAR });
    expect(next.mock.calls[0][0]).toMatchObject({ status: 400 });
  });

  test('C14-UT30 | submitCheckIn() | Negatif | Profil pelajar tidak ditemukan | Diteruskan ke next sebagai AppError 404', async () => {
    Pelajar.findByIdPengguna.mockResolvedValue(null);
    const { next } = await panggil(controller.submitCheckIn, { ...REQ_DASAR, body: { mood: 3 } });
    expect(next.mock.calls[0][0]).toMatchObject({ status: 404 });
  });

  test('C14-UT31 | submitCheckIn() | Negatif | Jam tidur sama dengan jam bangun (23:00 dan 23:00) | Diteruskan ke next sebagai AppError 400 dari validasi CheckIn', async () => {
    const pelajar = buatPelajar();
    Pelajar.findByIdPengguna.mockResolvedValue(pelajar);
    const { next } = await panggil(controller.submitCheckIn, {
      ...REQ_DASAR,
      body: { mood: 3, sleep: { bed: '23:00', wake: '23:00' } },
    });
    expect(next.mock.calls[0][0]).toMatchObject({ status: 400 });
    expect(pelajar.setCheckIn).not.toHaveBeenCalled();
  });

  test('C14-UT32 | getHistory() | Normal | Pelajar punya 1 riwayat check-in | Respons 200 berisi riwayat tersebut', async () => {
    const pelajar = buatPelajar();
    pelajar.getCheckInHistory.mockResolvedValue([{ id_check_in: 'C-1' }]);
    Pelajar.findByIdPengguna.mockResolvedValue(pelajar);
    const { res } = await panggil(controller.getHistory, REQ_DASAR);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json.mock.calls[0][0].data).toEqual([{ id_check_in: 'C-1' }]);
  });

  test('C14-UT33 | getTodayStatus() | Normal | Pelajar sudah check-in hari ini | sudah_check_in true dan memuat check-in hari ini', async () => {
    const pelajar = buatPelajar();
    pelajar.getCheckInSejak.mockResolvedValue([{ idCheckIn: 'C-9', tanggalCheckIn: hariIni() }]);
    Pelajar.findByIdPengguna.mockResolvedValue(pelajar);
    const { res } = await panggil(controller.getTodayStatus, REQ_DASAR);
    const data = res.json.mock.calls[0][0].data;
    expect(data.sudah_check_in).toBe(true);
    expect(data.check_in.id_check_in).toBe('C-9');
    expect(pelajar.getCheckInSejak).toHaveBeenCalledWith(hariIni());
  });

  test('C14-UT34 | getTodayStatus() | Negatif | Pelajar belum check-in hari ini | sudah_check_in false dan check_in null', async () => {
    Pelajar.findByIdPengguna.mockResolvedValue(buatPelajar());
    const { res } = await panggil(controller.getTodayStatus, REQ_DASAR);
    const data = res.json.mock.calls[0][0].data;
    expect(data.sudah_check_in).toBe(false);
    expect(data.check_in).toBeNull();
  });
});