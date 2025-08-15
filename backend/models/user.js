const mongoose=require("mongoose");

//1.create user Schema:

const userSchema=new mongoose.Schema({
    name:String,
    age:Number,
    address:String
})

module.exports=mongoose.model("User",userSchema);

