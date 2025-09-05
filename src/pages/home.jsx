import React from 'react'
import Nav from '../../Components/nav'
import Page1 from './Page1'
import Footer from '../../Components/Footer'
import Page2 from './page2'

const Home = () => {
  return (
    <>
    <div className=' custom-gradient xl:bg-zinc-200  w-full  txt-white select-none h-fit   iPhone5se '> 
      <Nav/>

          {/* Tagline */}
      <div className=" w-full xl:p-4 py-8  flex flex-col items-center justify-center gap-y-20  xl:mt-0  mt-10">
        <div className='text-center w-full '>
        <div className="tagline xl:text-[40px] lg:text-[40px] text-[25px] w-full font-semibold">Your Data. Your Control.</div>
        <div className="tagline xl:py-2 tracking-tight font-extralight xl:text-[16px]  sm:text-[14px] text-[12px]">UI in Progress. Learning Never Stops.</div> 
        </div>
           <button className=" xl:p-3 xl:px-10 xl:flex lg:hidden p-3 px-12 rounded outline-zinc-700  outline-[1px]      xl:hover:bg-zinc-100 xl:hover:text-black transition-all duration-200  cursor-pointer">Get started</button>
      </div>


{/* Image  */}
    <div className="image w-full   lg:justify-center lg:items-center lg:flex lg:mt-10 xl:mt-10  flex xl:items-center xl:justify-center">
        <div className='xl:w-1/2 xl:p-0 lg:w-3/4 p-2   flex xl:justify-center xl:items-center  gap-2 flex-col   text-center '>

        <img src="data.png" alt="" className=' w-full shadow-zinc-900   drop-shadow-2xl pointer-events-none select-none' />
        <div className='tracking-tight xl:text-[16px] text-[10px] '>Random image to make the UI interactive.</div>
        </div>

       
    </div>

     <div className="i-padpro hidden xl:hidden lg:flex lg:items-center lg:justify-center p-20 w-full ">
           <button className="px-20 p-4   rounded outline-white  outline-[1px]      xl:hover:bg-zinc-100 xl:hover:text-black transition-all duration-200  cursor-pointer">Get started</button>
        </div>

     </div>


    <div className="lg:bg-[#424242] bg-zinc-200  w-full lg:py-14 xl:flex  hidden"></div>
<div className='w-full overflow-hidden'>

    <Page1  />
    <Page2/>

</div>
    
    <Footer/>
    
    </>
  )
}

export default Home