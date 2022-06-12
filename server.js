const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const { authCheck } = require('./middleware/authMiddleware');


// environment 
const PORT = process.env.SERVER_PORT;

// Request body init
app.use(express.json());
app.use(express.urlencoded({ extended : false }));

// middleware Globally call
// app.use(authCheck);

// middleware specifically call
app.get('/api', authCheck, (req, res, next) => {
    console.log('data get');
    next();
});

// student route connection
app.use('/api/students', require('./routes/student'));







app.listen(PORT, () => console.log('server is running on ' + PORT));

