import React from 'react'
import '../style/form.css'
import { Link, useNavigate } from 'react-router'
import { useAuth } from '../hooks/useAuth'
import {useForm} from 'react-hook-form'

const Login = () => {


    const {user,loading,handleLogin} = useAuth()

    const {handleSubmit,register} = useForm()

    const navigate = useNavigate()

    const handleFormSubmit = async (data) => {
        console.log(data);

        await handleLogin(data.username,data.password)

        navigate('/')

    }


  return (
    <div className='form-container'>
        <h1>Log into Instagram</h1>
        <form onSubmit={handleSubmit(handleFormSubmit)} >
            <input {...register('username')} type="text" id='username'  placeholder='username or email' />
            <input {...register('password')} type="password" id='password' placeholder='Password' />
            <button className='button primary-button'>Log in</button>
            <p>Don't have an account ?  <Link to='/register'>Create new account</Link> </p>
        </form>
    </div>
  )
}

export default Login