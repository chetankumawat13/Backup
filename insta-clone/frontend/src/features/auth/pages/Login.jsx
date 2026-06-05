import React, { useState } from 'react'
import '../style/form.css'
import { Link, useNavigate } from 'react-router'
import { useAuth } from '../hooks/useAuth'
import {useForm} from 'react-hook-form'

const Login = () => {

    const [error,setError] = useState('')

    const {user,loading,handleLogin} = useAuth()

    const {handleSubmit,register} = useForm()

    const navigate = useNavigate()

    const handleFormSubmit = async (data) => {

        try{

            setError('')
            await handleLogin(data.identifier,data.password)
            navigate('/')
        }catch(err){
            setError(err.response?.data?.message || "something went wrong")
        }

    }


  return (
    <div className='form-container'>
        <h1>Log into Instagram</h1>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit(handleFormSubmit)} >
            <input {...register('identifier')} type="text" id='username'  placeholder='username or email' />
            <input {...register('password')} type="password" id='password' placeholder='Password' />
            <button disabled={loading}  className='button primary-button'>{loading?(<><span className='spinner'></span> Logging in...</>):('Log in')}</button>
            <p>Don't have an account ?  <Link to='/register'>Create new account</Link> </p>
        </form>
    </div>
  )
}

export default Login