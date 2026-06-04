import React from 'react'
import { RouterProvider } from 'react-router'
import { MainRoute } from './router/MainRouter'
import './features/shared/global.css'

const App = () => {
  return (
    <RouterProvider  router={MainRoute} />
  )
}

export default App