import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function PopupExperiance(props) {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
      className="ml-1 mr-1 bg-innerRingSecond expand outline-innerRingSecond text-white font-bold py-5 px-14  rounded-1xl shadow-2xl shadow-innerRingSecond mb-2"
        type="button"
        onClick={() => setShowModal(true)}
      >
       Experiance
      </button>
      {showModal ? (
        <>
          <div
            className="flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none "
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl ">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none ">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 text-center">
                  <h3 className="text-3xl font-semibold text-orangeEndColor text-center ">
                 My Story so far
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                   
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto bg-mainThemeColor text-black font-light rounded-xl m-4 shadow-xl shadow-innerRingSecond text-left    md:w-auto">
               
                  <div className="text-left">
                    <p className="my-4 text-slate-500 text-lg leading-relaxed"> {experianceText.a1} </p>
                    <p className="my-4 text-slate-500 text-lg leading-relaxed">{experianceText.a2}</p>
                    <p className="my-4 text-slate-500 text-lg leading-relaxed"> {experianceText.a3} </p>
                
                    <p className="my-4 text-slate-500 text-lg leading-relaxed"> {experianceText.a4} </p>
                    <p className="my-4 text-slate-500 text-lg leading-relaxed">{experianceText.a5}</p>
                    <p className="my-4 text-slate-500 text-lg leading-relaxed"> {experianceText.a6} </p>
                  </div>
                 
                
            
             
                </div>
                {/*footer*/}
                <div className="flex items-center justify-start p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-sirNameColor background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
               
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}


const experianceText = {
  a1:
    " In the past few years, I've explored various jobs but haven't found anything that truly stuck. However, my interest in programming and development grew, and I decided to pursue it as a career. I quit my long-term job to become a programmer, completing relevant courses and gaining experience along the way.",
  a2:
    "I had the opportunity to work on diverse projects and expand my skills, even during the pandemic. Despite challenges, I embraced a self-driven approach to learning, going beyond the curriculum. One notable experience was my internship at Bybrick elevate, where I worked with different technologies and developed versatility",

  a3:
    "After graduating, I joined Bybrick as a developer, contributing to backend development using Node.js, Lambda functions, and DynamoDB in AWS. Our team excelled, delivering the project on time and without major issues. Unfortunately, due to the recession, I was let go, but I'm grateful for the valuable experience gained.",

  a4:
    "After a while at the brewery, I applied for Java development at ECUTBILDNING and was accepted for the class of 2020. I graduated in the summer of 2022. The curriculum was very intensive with a high tempo of learning. Each course was approximately a month long, starting with:",

  a5:'Currently, I'+ '`m seeking new opportunities and honing my skills by working on personal projects. I'+'`ve planned a series of projects to create a versatile portfolio, starting with a fitness app using Next.js and Java Spring Boot. Each subsequent project will involve different technologies, allowing me to expand my knowledge and capabilities.'
  ,

  a6:
    "If you're interested in my journey and experiences, I'd love to connect and discuss over coffee.",
  
};
