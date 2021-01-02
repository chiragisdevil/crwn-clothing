import React from "react";
import {Link} from "react-router-dom";
import "./header.scss"

import {ReactComponent as Logo} from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.util";

function Header({currentUser}){
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo />
            </Link>
            <div className="options">
                <Link className="option" to="/shops">SHOP</Link>
                <Link className="option" to="/shops">CONTACT</Link>
                {currentUser? <div className="option" onClick={()=>auth.signOut()}>SIGN OUT</div>
                :<Link className="option" to="/signin">SIGN IN</Link>
                }
            </div>
        </div>
    )
}

export default Header;