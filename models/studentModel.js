const mongoose = require('mongoose');



const studentModel = mongoose.Schema({
    name : String,
    location   : String, 
    skill : String, 
    age  : Number
}, {
    timestamps : true
});



module.exports = mongoose.model('Student', studentModel);