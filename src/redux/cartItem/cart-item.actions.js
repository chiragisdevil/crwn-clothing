import cartActionTypes from "./cart-item.types";

const setCartItems = (cartItems) => ({
    type: cartActionTypes.SET_CART_ITEMS,
    payload: cartItems
})

export default setCartItems;