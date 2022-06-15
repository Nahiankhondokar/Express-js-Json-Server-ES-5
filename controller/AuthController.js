const AdminModel = require("../models/AdminModel");
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');


// admin Controller
const adminLogin = async (req, res) => {

    let { email, password } = req.body;
    let login_data = await AdminModel.findOne({ email });

    if(!login_data){
        res.status(200).json({
            message : 'email not match'
        });
    }else{
        // password has check
        let has_match = await bcryptjs.compare(password, login_data.password);
        if(!has_match){
            res.status(200).json({
                message : 'password not match'
            });
        }else{


            let token = jwt.sign({ id : login_data._id }, process.env.JWT_SECRET, {
                expiresIn : '1d'
            });


            res.status(200).json({
                name : login_data.name, 
                token : token
            });
        }
    }

}




module.exports = {
    adminLogin
}