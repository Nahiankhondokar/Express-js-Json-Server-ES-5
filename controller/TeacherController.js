const TeacherModel = require("../models/TeacherModel");

// all data
const getAllTeacher = async (req, res) => {

    let all_data = await TeacherModel.find();
    res.status(200).json(all_data);
}


// create data
const createTeacher = async (req, res) => {

    const { name, email, password } = req.body;

    if(!name || !email || !password){
        res.status(200).json({
            message : "required feilds"
        });
    }else{

        await TeacherModel.create({
            name : name,
            email : email,
            password : password
        });

        res.status(200).json({
            message : "Teacher Created"
        });
    }



}


// single data
const singleTeacher = async (req, res) => {
    let id = req.params.id;
    let single = await TeacherModel.findById(id);

    res.status(200).json(single);
}


// delete data
const deleteTeacher = async (req, res) => {
    let id = req.params.id;
    let deleteData = await TeacherModel.findByIdAndDelete(id);

    res.status(200).json({
        message :  "data deleted" 
    });
}


// update data
const updateTeacher = async (req, res) => {
    let id = req.params.id;
    const { name, email, password } = req.body;

    if(!name || !email || !password){
        res.status(200).json({
            message : "required feilds"
        });
    }else{
        await TeacherModel.findByIdAndUpdate(id, req.body, {
            new : true
        });
    
        res.status(200).json({
            message :  "data Updated" 
        });
    }
}





module.exports = {
    deleteTeacher,
    singleTeacher,
    createTeacher,
    getAllTeacher,
    updateTeacher
}
