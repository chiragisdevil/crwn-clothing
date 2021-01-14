import {cartActionTypes} from "./cart-action-types";
import addItemToCart, {deleteItemToCart} from "./cart.utils";

const INITIAL_STATE = {
    cartHidden: true,
    cartItems : []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case cartActionTypes.SET_CART:
            return ({
                ...state,
                cartHidden:!state.cartHidden
            })
        case cartActionTypes.SET_CART_ITEM:
            return({
                ...state,
                cartItems:addItemToCart(state.cartItems, action.payload)
            })
        case cartActionTypes.REMOVE_CART_ITEM:
            return({
                ...state,
                cartItems: state.cartItems.filter(
                    cartItem => cartItem.key !== action.payload.key
                )
            })
        case cartActionTypes.DELETE_SINGLE_CART_ITEM:
            return({
                ...state,
                cartItems: deleteItemToCart(state.cartItems, action.payload)
            })
        default:
            return state
    }
}

export default cartReducer;