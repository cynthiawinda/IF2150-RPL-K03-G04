const express = require('express');
const router = express.Router();
const konsultasiController = require('../controllers/konsultasiController');
const {
  authenticate,
  authorizeRoles
} = require('../middleware/authMiddleware');

router.use(authenticate, authorizeRoles('TenagaKesehatan'));

router.get('/pengajuan', konsultasiController.getPengajuanKonsultasi);
router.put('/:idJadwal/approve', konsultasiController.approveKonsultasi);
router.put('/:idJadwal/reschedule', konsultasiController.rescheduleKonsultasi);

module.exports = router;