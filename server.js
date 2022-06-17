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
        cb(null, './media/users/');
    },
    filename : (req, file, cb) => {

        let ext = path.extname(file.originalname);
        let fileName = Date.now() + Math.round(Math.random() * 100000) + ext;
        // console.log(fileName);
        cb(null, fileName);
    }
});

const upload = multer({
    storage : storage
});


// environment 
const PORT = process.env.SERVER_PORT;

// Request body init
app.use(express.json());
app.use(express.urlencoded({ extended : false }));


// // file upload for single img
// app.post('/file-upload', upload.single('image'), (req, res) => {
//     res.send('file upload');
// });

// file upload for multiple img
app.post('/file-upload', upload.array('image'), (req, res) => {
    res.send('file upload');
});

// student route connection
app.use('/api/students', require('./routes/student'));

// Admiin Route Connection
app.use('/api/admins', require('./routes/admin'));

// Teacher Route Connection
app.use('/api/teachers', require('./routes/teacher'));




app.listen(PORT, () => console.log(`Server is running on post ${PORT}`.bgGreen.white));

