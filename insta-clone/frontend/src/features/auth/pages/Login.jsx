import React from 'react'
import '../style/form.css'
import { Link } from 'react-router'

const Login = () => {
  return (
    <div className='form-container'>
        <h1>Log into Instagram</h1>
        <form >
            <input type="text" id='username'  placeholder='username or email' />
            <input type="password" id='password' placeholder='Password' />
            <button className='button primary-button'>Log in</button>
            <p>Don't have an account ?  <Link to='/register'>Create new account</Link> </p>
        </form>
    </div>
  )
}

export default Login