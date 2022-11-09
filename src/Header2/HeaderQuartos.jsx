import React from 'react'

import { makeStyles} from '@material-ui/core'


const useStyles = makeStyles ((theme) => ({

    root: {

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '70vh',
        width: '100%',
        fontSize: '5em'
        fontFamily: 'Montserrat',
        
        
    },

    goDown: {

            color: 'black',
            fontSize: '4em',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 'auto'
    }

}))

function HeaderQuartos() {
const classes = useStyles ();

  return (
    <div>
    <div className={classes.root}>
      Quartos
    
    </div>
    
   
    </div>
  )
}

export default HeaderQuartos
