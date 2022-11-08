import React from 'react'
import {motion} from 'framer-motion'
import './Slider.css'

import image1 from "../images/room-azul/1.webp"

import image3 from "../images/room-azul/3.webp"
import image4 from "../images/room-azul/4.webp"
import image5 from "../images/room-azul/5.webp"
import image6 from "../images/room-azul/6.webp"
import image7 from "../images/room-azul/7.webp"


const images =[image1, image3,image4,image5,image6,image7]

function Slider() {



  return (
    <>
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
    <div className='SliderMobile'>
    <motion.div className='carousel' whileTap={{cursor:"grabbing"}}>
          <motion.div className='inner'
          drag="x"
          dragConstraints={{right:0, left:-3300}}
          >

                  {images.map (image => (

                        <motion.div key={image} className='item'>

                          <img src={image} alt="Aruna"/>

                        </motion.div>


                  ))}

          </motion.div>
    </motion.div>
  </div>
  </>
  )
}

export default Slider

