const CardEducationDisplay =(props)=>{
  return(
    <div  className="card card-side bg-gradient-to-br  from-mainThemeColor from-80% to-sirNameColor/20 to-10% shadow-xl m-5 expand flex-col lg:flex-row">
  {props.imageSrc ?  <figure><img  src={props.imageSrc } alt="" className='w-52  p-2 rounded-3xl'/></figure>:""}
 
  <div className="card-body w-96 justify-center">
    <h1 className="text-sm lg:text-3xl">{props.comp}</h1>
    <p className='text-sm lg:text-2xl'>{props.title}</p>
    <p className='text-sm'>{props.date}</p>
    
    <div className=" md:text-sm  ">
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