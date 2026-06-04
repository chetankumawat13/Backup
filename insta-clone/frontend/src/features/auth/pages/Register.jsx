import React from 'react'
import { Link } from 'react-router'

const Register = () => {
  return (
    <div className='form-container'>
        <h1>Create new account</h1>
        <form action="">
            <input type="text" id='username' placeholder='username' />
            <input type="email" id='email' placeholder='email' />
            <input type="password" id='password' placeholder='password' />
            <button className='button primary-button'>Submit</button>
            <p>Already have an account <Link to='/login'>Log into account</Link></p>
        </form>
    </div>
  )
}

export default Register