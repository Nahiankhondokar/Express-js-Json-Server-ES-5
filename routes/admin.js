const express = require('express');
const { getAllAdmins, getSingleAdmins, getDeleteAdmins, getUpdateAdmins, getCreateAdmins } = require('../controller/AdminController');
const router = express();

// Admins all routes
router.get('/', getAllAdmins);
router.post('/', getCreateAdmins);
router.get('/:id', getSingleAdmins);
router.delete('/:id', getDeleteAdmins);
router.put('/:id', getUpdateAdmins);
router.patch('/:id', getUpdateAdmins);




module.exports = router;