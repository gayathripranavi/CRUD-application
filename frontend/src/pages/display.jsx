import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Display()
{
    const [data,setData]=useState([]); 
    const navigate=useNavigate();
    useEffect(()=>{
        axios.get('http://localhost:3003/user')
        .then(response=>{
            setData(response.data);
            
        })
        .catch((err)=>{console.log("axios error in get api",err)})
    },[])
    const add=()=>{
        navigate('/insert');
    }

    const del=(id)=>{
        console.log(`inside del ${id}`)
        axios.delete(`http://localhost:3003/user/${id}`)
        .then(response=>{
            setData(response.data)
            alert("user deleted");
            location.reload();
        })
        .catch((err)=>console.log("axios error delete api",err))
    }
    
    const update=(id)=>{
        navigate(`update/${id}`);
    }
    return(
       
       <body>
         <>
        
        <div className="container mt-5 text-center">
            <h2 className="mb-4">Users List</h2>
            <button type="button" class="btn btn-primary mb-4" onClick={add}>Add User</button>

        <table className="table table-striped table-bordered">
  <thead>
    <tr>
      <th>NAME</th>
      <th>AGE</th>
      <th>ADDRESS</th>
      <th>ACTION</th>
    </tr>
  </thead>
  <tbody>
    {
        data.map((datas)=>(
            
                <tr key={datas._id}>
                          

                    <td>{datas.name}</td>
                    <td>{datas.age}</td>
                    <td>{datas.address}</td>
                    <td><button class="btn btn-success m-1" onClick={()=>update(datas._id)}>UPDATE</button>
                    <button class="btn btn-danger" onClick={()=>del(datas._id)}>DELETE</button></td>
                </tr>
           
        ))
 
       }
    
  </tbody>
</table>
        </div>
        
        </>
       </body>
    );
}