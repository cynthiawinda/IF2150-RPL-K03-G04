const express = require('express');
const router = express.Router();
const jadwalController = require('../controllers/jadwalKonsultasiController');
const {
    authenticate,
    authorizeRoles
} = require('../middleware/authMiddleware');

router.get('/:idTenagaKesehatan', authenticate, jadwalController.getJadwalByTenagaKesehatan);
router.post('/pengajuan', authenticate, authorizeRoles('Pelajar'), jadwalController.ajukanJadwalKonsultasi);

module.exports = router;