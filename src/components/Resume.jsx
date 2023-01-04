import React from 'react'
import CSS from '../assets/icons/css.png';
import HTML from '../assets/icons/html.png';
import Javascript from '../assets/icons/javascript.png';
import Mongo from '../assets/icons/mongo.png';
import Node from '../assets/icons/node.png';
import ReactImg from '../assets/icons/react.png';
function Resume() {

  return (
    <div className='bg-[#0a192f] w-full h-screen text-gray-300'>
    {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-purple-600'>Experience & Resume</p>
                <p className='py-4'>// These are the technologies that I have worked with</p>
            </div>
            {/* Icon Grid */}
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt="HTML" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt="HTML" />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Javascript} alt="HTML" />
                    <p className='my-4'>Javascript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Mongo} alt="HTML" />
                    <p className='my-4'>Mongo</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Node} alt="HTML" />
                    <p className='my-4'>Node</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={ReactImg} alt="HTML" />
                    <p className='my-4'>React</p>
                </div>
            </div>
            <a href='{require(`../assets/Resume.pdf`)}'>
            <button className='text-white border-2 hover:bg-purple-600 hover:border-purple-600 px-4 py-3 my-8 mx-auto flex items-center'>Download My Resume</button>
            </a>
        </div>
    </div>
  )
}

export default Resume