import React from "react";
import "./Register.css";

const Register = () => {
    return (
        <div className="all">
        <div className="form-content-left">
            <form className="form">
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
                    />
                </div>
                <div className="form-inputs">
                    <label htmlFor="password2" className="form-label">
                        Confirm Password
                    </label>
                    <input 
                        id="password2"
                        type="password2" 
                        name="password2" 
                        className="form-input"
                        placeholder="Confirm Password"
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
        </div>
    );
};

export default Register;