import React from 'react'
import { Outlet } from 'react-router'
import NavBar from '../features/home/components/NavBar'
import SideBar from '../features/home/components/SideBar'

const HomeLayout = () => {
  return (
    <div className='home-layout'>
        <div className="navbar">
            <NavBar />
        </div>
        <div className="main-components">
            <div className="side-bar">
              <SideBar />
            </div>
            <Outlet />
        </div>
    </div>
  )
}

export default HomeLayout