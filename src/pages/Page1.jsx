import React from 'react'
import Monkey1 from '../../Gif/Monkey1'
import Monkey2 from '../../Gif/Monkey2'
import Giphy from '../../Gif/Giphy'

const Page1 = () => {
  return (
    <div data-scroll data-scroll-speed="1" className='w-full  h-  bg-[#424242]'>
        
  <First/>
  <Second/>
  <Third/>
  <Fourth/>

    </div>
  )
}

export default Page1

function First() {
    return (
        <>
          <div className="w-full p-10  ">
          
          <div className="w-full flex  items-center justify-center ">
            <div className="text   text-center w-1/2   bg-red-900">
                <span className="heading text-center text-3xl text-white font-semibold">Heading</span>
                <p className="text text-left text-xl text-white p-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem consectetur officiis laboriosam eaque odio veniam.</p>
            </div>
            <div className="Image bg-red-60">
                <div className="monkey  flex justify-center">
                    <Monkey1/>
                </div>
            </div>
          </div>

          </div>
        </>
    )
}


function Second() {
    return (
        <>
          <div className="w-full p-10 px-32 ">
          
          <div className="w-full flex  items-center ">
            <div className="Image w-1/2 p-10">
                  <div className="monkey  flex justify-center">
                    <Monkey2/>
                </div>
            </div>
            <div className="text w-1/2  text-center  p-15  bg-red-90">
                <span className="heading text-center text-3xl text-white font-semibold">Heading</span>
                <p className="text text-left text-xl text-white p-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem consectetur officiis laboriosam eaque odio veniam.</p>
            </div>
          </div>

          </div>
        </>
    )
}



function Third() {
    return (
        <>
          <div className="w-full p-20 px-32  ">
          
          <div className="w-full flex  items-center ">
            <div className="text w-1/2  text-center  p-15  bg-red-90">
                <span className="heading text-center text-3xl text-white font-semibold">Heading</span>
                <p className="text text-left text-xl text-white p-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem consectetur officiis laboriosam eaque odio veniam.</p>
            </div>
            <div className="Image w-1/2 p-10">
                <div className="monkey  flex justify-center">
                    <Giphy/>
                </div>
            </div>
          </div>

          </div>
        </>
    )
}


function Fourth() {
 return(
     <div className='h-screen w-full  bg-black flex'>
        <div className='w-1/2 h-full bg-red-900  flex items-center px-28'>
        <div className=' bg-zinc-200 gap-3  p-2'>
            <h1 className="heading text-3xl font-semibold">Completely decentralized.</h1>
            <p className='mt-8 text-lg font-semibold tracking-tight '>No central coordinator. No central point of failure. Your node, your rules, your sats, your privacy. Made possible by the market.</p>
        </div>
        </div>
        <div className='w-1/2 h-full bg-zinc-300 flex items-center justify-center'>
           <div className="card w-2/3 h-2/3 bg-red-900 ">
<img src="learning.png" alt="" />
           </div>
        </div>
    </div>
 )
}