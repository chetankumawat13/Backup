import React from 'react'
import '../style/navbar.css'

const NavBar = () => {
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src="https://ik.imagekit.io/ad6av31ld/Music-play%20with%20mood?updatedAt=1781183607739" alt="" />
        </div>
        <div className="nav-icons">
            <i class="ri-notification-3-line"></i>
            <div className="profile">
                <img src="https://ik.imagekit.io/ad6av31ld/blank-profile-picture-973460_640.webp?updatedAt=1770787184788" alt="" />
            </div>
        </div>

    </div>
  )
}

export default NavBar