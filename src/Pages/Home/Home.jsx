import React from 'react'
import  Header  from '../../Header/Header'
import Posts from '../../Posts/Posts'
import './home.css'
import Footer from '../../Footer/Footer'
import Slider32 from '../../Slider/Slider32'


function Home() {
  return (
    <>
   
     <Header/> 
    <div className='home'>
          <Slider32/>
               <Posts/>
    </div>
    <Footer/>
    </>
  )
}

export default Home
