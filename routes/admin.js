const express = require('express');
const { getAllAdmins, getSingleAdmins, getDeleteAdmins, getUpdateAdmins, getCreateAdmins, adminProfile, adminHome } = require('../controller/AdminController');
const { adminLogin } = require('../controller/AuthController');
const { authCheck } = require('../middleware/authMiddleware');
const router = express();

// authentication check route
router.post('/login', adminLogin);

router.get('/profile', authCheck, adminProfile);
router.get('/home', authCheck, adminHome);

// Admins all routes
router.get('/', getAllAdmins);
router.post('/', getCreateAdmins);
router.get('/:id', getSingleAdmins);
router.delete('/:id', getDeleteAdmins);
router.put('/:id', getUpdateAdmins);
router.patch('/:id', getUpdateAdmins);






module.exports = router;