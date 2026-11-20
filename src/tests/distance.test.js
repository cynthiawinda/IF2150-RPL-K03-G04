const { parseCoordinates, calculateDistanceKm } = require('../utils/distance');

describe('distance.js', () => {
  describe('parseCoordinates (Algo-C02-03)', () => {
    test('C20-UT01 | parseCoordinates() | Normal | String "-6.9175,107.6191" | {lat: -6.9175, lng: 107.6191}', () => {
      expect(parseCoordinates('-6.9175,107.6191')).toEqual({ lat: -6.9175, lng: 107.6191 });
    });

    test('C20-UT02 | parseCoordinates() | Normal | String dengan spasi di sekitar koma | Spasi diabaikan, koordinat terbaca', () => {
      expect(parseCoordinates(' -6.9175 , 107.6191 ')).toEqual({ lat: -6.9175, lng: 107.6191 });
    });

    test('C20-UT03 | parseCoordinates() | Normal | Objek {lat: -6.9, lng: 107.6} | Mengembalikan objek koordinat yang sama', () => {
      expect(parseCoordinates({ lat: -6.9, lng: 107.6 })).toEqual({ lat: -6.9, lng: 107.6 });
    });

    test('C20-UT04 | parseCoordinates() | Negatif | null, undefined, "" | Mengembalikan null', () => {
      expect(parseCoordinates(null)).toBeNull();
      expect(parseCoordinates(undefined)).toBeNull();
      expect(parseCoordinates('')).toBeNull();
    });

    test('C20-UT05 | parseCoordinates() | Negatif | "-6.9" dan "1,2,3" | Mengembalikan null', () => {
      expect(parseCoordinates('-6.9')).toBeNull();
      expect(parseCoordinates('1,2,3')).toBeNull();
    });

    test('C20-UT06 | parseCoordinates() | Negatif | "abc,def" dan "-6.9,xyz" | Mengembalikan null', () => {
      expect(parseCoordinates('abc,def')).toBeNull();
      expect(parseCoordinates('-6.9,xyz')).toBeNull();
    });

    test('C20-UT07 | parseCoordinates() | Batas | "90,180" dan "-90,-180" | Diterima', () => {
      expect(parseCoordinates('90,180')).toEqual({ lat: 90, lng: 180 });
      expect(parseCoordinates('-90,-180')).toEqual({ lat: -90, lng: -180 });
    });

    test('C20-UT08 | parseCoordinates() | Batas | Lat 90.0001 / -90.0001, lng 180.0001 / -180.0001 | Mengembalikan null', () => {
      expect(parseCoordinates('90.0001,0')).toBeNull();
      expect(parseCoordinates('-90.0001,0')).toBeNull();
      expect(parseCoordinates('0,180.0001')).toBeNull();
      expect(parseCoordinates('0,-180.0001')).toBeNull();
    });

    test('C20-UT09 | parseCoordinates() | Negatif | Objek tanpa lat atau lng | Mengembalikan null', () => {
      expect(parseCoordinates({ lat: 1 })).toBeNull();
      expect(parseCoordinates({ lng: 1 })).toBeNull();
      expect(parseCoordinates({})).toBeNull();
    });

    test('C20-UT10 | parseCoordinates() | Negatif | Masukan angka 5 | Mengembalikan null', () => {
      expect(parseCoordinates(5)).toBeNull();
    });

    test('C20-UT11 | parseCoordinates() | Batas | "0,0" dan {lat: 0, lng: 0} | Diterima sebagai titik valid', () => {
      expect(parseCoordinates('0,0')).toEqual({ lat: 0, lng: 0 });
      expect(parseCoordinates({ lat: 0, lng: 0 })).toEqual({ lat: 0, lng: 0 });
    });

    test('C20-UT12 | parseCoordinates() | Negatif | "Infinity,0" | Mengembalikan null', () => {
      expect(parseCoordinates('Infinity,0')).toBeNull();
    });

    test('C20-UT13 | parseCoordinates() | Negatif | String "," (kedua bagian kosong) | Mengembalikan null', () => {
      expect(parseCoordinates(',')).toBeNull();
    });

    test('C20-UT14 | parseCoordinates() | Negatif | Objek {lat: null, lng: null} | Mengembalikan null', () => {
      expect(parseCoordinates({ lat: null, lng: null })).toBeNull();
    });
  });

  describe('calculateDistanceKm (Algo-C20-03)', () => {
    test('C20-UT15 | calculateDistanceKm() | Batas | Dua titik yang sama | Jarak 0 km', () => {
      expect(calculateDistanceKm('-6.9175,107.6191', '-6.9175,107.6191')).toBe(0);
    });

    test('C20-UT16 | calculateDistanceKm() | Normal | "0,0" ke "0,1" | 111.19 km', () => {
      expect(calculateDistanceKm('0,0', '0,1')).toBe(111.19);
    });

    test('C20-UT17 | calculateDistanceKm() | Batas | "0,0" ke "0,180" (antipodal) | 20015.09 km', () => {
      expect(calculateDistanceKm('0,0', '0,180')).toBe(20015.09);
    });

    test('C20-UT18 | calculateDistanceKm() | Normal | Bandung ke Jakarta dan sebaliknya | Jarak sama (simetris)', () => {
      const ab = calculateDistanceKm('-6.9175,107.6191', '-6.2088,106.8456');
      const ba = calculateDistanceKm('-6.2088,106.8456', '-6.9175,107.6191');
      expect(ab).toBe(ba);
    });

    test('C20-UT19 | calculateDistanceKm() | Normal | Bandung (-6.9175,107.6191) ke Jakarta (-6.2088,106.8456) | Antara 110 dan 120 km', () => {
      const d = calculateDistanceKm('-6.9175,107.6191', '-6.2088,106.8456');
      expect(d).toBeGreaterThan(110);
      expect(d).toBeLessThan(120);
    });

    test('C20-UT20 | calculateDistanceKm() | Normal | Campuran objek dan string | 111.19 km', () => {
      expect(calculateDistanceKm({ lat: 0, lng: 0 }, '0,1')).toBe(111.19);
    });

    test('C20-UT21 | calculateDistanceKm() | Negatif | Salah satu titik null, "abc", atau lat 91 | Mengembalikan -1', () => {
      expect(calculateDistanceKm(null, '0,0')).toBe(-1);
      expect(calculateDistanceKm('0,0', null)).toBe(-1);
      expect(calculateDistanceKm('abc', '0,0')).toBe(-1);
      expect(calculateDistanceKm('0,0', '91,0')).toBe(-1);
    });

    test('C20-UT22 | calculateDistanceKm() | Normal | Bandung ke Jakarta | Dibulatkan 2 angka di belakang koma', () => {
      const d = calculateDistanceKm('-6.9175,107.6191', '-6.2088,106.8456');
      expect(Math.round(d * 100) / 100).toBe(d);
    });
  });
});