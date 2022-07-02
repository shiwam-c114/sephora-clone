import { legacy_createStore } from "redux";
import allReducer from './Redux/reducer/reducer'

const store = legacy_createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

  // store

// action
 function addToCart(data) {
    return {
      type: 'addToCart',
      data:data
    }
   }
  
   function removeFromCart(data){
    return {
      type:'removeFromCart',
      data:data
    }
   }
  // reducer
  
  
  
  // Dispatch
  