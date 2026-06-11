import React from 'react'
import FaceExpression from './features/Expression/components/FaceExpression'
import './features/shared/global.css'
import { RouterProvider } from 'react-router'
import { Router } from './router/AppRouter'

const App = () => {
  return (
      <RouterProvider router={Router} />
  )
}

export default App