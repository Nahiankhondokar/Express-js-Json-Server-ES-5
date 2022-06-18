const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const colors = require('colors');
const mongoDBConnection = require('./config/db');
const path = require('path');

// mongdoDB Connection
mongoDBConnection();

// multer config
const multer = require('multer');

const storage = multer.diskStorage({
    destination : (req, file, cb) => {
        
        if(file.fieldname == 'image'){
            cb(null, './media/users/');
        }else if(file.fieldname == 'cv'){
            cb(null, './media/cv/');
        }
        
    },
    filename : (req, file, cb) => {

        if(file.fieldname == 'image'){
            let ext = path.extname(file.originalname);
            let fileName = Date.now() + Math.round(Math.random() * 100000) + ext;
            // console.log(fileName);
            cb(null, fileName);
        }else if(file.fieldname == 'cv'){
            
            const date = new Date();
            const fileName = date.getMonth() +'-'+ date.getDate() +'-'+ date.getFullYear() +'-'+ file.originalname;
            cb(null, fileName);
        }


    }
});

const upload = multer({
    storage : storage,
    limits : (1024*1024),
    fileFilter : (req, file, cb) => {

        if(file.fieldname == 'image'){
            if(file.mimetype == 'image/png' || file.mimetype == 'image/jpg' || file.mimetype == 'image/jpeg'){
                cb(null, true);
            }else{
                cb(console.log('type does not match'));
            }
        }else if(file.fieldname == 'cv'){
            if(file.mimetype == 'application/pdf' ){
                cb(null, true);
            }else{
                cb(console.log('pdf type does not match'));
            }
        }

    }
});

const cpUpload = upload.fields([
    {
        name : 'image',
        maxCount : 10
    }, 
    {
        name : 'cv',
        maxCount : 1
    }
]);


// file upload for multiple img
app.post('/file-upload', cpUpload, (req, res) => {
    
    console.log(req.files);
    res.send('file uploaded');

});


// environment 
const PORT = process.env.SERVER_PORT;

// Request body init
app.use(express.json());
app.use(express.urlencoded({ extended : false }));

// student route connection
app.use('/api/students', require('./routes/student'));

// Admiin Route Connection
app.use('/api/admins', require('./routes/admin'));

// Teacher Route Connection
app.use('/api/teachers', require('./routes/teacher'));




app.listen(PORT, () => console.log(`Server is running on post ${PORT}`.bgGreen.white));

