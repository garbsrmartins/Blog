import './reserva.css'
import pool from '../../images/pool.webp'
import Slider from '../../Slider/Slider'
import {useState, useEffect, useRef} from 'react'

function Reserva() {

  const carousel =useRef();
  useEffect (()=>{
      console.log(carousel.current) 


  },[])
  return (
    <>
    <div>
      <div className="headerTitles">
          Reservas<br></br>
          
        </div>
      <img className='headerImg' src={pool} alt=''/>
    </div>
    
   


    <div className='reservaQuartos'> Quarto Arara Azul</div>
    <Slider/>   
    <div className='reservaQuartos'> Quarto Arara Verde</div>
    <div className='reservaQuartos'> Quarto Arara Privê</div>
    </>
  )
}

export default Reserva
