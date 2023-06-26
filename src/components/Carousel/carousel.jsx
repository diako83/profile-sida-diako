import React, { Component } from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import imageSrc from '../../assets/profile/IMG_0851.jpg'
import imageSrcOne  from '../../assets/profile/diako1.png'
import imageSrcTwo from '../../assets/profile/diakotwo.png'



const CarouselOne =()=>{
  return (
<div className='rounded-full'>
    
      <Carousel 
      showNex={false} showIndicators={false} showStatus={false} className="flex flex-wrap justify-around "  autoPlay interval="5000" transitionTime="5000" infiniteLoop showThumbs={false}>
      
        <div className='pl-10 pr-10 h-96 rounded-'>
          <img src={imageSrcOne} alt="" className='rounded-full' />
        </div>
        <div className='pl-10 pr-10 '>
        <img src={imageSrc} alt="" className='rounded-full' />
        </div>
        <div className='pl-10 pr-10'>
        <img src={imageSrcTwo} alt="" className='rounded-full'/>
        </div> 
      </Carousel>
    </div>
   
);

}

export default CarouselOne;