import {combineReducers} from "redux";
import ProductReducer from "./Service/ProductReducer";

const RootReducer = combineReducers({
    product:ProductReducer,



})

export default RootReducer;