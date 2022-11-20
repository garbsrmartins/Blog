import React from 'react'

import { makeStyles} from '@material-ui/core'
import piramide from '../images/piramideexterno.webp'



const useStyles = makeStyles ((theme) => ({

    

  root: {

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '40vh',
    width: '100%',
    flexDirection: 'column'
    
    
},

title: {

  width: '60%',
  fontSize: '3em',
  textAlign: 'center',
  fontFamily:'Montserrat',
  color: 'black',

},

imgheader: {

 width:'100vw',
 height:'100%',
 maxHeight:'40vh',
 objectFit: 'cover',  

 overflow: 'hidden',
 display:'none',


},

}))

function HeaderQuartos() {
const classes = useStyles ();

  return (
    <>
    <img className={classes.imgheader} src={piramide} alt="piramide"/>
    <div className={classes.root}>
      
    <div className={classes.title}>
     
   <div>Aruna<br></br> Casa Pirâmide</div>
    
    </div>
    
   
    </div>
    </>
  )
}

export default HeaderQuartos
