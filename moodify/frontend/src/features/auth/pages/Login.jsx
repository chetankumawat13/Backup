import React, { useState } from 'react'
import "../style/form.css";
import { Link, useNavigate } from 'react-router';
import { useAuth } from '../hooks/useAuth';
import {useForm} from 'react-hook-form'

const Login = () => {

  
  const {login,handleLogin} =  useAuth()

  const [error, setError] = useState('')

  const {handleSubmit,register} = useForm()

  const navigate = useNavigate()

  const handleLoginSubmit = async (data) => {
      try{
        setError('')
        await handleLogin(data.username,data.password)
        navigate('/')
      }catch(err){
        setError(err.response?.data?.message || 'something went wrong')
      }
  }


  return (
    <div className='form-container'>
        <h1>Login</h1>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit(handleLoginSubmit)}>
            <div className="input">
              <span>username</span>
              <input {...register('username')} type="text" id='username' placeholder='Enter your username'/>
            </div>
            <div className="input">
              <span>password</span>
              <input {...register('password')} type="password" id='password' placeholder='Enter your password' />
            </div>
            <button>login</button>
            <p>Don't have an account <Link to='/register'>Create account</Link> </p>
        </form>
    </div>
  )
}

export default Login