const mongoose = require("mongoose");
const connectDB = async() => {
    try{
        await mongoose.connect(process.env.MONGODB_URI).then(
           console.log("DB connected successfully")
        );
    }catch(err){
        console.log("MongoDB connection failed",err)
    }
 
};
module.exports=connectDB
