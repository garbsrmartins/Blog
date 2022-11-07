import React from 'react'
import  Header  from '../../Header/Header'
import Posts from '../../Posts/Posts'
import './home.css'

function Home() {
  return (
    <>
     <Header/> 
    <div className='home'>
               <Posts/>
    </div>
    </>
  )
}

export default Home
