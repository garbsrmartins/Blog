import './Quartos.css'
import { makeStyles} from '@material-ui/core'


import Footer from '../../Footer/Footer'

import HeaderQuartos from '../../Header2/HeaderQuartos'
import Cardsquarto from '../../Cards/CardsQuartos'
import Slider1 from '../../Slider/Slider-Verde'



const useStyles = makeStyles ((theme) => ({

    

  root: {
    minHeight: '100vh',
    backgroundColor: 'white' ,
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
<Slider1/>
<Cardsquarto/>

  
   <Footer/>
    </div> 
   
   
  )
}

export default Piramide
