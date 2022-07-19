// antes de implementar motion
import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';
import { motion } from "framer-motion"
import HV from '../doc/HV-DORALY-SANTANDER-CHAMORRO1.pdf'

const Home = () => {
  return (
    <div name="home" className = "w-full h-screen bg-[#023047]">
       <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-slate-100 '>
            <p className="text-white lg:text-2xl sm:text-3xl ">Hi, my name is</p>
            <motion.h1 
             transition ={{duration:10}} 
            animate = {{ 
             
              y: 0,
              
    


              }} className=" lg:text-5xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-yellow-700 ">DORALY SANTANDER CHAMORRO</motion.h1>
            <h2 className="text-4xl sm:text-3xl font-bold text-l">I'M A DEVELOPER</h2>
            <div className="" >
            <a href= {HV} download={'HV-DORALY-SANTANDER-CHAMORRO'}>
              <button  className=" bg-[#C39317] hover:bg-amber-500 text-white group font-bold py-2 px-6 border-2  flex items-center border-blue-800 rounded " >
 
                My resumé
                <span className=" group-hover:rotate-90 duration-400">
                  <HiArrowNarrowRight className="ml-3" />
                </span>
              </button>
           </a>
       {/* <button class="  bg-[#C39317] group-hover:ease-in duration-300">Button A</button>*/}
            </div>
        </div>
        
       

        
        

    </div>
  )
}

export default Home