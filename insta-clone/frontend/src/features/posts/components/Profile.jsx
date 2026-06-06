import React from 'react'
import '../style/profile.css'
import {Link} from 'react-router'

const Profile = () => {
  return (
    <div className='profile'>
        <div className="profile-top">
                <Link to='/'> <i className="ri-arrow-left-s-line"></i></Link>
                <div className="username">
                    <p>chetan</p>
                </div>
        </div>
        <div className="profile-userDetails">
            <div className="profile-img">
                <img src="https://ik.imagekit.io/ad6av31ld/blank-profile-picture-973460_640.webp?updatedAt=1770787184788" alt="" />
            </div>
            <div className="user-details">
                <div className="username">
                    <p>chetan</p>
                    <i className="ri-more-fill"></i>
                </div>
                <div className="user-numbers">
                    <div className="posts">
                        <p>4</p>
                        <p>posts</p>
                    </div>
                    <div className="followers">
                        <p>99</p>
                        <p>followers</p>
                    </div>
                    <div className="following">
                        <p>54</p>
                        <p>following</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="user-bio">
            <span className='username'>chetan</span>
            <p>Lorem ipsum dolor sit amet.</p>
        </div>

        <div className="user-posts">
            <div className="user-post">
                <img src="https://ik.imagekit.io/ad6av31ld/instagram-clone/Photo_on_12-05-26_at_7.35_AM__2_Hu51YVYrP.jpg?updatedAt=1780750361088" alt="" />
            </div>
            <div className="user-post">
                <img src="https://ik.imagekit.io/ad6av31ld/instagram-clone/Gemini_Generated_Image_amqufuamqufuamqu.png?updatedAt=1780731315464" alt="" />
            </div>
            <div className="user-post">
                <img src="https://ik.imagekit.io/ad6av31ld/instagram-clone/Photo_on_12-05-26_at_7.35_AM__2_Hu51YVYrP.jpg?updatedAt=1780750361088" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Profile
