import React from 'react'
import Monkey1 from '../../Gif/Monkey1'
import Monkey2 from '../../Gif/Monkey2'
import Giphy from '../../Gif/Giphy'

const Page1 = () => {
  return (
    <div data-scroll data-scroll-speed="1" className='w-full bg-[#424242] '>
        
  <First/>
  <Second/>
  <Third/>
  

    </div>
  )
}

export default Page1

 


function First() {
 return(
     <div className=' w-full h-screen   items-center flex'>
        <div className='w-1/2 h-full bg-red-90  flex items-center px-28'>
        <div className='   text-white gap-3  p-2'>
            <h1 className="heading text-3xl font-semibold">Completely decentralized.</h1>
            <p className='mt-8 text-lg font-semibold tracking-tight '>No central coordinator. No central point of failure. Your node, your rules, your sats, your privacy. Made possible by the market.</p>
        </div>
        </div>
        <div className='w-1/2 h-full bg-zinc-30 flex items-center justify-center'>
           <div className="card w-2/3 h-2/3 bg-red-90 ">
<img src="1.png" alt="" />
           </div>
        </div>
    </div>
 )
}


function Second() {
 return(
     <div className=' w-full h-screen   items-center flex'>

       <div className='w-1/2 h-full bg-zinc-30 flex items-center justify-center'>
           <div className="card w-2/3 h-2/3 bg-red-90 ">
<img src="2.png" alt="" />
           </div>
        </div>

        
        <div className='w-1/2 h-full bg-red-90  flex items-center px-28'>
        <div className='   text-white gap-3  p-2'>
            <h1 className="heading text-3xl font-semibold">Completely decentralized.</h1>
            <p className='mt-8 text-lg font-semibold tracking-tight '>No central coordinator. No central point of failure. Your node, your rules, your sats, your privacy. Made possible by the market.</p>
        </div>
        </div>
       
    </div>
 )
}


function Third() {
 return(
     <div className=' w-full h-screen   items-center flex'>
        <div className='w-1/2 h-full bg-red-90  flex items-center px-28'>
        <div className='   text-white gap-3  p-2'>
            <h1 className="heading text-3xl font-semibold">Completely decentralized.</h1>
            <p className='mt-8 text-lg font-semibold tracking-tight '>No central coordinator. No central point of failure. Your node, your rules, your sats, your privacy. Made possible by the market.</p>
        </div>
        </div>
        <div className='w-1/2 h-full bg-zinc-30 flex items-center justify-center'>
           <div className="card w-2/3 h-2/3 bg-red-90 ">
<img src="3.png" alt="" />
           </div>
        </div>
    </div>
 )
}