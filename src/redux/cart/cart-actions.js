import {cartActionTypes} from "./cart-action-types";

export const setCartHidden = (cart) => ({
    type: cartActionTypes.SET_CART,
    payload: cart
})