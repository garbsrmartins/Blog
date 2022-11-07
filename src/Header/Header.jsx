import React from 'react'
import './header.css'
import mar from '../images/Mar.jpeg'
import logo from '../images/LogoAruna2.png'


function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
          <img className='headerTitleSm' src={logo} alt='texto  '/>
        </div>
      <img className='headerImg' src={mar} alt=''/>
    </div>
  )
}

export default Header
