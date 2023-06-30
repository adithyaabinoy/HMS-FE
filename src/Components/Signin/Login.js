import React from 'react'
import './Login.css'

function Login() {
  return (
    <div className='login'>
      <img className='login__logo' src='' />


      <div className='login__container'>
        <h1>SIGN-IN</h1>

        <form>
          <h5>E-mail</h5>
          <input type='text' />

          <h5>Password</h5>
          <input type='password' />

          <button className='login__signInButton'>Sign In</button>
        </form>

        <p>Not Registered ?</p>
        <button className='login__registerButton'>Create your account</button>
      </div>
    </div>

  )
}

export default Login

