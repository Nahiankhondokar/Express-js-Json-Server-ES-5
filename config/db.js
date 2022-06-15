const mongoose = require('mongoose');

// mongoDB Connection
const mongoDBConnection = async () => {

    try{
        let connect = await mongoose.connect(process.env.MONGO_DB);
        console.log(`mongodb server is running on host ${connect.connection.host}`.bgBlue);
    }catch(err){
        console.log(`${err}`.bgRed);
    }


}


module.exports = mongoDBConnection;