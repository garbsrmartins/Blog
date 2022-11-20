import './Quartos.css'
import { makeStyles} from '@material-ui/core'


import Footer from '../../Footer/Footer'

import Headerbeija from '../../Header2/HeaderBeija'
import Cardsbeija from '../../Cards/Cardsbeija'
import Slider2 from '../../Slider/Slider-Prive'



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
   

<Headerbeija/>
<Slider2/>
<Cardsbeija/>

  
   <Footer/>
    </div> 
   
   
  )
}

export default Piramide
