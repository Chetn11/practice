import React, { useState } from 'react'

function Dynamic() {

    const[val,setVal]=useState([]);

    const handelAdd=()=>{
        const x=[...val,[]];
        setVal(x);
    }

    const handelDelete=(i)=>{
        const y=[...val];
        y.splice(i);
        setVal(y);
    }

  return (
    <div>
    <h1>Dynamic</h1>
    <button onClick={handelAdd}>Add</button>
    {val.map((ele,i)=>(
        <>
        <input/>
        <button onClick={()=>handelDelete(i)}>x</button>
        </>
    ))}
      
    </div>
  )
}

export default Dynamic
