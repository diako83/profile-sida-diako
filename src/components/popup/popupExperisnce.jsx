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
                <div className="relative p-6 flex-auto bg-middleRingOne text-white font-light rounded-xl m-4 shadow-2xl shadow-innerRingSecond text-left ">
                <Carousel showNex={false} showIndicators={false} showStatus={false} className="flex flex-wrap justify-around "  showThumbs={false}>
                  <div className="text-left">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">I want to tell you about how i started programming and how its going </p>
                    <p className="my-4 text-slate-500 text-lg leading-relaxed"> {experianceText.a1} </p>
                    <p className="my-4 text-slate-500 text-lg leading-relaxed">{experianceText.a2}</p>
                    <p className="my-4 text-slate-500 text-lg leading-relaxed"> {experianceText.a3} </p>
                  </div>
                  <div className="text-left">
                    <p className="my-4 text-slate-500 text-lg leading-relaxed"> {experianceText.a4} </p>
                    <p className="my-4 text-slate-500 text-lg leading-relaxed">{experianceText.a5}</p>
                    <p className="my-4 text-slate-500 text-lg leading-relaxed"> {experianceText.a6} </p>
                  </div>
                  <div className="text-left">
                    <p className="my-4 text-slate-500 text-lg leading-relaxed"> {experianceText.a7} </p>
                    <p className="my-4 text-slate-500 text-lg leading-relaxed">{experianceText.a8}</p>
                    <p className="my-4 text-slate-500 text-lg leading-relaxed"> {experianceText.a9} </p>
                  </div>
                  <div className="text-left">
                    <p className="my-4 text-slate-500 text-lg leading-relaxed"> {experianceText.a10} </p>
                    <p className="my-4 text-slate-500 text-lg leading-relaxed">{experianceText.a11}</p>
                    <p className="my-4 text-slate-500 text-lg leading-relaxed"> {experianceText.a12} </p>
                  </div>
                  <div className="text-left">
                    <p className="my-4 text-slate-500 text-lg leading-relaxed"> {experianceText.a13} </p>
                    <p className="my-4 text-slate-500 text-lg leading-relaxed">{experianceText.a14}</p>
                    <p className="my-4 text-slate-500 text-lg leading-relaxed"> {experianceText.a15} </p>
                  </div>
                  <div className="text-left">
                    <p className="my-4 text-slate-500 text-lg leading-relaxed"> {experianceText.a16} </p>
                    <p className="my-4 text-slate-500 text-lg leading-relaxed">{experianceText.a17}</p>
                    <p className="my-4 text-slate-500 text-lg leading-relaxed"> {experianceText.a18} </p>
                    <p className="my-4 text-slate-500 text-lg leading-relaxed"> {experianceText.a19} </p>
                  </div>
                
            
                  </Carousel>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
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
    " It" +
    "s been a few years since my interest in programming and development began." +
    "I have had a lot of different types of jobs/employments during the years, but nothing that really stuck." +
    " Though I have always done my best at whatever assignment I have been given," +
    "there is always a point where you" +
    "ve learned everything there is to know or it" +
    "s not as challenging. The assignment becomes stagnant and repetitive.",
  a2:
    "It wasn" +
    "`t until a friend of mine recommended me to try programming. It first started with " +
    "YouTube tutorials, then slowly but steadily with continuous coding and development, I found that this was what I wanted to work with, to have as a career. " +
    "A mentally stimulating environment where you are constantly challenged and there is no end to what you can learn.",

  a3:
    "This led me to quit my job of eight years to pursue my goals to become a programmer. " +
    "I enrolled in basic programming at NTI Skolan and completed Programming 1 and 2 in C#, which then gave me the credentials I needed to apply for Yrkesutbildning." +
    "During this time, I worked as a beer brewer at Coppersmith`" +
    "s Brewery, which was a lot of fun and exciting during my time there.",

  a4:
    "After a while at the brewery, I applied for Java development at ECUTBILDNING and was accepted for the class of 2020. I graduated in the summer of 2022. The curriculum was very intensive with a high tempo of learning. Each course was approximately a month long, starting with:",

  a5:<>
  <ul>
    <li>- HTML/CSS</li>
    <li>- JavaScript</li>
    <li>- Practical database design (MySQL, Postgres)</li>
    <li>- Advanced JavaScript (React, React Native)</li>
    <li>- Programming in Java</li>
    <li>- Advanced Java</li>
    <li>- Web development in Java (Spring Boot)</li>
    <li>- Test-driven development in Java</li>
    <li>- Project structure/working with others (JIRA and more</li>
    <li>- Software portfolio</li>
    <li>- Internship 1</li>
    <li>- Internship 2</li>
    <li>- Graduation assignment</li>
  </ul>
  </>
  ,

  a6:
    "During that time, I also worked part-time as a bartender at O" +
    "learys." +
    "This was during the time that the pandemic hit us all, so I worked wherever I was needed, including O" +
    "learys, Bistro Gränden, Mälarkrogen, and Bar lokal.",
  a7:
    "Though the curriculum was set, we were encouraged to learn as much as possible. The course plan was such that the students had to find source material mostly on our own, so we learned much more than the curriculum intended.",

  a8:
    "I did my internship at Bybrick elevate in Örebro, which was a great experience. I got to work with amazing people and had a great time. Though I had just learned React and Java, I was put on an assignment where I got to work with Angular, C#, and .NET instead. Though I learned to use those platforms, I think the most valuable skill I gained from my time with Bybrick was to be versatile and flexible. I love learning new technologies and acquiring new skills.",

  a9:
    "After I graduated, I was offered a position as a developer with Bybrick, and I could not have been happier to accept. My goal to make programming/development my career had been achieved! During my employment with the company, I got to use my versatile skills and create a backend for an application with Node.js, Lambda functions, and DynamoDB in Amazon Web Services. I deployed the backend to the cloud and updated and tested the code as much as possible. Though I had a tendency to create API functions that were not needed afterward, I cleaned up and optimized the code as well as I could. We were a three-man team and worked very well together. We were commended because the project was on time and there were no major problems that hindered production.",

  a10:
    "After being with the company for about five and a half months, the recession hit. So on February 16, 2022, I was let go from the company. I was the last one in the company, so I was the first to go. I fully understand their decision. Negative financial decisions are always hard to make. But I appreciate the time I had with the company. It was fun, and I learned a lot.",

  a11:
    "Since then, I have been searching for a new team of great people to work with. And until such time, I have been honing my skills by creating my own projects.",

  a12:
    "When starting my first project, I had to first make a decision on what technologies to use. What do I need to focus my energy on? I want to create a versatile portfolio, so I made a plan. I am going to start with the most difficult and change technologies for every project.",

  a13:
    "So in my first project, I wanted to create a fitness app where the user can create their own workouts and monitor their progress. For that, I wanted to use:",

  a14:<>
  <ul>
    <li>- Next.js 13 with TypeScript</li>
    <li>- - Java Spring Boot in a microservice architecture</li>
  </ul>
  </>
,
  a15:
    "This would give me a chance to hone my Java skills and delve deeper into Java, learn how to use Eureka Server, Kafka, Cloud Gateway, and also to implement Docker and Kubernetes with CI/CD pipelines and secure the backend.",

  a16:
    "In my second project, I plan to use C#/.NET 7, if not the newest version, to create the API and Vite, if not solid as a platform.",

  a17:
    "The third project will be a React Native app with AWS Lambda functions, and for my fourth project, I want to create a native program in either Java or C#, maybe even Java EE edition. The main goals of these projects are to create a portfolio and to increase and hone my skills.",

  a18:
    "It may take time, but with hard work and ambition, you will achieve. Hard work comes before greatness, so let" +
    "s become great.",

  a19:
    "If you find my journey and experiences interesting, contact me. Let" +
    "s have a conversation over a coffee.",
};
