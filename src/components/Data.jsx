import React from 'react'
import useData from './useData'

function Data() {
    const{data}=useData("https://fakestoreapi.com/products");
    console.log(data);
  return (
    <div>
      
    </div>
  )
}

export default Data
