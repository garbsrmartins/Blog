import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"


import Img2 from '../images/pool.webp'


function ResponsiveCarousel() {
  return (
    <div>
       <Carousel>
                <div>
                    <img  src={Img2} alt='slider'/>
                    
                </div>
                <div>
                    <img  src={Img2}alt='slider' />
                    
                </div>
                <div>
                    <img  src={Img2} alt='slider' />
                    
                </div>
                
            </Carousel>
    </div>
  )
}

export default ResponsiveCarousel

