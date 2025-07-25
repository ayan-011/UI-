import React from 'react'
import Nav from '../../Components/nav'

const Home = () => {
  return (
    <div className=' custom-gradient w-full txt-white select-none md:h-[160vh] h-[90vh]  iPhone5se'> 
      <Nav/>
      <div className=" w-full md:p-4 py-8 bg-red-90 flex flex-col items-center justify-center gap-y-20">
        <div className='text-center w-full'>
        <div className="tagline md:text-[40px] text-[25px] w-full font-semibold">Your Data. Your Control.</div>
        <div className="tagline md:py-2 tracking-tight font-extralight md:text-[16px]  text-[12px]">UI in Progress. Learning Never Stops.</div> 
        </div>
           <button className=" md:p-3 md:px-10 p-2 px-6 rounded outline-zinc-700  outline-[1px]   bg-zinc-900  hover:bg-white hover-black  transition-all duration-200 cursor-pointer">Get started</button>
      </div>


{/* Image  */}
    <div className="image w-full  md:mt-10 bg-red-90 flex md:items-center md:justify-center">
        <div className='md:w-1/2 md:p-0 p-2  flex md:justify-center md:items-center gap-2 flex-col bg-red-90  text-center '>

        <img src="/data.png" alt="" className='  md:w-[80vh] w-full shadow-zinc-900   drop-shadow-2xl pointer-events-none select-none' />
        <div className='tracking-tight md:text-[16px] text-[12px]'>Random image to make the UI interactive.</div>
        </div>
    </div>

     </div>
  )
}

export default Home