import React, { useEffect } from 'react'
import '../style/profile.css'
import {Link, useParams} from 'react-router'
import { usePost } from '../hooks/usePost'

const Profile = () => {

    const {username } = useParams()

    const {data,loading,fetchProfileData} = usePost();

    useEffect(() => {
        fetchProfileData(username);
    },[username])


    if(loading){
        return <h1>loading..</h1>
    }

    const user = data?.user || []

    const posts = data?.posts || []


  return (
    <div className='profile'>
        <div className="profile-top">
                <Link to='/'> <i className="ri-arrow-left-s-line"></i></Link>
                <div className="username">
                    <p>{user.username}</p>
                </div>
        </div>
        <div className="profile-userDetails">
            <div className="profile-img">
                <img src={user.profileImage} alt="" />
            </div>
            <div className="user-details">
                <div className="username">
                    <p>{user.username}</p>
                    <i className="ri-more-fill"></i>
                </div>
                <div className="user-numbers">
                    <div className="posts">
                        <p>{user.postCount}</p>
                        <p>posts</p>
                    </div>
                    <div className="followers">
                        <p>{user.followersCount}</p>
                        <p>followers</p>
                    </div>
                    <div className="following">
                        <p>{user.followingCount}</p>
                        <p>following</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="user-bio">
            <span className='username'>{user.username}</span>
            <p>{user.bio}</p>
        </div>

        <div className="user-posts">
            {posts.map((e,idx) => (
                <div key={idx} className="user-post">
                     <img src={e.imgUrl} alt="" />
                </div>
            ))}
        </div>
    </div>
  )
}

export default Profile
