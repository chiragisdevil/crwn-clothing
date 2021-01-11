import React from "react";
import Button from "../button/Button";
import "./cart-dropdown.scss";
import {connect, useDispatch} from "react-redux";
import CartItem from "../cart-item/CartItem";
import {selectCartItems} from "../../redux/cart/cart.selectors";
import {withRouter} from "react-router-dom";
import {setCartHidden} from "../../redux/cart/cart-actions";

function CartDropDown({cartItems, history}){
    const dispatch = useDispatch()
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {   (cartItems.length===0)
                    ? <span className="cart-empty">Your cart is empty</span>
                    : cartItems.map((cartItem) => <CartItem key={cartItem.key} cartitem={cartItem}/>)}
                <Button onClick={
                    ()=>{
                        history.push("/crwn-clothing/checkout");
                        dispatch(setCartHidden({
                            cartHidden: true
                        }));
                    }               
                }>CHECK OUT</Button>
            </div>
        </div>
    )
}

function mapStateToProps(state){
    return({
        cartItems: selectCartItems(state)
    })
}

export default withRouter(connect(mapStateToProps)(CartDropDown));
