import React from "react";
import "./custom-button.scss";

function Button({children, ...otherProps}){
    return(
        <button className="custom-button" {...otherProps}>{children}</button>
    )
}

export default Button;