const { encryptAES256, decryptAES256 } = require('../utils/encryption');

describe('encryption.js (KNF01, AES-256-CBC)', () => {
  const ORIGINAL_KEY = process.env.AES_SECRET_KEY;

  beforeEach(() => {
    process.env.AES_SECRET_KEY = 'kunci-rahasia-uji-mahasehat';
  });

  afterAll(() => {
    if (ORIGINAL_KEY === undefined) {
      delete process.env.AES_SECRET_KEY;
    } else {
      process.env.AES_SECRET_KEY = ORIGINAL_KEY;
    }
  });

  describe('encryptAES256', () => {
    test('C14-UT01 | encryptAES256() | Normal | Teks "Hari ini saya merasa cemas" | Format <iv_hex>:<ciphertext_hex>, teks asli tidak terlihat', () => {
      const out = encryptAES256('Hari ini saya merasa cemas');
      expect(out).toMatch(/^[0-9a-f]{32}:[0-9a-f]+$/);
      expect(out).not.toContain('cemas');
    });

    test('C14-UT02 | encryptAES256() | Normal | Teks yang sama dienkripsi dua kali | Ciphertext berbeda (IV acak)', () => {
      const a = encryptAES256('jurnal pribadi');
      const b = encryptAES256('jurnal pribadi');
      expect(a).not.toBe(b);
    });

    test('C14-UT03 | encryptAES256() | Negatif | null dan undefined | Mengembalikan null', () => {
      expect(encryptAES256(null)).toBeNull();
      expect(encryptAES256(undefined)).toBeNull();
    });

    test('C14-UT04 | encryptAES256() | Batas | String kosong dan string spasi saja | Mengembalikan null', () => {
      expect(encryptAES256('')).toBeNull();
      expect(encryptAES256('   ')).toBeNull();
    });

    test('C14-UT05 | encryptAES256() | Normal | Angka 12345 | Dikonversi ke string, dekripsi menghasilkan "12345"', () => {
      const out = encryptAES256(12345);
      expect(decryptAES256(out)).toBe('12345');
    });

    test('C14-UT06 | encryptAES256() | Negatif | AES_SECRET_KEY tidak diatur | Melempar kesalahan "AES_SECRET_KEY belum diatur"', () => {
      delete process.env.AES_SECRET_KEY;
      expect(() => encryptAES256('teks')).toThrow('AES_SECRET_KEY belum diatur');
    });

    test('C14-UT07 | encryptAES256() | Batas | null tanpa AES_SECRET_KEY | Mengembalikan null tanpa kesalahan', () => {
      delete process.env.AES_SECRET_KEY;
      expect(encryptAES256(null)).toBeNull();
    });

    test('C14-UT08 | encryptAES256() | Batas | Kunci "pendek" (bukan 32 byte) | Tetap valid (derivasi SHA-256), dekripsi benar', () => {
      process.env.AES_SECRET_KEY = 'pendek';
      const out = encryptAES256('data');
      expect(decryptAES256(out)).toBe('data');
    });
  });

  describe('decryptAES256', () => {
    test('C14-UT09 | decryptAES256() | Normal | Enkripsi lalu dekripsi teks biasa | Kembali ke teks asli', () => {
      const teks = 'Saya tidur 5 jam dan sulit fokus';
      expect(decryptAES256(encryptAES256(teks))).toBe(teks);
    });

    test('C14-UT10 | decryptAES256() | Normal | Teks Unicode dan emoji | Kembali ke teks asli', () => {
      const teks = 'Hari yang berat 😔 – “catatan” ñ 日本語';
      expect(decryptAES256(encryptAES256(teks))).toBe(teks);
    });

    test('C14-UT11 | decryptAES256() | Batas | Teks "  halo  " | Hasil "halo" (spasi pinggir dihapus)', () => {
      expect(decryptAES256(encryptAES256('  halo  '))).toBe('halo');
    });

    test('C14-UT12 | decryptAES256() | Negatif | null, undefined, "", 123, {} | Mengembalikan null', () => {
      expect(decryptAES256(null)).toBeNull();
      expect(decryptAES256(undefined)).toBeNull();
      expect(decryptAES256('')).toBeNull();
      expect(decryptAES256(123)).toBeNull();
      expect(decryptAES256({})).toBeNull();
    });

    test('C14-UT13 | decryptAES256() | Batas | Teks biasa tanpa : | Dikembalikan apa adanya', () => {
      expect(decryptAES256('teks biasa')).toBe('teks biasa');
    });

    test('C14-UT14 | decryptAES256() | Batas | Teks "a:b:c" (lebih dari satu :) | Dikembalikan apa adanya', () => {
      expect(decryptAES256('a:b:c')).toBe('a:b:c');
    });

    test('C14-UT15 | decryptAES256() | Negatif | Ciphertext didekripsi dengan kunci berbeda | Mengembalikan "[Data Terenkripsi]"', () => {
      const out = encryptAES256('rahasia');
      process.env.AES_SECRET_KEY = 'kunci-yang-salah';
      expect(decryptAES256(out)).toBe('[Data Terenkripsi]');
    });

    test('C14-UT16 | decryptAES256() | Negatif | Ciphertext rusak dan IV tidak valid | Mengembalikan "[Data Terenkripsi]"', () => {
      expect(decryptAES256('abcd:1234')).toBe('[Data Terenkripsi]');
      const out = encryptAES256('rahasia');
      const rusak = out.slice(0, -4) + 'ffff';
      expect(decryptAES256(rusak)).toBe('[Data Terenkripsi]');
    });
  });
});