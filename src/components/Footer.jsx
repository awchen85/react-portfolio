import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';


const Footer = () => {
  return (
    <div  className='fixed bg-[#0a192f]'>
         
        {/* Social Icons */}
        <div className='hidden lg:flex fixed flex-row bottom-[00%] left-[20%] justify-center '>
        <div className='w-[160px] h-[60px] flex justify-between items-center duration-300 bg-blue-700 px-5'>
            <a className='flex justify-between items-center w-full text-gray-300' 
            href='https://www.linkedin.com/in/alex-w-chen/'>
                Linkedin <FaLinkedin size={30} />
            </a>
            </div>
        <div className='w-[160px] h-[60px] flex justify-between items-center duration-300 bg-black px-5'>
            <a className='flex justify-between items-center w-full text-gray-300' 
            href='https://github.com/awchen85'>
                Github <FaGithub size={30} />
            </a>
        </div>
        <div className='w-[160px] h-[60px] flex justify-between items-center duration-300 bg-[#6fc2b0] px-5'>
            <a className='flex justify-between items-center w-full text-gray-300' 
            href='/'>
                Email <HiOutlineMail size={30} />
            </a>
        </div>
        <div className='w-[160px] h-[60px] flex justify-between items-center duration-300 bg-[#565f69] px-5'>
            <a className='flex justify-between items-center w-full text-gray-300' 
            href='/contact'>
                Contact <BsFillPersonLinesFill size={30} />
            </a>
        </div>
        </div>
        </div>

  )
}

export default Footer