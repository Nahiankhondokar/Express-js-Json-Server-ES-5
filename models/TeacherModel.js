const mongoose = require('mongoose');

const teacherModel = mongoose.Schema({
    name : {
        type : String,
        required : [true, "Name feild is required"]
    },
    email : {
        type : String,
        required : [true, "emali feild is required"],
        unique : true
    },
    password : {
        type : String,
        required : [true, "password feild is required"]
    }
});

module.exports = mongoose.model('Teacher', teacherModel);