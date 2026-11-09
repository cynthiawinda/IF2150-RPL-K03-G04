const Pelajar = require('../models/Pelajar');
const CheckIn = require('../models/CheckIn');
const LaporanKesehatan = require('../models/LaporanKesehatan');

exports.getLaporanKesehatan = async (req, res) => {
    try {
        const { idPengguna, role } = req.user;
        
        // Cari data pelajar berdasarkan id_pengguna
        const pelajar = await Pelajar.findByIdPengguna(idPengguna);
        if (!pelajar) {
            return res.status(404).json({ status: 'error', message: 'Profil pelajar tidak ditemukan.' });
        }

        // ambil seluruh riwayat check-in
        const riwayatCheckIn = await pelajar.getCheckInHistory();

        // ambil check-in terakhir untuk evaluateThreshold
        let tanggalTerakhir = null;
        if (riwayatCheckIn && riwayatCheckIn.length > 0) {
            const sorted = [...riwayatCheckIn].sort((a, b) => (a.tanggalCheckIn < b.tanggalCheckIn ? 1 : -1));
            tanggalTerakhir = sorted[0].tanggalCheckIn;
        }

        // inisialisasi kelas LaporanKesehatan
        const laporan = new LaporanKesehatan();
        const hasilEvaluasi = laporan.evaluateThreshold(riwayatCheckIn || [], { tanggalTerakhir });
        const deteksiDarurat = laporan.detectEmergency();

        return res.status(200).json({
            status: 'success',
            data: {
                ...hasilEvaluasi,
                isEmergency: deteksiDarurat,
                riwayat: riwayatCheckIn
            }
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ status: 'error', message: 'Terjadi kesalahan pada server.' });
    }
};