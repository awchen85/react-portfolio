import React from 'react'
import Bohde from '../assets/Logo-wtext.png';
import MealMaker from '../assets/Meal-Maker-Final.png';
import RunBuddy from '../assets/run-buddy.jpg';
import Jate from '../assets/jate.png'
import Weather from '../assets/weather.png'
import OurPlace from '../assets/Our-Place.png';

const Work = () => {
  return (
<div name='work' className='w-full h-screen text-gray-300 bg-[#0a192f]'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-purple-600'>Work</p>
                <p className='py-6'>// Check out some of my recent work</p>
                </div>
        {/*Card Container*/}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>   
        {/* Card */}
            <div  style={{backgroundImage: `url(${Bohde})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                
        {/* Hover Effects */}
                <div className='opacity-0 group-hover:opacity-100'>
            <span className='text-2xl font-bold text-white tracking-wider'>
Bohde Marketplace
            </span>
                    <div>
                <a href='/'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href='https://github.com/MadelineRamos/Bohde-Marketplace'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
                    </div>
                </div>
        </div>
        <div  style={{backgroundImage: `url(${MealMaker})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                
        {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
            <span className='text-2xl font-bold text-white tracking-wider'>
MealMaker            </span>
                    <div>
                <a href='https://pmacdonald07.github.io/Meal-Maker/'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href='https://github.com/pmacdonald07/Meal-Maker'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
                    </div>
            </div>
        </div>
        <div  style={{backgroundImage: `url(${RunBuddy})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                
        {/* Hover Effects */}
                <div className='opacity-0 group-hover:opacity-100'>
            <span className='text-2xl font-bold text-white tracking-wider'>
Run Buddy
            </span>
                    <div>
                <a href='https://awchen85.github.io/run-buddy/'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href='https://github.com/awchen85/run-buddy'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
                    </div>
                </div>
        </div>
        <div  style={{backgroundImage: `url(${Jate})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                
        {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
            <span className='text-2xl font-bold text-white tracking-wider'>
Just Another Text Editor            </span>
                    <div>
                <a href='https://pacific-crag-75182.herokuapp.com/'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href='https://github.com/awchen85/text-editor'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
                    </div>
            </div>
        </div>
        <div  style={{backgroundImage: `url(${Weather})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                
        {/* Hover Effects */}
                <div className='opacity-0 group-hover:opacity-100'>
            <span className='text-2xl font-bold text-white tracking-wider'>
Weather Dashboard            </span>
                    <div>
                <a href='https://awchen85.github.io/weather/'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href='https://github.com/awchen85/weather'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
                    </div>
                </div>
        </div>
        <div  style={{backgroundImage: `url(${OurPlace})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                
        {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
            <span className='text-2xl font-bold text-white tracking-wider'>
Our Place            </span>
                    <div>
                <a href='/'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo (WIP)</button>
                </a>
                <a href='https://github.com/awchen85/project-3'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
                    </div>
            </div>
        </div>
        </div>
    </div>
</div>

  )
}

export default Work