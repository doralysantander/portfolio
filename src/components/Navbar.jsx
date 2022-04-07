import React, { useState } from 'react';

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
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-white text-[#023047]'>
     
        <div>
            <img src={Logo} alt="Logo image" style ={{ width: '70px' }} />

        </div>
        {/*Menu */}
       
            <ul  className=" hidden md:flex">
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Contacts</li>
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
        
       
                <li className="py-6 text-4xl">Skills</li>
                <li className="py-6 text-4xl">Projects</li>
                <li className="py-6 text-4xl">Home</li>
                <li className="py-6 text-4xl">Contacts</li>
                <li className="py-6 text-4xl">About</li>
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
