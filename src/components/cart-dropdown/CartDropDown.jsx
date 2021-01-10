import React from "react";
import Button from "../button/Button";
import "./cart-dropdown.scss";
import {connect} from "react-redux";
import CartItem from "../cart-item/CartItem";
import {selectCartItems} from "../../redux/cart/cart.selectors"

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
        cartItems: selectCartItems(state)
        // state.cart.cartItems
    })
}

export default connect(mapStateToProps)(CartDropDown);
