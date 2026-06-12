import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../hooks/useAuth";

const Register = () => {

    const {handleSubmit,register} = useForm()
    const{loading,handleRegister} = useAuth()
    const navigate = useNavigate()
    const [error, setError] = useState('')


    const handleRegisterSubmit = async (data) => {
        try{
                await handleRegister(data.username,data.email,data.password)
                navigate('/')
        }catch(err){
            setError(err.response?.data?.message || 'something went wrong')
            console.log(err);
        }
    }


  return (
    <div className="form-container">
      <h1>Register</h1>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit(handleRegisterSubmit)} action="">
        <div className="input">
          <span>username</span>
          <input {...register('username')} type="text" id="username" placeholder="Enter username" />
        </div>
        <div className="input">
            <span>email</span>
            <input {...register('email')} type="email" placeholder="Enter email" id="email" />
        </div>
        <div className="input">
            <span>password</span>
            <input {...register('password')} type="password" placeholder="Enter password" id="password" />
        </div>
        <button disabled={loading}  >{loading ? (<><span className="spinner">creating..</span></>) : ('submit')}</button>
        <p>Already have an account? <Link to='/login' >Login</Link></p>
      </form>
    </div>
  );
};

export default Register;
