import React from 'react'
import logo from '../images/1478297.png'
import { makeStyles} from '@material-ui/core'
import './Header2.css'


const useStyles = makeStyles ((theme) => ({

    root: {

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100%'
        
        
    },

    goDown: {

            color: 'black',
            fontSize: '4em',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 'auto'
    }

}))

function Header2() {
const classes = useStyles ();

  return (
    <div>
    <div className={classes.root}>
      <img className='imgHeader' src={logo} alt="texto"/>
    
    </div>
    
   
    </div>
  )
}

export default Header2
