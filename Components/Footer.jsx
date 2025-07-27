import React from 'react'

const  Footer = () => {
  return (
    <div className='w-full flex flex-col  rounded-t-[90px] bg-black '>
         
         <div className="text w-full h-1/3   text-white text-center p-15  flex flex-col gap-10">
         <div className="heading text-3xl font-semibold ">Lorem ipsum dolor sit amet consectetur.</div>

         <div className="button">
            <button className=" md:p-3 md:px-10 p-2 px-6 rounded outline-zinc-700  outline-[1px]   bg-zinc-900  hover:bg-white hover-black  transition-all duration-200 cursor-pointer">Get started</button>
         </div>
         </div>
         <div className="sections w-full flex h-full justify-center px-8  ">
            <div className="firstCol   w-1/4   h-full p-10  leading-8 text-lg  text-zinc-300">
            <div>
                <div>Getting Started</div>
                <div>Contributing</div>
                <div>About</div>
                <div>FAQ</div>
            </div>
            </div>
            <div className="firstCol   w-1/4   h-full p-10  leading-8 text-lg  text-zinc-300 flex justify-center">
            <div>
                <div>Documentation</div>
                <div>Releases</div>
                <div>License</div> 
            </div>
            </div>
            <div className="firstCol   w-1/4   h-full p-10  leading-8 text-lg  text-zinc-300  flex justify-end">
            <div>
                <div>YouTube</div>
                <div>Github</div>
                <div>Intagram</div>
                <div>X.com</div>
            </div>
            </div>
            
         </div>


  {/* last Line  */}

  <div className="w-full text-center text-zinc-300   h-32 p-9">
    Lorem ipsum dolor sit, amet consectetur adipisicing.
  </div>

    </div>
  )
}

export default  Footer