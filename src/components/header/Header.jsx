import React from "react";
import {Link} from "react-router-dom";
import "./header.scss"

import {ReactComponent as Logo} from "../../assets/crown.svg";

function Header(){
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo />
            </Link>
            <div className="options">
                <Link className="option" to="/shops">SHOP</Link>
                <Link className="option" to="/shops">CONTACT</Link>
            </div>
        </div>
    )
}

export default Header;