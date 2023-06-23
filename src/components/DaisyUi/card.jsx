import imageSrc from '../../assets/img/cardbgone.jpg';

const Card =(props)=>{
return(
  <div  className="card card-side bg-gradient-to-br  from-mainThemeColor from-80% to-lastNameColor to-10% shadow-xl m-5 expand">
    <figure><img src={props.imageSrc} alt="Movie" className='w-52 p-2'/></figure>
 
  <div className="card-body w-96">
    <h1 className="card-title ">{props.comp}</h1>
    <p className='text-2xl'>{props.title}</p>
    <p className='text-sm'>{props.date}</p>
    
    <div className=" ">
      <h2 className='font-bold'>Assignment</h2>
      <p>{props.description}</p>
      <p> {props.descOne}</p>
      <p> {props.desctwo}</p>
    </div>
  </div>
</div>
)
}
export default Card;