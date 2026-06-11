import React from 'react'
import "../style/form.css";
import { Link } from 'react-router';

const Login = () => {
  return (
    <div className='form-container'>
        <h1>Login</h1>
        <form action="">
            <div className="input">
              <span>username</span>
              <input type="text" id='username' placeholder='Enter your username'/>
            </div>
            <div className="input">
              <span>password</span>
              <input type="password" id='password' placeholder='Enter your password' />
            </div>
            <button>login</button>
            <p>Don't have an account <Link to='/register'>Create account</Link> </p>
        </form>
    </div>
  )
}

export default Login