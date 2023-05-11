const mongoose = require('mongoose');
// const dotenv = require('dotenv');
require ("dotenv").config();

//mongodb+srv://ssbhardwaj:<password>@cluster0.hqg5chq.mongodb.net/

const dbConnect = async () => {
    console.log(process.env.MongoDB)
    try {
        await mongoose.connect(process.env.MongoDB, {
            useUnifiedTopology:true,
            useNewUrlParser:true,
        });
        console.log(`DB connection successfully`);
    }
    catch(error){
        console.log(`Error ${error.message}`);
    }

};

module.exports = dbConnect;