import Popup from "./popup/popup";
import PopupExperiance from "./popup/popupExperisnce";


const Buttons =()=>{
return(
    <div class="flex flex-wrap justify-evenly">
        < Popup buttonTitle={"Profile"} 
        dataOne={"I wanted to take a moment to share a few things about myself."}
        dataTwo={"First and foremost, I am a driven and passionate individual. I believe in giving my all to whatever I do, whether it's personal or professional. I have always been eager to learn and grow, and I thrive on new challenges. It is my firm belief that with the right mindset and determination, anything is possible."}
        dataThree={"As a professional, I have had the opportunity to work in various industries and gain valuable experience along the way. This exposure has allowed me to develop a versatile skill set and a deep understanding of different work environments. I am confident in my ability to adapt quickly and contribute effectively to any team or project."}
        dataFour={"One of my key strengths is my ability to collaborate and communicate with others. I genuinely enjoy working with a diverse group of individuals and believe that teamwork is crucial for success. I am always open to hearing different perspectives and ideas, as I believe that collaboration leads to innovation and growth."}
        dataFive={"In addition to my collaborative nature, I am also comfortable working independently and taking ownership of my tasks. I am a self-motivated individual who takes initiative and strives for excellence in everything I do. I believe in setting high standards for myself and continuously pushing boundaries to achieve personal and professional growth."}
        dataSix={"Looking ahead, I am excited about the future and the opportunities that lie ahead. I am eager to continue expanding my knowledge and skills in the field I am passionate about. I see myself taking on leadership roles, where I can inspire and guide others towards success."}
        dataSeven={"Thank you for taking the time to read this letter. I hope it has provided you with some insight into who I am as a person and a professional. I am open to discussing any potential opportunities or collaborations in the future."}
        />
        < PopupExperiance buttonTitle={"Experiance"}/>
        
        < Popup buttonTitle={"Reference"}
        dataOne={"Bybrick elevate: Peter Öhlin, team lead, Phone: +46 76 654 30 00 email: peter.ohlin@bybrick.se"}
        dataTwo={"Bybrick elevate: Andreas Ström, Test lead, Phone: +46 70 531 92 38 email: handreas.strom@bybrick.se "}
        dataThree ={"O'learys Västerås: Scott Juliander, Assistant Operations Manager phone: +46 73 4 44 79 96 email: scott.juliander@olearys.se"}
         dataFour ={"Bar Lokal: Johan Kristöm, Operations Manager phone: +46 73 932 63 56"}
         dataFive ={"Coppersmith's brewery, Christian Weber, Brewmaster, phone: +46 72 300 96 65"}
        />
        
        
    </div>

);
}

export default Buttons;


const ProfileText =""