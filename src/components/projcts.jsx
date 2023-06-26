import Card from "./DaisyUi/Card";
import imageSrc from '../assets/img/projects/solid1.png';
import imageSrcBrew from '../assets/img/projects/brew3.png';

import CardProjects from "./DaisyUi/cardProjects";


const Projects=()=>{
  return(
    <div className="bg-gradient-to-br  from-mainThemeColor from-60% to-sirNameColor/75 to-10%" >
      <h1 className="text-orangeStartColor text-center drop-shadow-lg pt-4">Projects</h1>
      <div className=" flex flex-wrap justify-around ">
        <CardProjects  imageSrc={imageSrc} comp={"Solid increase"}  title={"Fitness app"} date={"Ongoing"} 
        description={"Solid Increase is in ongoing personal project. Aimed to help to create custom workouts and to monitor progress"}
         descOne={"Technologies: Front end is maid with Nextjs13 and tailwind and Typescript"}
          desctwo={"Backend:Constructed in Microservices Architecture. Java Spring boot, with Eureka, docker, Kubernetes, CI/CD and more  "}
          gitRepoFront={""}
          gitRepoBackend={""}
          />

        <CardProjects  imageSrc={imageSrcBrew } comp={"Brew assist"}  title={"Brew calculator"} date={"Ongoing"} 
        description={"A application that aimed towards home brewers. It takes care of calculations for the measures ingredient and saves recipes for future reference "}
        descOne={"Technologies: Front end is maid with React and Material ui and Typescript"}
        desctwo={"Backend:Constructed as a monolithic application. Java Spring boot, docker and more  "} 
        gitRepoFront={"https://gitlab.com/examena1/clientbrewassistant"}
        gitRepoBackend={"https://gitlab.com/examena1/brewassistantapi"}
        />
   
      </div>
    </div>
  )
}
export default Projects;