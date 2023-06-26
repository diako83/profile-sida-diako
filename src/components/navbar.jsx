import linkedin from '../assets/img/icons/linkedin.png'; 
import instagram from '../assets/img/icons/instagram.png'; 
import phone from '../assets/img/icons/smartphone.png'; 
import email from '../assets/img/icons/email.png'; 
import sleep from '../assets/img/icons/sleep.png'; 
import { useState } from 'react';

const NavBar=()=>{

  return(
    <div className="flex flex-row justify-around pt-5">
   
  <a className='expand' href="https://www.linkedin.com/in/diako-ismail-5b7677195" target="_blank"
    rel="noreferrer"><img src={linkedin} className="w-10" alt="" /></a> 

   <a className='expand' href="https://www.instagram.com/diako_is/" target="_blank"
    rel="noreferrer">   <img src={instagram} className="w-10" alt="" /></a>
    <div className='lg:tooltip  lg:tooltip-bottom expand' data-tip="070 489 7202 ">
    <img src={phone} className="w-10" alt="" />  
    </div>
    <div className='lg:tooltip  lg:tooltip-bottom expand' data-tip="ismaildiako@gmail.com">
      <img src={email} className="w-10" alt="" />
    </div>
    <div className='lg:tooltip  lg:tooltip-bottom expand' data-tip="Sweden, Västerås">  
      <img src={sleep} className="w-10" alt="" />
    </div>  
    
    </div>
  )
}

export default NavBar;