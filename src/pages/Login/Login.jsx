import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'




function Login() {
  const [signState, setSignState] = useState("Sign In")
  return (
    <div className='login'>
      <img src={logo} className="login-logo" alt="" />
      <div className="login-form">
        <h1>Sign UP</h1>
        <form >
          {signState === "Sign Up" ? <input type="text" placeholder='your Name' /> : <></>}

          <input type="text" placeholder='Enter The Email' />
          <input type="text" placeholder='Enter The Password' />
          <button>{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember me</label>
            </div>
            <p>Need help?</p>
          </div>
        </form>
        <div className="form-switch">
  {signState === "Sign In" ? (
    <p>
      New to Netflix?{" "}
      <span onClick={() => setSignState("Sign Up")} style={{ color: "#e50914", cursor: "pointer" }}>
        Sign Up Now
      </span>
    </p>
  ) : (
    <p>
      Already have an account?{" "}
      <span onClick={() => setSignState("Sign In")} style={{ color: "#e50914", cursor: "pointer" }}>
        Sign In now
      </span>
    </p>
  )}
</div>





      </div>
    </div>
  )
}

export default Login
