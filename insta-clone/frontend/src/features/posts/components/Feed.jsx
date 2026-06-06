import React, { useEffect } from 'react'
import '../style/feed.css'
import { usePost } from '../hooks/usePost'
import PostCard from './PostCard';

const Feed = () => {

    const {data,loading,fetchHomeFeed} = usePost();

    useEffect(() => {
        fetchHomeFeed();
     }, []);

     const posts = data?.post || [];

     if(loading){
        return (
            <h1>loading.....</h1>
        )
     }

  return (
    <div className='feed-container'>
        <div className="posts">
            <PostCard data={posts} /> 
        </div>
    </div>
  )
}

export default Feed