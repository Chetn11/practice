import React, { useEffect, useState } from 'react'

function FetachData() {


    const[data,setData]=useState([]);

    const getdata=async ()=>{

        

        try {
            const req=await fetch("https://fakestoreapi.com/products");
            const res=await req.json();
            setData(res);
        } catch (error) {
            
        }
    }

    useEffect(()=>{
        getdata();
    },[])
    console.log(data);
  return (
    <div>
      
    </div>
  )
}

export default FetachData
