const mongoose = require('mongoose');

// set connection
const connectMongoDB = async () => {

    try{

        let connect = await mongoose.connect('mongodb+srv://nahian:1234567890@testingcluster.mg6ys.mongodb.net/first-express?retryWrites=true&w=majority');
        console.log('mongoose server is connected on HOST ' + connect.connection.host);
    }catch(err){
        console.log(err);
    }

}


module.exports = connectMongoDB;