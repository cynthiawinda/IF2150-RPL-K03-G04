const express = require('express');
const router = express.Router();
const reportController = require('../controllers/reportController');
const {authenticate, authorizeRoles} = require('../middleware/authMiddleware');

router.get(
    '/', 
    authenticate,
    authorizeRoles('pelajar', 'orangtuawali', 'tenagakesehatan'),
    reportController.getLaporanKesehatan
);

module.exports = router;