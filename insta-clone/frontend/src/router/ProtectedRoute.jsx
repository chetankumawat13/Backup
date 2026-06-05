import React from 'react'
import { useAuth } from '../features/auth/hooks/useAuth'
import { Navigate, Outlet } from 'react-router'

const ProtectedRoute = () => {

    const {user,loading} = useAuth()
    if(loading){
        return <h2>loading....</h2>
    }

  return user ? <Outlet /> : <Navigate to='/login' />
}

export default ProtectedRoute