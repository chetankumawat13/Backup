import React from 'react'
import { Outlet } from 'react-router'
import BottomBar from '../features/posts/components/BottomBar'

const FeedLayout = () => {
  return (
    <div className='feed-layout'>
         <Outlet />
        <div className="bottom-bar">
            <BottomBar />
        </div>
    </div>
       
  )
}

export default FeedLayout