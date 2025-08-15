const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
require("dotenv").config();
// const User=require('./models/user');
// const Product=require('./models/product');

//import userRoutes,productRoutes

const userRoutes=require('./routes/userRoutes');
const productRoutes=require('./routes/productRoutes');

const app=express();
app.use(cors(),express.json());

//use routes

app.use("/user",userRoutes);
app.use("/product",productRoutes);



//db connection

mongoose.connect('mongodb://localhost:27017/crud')
.then(()=>console.log("mongodb connected"))
.catch((err)=>console.log("mongodb connection error",err))



app.listen(process.env.PORT,()=>{
    console.log("server running on port:",process.env.PORT);
})