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

    </div>
  )
}

export default Page1

function First() {
    return (
        <>
          <div className="w-full p-10  px-32 ">
          
          <div className="w-full flex  items-center ">
            <div className="text w-1/2  text-center  p-15  bg-red-90">
                <span className="heading text-center text-3xl text-white font-semibold">Heading</span>
                <p className="text text-left text-xl text-white p-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem consectetur officiis laboriosam eaque odio veniam.</p>
            </div>
            <div className="Image w-1/2 p-10">
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