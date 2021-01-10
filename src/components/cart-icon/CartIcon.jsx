import React from "react";
import "./cart-icon.scss";
import {ReactComponent as ShoppingCartIcon} from "../../assets/shopping-bag.svg";
import {setCartHidden} from "../../redux/cart/cart-actions";
import {connect, useDispatch} from "react-redux";
import {selectCartItemCount} from "../../redux/cart/cart.selectors"

function CartIcon({cartCount, cartHidden}){
    const dispatch = useDispatch();

    function updateCartHiddenFlag(){
        return(
            dispatch(
                setCartHidden({  
                       cartHidden: !cartHidden
                })
            )
        )
    }
    return(
        <div onClick={updateCartHiddenFlag} className="cart-icon">
            <ShoppingCartIcon className ="shopping-icon" />
            <span className="item-count">{cartCount}</span>
        </div>
    )
}
function mapStateToProps(state){
    const {cart:{cartHidden}} = state;
    const cartCount = selectCartItemCount(state);
    // cartItems.reduce((aggregator,cartItem)=>(aggregator = aggregator + cartItem.quantity),0); 
    return({
        cartCount: cartCount,
        cartHidden: cartHidden
    })
}
export default connect(mapStateToProps)(CartIcon);