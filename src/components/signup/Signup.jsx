import React, {useState} from 'react';
import Button from "../button/Button";
import FormInput from "../form-input/FormInput";
import "./signup.scss";
import {auth, createUserProfileDocument} from "../../firebase/firebase.util.js"

function Signup(){
    const [signUpDetails, setSignUpDetails] = useState(
        {
            email: "",
            password: "",
            confirmPassword: "",
            name:"",
            error:false
        }
    );
    function handleChange(event){
        const {name,value} = event.target;
        return(
            setSignUpDetails({
                ...signUpDetails,
                [name]: value
            })
        )

    }
    function handleSubmit(event){
        event.preventDefault();
        const {email, password, confirmPassword} = signUpDetails;
        if (password !== confirmPassword){
            setSignUpDetails ({
                ...signUpDetails, 
                error:true
            });
            return;
        } else {
            setSignUpDetails ({
                ...signUpDetails, 
                error:false
            })
        }

        try{
            const {user} = auth.createUserWithEmailAndPassword(email,password);
            createUserProfileDocument(user);
            
            setSignUpDetails({
                email: "",
                password: "",
                confirmPassword: "",
                name:"",
                error:false
            });
             
        } catch(err){
            console.log(err.message);
        }
    }
    
    return(
        <div className="sign-up">
            <h2>
                I do not have an account
            </h2>
            <span>Signup with your email and password</span>
            <form className= "sign-up-form" onSubmit={handleSubmit}>

            <FormInput               
                    handleChange={handleChange}
                    label="name" 
                    type="text"
                    signInDetails={signUpDetails}
                    value={signUpDetails.name}>
            </FormInput>

            <FormInput               
                    handleChange={handleChange}
                    label="email" 
                    type="email"
                    signInDetails={signUpDetails}
                    value={signUpDetails.email}>
            </FormInput>


            <FormInput
                    handleChange={handleChange}
                    label="password" 
                    type="password"
                    signInDetails={signUpDetails}
                    value={signUpDetails.password}
                />

            <FormInput               
                    handleChange={handleChange}
                    label="confirmPassword"
                    type="password" 
                    signInDetails={signUpDetails}
                    value={signUpDetails.confirmPassword}
            />
            {(signUpDetails.error)?<p>Passwords Do not match</p>:null}

            <Button type="submit">Sign Up</Button>

            </form>

        </div>

    )
}
export default Signup;