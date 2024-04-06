import React from 'react'

function Test() {

    var arr=["<input type='text' placeholder='Email'/>"];


  return (
    <div>
    <h1>Form</h1>
      <div id='form'>
       {arr.map((ele,index)=>(
        <div key={index}>{ele}</div>
         
       ))}
       <button>Create</button>
      </div>
    </div>
  )
}

export default Test
