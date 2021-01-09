import React, {useState} from "react";
import "./collectionItem.scss";
import Button from "../button/Button";
import {useDispatch} from "react-redux";
import {setCartItem} from "../../redux/cart/cart-actions";

function CollectionItem(props){
    const [hidden, setHidden] = useState(true);
    const dispatch = useDispatch();

    function addToCart(){
        dispatch(setCartItem({
            key: props.id, 
            id: props.id,
            imageUrl: props.imageUrl,
            name: props.name,
            price: props.price
        }))
    }
    return(
        <div className="collection-item">
            <div onMouseOver={()=> setHidden(false)} onMouseLeave={()=> setHidden(true)}className="image" style={{
                backgroundImage: `url(${props.imageUrl})`
                }}>
                <div className="collection-button" onClick={addToCart}>
                    {hidden?null:<Button inverted={true}>Add to Cart</Button>} 
                </div>
            </div>
            <div className="collection-footer">
                <span className="name">{props.name}</span>
                <span className="price">{props.price}</span>
            </div>
        </div>
    )
}
export default CollectionItem;