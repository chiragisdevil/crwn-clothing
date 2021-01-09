import {cartActionTypes} from "./cart-action-types";

export const setCartHidden = (cart) => ({
    type: cartActionTypes.SET_CART,
    payload: cart
});

export const setCartItem = (cart) => ({
    type: cartActionTypes.SET_CART_ITEM,
    payload: cart
});