
import imageSrc from '../assets/img/school/nti.png'
import imageSrcEc from '../assets/img/school/ec.png'
import CardEducationDisplay from './DaisyUi/cardEducationDisplay';


const Education=()=>{
  return(
    <>
    

    <div className="bg-gradient-to-tr  from-lastNameColor/75 from-40% to-mainThemeColor to-10% mb-10" >
      <h1 className="text-orangeStartColor text-center drop-shadow-lg pt-4">Work Experience</h1>
      <div className=" flex flex-wrap justify-around ">
      <CardEducationDisplay
            imageSrc={imageSrcEc} 
            comp={"ECUTBILDNING"} 
            title={"Javautveklare"} 
            date={"Examen 2022-06-07"}
             
            description={"Html, CSS ,Java Script, TypeScript, React,React Native, Git, Docker  "} 
            descOne={"Also Spring boot applications with focus  on api and databases"} 
           />

           <CardEducationDisplay 
        imageSrc={imageSrc} 
        comp={"NTI-Skolan "}  
        title={"Programming 1 and 2 "} 
        date={"2018"} 
        description={"Basics programming in c# "} 
        />
      <CardEducationDisplay
       comp={"Rudbeckianska gymnasiet "}  
       title={"Social science programme"}
        date={"1999 to 2002"} 
        description={"social science programs encompass a wide range of disciplines that study human society and social relationships. Some common social science disciplines  include sociology, psychology, anthropology, political science, economics, and communication studies, among others.  The program provide students with a comprehensive understanding of social theories, research methodologies, and critical thinking skills."}/>
      </div>
    </div>
    </>
  )
}
export default Education;