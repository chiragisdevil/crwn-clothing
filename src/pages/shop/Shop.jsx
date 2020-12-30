import React from "react";
import shopData from "./shop-data.js";
import CollectionPreview from "../../components/collection-preview/CollectionPreview"

function Shop(){
    return(
        shopData.map((collectionItem) => {
            return (
                <CollectionPreview 
                    key = {collectionItem.id}
                    title = {collectionItem.title}
                    routeName = {collectionItem.routeName}
                    items = {collectionItem.items}
                />
            )
        })
    )
}

export default Shop;