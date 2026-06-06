import React from 'react'
import '../style/home.css'
import TopBar from '../components/TopBar'
import Feed from '../components/Feed'

const Home = () => {
  return (
    <div className='home'>
      <TopBar />
      <Feed />  
    </div>
  )
}

export default Home