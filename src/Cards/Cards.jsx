import React from 'react'
import { makeStyles} from '@material-ui/core'
import quarto from '../images/room-verde/4.webp'
import pool from '../images/pool.webp'
import './Cards.css'


const useStyles = makeStyles ((theme) => ({

cards: {
    width: '100%',
    backgroundSize: 'cover',
    background: 'rgba(255, 248, 248, 0.5) ',
    paddingTop: '30px',
    height:'100vh',
    [theme.breakpoints.down("xs")]: {
        background: 'black'
      }
    
},

texto: {

float: 'right',
color: 'black',
fontFamily: 'Montserrat',
margin: '2em',
fontSize: '3em',
width: '40%',
textAlign: 'center',

},
textoLeft: {

    float: 'left',
    color: 'black',
    fontFamily: 'Montserrat',
    margin: '2em',
    fontSize: '3em',
    width: '40%',
    textAlign: 'center',
    
    },

description: {
    float: 'right',
color: 'black',
fontFamily: 'Montserrat',
margin: '2em',
fontSize: '0.7em',

textAlign: 'center',


},
button:{
    padding: '1em',
    background: 'rgba(255, 248, 248, 0.5) ',
    
    fontSize: '0.7em',
    borderRadius: '10px',
    color: 'black',
    textDecoration: 'none',

},

arrow: {

    fontSize: '2em',

}

}))

function Cards() {

    const classes = useStyles ();
  return (
    <>
    <div className={classes.cards}>

        <img className='imageCard' src={quarto} alt='quarto'/>
        <div className={classes.texto}><p> Nossas Acomodações 
        <span className={classes.description}> O espaço possuí três quartos, Arara Azul, Arara Verde e Arara Privê, cada um com particularidades que enriquecem sua experiência</span></p>
        <a className={classes.button} href='/quartos'> Conheça os quartos </a> 
        </div>
        
    </div>

    <div className={classes.cards}>

        <img className='imageCard' src={pool} alt='quarto'/>
        <div className={classes.textoLeft}><p> Nossas Acomodações 
        <span className={classes.description}> O espaço possuí três quartos, Arara Azul, Arara Verde e Arara Privê, cada um com particularidades que enriquecem sua experiência</span></p>
        <a className={classes.button} href='/quartos'> Conheça os quartos </a> 
        </div>  

    </div> 
    
    
    
</>

  )
}

export default Cards
