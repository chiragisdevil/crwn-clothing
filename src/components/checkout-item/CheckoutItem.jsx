import React from "react";
import "./checkout-item.scss";
import {useDispatch} from "react-redux";
import {setCartItem, removeCartItem, removeSingleCartItem} from "../../redux/cart/cart-actions";

function CheckoutItem({cartItem}){
    const {name, imageUrl, price, quantity} = cartItem;
    const dispatch = useDispatch();
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="Item" />
            </div>
            <span className="name">{name}</span>
            <div className="quantity">
                <span className="arrowleft" onClick={()=> dispatch(removeSingleCartItem(cartItem))}>&#10094;</span>
                <span >{quantity}</span>
                <span className="arrowright" onClick={()=> dispatch(setCartItem(cartItem))}>&#10095;</span>
            </div>
            <span className="price">{price}</span>
            <span onClick={() => dispatch(removeCartItem(cartItem))} className="remove-button">&#10005;</span>
        </div>
    )
}

export default CheckoutItem;