import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function InsertProduct()
{
    const [data,setData]=useState({productName:'',quantity:''});
    const navigate=useNavigate();

    const insertForm=(e)=>{
            e.preventDefault();
    
        axios.post('http://localhost:3003/product',data)
        .then(response=>{
            setData(response.data);
            alert("product added successfully");
            navigate('/displayProduct');
        })
        .catch((err)=>console.log("axios error product post api:",err));
    
    }



    return(
       <>
            <div class="container insert">
            <h2>Add Products</h2>
            <div class="ins">
            <form onSubmit={insertForm}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Product Name</label>
    <input type="text" class="form-control" name="productName" 
    onChange={(e)=>setData({...data,productName:e.target.value})}/>
    
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Quantity</label>
    <input type="text" class="form-control" name="quantity"
    onChange={(e)=>setData({...data,quantity:e.target.value})}/>
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
        </div>        
        </>
    );
}