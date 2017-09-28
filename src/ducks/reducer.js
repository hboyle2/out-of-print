const ADD_TO_SHOPPING_CART = "ADD_TO_SHOPPING_CART";
const REMOVE_FROM_SHOPPING_CART = "REMOVE_FROM_SHOPPING_CART";

let initialState = {
    shoppingCart: []
}

export default function reducer(state=initialState, action) {
    switch(action.type) {
      
        case ADD_TO_SHOPPING_CART:
        console.log("shoppingcart", action.payload)
        console.log("inside reducer", state)
            return Object.assign({}, state, {shoppingCart: [...state.shoppingCart, action.payload]});

        case REMOVE_FROM_SHOPPING_CART:
            let newArray = state.shoppingCart.slice();
            newArray.splice(action.index, 1);
            return Object.assign({}, state, {shoppingCart: newArray});
            
        default:
            return state;
    }
}

export function addToShoppingCart(product) {
    return {
        type: ADD_TO_SHOPPING_CART,
        payload: product
    }
}

export function removeFromShoppingCart(productIndex) {
    return {
        type: REMOVE_FROM_SHOPPING_CART,
        payload: productIndex
    }
}