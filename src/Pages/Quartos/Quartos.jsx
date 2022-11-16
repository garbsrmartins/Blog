import './Quartos.css'
import { makeStyles} from '@material-ui/core'


import Footer from '../../Footer/Footer'
import Slider from '../../Slider/Slider'
import Slider1 from '../../Slider/Slider-Verde'
import Slider2 from '../../Slider/Slider-Prive'
import HeaderQuartos from '../../Header2/HeaderQuartos'



const useStyles = makeStyles ((theme) => ({

    

  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/4.webp'})` ,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
    [theme.breakpoints.down("xs")]: {
        backgroundSize: 'cover',
           
    }
    


    
    
},


}))

function Quartos() {
  
  const classes = useStyles ();
  return (

       
      
  
    <div className={classes.root}>
   

<HeaderQuartos/>
  
    <Slider/> 
    <Slider1/>
    <Slider2/>
    <Footer/>
    </div> 
   
   
  )
}

export default Quartos
