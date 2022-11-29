import './Quartos.css'
import { makeStyles} from '@material-ui/core'


import Footer from '../../Footer/Footer'
import ImageSlider from '../../Slider/Slider-Test'

import Headerbeija from '../../Header2/HeaderBeija'
import Cardsbeija from '../../Cards/Cardsbeija'

import { SliderData } from '../../Slider/SliderData'



const useStyles = makeStyles ((theme) => ({

    

  root: {
    minHeight: '100vh',
    backgroundColor: '#E5FBFF',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    [theme.breakpoints.down("xs")]: {
        backgroundSize: 'cover',
           
    },

   
    


    
    
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

<Headerbeija/>
<ImageSlider slides={SliderData}/>

<Cardsbeija/>

  
   <Footer/>
    </div> 
    </div>
   
  )
}

export default Piramide
