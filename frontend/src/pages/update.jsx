import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Update(){
    const [data,setData]=useState({name:'',age:'',address:''});
    const {id}=useParams();
    const navigate=useNavigate();
    useEffect(()=>{
        axios.get(`http://localhost:3003/user/${id}`)
        .then(response=>{
            setData(response.data);
            
        })
        .catch((err)=>{console.log("axios error in update page",err)})
    },[id])
    const updateForm=(e)=>{
            e.preventDefault();
            axios.put(`http://localhost:3003/user/${id}`,data)
            .then(response=>{
            setData(response.data);
            alert("data updated");
            navigate('/');
            
        })
        .catch((err)=>{console.log("axios error in update page",err)})
    }
    return(
        <>
        <div class="container insert">
        <h2>Update user Data</h2>
        <div class="ins">
        <form onSubmit={updateForm}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input type="text" class="form-control" name="name" value={data.name}
    onChange={(e)=>setData({...data,name:e.target.value})}/>
    
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Age</label>
    <input type="text" class="form-control" name="age" value={data.age}
    onChange={(e)=>setData({...data,age:e.target.value})}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Address</label>
    <input type="text" class="form-control" name="address" value={data.address}
    onChange={(e)=>setData({...data,address:e.target.value})}/>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
        </div>
        </>
    );
}