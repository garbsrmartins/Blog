import React from 'react'
import { makeStyles} from '@material-ui/core'

import './Cards.css'


const useStyles = makeStyles ((theme) => ({

cardsDiv: {

    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/pool.webp'})` ,
    backgroundRepeat: 'no-repeat',
    
    backgroundSize: 'cover',
},



cards: {
    width: '100%',
    backgroundSize: 'cover',
    background: '#ffffff40 ',
    
 

    "@media (max-width: 1280px)": {
        display: 'flex',
        flexDirection: 'column',
      },
    
   
    
},

texto: {

marginTop: '100px',   
color: 'black',
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
    
color: 'black',
fontFamily: 'Montserrat',
margin: '2em',
fontSize: '0.7em',

textAlign: 'center',
display: 'inline-block',
width: '40%',


},



}))

function Cardscontato() {

    const classes = useStyles ();
  return (
    <>
    <div className={classes.cardsDiv}>
    <div className={classes.cards}>

        
        <div className={classes.texto}>
            <p>Contato <br></br>
                    <span className={classes.description}>Endereço<br></br><br></br>
                                Estrada Francisco Thomaz dos Santos, 390
                                Pântano do Sul, CEP 88067-700
                                Florianópolis - Santa Catarina - Brasil
                    </span>

                    <span className={classes.description}>Email<br></br><br></br>

                                maurojaymes@terra.com.br<br></br><br></br>
                                Telefone<br></br> <br></br>
                                Móvel e WhatsApp: +55 48 99206-1471
                    </span>
            </p>
            <p>
                Redes Sociais <br></br>
                <i className="topIconCon fa-brands fa-facebook"></i>
        <a href="https://www.instagram.com/arunaespacoregenerativo" target="_blank" rel="noreferrer" ><i className="topIconCon fa-brands fa-instagram"></i></a>
        <i className="topIconCon fa-brands fa-airbnb"></i>

            </p>
        </div>
        
    </div>
    </div>
   
    </>
    
    
    
    

  )
}

export default Cardscontato
