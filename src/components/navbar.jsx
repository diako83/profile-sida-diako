const NavBar=()=>{
  return(
    <div className="flex flex-row justify-around ">
      <div className=" flex flex-row justify-between "><div className="pr-1 text-sirNameColor ">Diako</div><div className="text-lastNameColor">Ismail</div></div>
      <div className="">Home</div>
      <div className="">Work experience</div>
      <div className="">Education</div>
      <div className="">Projects</div>
      <div className="">Contact</div>
    </div>
  )
}

export default NavBar;