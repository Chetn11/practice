import React, { useReducer } from 'react'


let init=0;
const reducer=(state,action)=>{

      switch(action){
        case"inc":
        return state+1;
        case"dec":
         return state-1;

        default:
            return state
      }
}
function Reducer() {

  const [count,dispatch]=useReducer(reducer,init);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>dispatch("inc")}>+</button>
      <button onClick={()=>dispatch("dec")}>-</button>
    </div>
  )
}

export default Reducer
