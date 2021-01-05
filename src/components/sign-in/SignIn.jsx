import React, {useState} from "react";
import FormInput from "../form-input/FormInput";
import "./signin.scss";
import Button from "../button/Button";
import {auth, signInWithGoogle} from "../../firebase/firebase.util.js";

function SignIn(){
    const [signInDetails, setSignInDetails] = useState(
        {
            email: "",
            password: ""
        }
    );
    function handleChange(event){
        const {name,value} = event.target;
        return(
            setSignInDetails({
                ...signInDetails,
                [name]: value
            })
        )
    }

    function handleSubmit(event){
        event.preventDefault();
        const {email,password} = signInDetails;
        
        try{
            const user = auth.signInWithEmailAndPassword(email, password);
        console.log(user);
            setSignInDetails({
                email:"",
                password:""
            })
        } catch (err){
            console.log(err.message);
        }
    }
  
    return(
        <div className="sign-in">
            <h2>
                I already have an account
            </h2>
            <span>Signin with your email and password</span>
            <form onSubmit={handleSubmit}>
                
                <FormInput
                    handleChange={handleChange}
                    label="email" 
                    type="email"
                    signInDetails={signInDetails}
                    value={signInDetails.email}
                />
                {/* <label>email</label>
                <input onChange={handleChange} type="email" name="email2" value={signInDetails.email} required/> */}
               
                <FormInput
                    handleChange={handleChange}
                    label="password" 
                    type="password"
                    signInDetails={signInDetails}
                    value={signInDetails.password}
                />
                {/* <input onChange={handleChange} type="password" name="password" value={signInDetails.password} required/> */}
                <div className="buttons">
                    <Button type="submit">Sign In</Button>
                    <Button onClick={signInWithGoogle} isGoogleSignIn={true}>Sign In with Google</Button>
                </div>
            </form>
        </div>
    )
}

export default SignIn;