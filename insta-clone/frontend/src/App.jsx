import React from 'react'
import { RouterProvider } from 'react-router'
import { MainRoute } from './router/MainRouter'
import './features/shared/global.css'
import { AuthProvider } from './features/auth/auth.context'
import { PostProvider } from './features/posts/post.context'

const App = () => {
  return (
    <AuthProvider>
      <PostProvider>
      <RouterProvider  router={MainRoute} />
      </PostProvider>
    </AuthProvider>
  )
}

export default App