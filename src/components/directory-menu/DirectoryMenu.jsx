import React from "react";
import MenuItem from "../../components/menu-item/menu-item.jsx";
import sections from "./directory-data.js"

function DirectoryMenu(){
 
    return (
        <div className="directory-menu">
            {sections.map(
                (section) => <MenuItem 
                                title = {section.title} 
                                key = {section.id}
                                imageUrl = {section.imageUrl}
                                size = {section.size}
                            />
            )}
        </div>
    )
}

export default DirectoryMenu;