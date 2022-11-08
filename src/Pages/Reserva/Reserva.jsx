import './reserva.css'
import pool from '../../images/pool.webp'
import Slider from '../../Slider/Slider'
import Slider1 from '../../Slider/Slider-Verde'
import Slider2 from '../../Slider/Slider-Prive'


function Reserva() {

 
  return (
    <>
    <div>
      <div className="reservaTitles">
          Reservas<br></br>
          
        </div>
      <img className='reservaImg' src={pool} alt=''/>
    </div>
    
   


    <div className='reservaQuartos'> Quarto Arara Azul</div>
    <Slider/>   
    <div className='reservaQuartos'> Quarto Arara Verde</div>
    <Slider1/>
    <div className='reservaQuartos'> Quarto Arara Privê</div>
    <Slider2/>
    </>
  )
}

export default Reserva
