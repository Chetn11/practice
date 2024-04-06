import React, { useMemo, useState } from 'react'

function Memo() {
    const[add,setAdd]=useState(0);
    const[sub,setSub]=useState(100);


    const multi=useMemo(()=>{
        console.log("check");
        return add*10;
    },[add])
    

  return (
    <div>
      <h1>{multi}</h1>
      <h1>{add}</h1>
      <h1>{sub}</h1>
      <button onClick={()=>setAdd(add+1)}>add</button>
      <button onClick={()=>setSub(sub-1)}>sub</button>
    </div>
  )
}

export default Memo
