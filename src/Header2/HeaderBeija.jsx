import React from 'react'

import { makeStyles} from '@material-ui/core'




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
  "@media (max-width: 1280px)":{
    fontSize: '2.1em',
  },

},



}))

function Headerbeija() {
const classes = useStyles ();

  return (
    <>
  
    <div className={classes.root}>
      
    <div className={classes.title}>
     
   <div> Casa Refúgio Beija-Flor</div>
    
    </div>
    
   
    </div>
    </>
  )
}

export default Headerbeija
