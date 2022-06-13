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

// Get all student 
const getSingleStudents = async (req, res) => {
    let id = req.params.id;

    let single = await Student.findById(id);
    res.status(200).json(single);


}

// Get all student 
const getDeleteStudents = (req, res) => {

    let id = req.params.id;
    if(obj_students.some(data => data.id == id)){
        let update_data = obj_students.filter(data => data.id != id);

        fs.writeFileSync(path.join(__dirname, '../.data/students.json'), JSON.stringify(update_data))

        res.status(200).json({
            message : 'data found'
        });
    }else{
        res.status(200).json({
            message : 'data not found'
        });
    }
}

// Students Edit
const StudentsEdit = (req, res) => {

    if( req.body.name == '' || req.body.location == '' || req.body.skill == '' ){
        res.status(200).json({
            message : 'all feilds are required !'
        });
    }else{

        let id = req.params.id;
        let index = obj_students.findIndex(data => data.id == id);
    
        obj_students[index] = {
            id : id,
            name : req.body.name,
            skill : req.body.skill,
            location : req.body.location
        }
    
        fs.writeFileSync(path.join(__dirname, '../.data/students.json'), JSON.stringify(obj_students));
    
        res.status(200).json({
            message : 'data updated'
        });

    }



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



