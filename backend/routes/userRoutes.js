const express=require("express");
const router=express.Router();
const User=require('../models/user');

//1. user routes

//create
router.get('/',async(req,res)=>{
    const users=await User.find();
    res.json(users);
});


router.post('/',async(req,res)=>{
    //const newUser=await User.create(req.body);
   const newUser=new User(req.body);
   await newUser.save();
   res.status(201).json(newUser);
})

//READ all


//read by id

router.get('/:id',async(req,res)=>{
   const getId=await User.findById(req.params.id);
   res.send(getId);
})

//update

router.put('/:id',async(req,res)=>{
    const update=await User.findByIdAndUpdate(req.params.id,req.body);
    res.send({message:"updated"})

})

module.exports=router;