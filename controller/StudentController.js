const fs = require('fs');
const path = require('path');

// students data 
const students = fs.readFileSync(path.join(__dirname, '../.data/students.json'));
const obj_students = JSON.parse(students);

// latest id 
const getLatestId = (obj_students) => {
    return obj_students[obj_students.length - 1].id + 1;
}

// Get all student 
const getAllStudents = (req, res) => {
    res.status(200).json(obj_data);
}

// Get all student 
const getSingleStudents = (req, res) => {
    res.send('Single Student Route Done ' + req.param.id);
}

// Get all student 
const getDeleteStudents = (req, res) => {
    res.send('Delete Route Done ' + req.params.id);
}

// Get all student 
const getPutStudents = (req, res) => {
    res.send('Put Route Done');
}

// Get all student 
const createStudents = (req, res) => {

    obj_students.push({
        id      : getLatestId(obj_students) ,
        name    : req.body.name,
        skill   : req.body.skill,
        location: req.body.location 
    });

    fs.writeFileSync(path.join(__dirname, '../.data/students.json'), JSON.stringify(obj_students));

    res.status(200).json({
        message : 'student created successfully'
    });
}



module.exports = {
    getAllStudents, 
    createStudents,
    getPutStudents, 
    getDeleteStudents,
    getSingleStudents
}



