import axios from 'axios'

const ADD_TO_SHOPPING_CART = "ADD_TO_SHOPPING_CART";
const REMOVE_FROM_SHOPPING_CART = "REMOVE_FROM_SHOPPING_CART";

let initialState = {
    shoppingCart: []
}

export default function reducer(state=initialState, action) {
    switch(action.type) {
      
        case ADD_TO_SHOPPING_CART + "_FULFILLED":
        console.log("shoppingcart", action.payload)
        console.log("inside reducer", state)
            return Object.assign({}, state, {shoppingCart:  action.payload});

        case REMOVE_FROM_SHOPPING_CART + "_FULFILLED":
           
            return Object.assign({}, state, {shoppingCart: action.payload});
            
        default:
            return state;
    }
}

export function addToShoppingCart(product) {
    // console.log("things",goop)
    return {
        type: ADD_TO_SHOPPING_CART,
        payload: axios.post('/api/cart', {product_id: product.id}).then((cart)=>{
            return cart.data
        })
    }
}

export function removeFromShoppingCart(product) {
   
    return {
        type: REMOVE_FROM_SHOPPING_CART,
        payload: axios.delete(`/api/cart/${product}`).then((cart)=>{
            return cart.data
        })
        
        // productIndex
    }
    
}
