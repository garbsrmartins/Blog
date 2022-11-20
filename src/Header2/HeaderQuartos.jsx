import React from 'react'

import { makeStyles} from '@material-ui/core'
import piramide from '../images/casapiramide.png'


const useStyles = makeStyles ((theme) => ({

    

  root: {

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
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

}))

function HeaderQuartos() {
const classes = useStyles ();

  return (
    <div className={classes.root}>
    <div className={classes.title}>
    <img className='imgHeader' src={piramide} alt="texto"/>
    
    </div>
    
   
    </div>
  )
}

export default HeaderQuartos
