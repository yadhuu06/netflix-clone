import React from 'react'
import './Login.css'
import logo from '../../assets/logo.png'




function Login() {
  return (
    <div className='login'>
      <img src={logo} className="login-logo"alt="" />
      <div className="login-form">
        <h1>Sign UP</h1>
        <form >
          <input type="text" placeholder='your Name' />
          <input type="text" placeholder='Enter The Email' />
          <input type="text" placeholder='Enter The Password' />
          <button>Sign Up</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember me</label>

            </div>
            <p>Need help?</p>
          </div>



        </form>
      </div>
      
    </div>
  )
}

export default Login
