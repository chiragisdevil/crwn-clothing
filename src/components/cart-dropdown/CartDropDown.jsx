import React from "react";
import Button from "../button/Button";
import "./cart-dropdown.scss";
import {connect} from "react-redux";
import CartItem from "../cart-item/CartItem";

function CartDropDown(props){
    const {cartItems} = props;
    return (
        <div className="cart-dropdown">
            <div className="cart-items" />
                {cartItems.map((cartItem) => <CartItem key={cartItem.key} cartitem={cartItem}/>)}
                <Button >CHECK OUT</Button>
        </div>
    )
}

function mapStateToProps(state){
    return({
        cartItems: state.cart.cartItems
    })
}

export default connect(mapStateToProps)(CartDropDown);
