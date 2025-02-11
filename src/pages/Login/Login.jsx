import React, { useState } from 'react';
import './Login.css';
import logo from '../../assets/logo.png';
import { signup, login } from '../../firebase';  // Ensure the correct path

const Login = () => {
    const [signState, setSignState] = useState("Sign In");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const user_auth = async (event) => {
        event.preventDefault();
        if (signState === "Sign In") {
            await login(email, password);
        } else {
            await signup(name, email, password);
        }
    };

    return (
        <div className="login">
            <img src={logo} alt="" className='login-logo' />
            <div className="login-form">
                <h2>{signState}</h2>
                <form>
                    {signState === "Sign Up" ? (
                        <input value={name} onChange={(e) => setName(setName(e.target.value))} type="text" placeholder='Your Name' />
                    ) : null}
                    <input value={email} onChange={(e) => setEmail(setEmail(e.target.value))} type="email" placeholder='Email' />
                    <input value={password} onChange={(e) => setPassword(setPassword(e.target.value))} type="password" placeholder='Password' />
                    <button onClick={user_auth} type="submit" className="login-btn">{signState}</button>
                    <div className='form-help'>
                        <div className='remember'>
                            <input type="checkbox" />
                            <label htmlFor="">Remember Me</label>
                        </div>
                        <p>Need Help?</p>
                    </div>
                </form>
                <div className="form-switch">
                    {signState === "Sign In" ? (
                        <p>New to Netflix? <span onClick={() => setSignState("Sign Up")}>Sign Up Now</span></p>
                    ) : (
                        <p>Already have an account? <span onClick={() => setSignState("Sign In")}>Sign In Now</span></p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Login;
