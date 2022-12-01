import './Quartos.css'
import { makeStyles} from '@material-ui/core'


import Footer from '../../Footer/Footer'

import HeaderQuartos from '../../Header2/HeaderQuartos'
import Cardsquarto from '../../Cards/CardsQuartos'
import Navbar from '../../NavBar/Navbar'




const useStyles = makeStyles ((theme) => ({

    

  root: {
    minHeight: '100vh',
   backgroundColor: '#FFE9A9',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    [theme.breakpoints.down("xs")]: {
        backgroundSize: 'cover',
           
    }
    


    
    
},
oppacity: {
        
  background:'#ffffff99'
}

}))

function Piramide() {
  
  const classes = useStyles ();
  return (

       
 
  
    <div className={classes.root}>
   <div className={classes.oppacity}>
   <Navbar/>
<HeaderQuartos/>

<Cardsquarto/>

  
   <Footer/>
    </div> 
    </div>
   
   
  )
}

export default Piramide
