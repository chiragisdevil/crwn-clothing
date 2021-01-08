import React from "react";
import {Link} from "react-router-dom";
import "./header.scss"
import CartDropDown from "../cart-dropdown/CartDropDown";
import {ReactComponent as Logo} from "../../assets/crown.svg";
import CartIcon from "../shopping-cart-icon/CartIcon";
import { auth } from "../../firebase/firebase.util";
import {connect} from "react-redux";

function Header(props){
    const {currentUser, cart} = props;
    const {cartHidden} = cart;
    return (
        <div className="header">
            <Link className="logo-container" to="/crwn-clothing/">
                <Logo />
            </Link>
            <div className="options">
                <Link className="option" to="/crwn-clothing/shops">SHOP</Link>
                <Link className="option" to="/crwn-clothing/shops">CONTACT</Link>
                {currentUser? <div className="option" onClick={()=>auth.signOut()}>SIGN OUT</div>
                :<Link className="option" to="/crwn-clothing/signin">SIGN IN</Link>}
                {<CartIcon />}
            </div>
            {cartHidden?null:<CartDropDown />}
        </div>
    )
}
function mapStateToProps(state){
        return ({
            cart: state.cart.cart,
            currentUser: state.user.currentUser
        })
    
}
export default connect(mapStateToProps)(Header);