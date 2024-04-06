import React, { useState } from 'react'

function Dynamic2() {

    const[data,setData]=useState([]);

    const handelAdd=()=>{
        var x=[...data,[]];
        setData(x);

    }

    const handelDelete=(e,i)=>{
        var y=[...data];
        y.splice(i,1)
        setData(y);
    }
    console.log(data);
  return (
    <div>
    <button onClick={handelAdd}>Add</button>
    {data.map((ele,i)=>(
        <div key={i}>
        <input/>
        <button onClick={handelDelete}>x</button>
        </div>
    ))}
      
    </div>
  )
}

export default Dynamic2
