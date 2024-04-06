import React, { useState } from 'react'

function Dynamic() {
    const[val,setVal]=useState([]);

    const handelAdd=()=>{
        var x=[...val,[]];
        setVal(x);
    }
  
    const handelDelete=(i,e)=>{
        var del=[...val];
        del.splice(i);
        setVal(del);
    }
  return (
    <div>
    <h1>Dynamic</h1>
    <div>
    <button onClick={handelAdd}>add</button>
    </div>
    
    {val.map((ele,i)=>(
        <>
        <div>
        <input  type='text'/>
        <button onClick={()=>handelDelete(i)}>Delete</button>
        </div>
        
        </>
    ))}
      
    </div>
  )
}

export default Dynamic
