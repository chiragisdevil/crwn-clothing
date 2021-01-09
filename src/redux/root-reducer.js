import {combineReducers} from "redux";

import userReducer from "./user/user.reducer.js";
import cartReducer from "./cart/cart-reducer";
import cartItemReducer from "./cartItem/cart-item-reducer";

export default combineReducers({
    user: userReducer,
    cart: cartReducer
})