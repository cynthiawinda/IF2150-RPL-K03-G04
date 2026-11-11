const TenagaKesehatan = require('../models/TenagaKesehatan');
const Pelajar = require('../models/Pelajar');
const JadwalKonsultasi = require('../models/JadwalKonsultasi');
const AppError = require('../utils/AppError');
const { kirim, tanganiAsync } = require('../utils/respon');
const db = require('../config/db');

function ambilIdPengguna(req) {
  return req.user.idPengguna;
}

// Ambil profil pelajar dari user yang sedang login
async function pelajarDariSesi(req) {
  const pelajar = await Pelajar.findByIdPengguna(ambilIdPengguna(req));
  if (!pelajar) {
    throw new AppError(403, 'Akses ditolak. Profil pelajar tidak ditemukan.');
  }
  return pelajar;
}

// Menampilkan daftar jadwal slot ketersediaan tenaga kesehatan
exports.getJadwalByTenagaKesehatan = tanganiAsync(async (req, res) => {
  const { idTenagaKesehatan } = req.params;
  const { tanggal } = req.query; 

  const nakes = await TenagaKesehatan.findById(idTenagaKesehatan);
  if (!nakes) {
    throw new AppError(404, 'Tenaga kesehatan tidak ditemukan.');
  }

  let jadwal = await nakes.getJadwalTersedia();
  if (tanggal) {
    if (!tanggalValid(tanggal)) {
      throw new AppError(400, 'Format tanggal harus YYYY-MM-DD.');
    }
    jadwal = jadwal.filter((item) => item.tanggal === tanggal);
  }

  return kirim(res, 200, 'Berhasil mengambil daftar jadwal konsultasi yang tersedia.', jadwal);
});

// Pelajar mengajukan booking jadwal konsultasi
exports.ajukanJadwalKonsultasi = tanganiAsync(async (req, res) => {
  const { id_jadwal, keluhan } = req.body || {};
  
  if (!id_jadwal) {
    throw new AppError(400, 'ID jadwal wajib disertakan.');
  }

  const pelajar = await pelajarDariSesi(req);

    const jadwal = await JadwalKonsultasi.findById(id_jadwal);
  if (!jadwal) {
    throw new AppError(404, 'Jadwal konsultasi tidak ditemukan.');
  }

  const berhasil = await pelajar.ajukanKonsultasi(jadwal, keluhan);
  if (!berhasil) {
    throw new AppError(409, 'Slot jadwal sudah tidak tersedia atau sudah dipesan.');
  }
 
  return kirim(res, 200, 'Pengajuan jadwal konsultasi berhasil dikirim.', jadwal);
});