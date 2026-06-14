import React from 'react'
import {NavLink} from 'react-router'
import '../style/sidebar.css'
import { useAuth } from '../../auth/hooks/useAuth'

const SideBar = () => {

    
    const {handleLogout} = useAuth()


  return (
    <div className='sideBar'>
        <div className="controls">
            <NavLink to='/' ><i className="ri-home-3-line"></i> Home</NavLink>
            <NavLink to='/playlist' ><i className="ri-play-list-line"></i> Play-list</NavLink>
            <NavLink to='/history'><i className="ri-history-line"></i> Mood History</NavLink>
            <NavLink to='/favorites'><i className="ri-bookmark-line"></i> Favorites</NavLink>
            <NavLink to='/settings'><i className="ri-settings-line"></i> Settings</NavLink>

        </div>
        <div className="logout-btn">
            <button onClick={handleLogout}><i className="ri-logout-box-line"></i> logout</button>
        </div>
    </div>
  )
}

export default SideBar