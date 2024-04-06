import React, { useRef } from 'react'

function Ref() {

    const ref=useRef()

    const handelRef=()=>{
        ref.current.focus();
    }
  return (
    <div>
      <input ref={ref} />
      <button onClick={handelRef}>click</button>
    </div>
  )
}

export default Ref
