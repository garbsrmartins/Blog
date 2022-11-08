import React from 'react'
import {motion} from 'framer-motion'
import './Slider.css'

import mar from "../images/Mar.jpeg"
import pool from "../images/pool.webp"

const images =[mar,pool,mar,mar]

function Slider() {



  return (
    <div className='Slider'>
      <motion.div className='carousel' whileTap={{cursor:"grabbing"}}>
            <motion.div className='inner'
            drag="x"
            dragConstraints={{right:0, left:-3000}}
            >

                    {images.map (image => (

                          <motion.div key={image} className='item'>

                            <img src={image} alt="Aruna"/>

                          </motion.div>


                    ))}

            </motion.div>
      </motion.div>
    </div>
  )
}

export default Slider

