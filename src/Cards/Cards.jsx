import React from 'react'
import { makeStyles} from '@material-ui/core'

import './Cards.css'


const useStyles = makeStyles ((theme) => ({

cardsDiv: {

    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/4.webp'})` ,
    backgroundRepeat: 'no-repeat',
    
    backgroundSize: 'cover',
},

cardsDiv1: {

    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/21.webp'})` ,
    backgroundRepeat: 'no-repeat',
   
    backgroundSize: 'cover',
},
cardsDiv2: {

    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/tone1.webp'})` ,
    backgroundRepeat: 'no-repeat',
   
    backgroundSize: 'cover',
},

cards1: {

    width: '100%',

      
    
},

cards: {
    width: '100%',
    backgroundSize: 'cover',
    background: '#00000028 ',
    
    height:'100vh',

    "@media (max-width: 1280px)": {
        display: 'flex',
        flexDirection: 'column',
      },
    
   
    
},

texto: {

    
color: 'white',
fontFamily: 'Montserrat',
display: 'inline-block',
fontSize: '3em',
width: '100%',
textAlign: 'center',
verticalAlign: '-60vh',

"@media (max-width: 1280px)": {
    fontSize: '2em',
    float: 'none',
    justifyItems: 'center',
    margin: 'auto',
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
  },


},






description: {
    
color: 'white',
fontFamily: 'Montserrat',
margin: '2em',
fontSize: '0.7em',

textAlign: 'center',
display: 'block',


},
button:{
    padding: '1em',
    background: 'rgba(255, 248, 248, 0.7) ',
    
    fontSize: '0.7em',
    borderRadius: '10px',
    color: 'black',
    textDecoration: 'none',

},


}))

function Cards() {

    const classes = useStyles ();
  return (
    <>
    <div className={classes.cardsDiv}>
    <div className={classes.cards}>

        
        <div className={classes.texto}><p>Acomodações <br></br>
        <span className={classes.description}>O espaço possuí três quartos, Arara Azul, Arara Verde e Arara Privê, cada um com particularidades que enriquecem sua experiência</span></p>
        <a className={classes.button} href='/quartos'> Conheça os quartos </a> 
        </div>
        
    </div>
    </div>
    <div className={classes.cardsDiv1}>
    <div className={classes.cards}>

        
        <div className={classes.texto}><p>Nossas Acomodações <br></br>
        <span className={classes.description}>O espaço possuí três quartos, Arara Azul, Arara Verde e Arara Privê, cada um com particularidades que enriquecem sua experiência</span></p>
        <a className={classes.button} href='/quartos'> Conheça os quartos </a> 
        </div>
        
    </div>
    </div>
    <div className={classes.cardsDiv2}>
    <div className={classes.cards}>

        
        <div className={classes.texto}><p>Nossas Acomodações <br></br>
        <span className={classes.description}>O espaço possuí três quartos, Arara Azul, Arara Verde e Arara Privê, cada um com particularidades que enriquecem sua experiência</span></p>
        <a className={classes.button} href='/quartos'> Conheça os quartos </a> 
        </div>
        
    </div>
    </div>
    </>
    
    
    
    

  )
}

export default Cards
