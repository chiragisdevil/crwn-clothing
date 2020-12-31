import React, {useState} from "react";
import FormInput from "../form-input/FormInput";
import "./signin.scss";
import Button from "../button/Button";

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
        console.log("inside submit");
        event.preventDefault();
        return(
            setSignInDetails({
                email:"",
                password:""
            })
        )
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
                    signInDetails={signInDetails}
                    value={signInDetails.email}
                />
                {/* <label>email</label>
                <input onChange={handleChange} type="email" name="email2" value={signInDetails.email} required/> */}
               
                <FormInput
                    handleChange={handleChange}
                    label="password" 
                    signInDetails={signInDetails}
                    value={signInDetails.password}
                />
                {/* <input onChange={handleChange} type="password" name="password" value={signInDetails.password} required/> */}
                <Button type="submit">Submit</Button>
            </form>
        </div>
    )
}

export default SignIn;