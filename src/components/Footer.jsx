import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';



const Footer = () => {
  return (
    <div  className='fixed bg-[#0a192f]'>
         
        {/* Social Icons */}
        <div className='fixed flex md:flex-col bottom-[00%] '>
        <div className='w-[60px] h-[60px] flex items-center duration-300 bg-blue-700 px-5'>
            <a className='flex justify-between items-center w-full text-gray-300' 
            href='https://www.linkedin.com/in/alex-w-chen/'>
                 <FaLinkedin size={30} />
            </a>
            </div>
        <div className='w-[60px] h-[60px] flex justify-between items-center duration-300 bg-black px-5'>
            <a className='flex justify-between items-center w-full text-gray-300' 
            href='https://github.com/awchen85'>
                 <FaGithub size={30} />
            </a>
        </div>
       
        </div>
        </div>

  )
}

export default Footer