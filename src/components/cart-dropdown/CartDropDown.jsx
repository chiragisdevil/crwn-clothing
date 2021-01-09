import React from "react";
import Button from "../button/Button";
import "./cart-dropdown.scss";
import {connect} from "react-redux";

function CartDropDown({cartItems}){
    return (
        <div className="cart-dropdown">
            <div className="cart-items" />
            <Button >CHECK OUT</Button>
        </div>
    )
}

function mapStateToProps(state){
    return({
        cartItems: state.cartItems
    })
}

export default connect(mapStateToProps)(CartDropDown);
