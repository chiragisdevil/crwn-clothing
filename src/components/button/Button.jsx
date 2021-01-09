import React from "react";
import "./custom-button.scss";

function Button({children, isGoogleSignIn, inverted, ...otherProps}){
    return(
        <button className={`${isGoogleSignIn?"google-sign-in":''} 
        custom-button ${inverted?"inverted":''} custom-button`} {...otherProps}>{children}</button>
    )
}

export default Button;