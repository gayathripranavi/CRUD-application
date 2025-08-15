const express=require("express");
const router=express.Router();
const Product=require('../models/product');

//2.product routes

//create
// router.get('/',(req,res)=>{
//     res.send("welcome")
// })


router.post('/',async(req,res)=>{
    const products=new Product(req.body);
    await products.save();
    res.status(201).json(products);
 })
 
router.get('/',async(req,res)=>{
    const products=await Product.find();
    res.json(products);
})

router.get('/:id',async(req,res)=>{
    const productId=await Product.findById(req.params.id);
    res.send(productId);
})

router.put('/:id',async(req,res)=>{
   const updateProduct= await Product.findByIdAndUpdate(req.params.id,req.body);
   res.json({message:'updated'});
})


router.delete('/:id',async(req,res)=>{
    await Product.findByIdAndDelete(req.params.id);
    res.send({message:'deleted'});
})

//delete

router.delete('/:id',async(req,res)=>{
        await User.findByIdAndDelete(req.params.id);
            res.json({ message: 'Deleted' });


})


module.exports=router;