const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const connectMongoDB = require('./config/db');
const colors = require('colors');


// mongoose connection
connectMongoDB();

// environment 
const PORT = process.env.SERVER_PORT;

// Request body init
app.use(express.json());
app.use(express.urlencoded({ extended : false }));

// student route connection
app.use('/api/students', require('./routes/student'));







app.listen(PORT, () => console.log('server is running on ' + PORT));

