import React from "react";
import "./custom-button.scss";

function Button({children, isGoogleSignIn, ...otherProps}){
    console.log(`"custom-button" ${isGoogleSignIn}?google-sign-in:''`);
    return(
        <button className={`${isGoogleSignIn?"google-sign-in":''} custom-button`} {...otherProps}>{children}</button>
    )
}

export default Button;