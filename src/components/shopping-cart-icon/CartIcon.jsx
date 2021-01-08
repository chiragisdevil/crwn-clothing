import React from "react";
import "./cart-icon.scss";
import {ReactComponent as ShoppingCartIcon} from "../../assets/shopping-bag.svg";
import {setCartHidden} from "../../redux/cart/cart-actions";
import {connect, useDispatch} from "react-redux";

function CartIcon({cart}){
    const dispatch = useDispatch();

    function updateCartHiddenFlag(){
        const {cartHidden} = cart;
        const swapCartHidden = !cartHidden;
        return(
            dispatch(
                setCartHidden({  
                       cartHidden: swapCartHidden
                })
            )
        )
    }
    return(
        <div onClick={updateCartHiddenFlag} className="cart-icon">
            <ShoppingCartIcon className ="shopping-icon" />
            <span className="item-count">0</span>
        </div>
    )
}

function mapStateToProps(state){
    return({
            cart: state.cart.cart
        
    })
}
export default connect(mapStateToProps)(CartIcon);