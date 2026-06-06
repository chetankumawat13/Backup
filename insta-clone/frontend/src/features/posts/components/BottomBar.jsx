import React from 'react'
import '../style/bottombar.css'
import { Link, NavLink } from 'react-router'

const BottomBar = () => {
  return (
    <div className='bottom-bar'>
        <div className="icons">
            <NavLink to='/'><i className="ri-home-5-line"></i></NavLink>
            <NavLink to='search'> <i className="ri-search-line"></i></NavLink>
             <NavLink to='/feed'> <i className="ri-compass-3-line"></i></NavLink>
            <NavLink to='/profile'>
                <img src="https://ik.imagekit.io/ad6av31ld/blank-profile-picture-973460_640.webp?updatedAt=1770787184788" alt="" />
            </NavLink>
        </div>
    </div>
  )
}

export default BottomBar