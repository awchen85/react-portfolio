import React, {useState} from 'react'
import Logo from '../assets/logo_transparent.png';
import {FaBars, FaTimes} from 'react-icons/fa';




const Navbar = ({ currentPage, handlePageChange }) => {
    const determineIsActive = (tabName, currentPage) => {
        let linkClass='';
        if (tabName === currentPage) {
            linkClass += " active";
        }
        return linkClass;
    };
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
            <img src={Logo} alt="logo" style={{width: '50px'}} />
        </div>
        {/* menu */}
            <ul className='hidden md:flex'>
                <li>
                    <a href="about"
                    className={determineIsActive("About, currentPage")}
                    onClick={() => handlePageChange("About")}
                    >About</a>
                </li>

                <li><a href="work"
                    className={determineIsActive("Work, currentPage")}
                    onClick={() => handlePageChange("Work")}
                    >Work</a></li>
                <li><a href="resume"
                    className={determineIsActive("Resume, currentPage")}
                    onClick={() => handlePageChange("Resume")}
                    >Resume</a></li>
                <li><a href="contact"
                    className={determineIsActive("Contact, currentPage")}
                    onClick={() => handlePageChange("Contact")}
                    >Contact</a></li>
            </ul>
        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>
        {/* Mobile Menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>

                <li className='py-6 text-4xl'>About</li>
                <li className='py-6 text-4xl'>Work</li>
                <li className='py-6 text-4xl'>Resume</li>
                <li className='py-6 text-4xl'>Contact</li>
        </ul>
    </div>
  )
}

export default Navbar