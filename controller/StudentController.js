const fs = require('fs');
const path = require('path');

// students data 
const students = fs.readFileSync(path.join(__dirname, '../.data/students.json'));
const obj_students = JSON.parse(students);

// latest id 
const getLatestId = (obj_students) => {
    return (obj_students == '') ? 1 : obj_students[obj_students.length - 1].id + 1;
}

// Get all student 
const getAllStudents = (req, res) => {

    (obj_students.length > 0) ? res.status(200).json(obj_data) : res.status(200).json({
        message : 'data not found'
    });
}

// Get all student 
const getSingleStudents = (req, res) => {
    let id = req.params.id;

    if(obj_students.some(data => data.id == id)){
        let single = obj_students.find(data => data.id == id);
        res.status(200).json(single);
    }else{
        res.status(200).json({
            message : 'data not found'
        });
    }
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

// Get all student 
const getPutStudents = (req, res) => {
    res.send('Put Route Done');
}

// Get all student 
const createStudents = (req, res) => {


    if( req.body.name == '' || req.body.location == '' || req.body.skill == '' ){
        res.status(200).json({
            message : 'all feilds are required !'
        });
    }else{

        obj_students.push({
            id      : getLatestId(obj_students) ,
            name    : req.body.name,
            skill   : req.body.skill,
            location: req.body.location 
        });
    
        fs.writeFileSync(path.join(__dirname, '../.data/students.json'), JSON.stringify(obj_students));


        res.status(200).json({
            message : 'data created'
        });

    }

}



module.exports = {
    getAllStudents, 
    createStudents,
    getPutStudents, 
    getDeleteStudents,
    getSingleStudents
}



