const TenagaKesehatan = require('../models/TenagaKesehatan');
const JadwalKonsultasi = require('../models/JadwalKonsultasi');
const AppError = require('../utils/AppError');
const { kirim, tanganiAsync } = require('../utils/respon');
const { hitungUsia, tanggalValid, jamValid } = require('../utils/waktu');
const db = require('../config/db');

function ambilIdPengguna(req) {
  return req.user.idPengguna;
}

async function nakesDariSesi(req) {
  const nakes = await TenagaKesehatan.findByIdPengguna(ambilIdPengguna(req));
  if (!nakes) {
    throw new AppError(403, 'Akses ditolak. Profil tenaga kesehatan tidak ditemukan.');
  }
  return nakes;
}

async function jadwalMilikNakes(req) {
  const nakes = await nakesDariSesi(req);
  const idNakes = nakes.idTenagaKesehatan || nakes.id_tenaga_kesehatan;
  const jadwal = await JadwalKonsultasi.findById(req.params.idJadwal);
  if (!jadwal || jadwal.idTenagaKesehatan !== idNakes) {
    throw new AppError(404, 'Jadwal konsultasi tidak ditemukan atau Anda tidak memiliki hak akses.');
  }
  return jadwal;
}

function durasiTidurJam(jamTidur, jamBangun) {
  const keMenit = (jam) => {
    const [h, m] = String(jam).split(':').map(Number);
    return h * 60 + m;
  };
  let selisih = keMenit(jamBangun) - keMenit(jamTidur);
  if (selisih <= 0) selisih += 24 * 60;
  return selisih / 60;
}

// nakes melihat daftar pengajuan konsultasi
exports.getPengajuanKonsultasi = tanganiAsync(async (req, res) => {
  const nakes = await nakesDariSesi(req);
  const idNakes = nakes.idTenagaKesehatan || nakes.id_tenaga_kesehatan;

  const { rows: jadwalRows } = await db.query(`
    SELECT j.id_jadwal, j.tanggal, j.waktu, j.status_pengajuan, j.keluhan, 
           p.id_pelajar, p.nama AS nama_pelajar, p.nomor_telepon, p.tanggal_lahir
    FROM jadwal_konsultasi j
    JOIN pelajar p ON j.id_pelajar = p.id_pelajar
    WHERE j.id_tenaga_kesehatan = $1 
      AND j.status_pengajuan IN ('Diajukan', 'Rescheduled', 'Disetujui')
    ORDER BY j.tanggal ASC, j.waktu ASC;
  `, [idNakes]);

  const formattedData = await Promise.all(jadwalRows.map(async (row) => {
    const { rows: checkIns } = await db.query(`
      SELECT skala_mood, jam_tidur, jam_bangun 
      FROM check_in 
      WHERE id_pelajar = $1 
      ORDER BY tanggal_check_in DESC LIMIT 7;
    `, [row.id_pelajar]);

    let totalMood = 0;
    let totalTidur = 0;
    const moodBars = [];
    const tidurBars = [];

    checkIns.forEach(c => {
      const mood = Number(c.skala_mood);
      totalMood += mood;
      moodBars.unshift(mood * 10);

      const durasi = durasiTidurJam(c.jam_tidur, c.jam_bangun);
      totalTidur += durasi;
      tidurBars.unshift(durasi * 5);
    });

    while (moodBars.length < 7) moodBars.unshift(0);
    while (tidurBars.length < 7) tidurBars.unshift(0);

    const avgMood = checkIns.length ? (totalMood / checkIns.length).toFixed(1) : '0.0';
    const avgTidur = checkIns.length ? (totalTidur / checkIns.length).toFixed(1) : '0.0';

    const tanggalString = typeof row.tanggal === 'string' ? row.tanggal : row.tanggal.toISOString().split('T')[0];
     const waktuString = String(row.waktu).slice(0, 5);
 
    const inisial = row.nama_pelajar.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
    const usia = row.tanggal_lahir ? hitungUsia(row.tanggal_lahir) : '?';
    
    return {
       id: row.id_jadwal,
      nama: row.nama_pelajar,
      inisial: inisial,
      avatarColor: '#78C9C0',
      sekolah: `Usia ${usia} Tahun`,
      nis: row.nomor_telepon,
      status: row.status_pengajuan === 'Diajukan' ? 'Menunggu' : row.status_pengajuan,
      jadwal: `${tanggalString} · ${waktuString}`,
      jadwalFull: `${tanggalString} · ${waktuString} (60 Menit)`,
      metode: 'Daring (Google Meet)',
      keluhan: row.keluhan || 'Tidak ada keluhan tertulis.',
      moodRerata: `${avgMood} / 5.0`,
      moodBars: moodBars,
      tidurRerata: `${avgTidur} Jam`,
      tidurBars: tidurBars,
      linkMeet: '',
      catatan: ''
    };
  }));

  return kirim(res, 200, 'Berhasil mengambil daftar permohonan konsultasi.', formattedData);
});

// Nakes menyetujui jadwal konsultasi
exports.approveKonsultasi = tanganiAsync(async (req, res) => {
  const jadwal = await jadwalMilikNakes(req);

  await jadwal.updateStatus('Disetujui');
  return kirim(res, 200, 'Permohonan konsultasi berhasil disetujui.', jadwal);
});

// Nakes reschedule waktu konsultasi
exports.rescheduleKonsultasi = tanganiAsync(async (req, res) => {
  const { tanggal_baru, waktu_baru } = req.body || {};
 
  if (!tanggal_baru || !waktu_baru) {
    throw new AppError(400, 'Tanggal baru dan waktu baru wajib diisi untuk penjadwalan ulang.');
  }
  if (!tanggalValid(tanggal_baru) || !jamValid(waktu_baru)) {
    throw new AppError(400, 'Format tanggal (YYYY-MM-DD) atau waktu (HH:mm) tidak valid.');
  }

  const jadwal = await jadwalMilikNakes(req);
  await jadwal.updateSchedule(tanggal_baru, waktu_baru);
  
  return kirim(res, 200, 'Jadwal konsultasi berhasil dijadwal ulang.', jadwal);
});
 