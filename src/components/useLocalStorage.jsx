import React, { useState } from 'react'

function useLocalStorage(key,initValue) {
    
    const svalue=localStorage.getItem(key);
    const initial=svalue?JSON.parse(svalue):initValue;

    const[value,setValue]=useState(initial);

    const setstore=(newValue)=>{
      setValue(newValue);
      localStorage.setItem(key,JSON.stringify(newValue));
    }


  return [value,setstore]
}

export default useLocalStorage
