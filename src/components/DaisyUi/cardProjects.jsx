

const CardProjects =(props)=>{
return(
  <div  className="card card-side bg-gradient-to-br  from-mainThemeColor from-80% to-lastNameColor to-10% shadow-xl m-5 expand">
    <figure><img src={props.imageSrc} alt="Movie" className='w-52 p-2 rounded-3xl'/></figure>
 
  <div className="card-body w-96">
    <h1 className="card-title ">{props.comp}</h1>
    <p className='text-2xl'>{props.title}</p>
    <p className='text-sm'>{props.date}</p>
    
    <div className=" ">
      <h2 className='font-bold'>Project </h2>
      <p className="pb-2">{props.description}</p>
      <p className="pb-2"> {props.descOne}</p>
      
      <p> {props.desctwo}</p>
      <br />
      <ul>
     <li> <a className="text-lastNameColor" href={props.gitRepoFront} >Git repo frontend </a></li>
     <li><a className="text-lastNameColor"  href={props.gitRepoBackend}>Git repo Backend </a></li>
    
      </ul>
      
    </div>
  </div>
</div>
)
}
export default CardProjects;