import React from "react";
import Button from "../button/Button";
import "./cart-dropdown.scss";

function CartDropDown(){
    return (
        <div className="cart-dropdown">
            <div className="cart-items" />
            <Button >CHECK OUT</Button>
        </div>
    )
}

export default CartDropDown;
