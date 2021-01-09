import cartActionTypes from "./cart-item.types";

const INITIAL_STATE= {
    cartItems : []
}

const cartItemReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case cartActionTypes.SET_CART_ITEMS:
            return ({
                    ...state,
                    cartItems: [...state.cartItems,(action.payload)]   
            })  
        default:
            return state;
    }
}

export default cartItemReducer;