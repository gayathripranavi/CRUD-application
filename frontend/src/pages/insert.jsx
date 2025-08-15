import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Insert()
{
    const [data,setData]=useState({name:'',age:'',address:''});
    const navigate=useNavigate();
    const insertForm=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:3003/user",data)
        .then(response=>{
            setData(response.data);
            alert("new user created");
            navigate('/');
        })
        .catch((err)=>{console.log("axios error in post api",err)})


    }
    
    return(
        <>
        <div class="container insert">
            <h2>Add User</h2>
            <div class="ins">
            <form onSubmit={insertForm}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input type="text" class="form-control" name="name" 
    onChange={(e)=>setData({...data,name:e.target.value})}/>
    
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Age</label>
    <input type="text" class="form-control" name="age"
    onChange={(e)=>setData({...data,age:e.target.value})}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Address</label>
    <input type="text" class="form-control" name="address"
    onChange={(e)=>setData({...data,address:e.target.value})}/>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
        </div>
        </>
    );
}