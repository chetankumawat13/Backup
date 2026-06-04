import React from 'react'
import { Outlet } from 'react-router'

const AuthLayout = () => {
  return (
    <div className='layout'>
      <div className="instagram-logo">
            <img src="https://ik.imagekit.io/ad6av31ld/instagram-clone/insta.png" alt="" />
      </div>
      <Outlet />
    </div>
  )
}

export default AuthLayout