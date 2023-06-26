import './App.css'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import NestedCircles from './components/circles'
import HeaderText from './components/HeaderText'
import WorkExperience from './components/WorkExperience'

import Education from './components/education'
import BgCircle from './components/bgcircle/bgcircle'

import Projects from './components/projcts'
import Buttons from './components/Buttons'
import NavBar from './components/navbar'



function App() {

  return (
   <>
     <Parallax pages={3} style={{ top: '0', left: '0' }} className="bg-mainThemeColor "  autoPlay interval="5000" transitionTime="5000" infiniteLoop >
          <ParallaxLayer offset={0} speed={0} factor={3}>
            <div className='bg-mainThemeColor rounded-md text-sm md:text-lg lg:text-xl'>
              <div className="flex flex-row justify-around ">
                <  div className="flex flex-col justify-around ">
                    <div className='basis-1/4'>
                     <NavBar/>
                      <div className=" flex flex-row justify-center pt-16"><div className="pr-1 text-sirNameColor text-6xl">Diako</div><div className="text-lastNameColor text-6xl">Ismail</div></div>
                    </div>
                 
                    <div className='basis-3/4 flex flex-col justify-center'>
                    <div className='basis-3/4 flex flex-col justify-around'>
                      <div className='pb-2'>
                      <HeaderText/>
                      </div>
            
                    <Buttons/>
                    </div>
                    </div>
            
                  </div>
                <NestedCircles/>
              </div>
            </div>  
         </ParallaxLayer>
         <ParallaxLayer offset={1} speed={2.5}>
          <div className='drop-shadow-lg'>
          <WorkExperience/>  
          </div>
          <div className='drop-shadow-lg'>
                <Education/>  
                </div>
                <div className='drop-shadow-lg'>
                <Projects /> 
                </div>
                  
          </ParallaxLayer>
         
         
      </Parallax>
      
      {/* <BgCircle/> */}
    
    </>
  )
}

export default App
