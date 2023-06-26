import './App.css'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import NestedCircles from './components/circles'
import HeaderText from './components/HeaderText'
import NavBar from './components/navbar'
import WorkExperience from './components/WorkExperience'

import CarouselOne from './components/Carousel/carousel'
import Education from './components/education'
import BgCircle from './components/bgcircle/bgcircle'

import arrowImg from '../src/assets/img/next.png';
import Projects from './components/projcts'



function App() {

  return (
   <>
     <Parallax pages={3} style={{ top: '0', left: '0' }} className="bg-mainThemeColor "  autoPlay interval="5000" transitionTime="5000" infiniteLoop >
          <ParallaxLayer offset={0} speed={0} factor={3}>
            <div className='bg-mainThemeColor rounded-md text-sm md:text-lg lg:text-xl'>
              <div className="flex flex-row justify-around ">
                <  div className="flex flex-col justify-around ">
                    <div className='basis-1/4'>
                     {/* <NavBar/> */}
                      <div className="flex flex-row justify-around ">
                        <div className=" flex flex-row justify-between "><div className="pr-1 text-sirNameColor ">Diako</div><div className="text-lastNameColor">Ismail</div></div>
                        <div className="">Home</div>
                        <div className="">Work experience</div>
                        <div className="">Education</div>
                        <div className="">Projects</div>
                        <div className="">Contact</div>
                      </div>
                    </div>
                 
                    <div className='basis-2/4'>
                    <HeaderText/>
                    </div>
                    {/* <div className="flex justify-center">
          <img className='w-52 transform rotate-90 expand' src={arrowImg} alt="" />
        </div> */}
                  </div>
                <NestedCircles/>
              </div>
            </div>  
         </ParallaxLayer>
         <ParallaxLayer offset={0.98} speed={2.5}>
                <WorkExperience/>   
          </ParallaxLayer>
          <ParallaxLayer offset={1.0} speed={2.5}>
                <Education/>  
                <Projects />  
          </ParallaxLayer>   
         
      </Parallax>
      <BgCircle/>
    </>
  )
}

export default App
