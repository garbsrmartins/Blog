import React from 'react'

import { makeStyles} from '@material-ui/core'



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
  color: 'white',

},

}))

function Headerbeija() {
const classes = useStyles ();

  return (
    <div className={classes.root}>
    <div className={classes.title}>
    <div> Casa Refúgio Beija-flor</div>
    
    </div>
    
   
    </div>
  )
}

export default Headerbeija
