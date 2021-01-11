import React from "react";
import "./checkout-item.scss";
import {useDispatch} from "react-redux";
import {removeCartItem} from "../../redux/cart/cart-actions";

function CheckoutItem({cartItem}){
    const {name, imageUrl, price, quantity} = cartItem;
    const dispatch = useDispatch();
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="Item" />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">{quantity}</span>
            <span className="price">{price}</span>
            <span onClick={() => dispatch(removeCartItem(cartItem))} className="remove-button">&#10005;</span>
        </div>
    )
}

export default CheckoutItem;