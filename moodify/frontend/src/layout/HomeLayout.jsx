import React from 'react'
import { Outlet } from 'react-router'
import NavBar from '../features/home/components/NavBar'

const HomeLayout = () => {
  return (
    <div className='home-layout'>
        <div className="navbar">
            <NavBar />
        </div>
        <div className="main-components">
            <div className="side-bar"></div>
            <Outlet />
        </div>
    </div>
  )
}

export default HomeLayout