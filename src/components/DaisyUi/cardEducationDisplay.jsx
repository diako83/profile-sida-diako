const CardEducationDisplay =(props)=>{
  return(
    <div  className="card card-side bg-gradient-to-br  from-mainThemeColor from-80% to-sirNameColor/75 to-10% shadow-xl m-5 expand ">
  {props.imageSrc ?  <figure><img src={props.imageSrc } alt="" className='w-52 p-2 rounded-3xl'/></figure>:""}
 

    <div className="absolute top-[-10%] right-[20%] w-[300px] h-[300px] bg-gradient-to-t from-orangeStartColor  to-orangeEndColor opacity-5  rounded-full flex justify-center items-center"></div>

    <div className=" w-[100px] h-[100px] left-32 bg-gradient-to-t from-outerRingOne to-outerRingSecond rounded-full flex justify-center items-center relative opacity-30">
    <div id="one" className="expand absolute top-0 right-20 w-[15px] h-[15px] bg-gradient-to-t from-orangeStartColor to-orangeEndColor  rounded-full flex justify-center items-center"></div>
      <div id="one" className="expand absolute top-20 left-16 w-[50px] h-[50px] bg-gradient-to-t from-mainThemeColor to-mainThemeColor rounded-full flex justify-center items-center">
        <div className="w-[30px] h-[30px] bg-gradient-to-t from-orangeStartColor to-orangeEndColor rounded-full"></div>
      </div>
    
      <div  className="w-[80px] h-[80px] bg-gradient-to-t from-middleRingOne to-middleRingSecond rounded-full flex justify-center items-center">
        <div id="one"  className="w-[60px] h-[60px] bg-gradient-to-t from-innerRingOne to-innerRingSecond rounded-full"></div>
        
      </div>
    </div>
  <div className="card-body w-96 justify-center">
    <h1 className=" ">{props.comp}</h1>
    <p className='text-2xl'>{props.title}</p>
    <p className='text-sm'>{props.date}</p>
    
    <div className=" ">
      <h2 className='font-bold'>Learning subjects</h2>
      <p>{props.description}</p>
      <p> {props.descOne}</p>
      <p> {props.desctwo}</p>
    </div>
  </div>

  
</div>
  );
}

export default CardEducationDisplay;