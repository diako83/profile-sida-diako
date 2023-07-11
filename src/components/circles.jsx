import imageSrc from '../assets/img/geek.png';
import imageSrcProfile from '../assets/img/profile.png';
import CarouselOne from './Carousel/carousel';
const NestedCircles = () => {
 
  return (<>
  
  <div  className="flex justify-center items-center h-screen ">
  
    <div className=''>
    <div className="sticky top-[-10%] right-[20%] w-[300px] h-[300px] bg-gradient-to-t from-orangeStartColor  to-orangeEndColor opacity-5  rounded-full flex justify-center items-center z-[-0]"></div>

    <div className=" w-[500px] h-[500px] left-32 bg-gradient-to-t from-outerRingOne to-outerRingSecond rounded-full flex justify-center items-center relative">
    <div id="one" className="expand absolute top-0 right-20 w-[15px] h-[15px] bg-gradient-to-t from-orangeStartColor to-orangeEndColor  rounded-full flex justify-center items-center"></div>
      <div id="one" className="expand absolute top-20 left-16 w-[50px] h-[50px] bg-gradient-to-t from-mainThemeColor to-mainThemeColor rounded-full flex justify-center items-center">
        <div className="w-[30px] h-[30px] bg-gradient-to-t from-orangeStartColor to-orangeEndColor rounded-full"></div>
      </div>
      <div  id="one" className="expand absolute top-24 right-0 w-[100px] h-[100px] bg-gradient-to-t from-mainThemeColor to-mainThemeColor rounded-full flex justify-center items-center">
        <div className=" w-[70px] h-[70px] bg-gradient-to-t from-orangeStartColor to-orangeEndColor rounded-full"> <img id="rotated" className='ml-1' src={imageSrc} alt="" /></div>
      </div>
      <div  className="w-[400px] h-[400px] bg-gradient-to-t from-middleRingOne to-middleRingSecond rounded-full flex justify-center items-center">
        <div id="one"  className="w-[280px] h-[280px] bg-gradient-to-t from-innerRingOne to-innerRingSecond rounded-full"></div>
        {/* <img  className='expand  rounded-full w-80 absolute top-[-23%] right-50' src={imageSrcProfile} alt="" /> */}
        <div className='expand  rounded-full w-80 absolute top-[15%] right-50'  >
        <CarouselOne/>
        </div>
    
      </div>
    </div>

  </div>

  <div id="one" className="expand absolute  top-[500px] right-[0px] w-[95px] h-[195px]  bg-gradient-to-r from-orangeStartColor from-95%  to-mainThemeColor to-1% opacity-75 rounded-l-full flex justify-center items-center">
     <div className="w-[93px] h-[193px]  bg-mainThemeColor opacity-100 rounded-l-full"></div>
     <div id="one" 
     className="expand absolute 
     top-[60px] right-[84px]
      w-[15px] h-[15px] bg-gradient-to-t from-orangeStartColor to-orangeEndColor  rounded-full flex justify-center items-center"></div>
 
    </div>
    <div   className="absolute  top-[78%] right-[10px] w-[200px] h-[200px] bg-gradient-to-br from-outerRingOne to-outerRingSecond  opacity-20  rounded-full  rounded- flex justify-center items-center"></div>
 {/* profil bild här  */}
    <div id="one" className="expand sticky top-[90%] right-96 w-[195px] h-[97.5px] bg-gradient-to-b from-orangeStartColor from-95%  to-mainThemeColor to-1% opacity-75 rounded-t-full flex justify-center items-center">
      <div className=" w-[193px] h-[95.5px] bg-mainThemeColor opacity-100 rounded-t-full"></div>
      <div 
        id="one"
        // style={{top: `${720}px`, left: `${1020}px`}} 
        className="expand absolute top-[0%] right-[30%] w-[15px] h-[15px] bg-gradient-to-t from-orangeStartColor to-orangeEndColor  rounded-full flex justify-center items-center"></div> 
    </div>
    </div>

    </>
  );
};

export default NestedCircles;