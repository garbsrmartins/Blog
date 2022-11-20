import './Quartos.css'
import { makeStyles} from '@material-ui/core'


import Footer from '../../Footer/Footer'

import Headerbeija from '../../Header2/HeaderBeija'
import Cardsbeija from '../../Cards/Cardsbeija'



const useStyles = makeStyles ((theme) => ({

    

  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/beijaflor.webp'})` ,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
    
    [theme.breakpoints.down("xs")]: {
        backgroundSize: 'cover',
           
    }
    


    
    
},


}))

function Beija() {
  
  const classes = useStyles ();
  return (

       
      
  
    <div className={classes.root}>
   

<Headerbeija/>
<Cardsbeija/>
  
   <Footer/>
    </div> 
   
   
  )
}

export default Beija
