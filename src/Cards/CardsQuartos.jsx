import React from 'react'
import { makeStyles} from '@material-ui/core'

import './Cards.css'


const useStyles = makeStyles ((theme) => ({

cardsDiv: {

    color:'black',
    backgroundColor: 'white',
    backgroundRepeat: 'no-repeat',    
    backgroundSize: 'cover',
    display:'block',
},

cardsDiv1: {

    color:'black',
    backgroundColor: 'white',
    backgroundRepeat: 'no-repeat',   
    backgroundSize: 'cover',
    display:'block',
},
cardsDiv2: {

    color:'black',
    backgroundColor: 'white',
    backgroundRepeat: 'no-repeat',   
    backgroundSize: 'cover',
    display:'block',
},




texto: {

    

fontFamily: 'Montserrat',
display: 'flex',
fontSize: '2em',
width: '60%',
textAlign: 'center',

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

function Cardsquarto() {

    const classes = useStyles ();
  return (
    <>
    <div className={classes.cardsDiv}>
    <div className={classes.cards}>

        
        <div className={classes.texto}><p>Sobre <br></br>
        <span className={classes.description}>Dedicado às pessoas que buscam relaxamento e paz de espírito.
A casa da Pirâmide faz parte das estruturas do Aruna, um pequeno e exclusivo condomínio que é um verdadeiro refúgio aconchegante no alto da montanha, com vista para o mar e ilhas. Isolado do sistema urbano, em meio a exuberante natureza do sul da Ilha de Florianópolis. O Aruna foi no passado um Eco Spa, após uma grande reforma, mudamos a proposta para locações pontuais de algumas unidades.</span></p>
        
        </div>
        
    </div>
    </div>
    <div className={classes.cardsDiv1}>
    <div className={classes.cards}>

        
        <div className={classes.texto}><p> O espaço
        <span className={classes.description}>A casa da Pirâmide do Aruna foi reconstruída recentemente. A casa é muito bem ventilada, e iluminada, nossa água vem da nascente, estamos rodeados pela floresta preservada e praticamente sem vizinhos próximos. O Aruna possui alguns espaços comuns, ou seja, também podendo ser utilizado pelos hospedes das outras unidades. Temos um espaço para fogueira, uma pequena piscina com água da nascente, um mirante com uma vista espetacular, um lago, e um local para refeições ao ar livre. Temos uma sala, dentro de uma pirâmide, onde praticamos meditação e yoga, o uso desta sala é exclusivo, mas haverá a possibilidade de abrirmos para os hospedes que sinalizarem desejo de participar. As vezes podemos oferecer uma “supresa”, um pequeno cardápio de algumas iguarias, muito especiais aqui da ilha, como ostras gratinadas, mariscos com preparos especiais ou pizzas, entre outras...</span></p>
        
        </div>
        
    </div>
    </div>
    <div className={classes.cardsDiv2}>
    <div className={classes.cards}>

        
        <div className={classes.texto}><p>Acesso do hóspede
        <span className={classes.description}>



Os hospedes terão acesso a piscina, área para fogueira, churrasqueira, lago e jardins. Temos uma sala com 45 metros quadrados, onde praticamos diariamente meditação e yoga. Os hospedes poderão se integrar em algumas praticas abertas, desde que agendadas com antecedência.
Outras observações
Passeios para ilhas e praias inabitadas. Nas proximidades há variedade de restaurantes, belíssimas praias, trilhas e cachoeiras com piscina natural. Temos uma sala com 45 metros quadrados, dentro de uma pirâmide, onde praticamos diariamente meditação e yoga. Os hospedes poderão se integrar em algumas práticas abertas, desde que agendadas com antecedência. A água que abastece todas as casas, provem de nascente natural. Temos dois cachorros de porte médio, super dóceis e acostumados ao convívio dos hospedes e amigos. Passeios exclusivos com o nosso carro hilux 4x4</span></p>
         
        </div>
        
    </div>
    </div>
    <div className={classes.cardsDiv1   }>
    <div className={classes.cards}>

        
        <div className={classes.texto}><p>Outras observações
        <span className={classes.description}>
Passeios para ilhas e praias inabitadas. Nas proximidades há variedade de restaurantes, belíssimas praias, trilhas e cachoeiras com piscina natural. Temos uma sala com 45 metros quadrados, dentro de uma pirâmide, onde praticamos diariamente meditação e yoga. Os hospedes poderão se integrar em algumas práticas abertas, desde que agendadas com antecedência. A água que abastece todas as casas, provem de nascente natural. Temos dois cachorros de porte médio, super dóceis e acostumados ao convívio dos hospedes e amigos.Passeios exclusivos com o nosso carro hilux 4x4</span></p>
       
        </div>
        
    </div>
    </div>
    </>
    
    
    
    

  )
}

export default Cardsquarto
