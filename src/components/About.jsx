import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#132f58] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-purple-600'>Hi, I'm Alex</p>
                </div>
                <div>
                </div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
                <p>It's a pleasure to meet you. Take a look around!</p>
            </div>
            <div className='text-2xl'>
        I'm a full stack developer, striving to get a little better every day.
            </div>
            </div>
        </div>
        
    </div>
  )
}

export default About