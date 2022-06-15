const Admin = require('../models/AdminModel');
const bcryptjs = require('bcryptjs');


// GEt all Admins
const getAllAdmins = async (req, res) => {

    let all_data = await Admin.find();
    res.status(200).json(all_data);

}


// GEt Single Admins
const getSingleAdmins = async (req, res) => {

    let id = req.params.id;
    let single =  await Admin.findById(id);
    res.status(200).json(single);
}


// Create Admins
const getCreateAdmins = async (req, res) => {

    const { name, email, cell, location, skill, username, password } = req.body;

    // password hash
    const salt = await bcryptjs.genSalt(10);
    const has_pass = await bcryptjs.hash(password, salt);

    // validation 
    if(!name || !email || !cell || !location || !skill || !username || !password){
        res.status(200).json({
            message : 'All feilds are required'
        });
    }else{
        // Admin create
        await Admin.create({
            ...req.body,
            password : has_pass
        });

        res.status(200).json({
            message : 'created admin'
        });
    }


}


// GEt Update Admins
const getUpdateAdmins = async (req, res) => {

    let id = req.params.id;
    const { name, email, cell, location, skill, username, password } = req.body;

    // password hash
    const salt = await bcryptjs.genSalt(10);
    const has_pass = await bcryptjs.hash(password, salt);

    // validation 
    if(!name || !email || !cell || !location || !skill || !username || !password){
        res.status(400).json({
            message : 'All feilds are required'
        });
    }else{
        let data = await Admin.findByIdAndUpdate(id, {
            ... req.body,
            password : has_pass
        }, {
            new : true
        });

        res.status(200).json({
            message : `${data.name}'s data updated Successfully`
        });
    }

}


// GEt Delete Admins
const getDeleteAdmins = async (req, res) => {

    let id = req.params.id;
    const del_data = await Admin.findById(id);
    if(del_data){
        let data = await Admin.findByIdAndDelete(id);
        res.status(200).json({
            message : `Deleted ${data.name}'s all data`
        });
    }else{
        res.status(404).json({
            message : 'data not found'
        });
    }

}




module.exports = {
    getAllAdmins,
    getSingleAdmins,
    getCreateAdmins,
    getUpdateAdmins,
    getDeleteAdmins
}