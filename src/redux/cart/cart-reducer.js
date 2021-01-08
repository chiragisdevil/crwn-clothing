import {cartActionTypes} from "./cart-action-types";

const INITIAL_STATE = {
    cart:{
        cartHidden: true
    }
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case cartActionTypes.SET_CART:
            return ({
                    ...state,
                    cart:action.payload
            })
        default:
            return state
    }
}

export default cartReducer;