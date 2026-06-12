import React from 'react'
import { useAuth } from '../features/auth/hooks/useAuth'
import { Navigate, useNavigate } from 'react-router'

const ProtectedRoute = ({children}) => {

    const {user,loading} = useAuth()
    const navigate = useNavigate()

    if(loading){
        return <h1>Loading...</h1>
    }

    if(!user){
        return <Navigate to='/login' />
    }

  return children
}

export default ProtectedRoute