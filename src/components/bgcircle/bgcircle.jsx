const BgCircle =()=>{

  return(
    <><div className="absolute top-[-10%] right-[20%] w-[300px] h-[300px] bg-gradient-to-t from-orangeStartColor  to-orangeEndColor opacity-5  rounded-full flex justify-center items-center"></div><div className=" w-[100px] h-[100px] left-32 bg-gradient-to-t from-outerRingOne to-outerRingSecond rounded-full flex justify-center items-center relative opacity-30">
      <div id="one" className="expand absolute top-0 right-20 w-[15px] h-[15px] bg-gradient-to-t from-orangeStartColor to-orangeEndColor  rounded-full flex justify-center items-center"></div>
      <div id="one" className="expand absolute top-20 left-16 w-[50px] h-[50px] bg-gradient-to-t from-mainThemeColor to-mainThemeColor rounded-full flex justify-center items-center">
        <div className="w-[30px] h-[30px] bg-gradient-to-t from-orangeStartColor to-orangeEndColor rounded-full"></div>
      </div>

      <div className="w-[80px] h-[80px] bg-gradient-to-t from-middleRingOne to-middleRingSecond rounded-full flex justify-center items-center">
        <div id="one" className="w-[60px] h-[60px] bg-gradient-to-t from-innerRingOne to-innerRingSecond rounded-full"></div>

      </div>
    </div></>
  )
}
export default BgCircle;