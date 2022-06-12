

// auth Middleware
const authCheck = (req, res, next) => {
    console.log('done');
    next();
}



module.exports = {
    authCheck
}

