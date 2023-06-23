import './App.css'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import NestedCircles from './components/circles'
import HeaderText from './components/HeaderText'
import NavBar from './components/navbar'
import WorkExperience from './components/WorkExperience'

import CarouselOne from './components/Carousel/carousel'



function App() {

  return (
   <>
     <Parallax pages={3} style={{ top: '0', left: '0' }} className="bg-mainThemeColor " >
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
                    
                  </div>
                <NestedCircles/>
              </div>
              
            </div>  
         </ParallaxLayer>
         <ParallaxLayer offset={0.98} speed={2.5}>
                <WorkExperience/>   
          </ParallaxLayer>
          <ParallaxLayer offset={1.1} speed={2.5}>
                <CarouselOne/>  
          </ParallaxLayer>
      </Parallax>
      
    </>
  )
}

export default App
