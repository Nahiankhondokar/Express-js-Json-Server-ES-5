
// Get all student 
const getAllStudents = (req, res) => {
    res.send('GET Route Done');
}

// Get all student 
const getSingleStudents = (req, res) => {
    res.send('Single Student Route Done ' + req.param.id);
}

// Get all student 
const getDeleteStudents = (req, res) => {
    res.send('Delete Route Done ' + req.params.id);
}

// Get all student 
const getPutStudents = (req, res) => {
    res.send('Put Route Done');
}

// Get all student 
const getPostStudents = (req, res) => {
    res.send('Post Route Done');
}



module.exports = {
    getAllStudents, 
    getPostStudents,
    getPutStudents, 
    getDeleteStudents,
    getSingleStudents
}



