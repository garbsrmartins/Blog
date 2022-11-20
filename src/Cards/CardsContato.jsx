import React from 'react'
import { makeStyles} from '@material-ui/core'

import './Cards.css'


const useStyles = makeStyles ((theme) => ({

cardsDiv: {

    
   
    backgroundRepeat: 'no-repeat',
    
    backgroundSize: 'cover',
},



cards: {
    width: '100%',
    backgroundSize: 'cover',
    background: '#ffffff60 ',
    
    
 

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
fontSize: '2.5em',
width: '100%',
textAlign: 'center',


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
margin: '4em 2em 2em 2em',
fontSize: '0.5em',
fontWeight: 'bold',

textAlign: 'center',
display: 'inline-block',

"@media (max-width: 1280px)": {
    fontSize: '0.5em',
    float: 'none',
    justifyItems: 'center',
    margin: '50px auto',
   
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
  },

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
        <a href="https://www.airbnb.com.br/rooms/760241883997622770?_set_bev_on_new_domain=1668790515_ZTZiZDkxOTM2Y2U0&source_impression_id=p3_1668952126_r3vx4HqSE%2BAT7y2v" target="_blank" rel="noreferrer" ><i className="topIconCon fa-brands fa-airbnb"></i></a>

            </p>
        </div>
        
    </div>
    </div>
   
    </>
    
    
    
    

  )
}

export default Cardscontato
