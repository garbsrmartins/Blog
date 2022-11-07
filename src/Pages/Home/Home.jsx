import React from 'react'
import  Header  from '../../Header/Header'
import Posts from '../../Posts/Posts'
import './home.css'
import Footer from '../../Footer/Footer'

function Home() {
  return (
    <>
     <Header/> 
    <div className='home'>
               <Posts/>
    </div>
    <Footer/>
    </>
  )
}

export default Home
