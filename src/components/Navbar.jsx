import React, { useState } from 'react';
import {Link} from 'react-scroll';

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
                    <a href="home"   >
                            Home
                    </a>
                </li>
                <li>
                    <a href="about"    >
                         About
                    </a>  
                </li>
                <li>
                    <a href="skills"   >
                         Skills
                    </a>  
                    
                </li>
                <li>
                <a href="projects"   >
                        Projects
                    </a> 
                    
                </li>
                <li>
                <a href="contact"  duration={500} >
                       Contacts
                </a> 
                    
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
                    <a  onClick={handleClick} href="home"  >
                                Home
                    </a>
                </li>
                <li className="py-6 text-4xl">
                    <a onClick={handleClick} href="about"  >
                            About
                    </a> 
                   
                </li>
                <li className="py-6 text-4xl">
                    <a onClick={handleClick} href="skills"  >
                            Skills
                    </a>  

                </li>
       
                <li className="py-6 text-4xl">
                    <a onClick={handleClick} href="projects" >
                            Projects
                    </a> 
                </li>
                <li className="py-6 text-4xl">
                <a onClick={handleClick} href="contact" >
                       Contacts
                </a> 

                </li>
        </ul>
      

        {/*icons 
        <div className=" hidden lg:flex  fixed flex-col top-[35%] left-0">
            <ul>
                
                <li className=" w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-blue-600  ">
                    <a className="flex justify-between items-center w-full text-gray-300" 
                    href="/">
                        Linkendin <FaLinkedin size={30}/>
                    </a>
                </li>
                <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-blue-600  ">
                    <a className="flex justify-between items-center w-full text-gray-300" 
                    href="/">
                        facebook <FaFacebook size={30}/>
                    </a>
                </li>
                <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-blue-600  ">
                    <a className="flex justify-between items-center w-full text-gray-300" 
                    href="/">
                        Github <FaGithub size={30}/>
                    </a>
                </li>
                <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-blue-600  ">
                    <a className="flex justify-between items-center w-full text-gray-300" 
                    href="/">
                        Email <HiOutlineMail size={30}/>
                    </a>
                </li>
                <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-blue-600  ">
                    <a className="flex justify-between items-center w-full text-gray-300" 
                    href="/">
                        Resume < BsFillPersonLinesFill size={30}/>
                    </a>
                </li>
            </ul>

        </div>*/}
    
    </div>
  );
};

export default Navbar
