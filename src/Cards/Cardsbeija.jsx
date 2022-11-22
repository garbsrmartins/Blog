import React from 'react'
import { makeStyles} from '@material-ui/core'

import './Cards.css'


const useStyles = makeStyles ((theme) => ({

cardsDiv: {

    color:'black',
    backgroundColor: 'none',
    backgroundRepeat: 'no-repeat',    
    backgroundSize: 'cover',
    display:'block',
    
},

cardsDiv1: {

    color:'black',
    backgroundColor: 'none',
    backgroundRepeat: 'no-repeat',   
    backgroundSize: 'cover',
    display:'block',
},
cardsDiv2: {

    color:'black',
    backgroundColor: 'none',
    backgroundRepeat: 'no-repeat',   
    backgroundSize: 'cover',
    display:'block',
},




texto: {

    

fontFamily: 'Montserrat',
display: 'flex',
fontSize: '2.2em',
width: '70%',
textAlign: 'center',
fontWeight: 'bold',

margin: 'auto',

"@media (max-width: 1280px)": {
    fontSize: '2em',
    float: 'none',
    justifyItems: 'center',
    margin: 'auto',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },


},






description: {
    

fontFamily: 'Montserrat',
padding: '2em',
fontSize: '0.7em',

textAlign: 'center',
display: 'flex',



},



}))

function Cardsbeija() {

    const classes = useStyles ();
  return (
    <>
    <div className={classes.cardsDiv}>
    <div className={classes.cards}>

        
        <div className={classes.texto}><p>Sobre <br></br>
        <span className={classes.description}>A Casa Beija Flor faz parte das estruturas do Aruna, um pequeno e exclusivo condomínio que é um verdadeiro refúgio aconchegante. Está localizado no alto da montanha, com o privilégio de uma vista exuberante para o mar e algumas ilhas da região. Isolado do sistema urbano, em meio a natureza preservada do sul da Ilha de Florianópolis, o Aruna foi no passado um Eco Spa, após uma grande reforma, mudamos a proposta para locações pontuais de algumas unidades.</span></p>
        
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
    <div className={classes.cardsDiv1   }>
    <div className={classes.cards}>

        
        <div className={classes.texto}><p>Outras observações
        <span className={classes.description}>
        Temos uma sala com 45 metros quadrados, dentro de uma pirâmide, onde praticamos diariamente meditação e yoga. Os hospedes poderão se integrar em algumas práticas abertas, desde que agendadas com antecedência.

A água que abastece todas as casas, provem de nascente natural.

Temos dois cachorros de porte médio, super dóceis e acostumados ao convívio dos hospedes e amigos.</span></p>
       
        </div>
        
    </div>
    </div>
    </>
    
    
    
    

  )
}

export default Cardsbeija
