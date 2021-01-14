function addItemToCart(cartItems, cartItemToAdd){
    const found = cartItems.find((cartitem) => (
        cartitem.id===cartItemToAdd.id 
    ))

    if (found){
        return(
            cartItems.map((cartitem)=>
                cartitem.id===cartItemToAdd.id
                ? {...cartitem,quantity:cartitem.quantity+1}
                : cartitem)
            )
        
    } else{
        return[
            ...cartItems,
            {
                ...cartItemToAdd, 
                quantity: 1
            }
        ]
    }
}

function deleteItemToCart(cartItems, cartItemToDelete){
    const found = cartItems.find((cartitem) => (
        cartitem.id===cartItemToDelete.id && cartItemToDelete.quantity !== 1
    ))

    if (found){
        return(
            cartItems.map((cartitem)=>
                cartitem.id===cartItemToDelete.id
                ? {...cartitem,quantity:cartitem.quantity-1}
                : cartitem)
        )
        
    } else{
        return (
            cartItems.filter(cartItem => cartItem.key !== cartItemToDelete.id)
        )
    }
}

export default addItemToCart;
export {deleteItemToCart} ;