import React from 'react'
import '../style/topbar.css'

const TopBar = () => {
  return (
    <div className='top-bar'>
        <div className="logo">
            <img src="https://ik.imagekit.io/ad6av31ld/instagram-clone/insta-logo.png" alt="" />
        </div>
        <div className="icons">
            <i className="ri-add-fill"></i>
            <i className="ri-heart-3-line"></i>
        </div>
    </div>
  )
}

export default TopBar