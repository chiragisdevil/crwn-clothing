import React from "react";
import {Link} from "react-router-dom";
import "./header.scss"

import {ReactComponent as Logo} from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.util";
import {connect} from "react-redux";

function Header({currentUser}){
   
    return (
        <div className="header">
            <Link className="logo-container" to="/crwn-clothing/">
                <Logo />
            </Link>
            <div className="options">
                <Link className="option" to="/crwn-clothing/shops">SHOP</Link>
                <Link className="option" to="/crwn-clothing/shops">CONTACT</Link>
                {currentUser? <div className="option" onClick={()=>auth.signOut()}>SIGN OUT</div>
                :<Link className="option" to="/crwn-clothing/signin">SIGN IN</Link>
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);