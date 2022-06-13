const mongoose = require('mongoose');


const adminModel = mongoose.Schema({
    name : {
        type : String,
        required : [true, "Name Feild is required"]
    },
    email : {
        type : String,
        required : [true, "Email Feild is required"],
        unique : true
    },
    cell : {
        type : String,
        required : [true, "cell Feild is required"],
        unique : true
    },
    username : {
        type : String,
        required : [true, "username Feild is required"],
        maxLength : 10,
        minLength : 5
    },
    location : {
        type : String,
        required : false,
        default : "Dhaka"
    },
    skill : {
        type : String,
        required : false
    },
    password : {
        type : String
    }
}, {
    timestamps : true
});



module.exports = mongoose.model('Admin', adminModel);