const jwt = require('jsonwebtoken');
const AdminModel = require('../models/AdminModel');

// auth Middleware
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



module.exports = {
    authCheck
}

