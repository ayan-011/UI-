import { Link } from "react-router-dom"

 
 

 

const Nav = () => {
  return (
    <div className='w-full  md:p-8 flex justify-between items-center md:px-6 p-4 '>

        <div className="logo">Logo</div>


    {/* Buttons  */}
        <div className="buttons md:flex hidden md:gap-8 items-center">
            <Link to="/docs">
            <div className="docs">Docs</div>
            </Link>
           <a 
  href="https://github.com/ayan-011/UI-" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <div className="code">Code</div>
</a>
            <div className="about">About</div>

            <button className="Install  md:p-1.5 md:px-5 rounded outline-white hover-outline-zinc  outline-[1px]  hover-bg-white hover-black transition-all duration-100 cursor-pointer">Install</button>
        </div>


    {/* MenuIcon for mobile */}
        <div className="menuIcon flex flex-col gap-1 md:hidden ">
            <div className="w-5 h-[1px] rounded-full bg-white"></div>
            <div className="w-5 h-[1px] rounded-full bg-white"></div>
            <div className="w-5 h-[1px] rounded-full bg-white"></div>
        </div>

    </div>
  )
}

export default Nav