import {PRODUCT_ERROR, PRODUCT_LOADING, PRODUCT_SUCCESS} from "./Type";
import axios from "axios";

export const getProduct = ()=> async dispatch =>{
    try {
        dispatch({
            type:PRODUCT_LOADING
        })
        const response =  await axios.get("https://moveon-api-server.sbox.ali2bd.net/api/v1/customer/dummy-product")
        dispatch({
            type:PRODUCT_SUCCESS,
            payload:response.data
        })
    }catch (e) {
        dispatch({
            type:PRODUCT_ERROR
        })
    }
}