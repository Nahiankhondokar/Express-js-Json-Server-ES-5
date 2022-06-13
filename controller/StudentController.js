const fs = require('fs');
const path = require('path');
const Student = require('../models/studentModel');

// students data 
const students = fs.readFileSync(path.join(__dirname, '../.data/students.json'));
const obj_students = JSON.parse(students);

// latest id 
const getLatestId = (obj_students) => {
    return (obj_students == '') ? 1 : obj_students[obj_students.length - 1].id + 1;
}

// Get all student 
const getAllStudents = async (req, res) => {

    let data = await Student.find();
    res.status(200).json(data);

}

// Get single student 
const getSingleStudents = async (req, res) => {
    let id = req.params.id;

    let single = await Student.findById(id);
    res.status(200).json(single);


}

// Get delete student 
const getDeleteStudents = async (req, res) => {

    let id = req.params.id;
    await Student.findByIdAndDelete(id);

    res.status(200).json({
        message : 'student deleted'
    });

}

// Students Edit
const StudentsEdit = async (req, res) => {

    let id = req.params.id;
    await Student.findByIdAndUpdate(id, req.body, {
        new : true
    });

    res.status(200).json({
        message : 'student updated'
    });

}

// create Students
const createStudents = async (req, res) => {


    if( req.body.name == '' || req.body.location == '' || req.body.skill == '' ){
        res.status(200).json({
            message : 'all feilds are required !'
        });
    }else{

        await Student.create({
            name : req.body.name,
            skill : req.body.skill,
            location : req.body.location,
            age  : req.body.age
        });

        res.status(200).json({
            message : 'Student Created successfully '
        });

    }

}



module.exports = {
    getAllStudents, 
    createStudents,
    StudentsEdit, 
    getDeleteStudents,
    getSingleStudents
}



