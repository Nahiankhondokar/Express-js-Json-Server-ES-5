const jwt = require('jsonwebtoken');
const AdminModel = require('../models/AdminModel');
const TeacherModel = require('../models/TeacherModel');

// auth Middleware for admin
const authCheck = async (req, res, next) => {


    if(req.headers.authorization){

        // token 
        let token = req.headers.authorization.split(' ')[1];
        // token varify
        let token_varify = jwt.verify(token, process.env.JWT_SECRET);

        if(token_varify){

            const { id } = token_varify;
            req.user = await AdminModel.findById(id);

            next();
        }else{
            res.json({
                message : 'token invalid'
            });
        }
        
    }else{
        res.json({
            message : 'token not found'
        });
    }

}



// Auth Middleware for Teacher
const teacherAuthCheck = async (req, res, next) => {

    if(req.headers.authorization){
        const token = req.headers.authorization.split(' ')[1];

        // token verify
        const token_verify = jwt.verify(token, process.env.JWT_SECRET);

        if(token_verify){
            const { id }  = token_verify;
            req.user = await TeacherModel.findById(id);
            // res.status(200).json(single);


            next();
        }else{
            res.status(200).json({
                message :  "token is no match" 
            });
        }
        

    }else{
        res.status(200).json({
            message :  "invalid token" 
        });
    }



}


module.exports = {
    authCheck,
    teacherAuthCheck
}

