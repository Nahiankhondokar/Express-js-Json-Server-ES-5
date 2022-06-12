const express = require('express');
const router = express.Router();

const {getAllStudents, createStudents, getPutStudents, getDeleteStudents} = require('../controller/StudentController');


// all student router
router.get('/', getAllStudents);
router.post('/', createStudents);
router.put('/:id', getPutStudents);
router.delete('/:id', getDeleteStudents);




module.exports = router;