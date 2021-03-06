import {createSelector} from "reselect";

const selectCart = (state) => state.cart;

export const selectCartItems=
         createSelector
         (
            [selectCart],
            (cart) => ( 
                cart.cartItems
            )
        )

export const selectCartItemCount = 
        createSelector(
            [selectCartItems],
            (cartItems) => 
                cartItems.reduce((aggregator, cartItem) => (aggregator + cartItem.quantity), 0 )
        )

export const selectCartHidden = 
            createSelector(
                [selectCart],
                (cart) => cart.cartHidden
            )

export const selectCartItemsTotal = 
            createSelector(
                [selectCartItems],
                (cartItems) => 
                    cartItems.reduce((aggregator,cartItem) => aggregator+(cartItem.quantity*cartItem.price),0)
            )