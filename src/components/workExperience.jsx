import Card from "./DaisyUi/Card";
import imageSrc from '../assets/img/job/original.png';
import imageSrcCoppersmiths from '../assets/img/job/logga.png';
import imageSrcIca from '../assets/img/job/ica.png';
import imageSrcOl from '../assets/img/job/ol.png';
import imageSrcLokal from '../assets/img/job/LOKAL.png';


const WorkExperience=()=>{
  return(
    <div className="bg-gradient-to-br  from-mainThemeColor from-60% to-sirNameColor/75 to-10%" >
      <h1 className="text-orangeStartColor text-center drop-shadow-lg pt-4">Work Experience</h1>
      <div className=" flex flex-wrap justify-around ">
        <Card imageSrc={imageSrc} comp={"Bybrick Elevate"}  title={"Software developer"} date={"January 2022 to february 2023"} description={"Backend development with Aws Lambda, nodejs, "} descOne={"TypeScript,dynamoDb, .Net C#, Cosmos db "} desctwo={"Front end development with React och Angular"}  />
        <Card imageSrc={imageSrcCoppersmiths} comp={"Coppersmith's Brewery"}  title={"Head Brewer"} date={"2017-2018"} description={"Responsible from the daily beer production and cleaning the equipment and more"} />
        <Card imageSrc={imageSrcOl} comp={"O'learys Västerås"}  title={"Bartender"} date={"2019 - 2020 "} description={"Interacing directly with customers, taking their drink orders, engaging in conversation, and providing a friendly and welcoming atmosphere. They must possess good communication skills, be attentive to customer needs, and offer recommendations based on their preferences."} />
        <Card imageSrc={imageSrcLokal} comp={"Bar Lokal"}  title={"Bartende Waiter "} date={"2020 - 2022"} description={"Besides bartending as Waiters take customers' food and drink orders, ensuring accuracy and attentiveness. They may provide recommendations, answer questions about the menu, and suggest specials or promotions."} />
        <Card imageSrc={imageSrcIca}comp={"ICA Lagret Västerås"}  title={"Warehouse worker"} date={"2008 - 2017"} description={"Employees at ICA Lagret Västerås would be responsible for picking and packing items based on customer orders or store requirements. They would need to locate the requested products within the warehouse, assemble them, and ensure proper packaging to maintain product quality during transit."} />
      </div>
    </div>
  )
}
export default WorkExperience;