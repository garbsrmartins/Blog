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
        width: '100%',
        flexDirection: 'column'
        
        
    },

       subtitle: {

      width: '100%',
      fontSize: '2em',
      textAlign: 'center',
      fontFamily:'Montserrat',
      

    },

    

}))

function Header2() {
const classes = useStyles ();

  return (
    <div>
    <div className={classes.root}>
      <div className={classes.logoback}>
      <img className='imgHeader' src={logo} alt="texto"/>
      </div>
      <p className={classes.subtitle}>Florianópolis - Santa Catarina - Brasil</p>
    
    </div>
    
   
    </div>
  )
}

export default Header2
