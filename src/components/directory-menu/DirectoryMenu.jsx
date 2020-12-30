import React from "react";
import MenuItem from "../../components/menu-item/menu-item.jsx";
import sections from "./directory-data.js";

function DirectoryMenu(){
 
    return (
        <div className="directory-menu">
            {sections.map(
                ({id, ...sectionProps}) => <MenuItem 
                                // title = {section.title} 
                                key = {id}
                                {...sectionProps}
                                // imageUrl = {section.imageUrl}
                                // size = {section.size}
                                // linkUrl = {section.linkUrl}
                            />
            )}
        </div>
    )
}

export default DirectoryMenu;