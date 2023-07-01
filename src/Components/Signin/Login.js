import React, { useState } from 'react'
import './Login.css'

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className='login'>
      <img className='login__logo' src='https://thumbs.dreamstime.com/z/hospital-logo-template-hospital-logo-template-117487677.jpg' />


      <div className='login__container'>
        <h1>SIGN-IN</h1>

        <form>
          <h5>E-mail</h5>
          <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

          <h5>Password</h5>
          <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

          <button className='login__signInButton'>Sign In</button>
        </form>

        <p>Not Registered ?</p>
        <button className='login__registerButton'>Create your account</button>
      </div>
    </div>

  )
}

export default Login

