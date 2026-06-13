import React from 'react'
import { Outlet } from 'react-router'
import '../features/shared/layout.css'

const AuthLayout = () => {
  return (
    <div className="auth-layout">
        
    <div className="left-side">
       <video muted autoPlay loop src="https://ik.imagekit.io/ad6av31ld/Moodify-video.mp4"></video>
    </div>

    <div className="right-side">
      <div className="auth-logo">
        <img
          src="https://ik.imagekit.io/ad6av31ld/Music-play%20with%20mood"
          alt=""
        />
      </div>

      <div className="auth-content">
        <Outlet />
      </div>
    </div>

  </div>
  )
}

export default AuthLayout