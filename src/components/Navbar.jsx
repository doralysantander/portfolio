import React, { useState } from 'react';
import {Link} from 'react-scroll';
//import { Routes, Route, Link } from "react-router-dom";

import { FaBars, 
        FaTimes,  
        FaGithub,
        FaLinkedin,
        FaFacebook,
        FaLinkedinIn

} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/logo.png'

const Navbar = () => {
    
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    //const handleClick = () => setNav(!nav);
   
    
  return (
    //<div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#023047] text-slate-100">
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-white text-[#023047]  shadow-lg shadow-[#5ab8c9]'>
     
        <div>
            <img src={Logo} alt="Logo image" style ={{ width: '70px' }} />

        </div>
        {/*Menu */}
       
            <ul  className="hidden md:flex">
                <li>
                    <Link to="home"   >
                            Home
                    </Link>
                </li>
                <li>
                    <Link to="about"    >
                         About
                    </Link>  
                </li>
                <li>
                    <Link to="skills"   >
                         Skills
                    </Link>  
                    
                </li>
                <li>
                <Link to="projects"   >
                        Projects
                    </Link> 
                    
                </li>
                <li>
                <Link to="contact"  duration={500} >
                       Contacts
                </Link> 
                    
                </li>
            </ul>
      
        {/*hamburger */}
        <div onClick={handleClick} className="md:hidden z-10">
            {!nav ? <FaBars />:<FaTimes/> }
            
        </div>

        {/*mobile menu */}
        <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-white flex flex-col justify-center items-center'
        }
      >
        
                <li className="py-6 text-4xl">
                    <Link  onClick={handleClick} to="home"  >
                                Home
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick} to="about"  >
                            About
                    </Link> 
                   
                </li>
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick} to="skills"  >
                            Skills
                    </Link>  

                </li>
       
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick} to="projects" >
                            Projects
                    </Link> 
                </li>
                <li className="py-6 text-4xl">
                <Link onClick={handleClick} to="contact" >
                       Contacts
                </Link> 

                </li>
        </ul>
      

      
    
    </div>
  );
};

export default Navbar
