const bcryptjs = require('bcryptjs');
const TeacherModel = require('../models/TeacherModel');
const jwt = require('jsonwebtoken');



// Authetication
const teacherLogin = async (req, res) => {

    const { email, password } = req.body;
    let login_data = await TeacherModel.findOne({email});

    if(!login_data){
        res.status(200).json({
            message :  "email does not match" 
        });
    }else{

        // password verify
        let pass_verify = await bcryptjs.compare(password, login_data.password);

        // jwt token
        let token = jwt.sign({ id : login_data.id}, process.env.JWT_SECRET, {
            expiresIn : "1d"
        });


        if(!pass_verify){
            res.status(200).json({
                message :  "wrong password" 
            });
        }else{

            res.status(200).json({
                message :  "Teacher login",
                name : login_data.name,
                token : token
            });

        }

    }

}



module.exports = teacherLogin;