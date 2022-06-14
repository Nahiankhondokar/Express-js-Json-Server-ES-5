const AdminModel = require("../models/AdminModel");
const bcryptjs = require('bcryptjs');


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
            res.status(200).json({
                message : 'Admin login Successfully'
            });
        }
    }

}




module.exports = {
    adminLogin
}