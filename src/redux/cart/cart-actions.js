import {cartActionTypes} from "./cart-action-types";

export const setCartHidden = (cart) => ({
    type: cartActionTypes.SET_CART,
    payload: cart
});

export const setCartItem = (cart) => ({
    type: cartActionTypes.SET_CART_ITEM,
    payload: cart
});

export const removeCartItem = (cartItem) => ({
    type: cartActionTypes.REMOVE_CART_ITEM,
    payload: cartItem
});

export const removeSingleCartItem = (cartItem) => ({
    type:cartActionTypes.DELETE_SINGLE_CART_ITEM,
    payload: cartItem
})