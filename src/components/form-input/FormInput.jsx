import React from "react";
import "./form-input.scss"

function FormInput(props){
    const {[props.label]:value} = props.signInDetails; 
    
    return(
        <div className="group">
            <input className="form-input" onChange={props.handleChange} type={props.type} name={props.label} 
            value={props.value} required/>
            {   props.label?
                <label className={`${value.length?"shrink":""} form-input-label`}>{props.label}</label>
                :null
            }
        </div>
    )
}

export default FormInput;