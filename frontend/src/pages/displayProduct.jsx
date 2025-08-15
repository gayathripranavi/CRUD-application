import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function DisplayProduct()
{
    const [data,setData]=useState([]);
    const navigate=useNavigate();
    useEffect(()=>{
        axios.get('http://localhost:3003/product')
        .then(response=>{
            setData(response.data);
        })
        .catch((err)=>console.log("axios error product display api",err));
    },[])
    
    const add=()=>{
        navigate('/insertProduct');
    }

    const update=(id)=>{
        navigate(`updateProduct/${id}`);
    }
    const del=(id)=>{
     axios.delete(`http://localhost:3003/product/${id}`,data)
     .then(response=>{
        setData(response.data);
        alert("product deleted successfully");
        location.reload();
     })   
     .catch((err)=>{
        console.log("error occured in product delete api:",err);
     })
    }
    return(
        <body>
         <>
        
        <div className="container mt-5 text-center">
            <h2 className="mb-4">Products List</h2>
            <button type="button" class="btn btn-primary mb-4" onClick={add}>Add Product</button>

        <table className="table table-striped table-bordered">
  <thead>
    <tr>
      <th>PRODUCT NAME</th>
      <th>QUANTITY</th>
      <th>ACTION</th>
    </tr>
  </thead>
  <tbody>
    {
        data.map((datas)=>(
            
                <tr key={datas._id}>
                          

                    <td>{datas.productName}</td>
                    <td>{datas.quantity}</td>
                    
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