const mongoose = require('mongoose');

// set connection
const connectMongoDB = async () => {

    try{

        let connect = await mongoose.connect(process.env.MONGO_DB);
        console.log(`mongoose server is connected on HOST ${connect.connection.host}`.bgBlue.white);
    }catch(err){
        console.log(`${err}`.bgRed.white);
    }

}


module.exports = connectMongoDB;