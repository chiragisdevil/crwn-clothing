import React from "react";
import SignIn from "../../components/sign-in/SignIn";
import SignUp from "../../components/signup/Signup";
import "./signin-signup.styles.scss"

function SignInSignUp(){
    return(
        <div className="signin-signup">
            <SignIn /> 
            <SignUp />      
        </div>
    )
}

export default SignInSignUp;