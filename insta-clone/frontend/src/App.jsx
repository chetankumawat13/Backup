import React from 'react'
import { RouterProvider } from 'react-router'
import { MainRoute } from './router/MainRouter'
import './features/shared/global.css'
import { AuthProvider } from './features/auth/auth.context'

const App = () => {
  return (
    <AuthProvider>
      <RouterProvider  router={MainRoute} />
    </AuthProvider>
  )
}

export default App