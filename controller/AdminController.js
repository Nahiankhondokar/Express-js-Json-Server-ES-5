const Admin = require('../models/AdminModel');


// GEt all Admins
const getAllAdmins = async (req, res) => {

    let all_data = await Admin.find();
    res.status(200).json(all_data);

}


// GEt Single Admins
const getSingleAdmins = async (req, res) => {

    let id = req.body.id;
    let single =  await Admin.findById(id);

    res.status(200).json(single);
}


// Create Admins
const getCreateAdmins = async (req, res) => {

    const { name, email, cell, location, skill, username, password } = req.body;
    await Admin.create({
        name : name,
        email : email,
        cell : cell,
        location : location,
        skill : skill,
        username : username,
        password : password

    });

    res.status(200).json({
        message : 'created admin'
    });
}


// GEt Update Admins
const getUpdateAdmins = (req, res) => {
    res.status(200).json({
        message : 'all admin'
    });
}


// GEt Delete Admins
const getDeleteAdmins = (req, res) => {
    res.status(200).json({
        message : 'all admin'
    });
}




module.exports = {
    getAllAdmins,
    getSingleAdmins,
    getCreateAdmins,
    getUpdateAdmins,
    getDeleteAdmins
}