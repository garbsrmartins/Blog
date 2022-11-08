import React from 'react'
import './header.css'
import mar from '../images/Mar.jpeg'



function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
          ArunA<br></br>
          <p className='headerSubtitles'>Espaço regenerativo</p>
        </div>
      
      <img className='headerImg' src={mar} alt=''/>
    </div>
  )
}

export default Header
