import { GET_PRODUCT_ERR, GET_PRODUCT_RES, GET_PRODUCT_suss } from "./actionType"

export const getProductRes=()=>{
    return{type:GET_PRODUCT_RES}
}

export const getProductSuss=(payload)=>{
    return{type:GET_PRODUCT_suss, payload:payload}
}

export const getProductErr=()=>{
    return{type:GET_PRODUCT_ERR}
}