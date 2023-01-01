import React from 'react';
import { FaGitHub, FaLinkedin } from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFull} from 'react-icons/bs';


const Footer = () => {
  return (
    <div  className='fixed bg-[#0a192f]'>
         {/* Social Icons */}
         <div>
            <ul>
                <l1>
                    <a href="/">LinkedIn <FaLinkedin size={30} />
                    </a>
                </l1>
            </ul>
        </div>
    </div>
  )
}

export default Footer