import React from 'react'

const  Footer = () => {
  return (
    <div data-scroll data-scroll-speed="2" className='w-full flex flex-col  md:rounded-t-[90px] custom-gradient-2 '>
         
         <div className="text w-full h-1/3   text-white text-center md:p-15  p-4   flex flex-col gap-10">
         <div className="heading md:text-3xl text-lg font-semibold    ">Lorem ipsum dolor sit amet consectetur.</div>

         <div className="button">
            <button className=" md:p-3 md:px-10 p-2 px-6 rounded outline-zinc-700  outline-[1px]      md:hover:bg-zinc-100 md:hover:text-black transition-all duration-200  cursor-pointer">Get started</button>
         </div> 
         </div>

         <div className="sections w-full flex h-full justify-center md:px-8 p-5  ">
            <div className="firstCol   md:w-1/4  w-full h-full md:p-10  md:leading-8 md:text-lg  text-zinc-300  text-[10px] leading-4">
            <div>
                <div>Getting Started</div>
                <div>Contributing</div>
                <div>About</div>
                <div>FAQ</div>
            </div>
            </div>
            <div className="firstCol   md:w-1/4 w-full  h-full md:p-10 md:px-0 px-  md:leading-8  md:text-lg  text-zinc-300 flex justify-center  text-[10px]  bg-red-9">
            <div className='md:ml-0 ml-6 leading-4 md:leading-8'>
                <div>Documentation</div>
                <div>Releases</div>
                <div>License</div> 
            </div>
            </div>
            <div className="firstCol  md:w-1/4  w-full h-full md:p-10  md:leading-8 md:text-lg  text-zinc-300  flex justify-end text-[10px] leading-4">
            <div className='te'>
                <div>YouTube</div>
                <div>Github</div>
                <div>Intagram</div>
                <div>X.com</div>
            </div>
            </div>
            
         </div>


  {/* last Line  */}

  <div className="w-full text-zinc-400   md:h-32 md:p-9 p-3 text-center  bottom-0 mt-5 md:mt-0 text-[9px]">
    Lorem ipsum dolor sit, amet consectetur adipisicing.
  </div>

    </div>
  )
}

export default  Footer