const express = require('express');
const teacherLogin = require('../controller/TeacherAuthController');
const { updateTeacher, deleteTeacher, singleTeacher, createTeacher, getAllTeacher, teacherProfile, teacherHome } = require('../controller/TeacherController');
const { teacherAuthCheck } = require('../middleware/authMiddleware');
const router = express.Router();


// Authentication routes
router.post('/login', teacherLogin);
router.get('/profile', teacherAuthCheck, teacherProfile);
router.get('/home', teacherAuthCheck, teacherHome);

// Teacher All router 
router.get('/', getAllTeacher);
router.post('/', createTeacher);
router.get('/:id', singleTeacher);
router.delete('/:id', deleteTeacher);
router.put('/:id', updateTeacher);



module.exports = router;