import React from 'react'
import Logo from '../assets/logo_transparent.png';

const Navbar = ({ currentPage, handlePageChange }) => {
    const determineIsActive = (tabName, currentPage) => {
        let linkClass='';
        if (tabName === currentPage) {
            linkClass += " active";
        }
        return linkClass;
    };

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
            <img src={Logo} alt="logo" style={{width: '50px'}} />
        </div>
        {/* menu */}
            <ul className='flex'>
                <li>
                    <a href="/react-portfolio"
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
    </div>
  )
}

export default Navbar