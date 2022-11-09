import React from 'react'
import './header.css'
import mar from '../images/Mar.jpeg'
import logo from '../images/LogoAruna.png'



function Header() {
  return (
    <div className='header'>
        <div >
          <img className="headerLogo" src={logo} alt="ok"/>
        </div>
      
      <img className='headerImg' src={mar} alt=''/>
    </div>
  )
}

export default Header
