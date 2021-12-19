import React, {useState} from "react";
import Register from "./Register";
import FormSuccess from "./FormSuccess";
import "./Register.css"

const Form = () => {
    const [isSummitted, setIsSubmitted] = useState(false)

    function submitForm() {
        setIsSubmitted(true);
    }
    return(
        <>
            <div className="form-container">
                {!isSummitted ? <Register submitForm=
                {submitForm} /> : <FormSuccess />}

                <div className='form-content-right'>
                    {/* <img className='form-img' src='image/cinema.jpg' alt='cinema' /> */}
                </div>   
            </div>

            <img className='form-img' src='image/cinema.jpg' alt='cinema' />
        </>
    );
};

export default Form;