import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from "axios"
import { GET_PRODUCT_ERR, GET_PRODUCT_RES, GET_PRODUCT_suss } from '../Redux/ProductReducer/actionType';
import { getProductErr, getProductRes, getProductSuss } from '../Redux/ProductReducer/action';

const ProductPage = () => {


const products=useSelector((store)=>store.products);
console.log(products)
const dispatch=useDispatch();

const getProduct=async()=>{
    try {
        dispatch(getProductRes())
        const response=await axios.get(`http://localhost:8080/products`);
        console.log(response);
        dispatch(getProductSuss(response.data));// passing pay load
    } catch (error) {
        dispatch(getProductErr());
    }
}
useEffect(()=>{
    getProduct();
},[])
  return (
    <div>
      <h1>Product Page</h1>
      <div>{products?.map((ele)=>{})}</div>
    </div>
  )
}

export default ProductPage
