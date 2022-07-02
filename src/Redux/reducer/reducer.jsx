import { combineReducers } from "redux";    
import Cart  from "./cartReducer";
import isLoggedReducer from './isLoged'

const allReducers = combineReducers({
    cart:Cart,
    islogged:isLoggedReducer
})

export default allReducers