import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router'
import { useAuth } from '../hooks/useAuth'



const Register = () => {

    const [step, setStep] = useState(1)
    const [error,setError] = useState('')

    const {register,handleSubmit,setValue} = useForm()
    const {user,loading,handleRegister} = useAuth()
   

    const navigate = useNavigate()

    const submit = async (data) => {

        try{
            setError('')
            const {username,email,password,accountType,bio} = data
            await handleRegister(username,email,password,accountType,bio)

            navigate('/')

        }catch(err){
            setError(err.response?.data?.message || "something went wrong")
        }

    }


  return (
    <div className='form-container'>
        <h1>Create new account</h1>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit(submit)} action="">
            {
                step === 1 && (
                    <>
                            <input {...register('username')} type="text" id='username' placeholder='username' />
                            <input {...register('email')} type="email" id='email' placeholder='email' />
                            <input {...register('password')} type="password" id='password' placeholder='password' />
                             <button onClick={() => setStep(2)} className='button primary-button'>submit</button>
                    </>
                )
            }{
                step === 2 && (
                    <>
                        <h3>Select account type</h3>
                        <button className='account-type-btn' type='button' onClick={() => {setValue('accountType','public'), setStep(3)}}>
                            public account
                        </button>
                        <button className='account-type-btn' type='button' onClick={() => {setValue('accountType','private'),setStep(3)}}>
                            private account
                        </button>
                        <button className=' button primary-button' onClick={() => setStep(1)} type='button'>back</button>
                    </>
                )
            }
            {
                step === 3 && (
                    <>
                        <textarea className='bio-input' {...register('bio')} placeholder='Write your bio...' id="bio" />
                        <div className="step-actions">
                            <button className='back-btn button' onClick={() => setStep(2)} type='button'>back</button>
                            <button disabled={loading}  className='button primary-button' type='submit' >
                                {loading ? (<><span className='spinner'></span>creating...</>) : ('submit') }
                            </button>
                        </div>
                        
                    </>
                )
            }
            <p>Already have an account <Link to='/login'>Log into account</Link></p>
        </form>
    </div>
  )
}

export default Register