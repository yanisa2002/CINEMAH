import React from "react";
import useForm from "../../Hook/useForm";
import "./Register.css";

const Register = () => {
    const {handleChange, values, handleSubmit} = useForm();
    return (
        <div className="all">
        <div className="form-content-left">
            <form className="form" onSubmit={handleSubmit}>
                <h1>Register</h1>
                <div className="form-inputs">
                    <label htmlFor="username" className="form-label">
                        Username
                    </label>
                    <input 
                        id="username"
                        type="text" 
                        name="username" 
                        className="form-input"
                        placeholder="Username"
                        value={values.username}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-inputs">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input 
                        id="email"
                        type="email" 
                        name="email" 
                        className="form-input"
                        placeholder="Email"
                        value={values.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-inputs">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input 
                        id="password"
                        type="password" 
                        name="password" 
                        className="form-input"
                        placeholder="Password"
                        value={values.password}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-inputs">
                    <label htmlFor="password2" className="form-label">
                        Confirm Password
                    </label>
                    <input 
                        id="password2"
                        type="password" 
                        name="password2" 
                        className="form-input"
                        placeholder="Confirm Password"
                        value={values.password2}
                        onChange={handleChange}
                    />
                </div>
                <button className="form-input-btn" type="submit">
                    Sign Up
                </button>
                <button className="form-input-btn" type="reset">
                    Cancel
                </button>
            </form>
        </div>
        {/* <div className="form-content-right">
            test
        </div> */}
        </div>
    );
};

export default Register;