const express = require('express');
const { getAllAdmins, getSingleAdmins, getDeleteAdmins, getUpdateAdmins, getCreateAdmins } = require('../controller/AdminController');
const { adminLogin } = require('../controller/AuthController');
const router = express();

// Admins all routes
router.get('/', getAllAdmins);
router.post('/', getCreateAdmins);
router.get('/:id', getSingleAdmins);
router.delete('/:id', getDeleteAdmins);
router.put('/:id', getUpdateAdmins);
router.patch('/:id', getUpdateAdmins);

router.post('/login', adminLogin);




module.exports = router;