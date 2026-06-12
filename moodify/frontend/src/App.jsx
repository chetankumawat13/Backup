import React from 'react'
import FaceExpression from './features/Expression/components/FaceExpression'
import './features/shared/global.css'
import { RouterProvider } from 'react-router'
import { Router } from './router/AppRouter'
import { AuthProvider } from './features/auth/auth.context'

const App = () => {
  return (
      <AuthProvider>
        <RouterProvider router={Router} />
      </AuthProvider>
  )
}

export default App