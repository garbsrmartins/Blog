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

function Cardsbeija() {

    const classes = useStyles ();
  return (
    <>
    <div className={classes.cardsDiv}>
    <div className={classes.cards}>

        
        <div className={classes.texto}><p>Sobre <br></br>
        <span className={classes.description}>A Casa Beija Flor faz parte das estruturas do Aruna, um pequeno e exclusivo condomínio que é um verdadeiro refúgio aconchegante no alto da montanha, com vista para o mar e ilhas. Isolado do sistema urbano, em meio a exuberante natureza do sul da Ilha de Florianópolis, o Aruna foi no passado um Eco Spa. Após uma grande reforma, mudamos a proposta para locações pontuais de algumas unidades.</span></p>
        
        </div>
        
    </div>
    </div>
    <div className={classes.cardsDiv1}>
    <div className={classes.cards}>

        
        <div className={classes.texto}><p> O espaço
        <span className={classes.description}>A Casa Beija Flor foi reconstruída recentemente, é muito bem ventilada e iluminada, nossa água vem da nascente, estamos rodeados pela floresta preservada e praticamente sem vizinhos próximos.

O Aruna possui alguns espaços comuns: espaço para fogueira, uma pequena piscina com água da nascente, um mirante com uma vista espetacular, um lago e um local para refeições ao ar livre.

Temos uma sala, dentro de uma Pirâmide, onde praticamos meditação e yoga. O uso desta sala é exclusivo, mas haverá a possibilidade de abrirmos para os hospedes que sinalizarem desejo de participar das práticas.

Eventualmente podemos oferecer uma “supresa”, um pequeno cardápio de algumas iguarias, muito especiais aqui da ilha, como ostras gratinadas, mariscos com preparos especiais ou pizzas.

Dedicado as pessoas que buscam relaxamento e paz de espírito, o Aruna é a evolução de um espaço que outrora funcionava como um Spa de Terapias Naturais. O significado de Aruna vem da mitologia oriental "Arjuna", que sua tradução para o ocidental é "O buscador da verdade".</span></p>
        
        </div>
        
    </div>
    </div>
    <div className={classes.cardsDiv2}>
    <div className={classes.cards}>

        
        <div className={classes.texto}><p>Acesso do hóspede
        <span className={classes.description}>



        Os hospedes terão acesso a piscina (nos horários permitidos), área para fogueira e churrasqueira (mediante a um agendamento), lago e jardins livres.

Há um mirante com vista para mar e as praias dos Açores, Pântano do Sul e Solidão, local ideal para tomar um café da manha ou contemplar a maravilhosa vista do mar e natureza local.</span></p>
         
        </div>
        
    </div>
    </div>
    <div className={classes.cardsDiv2}>
    <div className={classes.cards}>

        
        <div className={classes.texto}><p>Outras observações
        <span className={classes.description}>
        Temos uma sala com 45 metros quadrados, dentro de uma pirâmide, onde praticamos diariamente meditação e yoga. Os hospedes poderão se integrar em algumas práticas abertas, desde que agendadas com antecedência.

<br></br><br></br>A água que abastece todas as casas, provem de nascente natural.<br></br><br></br>

Temos dois cachorros de porte médio, super dóceis e acostumados ao convívio dos hospedes e amigos.</span></p>
       
        </div>
        
    </div>
    </div>
    </>
    
    
    
    

  )
}

export default Cardsbeija
