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

export default addItemToCart;