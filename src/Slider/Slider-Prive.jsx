import React from 'react'
import {motion} from 'framer-motion'
import './Slider.css'

import image1 from "../images/room-aruna/1.webp"
import image2 from "../images/room-aruna/2.webp"
import image3 from "../images/room-aruna/3.webp"
import image4 from "../images/room-aruna/4.webp"
import image5 from "../images/room-aruna/5.webp"
import image6 from "../images/room-aruna/6.webp"
import image7 from "../images/room-aruna/7.webp"
import image8 from "../images/room-aruna/8.webp"
import image9 from "../images/room-aruna/9.webp"
import image10 from "../images/room-aruna/10.webp"
import image11 from "../images/room-aruna/11.webp"
import image12 from "../images/room-aruna/12.webp"



const images =[image1, image2,image3,image4,image5,image6,image7,image8, image9, image10, image11, image12]

function Slider2() {



  return (
    <>
    <div className='Slider'>
      <motion.div className='carousel' whileTap={{cursor:"grabbing"}}>
            <motion.div className='inner'
            drag="x"
            dragConstraints={{right:0, left:-7000}}
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
          dragConstraints={{right:0, left:-7400}}
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

export default Slider2

