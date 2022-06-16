const TeacherModel = require("../models/TeacherModel");
const bcryptjs = require('bcryptjs');
const asyncHandler = require('express-async-handler');

// all data
const getAllTeacher = asyncHandler(async (req, res) => {

    let all_data = await TeacherModel.find();
    res.status(200).json(all_data);
});


// create data
const createTeacher = async (req, res) => {

    const { name, email, password } = req.body;

    if(!name || !email || !password){
        res.status(200).json({
            message : "required feilds"
        });
    }else{

        const salt = await bcryptjs.genSalt(10);
        const has_pass = await bcryptjs.hash(password, salt);

        await TeacherModel.create({
            name : name,
            email : email,
            password : has_pass
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

        const salt = await bcryptjs.genSalt(10);
        const has_pass = await bcryptjs.hash(password, salt);

        await TeacherModel.findByIdAndUpdate(id,{
            ...req.body,
            password : has_pass
        }, {
            new : true
        });
    
        res.status(200).json({
            message :  "data Updated" 
        });
    }
}


// profile page
const teacherProfile = (req, res) => {

    res.status(200).json(req.user);
}


// home page
const teacherHome = (req, res) => {
    res.status(200).json(req.user);
}




module.exports = {
    deleteTeacher,
    singleTeacher,
    createTeacher,
    getAllTeacher,
    updateTeacher,
    teacherProfile,
    teacherHome
}
