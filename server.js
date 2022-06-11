const express = require('express');
const app = express();
const dotenv = require('dotenv').config();


// environment 
const PORT = process.env.SERVER_PORT;

// student route connection
app.use('/api/students', require('./routes/student'));



app.listen(5000, () => console.log('server is running on ' + PORT));




