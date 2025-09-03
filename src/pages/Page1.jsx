const Page1 = () => {
  return (
    <div className='w-full md:bg-[#424242] bg-zinc-200 pointer-events-none text-black md:text-white   py-10  flex flex-col gap-5 '>
        
  <First/>
  <Second/> 
  <Third/>
  

    </div>
  )
}

export default Page1

 


function First() {
 return(
     <div className=' w-full md:h-screen h-fit md:py-0 py-5 items-center flex md:flex-row flex-col md:gap-0 '>
        <div className='md:w-1/2  md:h-full h-1/3  bg-red-90  flex md:items-center md:px-28 items-end '>
        <div className='   flex flex-col  md:p-2 p-4 mt-16 gap-7'>
            <p className="heading md:text-4xl text-4xl  md:font-bold  text-start "> <span className="font-light ">Completely</span> decentralized.</p>
            <p className='md:mt-8 md:text-xl   tracking-tight leading-tight text-[14px]'>No central coordinator. No central point of failure. Your node, your rules, your sats, your privacy. Made possible by the market.</p>
        </div>
        </div>
        <div className='md:w-1/2 md:h-full h-1/2 bg-zinc-30 flex md:items-center items-start justify-center'>
           <div className="card w-2/3  h-2/3 bg-red-90 ">
<img src="1.png" alt="" />
           </div>
        </div>
    </div>
 )
}


function Second() {
 return(
     <div className=' w-full md:h-screen h-fit md:py-0 py-5 items-center flex md:flex-row flex-col md:gap-0 '>
        <div className='md:hidden md:w-1/2  md:h-full h-1/3  bg-red-90  flex md:items-center md:px-28 items-end '>
        <div className='   flex flex-col  md:p-2 p-4 mt-16 gap-7 '>
            <p className="heading md:text-4xl text-4xl  md:font-bold  text-start "> <span className="font-light ">Completely</span> decentralized.</p>
            <p className='md:mt-8 md:text-xl   tracking-tight leading-tight text-[14px]'>No central coordinator. No central point of failure. Your node, your rules, your sats, your privacy. Made possible by the market.</p>
        </div>
        </div>


        <div className='md:w-1/2 md:h-full h-1/2 bg-zinc-30 flex md:items-center items-start justify-center '>
           <div className="card w-2/3  h-2/3 bg-red-90 ">
<img src="2.png" alt="" />
           </div>
        </div>

         <div className='hidden  md:w-1/2  md:h-full h-1/3  bg-red-90  md:flex md:items-center md:px-28 items-end '>
        <div className='   flex flex-col  md:p-2 p-4 mt-16'>
            <p className="heading md:text-4xl text-4xl  md:font-bold  text-start "> <span className="font-light ">Completely</span> decentralized.</p>
            <p className='md:mt-8 md:text-xl   tracking-tight leading-tight text-[14px]'>No central coordinator. No central point of failure. Your node, your rules, your sats, your privacy. Made possible by the market.</p>
        </div>
        </div>
    </div>
 )
}



function Third() {
 return(
    <div className=' w-full md:h-screen h-fit md:py-0 py-5 items-center flex md:flex-row flex-col md:gap-0 '>
        <div className='md:w-1/2  md:h-full h-1/3  bg-red-90  flex md:items-center md:px-28 items-end '>
        <div className='   flex flex-col  md:p-2 p-4 mt-16 gap-7'>
            <p className="heading md:text-4xl text-4xl  md:font-bold  text-start "> <span className="font-light ">Completely</span> decentralized.</p>
            <p className='md:mt-8 md:text-xl   tracking-tight '>No central coordinator. No central point of failure. Your node, your rules, your sats, your privacy. Made possible by the market.</p>
        </div>
        </div>
        <div className='md:w-1/2 md:h-full h-1/2 bg-zinc-30 flex md:items-center items-start justify-center'>
           <div className="card w-2/3  h-2/3 bg-red-90 ">
<img src="3.png" alt="" />
           </div>
        </div>
    </div>
 )
}
