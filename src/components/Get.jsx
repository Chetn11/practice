import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Get() {
    const[data,setData]=useState([]);

    const getData=async ()=>{
        try {
            const req=await fetch("https://fakestoreapi.com/products");
            const res=await req.json();
            setData(res);
        } catch (error) {
            
        }
    }

    useEffect(()=>{
        getData();
    },[])
    console.log(data);
  return (
    <div>
      
    </div>
  )
}

export default Get
