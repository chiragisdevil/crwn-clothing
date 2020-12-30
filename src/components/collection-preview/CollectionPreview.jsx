import React from "react";
import CollectionItem from "../collection-item/CollectionItem.jsx"
import "./collectionPreview.scss";
import {Link, withRouter} from "react-router-dom";

function CollectionPreview(props){
    const items = props.items;
    const filteredItems = items.slice(0,4);

    return(
        <div className="collection-preview">
            <h1 className="title">
                <Link to={`${props.match.url}/${props.routeName}`}>
                    {props.title.toUpperCase()}
                </Link>
            </h1>
            <div className="preview">
                {filteredItems.map((item) => 
                    <CollectionItem 
                        key = {item.id}
                        name = {item.name}
                        imageUrl = {item.imageUrl}
                        price = {item.price}
                    />
                )}
            </div>
        </div>
    )
}

export default withRouter(CollectionPreview);
