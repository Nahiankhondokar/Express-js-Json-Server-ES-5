const express = require('express');
const { updateTeacher, deleteTeacher, singleTeacher, createTeacher, getAllTeacher } = require('../controller/TeacherController');
const router = express.Router();


// Authentication routes
router.post('/login', teacherLogin);

// Teacher All router 
router.get('/', getAllTeacher);
router.post('/', createTeacher);
router.get('/:id', singleTeacher);
router.delete('/:id', deleteTeacher);
router.put('/:id', updateTeacher);



module.exports = router;