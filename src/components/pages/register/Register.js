import React from "react";
import useForm from "../../Hook/useForm";
import validate from "./validateInfo";
import "./Register.css";

const Register = ({submitForm}) => {
    const {handleChange, values, handleSubmit, errors} = useForm(submitForm,validate);

    return (
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
                        {errors.username && <p>{errors.username}</p>}
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
                        {errors.email && <p>{errors.email}</p>}
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
                        {errors.password && <p>{errors.password}</p>}
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
                        {errors.password2 && <p>{errors.password2}</p>}
                    </div>
                    <button className="form-input-btn" type="submit">
                        Sign Up
                    </button>
                    <button className="form-input-btn" type="reset">
                        Cancel
                    </button>
                </form>
            </div>

    );
};

export default Register;