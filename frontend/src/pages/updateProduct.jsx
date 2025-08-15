import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdateProduct()
{
    const [data,setData]=useState({productName:'',quantity:''});
    const {id}=useParams();
    const navigate=useNavigate();
    useEffect(()=>{
            axios.get(`http://localhost:3003/product/${id}`,data)
            .then(response=>{
                setData(response.data)
            })
            .catch((err)=>console.log("axios error in product display api",err));
    },[id])

    const updateForm=(e)=>{
                e.preventDefault();
                axios.put(`http://localhost:3003/product/${id}`,data)
                .then(response=>{
                    setData(response.data);
                    alert("product updated successfully");
                    navigate('/displayProduct');
                })
                .catch((err)=>console.log("axios error product update api:",err));
    }
    return(
       <>
        <div class="container insert">
        <h2>Update Product</h2>
        <div class="ins">
        <form onSubmit={updateForm}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Product Name</label>
    <input type="text" class="form-control" name="productName" value={data.productName}
    onChange={(e)=>setData({...data,productName:e.target.value})}/>
    
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Quantity</label>
    <input type="text" class="form-control" name="quantity" value={data.quantity}
    onChange={(e)=>setData({...data,quantity:e.target.value})}/>
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
        </div>
        </>
    
    );
}