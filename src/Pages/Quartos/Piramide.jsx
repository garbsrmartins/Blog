import './Quartos.css'
import { makeStyles} from '@material-ui/core'


import Footer from '../../Footer/Footer'

import HeaderQuartos from '../../Header2/HeaderQuartos'
import Cardsquarto from '../../Cards/CardsQuartos'
import Slider1 from '../../Slider/Slider-Verde'



const useStyles = makeStyles ((theme) => ({

    

  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/Mar.jpeg'})` ,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
    backgroundAttachment: 'fixed',
    [theme.breakpoints.down("xs")]: {
        backgroundSize: 'cover',
           
    }
    


    
    
},
oppacity: {
        
  background:'#ffffff80'
}

}))

function Piramide() {
  
  const classes = useStyles ();
  return (

       
      
  
    <div className={classes.root}>
   <div className={classes.oppacity}>

<HeaderQuartos/>
<Slider1/>
<Cardsquarto/>

  
   <Footer/>
    </div> 
    </div>
   
   
  )
}

export default Piramide
