import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import CardEducationDisplay from '../DaisyUi/cardEducationDisplay';
import imageSrc from '../../assets/img/school/nti.png'
import imageSrcEc from '../../assets/img/school/ec.png'

const CarouselOne =()=>{
  return (
    <div >
      <h1 className="text-orangeStartColor text-center drop-shadow-lg pb-4">Education</h1>
          <Carousel className="flex flex-wrap justify-around " centerMode={true}>
        <div className='pl-10 pr-10'>
            <CardEducationDisplay 
            imageSrc={imageSrcEc} 
            comp={"ECUTBILDNING"} 
            title={"Javautveklare"} 
            date={"Examen 2022-06-07"}
             
            description={"Html, CSS ,Java Script, TypeScript, React,React Native, Git, Docker  "} 
            descOne={"Also Spring boot applications with focus  on api and databases"} 
           />
        </div>
        <div className='pl-10 pr-10'>
        <CardEducationDisplay 
        imageSrc={imageSrc} 
        comp={"NTI-Skolan "}  
        title={"Programming 1 and 2 "} 
        date={"2018"} 
        description={"Basics programming in c# "} 
        />
        </div>
        <div className='pl-10 pr-10'>
        <CardEducationDisplay
       
          comp={"Rutbekianska gymnesiet "}  
          title={"Social science programme"}
           date={"1999 to 2002"} 
           description={"social science programs encompass a wide range of disciplines that study human society and social relationships. Some common social science disciplines  include sociology, psychology, anthropology, political science, economics, and communication studies, among others.  The program provide students with a comprehensive understanding of social theories, research methodologies, and critical thinking skills."}/>
        </div>
    </Carousel>
    </div>

);

}

export default CarouselOne;