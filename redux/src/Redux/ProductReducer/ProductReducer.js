import { GET_PRODUCT_ERR, GET_PRODUCT_RES, GET_PRODUCT_suss } from "./actionType";


const initState={
    products:[],
    isLoading:false,
    isError:false
}

export const ProductReducer=(state=initState,action)=>{
    switch(action.type){

        case GET_PRODUCT_RES:{
            return {
                ...state,
                isLoading:true,
                isError:false
            }
        }
        case GET_PRODUCT_suss:{
            return{
                ...state,
                products:action.payload,
                isLoading:false,
                isError:false
            }
        }

        case GET_PRODUCT_ERR:{
            return{
                ...state,
                isLoading:false,
                isError:true
            }
        }
        default:
            return state;
    }
}