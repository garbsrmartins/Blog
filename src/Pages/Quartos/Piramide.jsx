import './Quartos.css'
import { makeStyles} from '@material-ui/core'


import Footer from '../../Footer/Footer'

import HeaderQuartos from '../../Header2/HeaderQuartos'
import Cardsquarto from '../../Cards/CardsQuartos'



const useStyles = makeStyles ((theme) => ({

    

  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/piramideexterno.webp'})` ,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
    [theme.breakpoints.down("xs")]: {
        backgroundSize: 'cover',
           
    }
    


    
    
},


}))

function Piramide() {
  
  const classes = useStyles ();
  return (

       
      
  
    <div className={classes.root}>
   

<HeaderQuartos/>
<Cardsquarto/>
  
   <Footer/>
    </div> 
   
   
  )
}

export default Piramide
