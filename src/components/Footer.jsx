import React from 'react'
import {Link} from 'react-scroll';
import { FaBars, 
    FaTimes,  
    FaGithub,
    FaLinkedin,
    FaFacebook,
    FaWhatsapp,
    FaLinkedinIn

} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className="  w-full h-full bg-[#C39317] p-10 ">
        <div className=" sm:grid grid-cols-1 md:grid-cols-2 gap-x-18 ">
            
            <div className=" flex flex-col  justify-items-center items-center font-bold text-[#023047]">
                <span className="py-2 ">
                    Email: doraly9110@hotmail.com
                </span>
                <span>
                Telefono: 3173244337
                </span>
                <span>
                    Ciudad: Pasto - Nariño (COL)
                </span>
            </div>
        
            
            <div className=" flex flex-col justify-items-center items-center font-bold text-[#023047]">
                <span className="py-2 ">
                    Redes sociales
                </span>
                <div className="flex gap-4 text-[#023047]  hover:ml-[10px] duration-300">

                    {/*icons */}
                    <Link className="" 
                    to="">
                        <FaLinkedin size={40}/>
                    </Link>

                    <Link className="" 
                    to="/">
                        <FaFacebook size={40}/>
                    </Link>

                    <Link className=" " 
                    to="/">
                        <FaWhatsapp size={40}/>
                    </Link>
                    <Link className=" " 
                    to="/">
                        <FaGithub size={40}/>
                    </Link>





                </div>
                
            </div>
            
    

        </div>
        
  

    </div>
  )
}

export default Footer