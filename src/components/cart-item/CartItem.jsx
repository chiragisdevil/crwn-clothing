import React from "react";
import "./cart-item.scss"

function CartItem(props){
    const {cartitem} = props; 
    const {imageUrl,name,price,quantity}= cartitem;
    return(
        <div className="cart-item">
            <img src={imageUrl} alt="cart item" />
            <div className="item-details">
                <span className="name">Name: {name}</span>
                <span className="price">Price: ${price} x {quantity}</span>
            </div>
        </div>
    )
}

export default CartItem;