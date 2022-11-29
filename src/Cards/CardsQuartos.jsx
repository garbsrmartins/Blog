import React from 'react'
import { makeStyles} from '@material-ui/core'



import './Cards.css'



const useStyles = makeStyles ((theme) => ({





texto: {

    

fontFamily: 'Montserrat',
display: 'flex',
fontSize: '1.8em',
width: '80%',
textAlign: 'center',
fontWeight: 'bold',

margin: 'auto',

"@media (max-width: 1280px)": {
    fontSize: '1.5em',
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

reserva: {
    fontFamily: 'Montserrat',

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

brand: {

    display: 'inline-block',
    textAlign: 'center',
    fontSize: '2em',
    margin: '10px 10px 50px 10px',
    color: 'black',
}



}))

function Cardsquarto() {

    const classes = useStyles ();
  return (
    <>
   

        
        <div className={classes.texto}><p>Sobre <br></br>
        <span className={classes.description}>Dedicado às pessoas que buscam relaxamento e paz de espírito.
A casa da Pirâmide faz parte das estruturas do Aruna, um pequeno e exclusivo condomínio que é um verdadeiro refúgio aconchegante no alto da montanha, com vista para o mar e ilhas. Isolado do sistema urbano, em meio a exuberante natureza do sul da Ilha de Florianópolis. O Aruna foi no passado um Eco Spa, após uma grande reforma, mudamos a proposta para locações pontuais de algumas unidades.</span></p>
        
        
    </div>
   

        
        <div className={classes.texto}><p> O espaço
        <span className={classes.description}>A casa da Pirâmide do Aruna foi reconstruída recentemente. A casa é muito bem ventilada, e iluminada, nossa água vem da nascente, estamos rodeados pela floresta preservada e praticamente sem vizinhos próximos. O Aruna possui alguns espaços comuns, ou seja, também podendo ser utilizado pelos hospedes das outras unidades. Temos um espaço para fogueira, uma pequena piscina com água da nascente, um mirante com uma vista espetacular, um lago, e um local para refeições ao ar livre. Temos uma sala, dentro de uma pirâmide, onde praticamos meditação e yoga, o uso desta sala é exclusivo, mas haverá a possibilidade de abrirmos para os hospedes que sinalizarem desejo de participar. As vezes podemos oferecer uma “supresa”, um pequeno cardápio de algumas iguarias, muito especiais aqui da ilha, como ostras gratinadas, mariscos com preparos especiais ou pizzas, entre outras...</span></p>
        
        </div>

   

        
        <div className={classes.texto}><p>Acesso do hóspede
        <span className={classes.description}>



Os hospedes terão acesso a piscina, área para fogueira, churrasqueira, lago e jardins. Temos uma sala com 45 metros quadrados, onde praticamos diariamente meditação e yoga. Os hospedes poderão se integrar em algumas praticas abertas, desde que agendadas com antecedência.
Outras observações
Passeios para ilhas e praias inabitadas. Nas proximidades há variedade de restaurantes, belíssimas praias, trilhas e cachoeiras com piscina natural. Temos uma sala com 45 metros quadrados, dentro de uma pirâmide, onde praticamos diariamente meditação e yoga. Os hospedes poderão se integrar em algumas práticas abertas, desde que agendadas com antecedência. A água que abastece todas as casas, provem de nascente natural. Temos dois cachorros de porte médio, super dóceis e acostumados ao convívio dos hospedes e amigos. Passeios exclusivos com o nosso carro hilux 4x4.</span></p>
         
        </div>
        
   
    

        
        <div className={classes.texto}><p>Outras observações
        <span className={classes.description}>
Passeios para ilhas e praias inabitadas. Nas proximidades há variedade de restaurantes, belíssimas praias, trilhas e cachoeiras com piscina natural. Temos uma sala com 45 metros quadrados, dentro de uma pirâmide, onde praticamos diariamente meditação e yoga. Os hospedes poderão se integrar em algumas práticas abertas, desde que agendadas com antecedência. A água que abastece todas as casas, provem de nascente natural. Temos dois cachorros de porte médio, super dóceis e acostumados ao convívio dos hospedes e amigos.Passeios exclusivos com o nosso carro hilux 4x4</span></p>
       
        </div>
        
    

   
  

        
        <div className={classes.reserva}><p>Faça sua reserva  </p>
        
        <span className={classes.description}>
                Faça sua reserva entrando em contato conosco ou através de uma das empresas parceiras:

        </span>
            <div className={classes.brand}>
        <i class="icon2 fa-solid fa-phone"></i>
        <a href="https://www.airbnb.com.br/rooms/760241883997622770?_set_bev_on_new_domain=1668790515_ZTZiZDkxOTM2Y2U0&source_impression_id=p3_1668952126_r3vx4HqSE%2BAT7y2v" target="_blank" rel="noreferrer" ><i className="icon2 fa-brands fa-airbnb"></i></a>
        </div>
     
    
       </div>
        
        
   
    
    </>
    
    
    
    

  )
}

export default Cardsquarto
