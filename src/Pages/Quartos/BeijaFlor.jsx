import './Quartos.css'
import { makeStyles} from '@material-ui/core'


import Footer from '../../Footer/Footer'

import Headerbeija from '../../Header2/HeaderBeija'
import Cardsbeija from '../../Cards/Cardsbeija'
import Slider2 from '../../Slider/Slider-Prive'



const useStyles = makeStyles ((theme) => ({

    

  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/Mar.jpeg'})` ,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
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
<Slider2/>
<Cardsbeija/>

  
   <Footer/>
    </div> 
    </div>
   
  )
}

export default Piramide
