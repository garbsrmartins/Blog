import React from 'react'
import {CssBaseline, makeStyles} from '@material-ui/core'
import Header2 from '../Header2/Header2';
import Posts from '../Posts/Posts';
import Footer from '../Footer/Footer';


const useStyles = makeStyles((theme) => ({

    root: {
        minHeight: '100vh',
        backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/Mar.jpeg'})` ,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%',
        [theme.breakpoints.down("xs")]: {
            backgroundSize: 'cover',
               
        }
        

    }


}))

function Home2() {

    const classes = useStyles();
  return (
    <div className={classes.root}>
     
      <CssBaseline/>
      <Header2/>
      <Posts/>
      <Footer/>
    </div>
  )
}

export default Home2
