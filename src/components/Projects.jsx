import React from 'react';
import Project1 from '../assets/project1.jpg';
import Project3 from '../assets/project3.svg';
import Project4 from '../assets/img4.svg';
import Project5 from '../assets/project4.svg';
import Project6 from'../assets/img10.svg'
import { motion } from "framer-motion"


const Projects = () => {
  return (
    <div name='projects' className='w-full h-full  md:h-full text-gray-300 bg-[#023047] p-10 '>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-12 text-center p-12'>
          <p className='text-4xl font-bold inline  text-[#c39317]'>
          Projects
          </p>
          <p className="p-2 text-2xl font-bold">some of my recent works</p>
        </div>

        {/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4  overflow-y-scroll max-h-52 '>

            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Project1})` }}
            className='shadow-lg shadow-[#CCD6F6]  group container rounded-md flex justify-center items-center mx-auto content-div'
          >

            {/**hover */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-xl font-bold text-white tracking-wider">
               Project with html and css
              </span>
              <div className="pt-8 text-center">
                <a href="https://replica-web.vercel.app/#pag-inicio" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#C39317] text-[#023047] font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/doralysantander/Replica-web" target="_blank">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#C39317] text-[#023047] font-bold text-lg">
                    Code
                  </button>
                </a>

              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${Project3})` }}
            className='shadow-lg shadow-[#CCD6F6]  group container rounded-md flex justify-center items-center mx-auto content-div'
          >
           
            {/**hover */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React js aplication 
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#C39317] text-[#023047] font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#C39317] text-[#023047] font-bold text-lg">
                    Code
                  </button>
                </a>

              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${Project4})` }}
            className='shadow-lg shadow-[#CCD6F6]  group container rounded-md flex justify-center items-center mx-auto content-div'
          >

            {/**hover */}
            <div className="opacity-0 group-hover:opacity-100">
            <span className="text-2xl text-center font-bold text-white tracking-wider">
                crud With Mongo 
              </span>
              <div className="pt-8 text-center">
                <a href="https://tododoraly.herokuapp.com/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#C39317] text-[#023047] font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/doralysantander/CRUD-MONGO" target="_blank">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#C39317] text-[#023047] font-bold text-lg">
                    Code
                  </button>
                </a>

              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Project5})` }}
            className='shadow-lg shadow-[#CCD6F6]  group container rounded-md flex justify-center items-center mx-auto content-div'
          >
           
            {/**hover */}
            
             
            <div 
           
             className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Crud with Php
              </span>
              <motion.div  initial = {{scale: 1}}
              transition = {{ duration: 3 }}
              animate = {{scale: 1, rotate: 360}} className="pt-8 text-center">
                <a href="http://santanderdoraly.epizy.com/CRUDMVC/index.php" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#C39317] text-[#023047] font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/doralysantander/CRUDMVC" target="_blank">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#C39317] text-[#023047] font-bold text-lg">
                    Code
                  </button>
                </a>

              </motion.div>
            </div>
          
          </div>
      {/*
          <div
            style={{ backgroundImage: `url(${Project6})` }}
            className='shadow-lg shadow-[#CCD6F6]  group container rounded-md flex justify-center items-center mx-auto content-div'
          >
           
            
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Crud with Php
              </span>
              <div className="pt-8 text-center">
                <a href="http://santanderdoraly.epizy.com/CRUDMVC/index.php" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#C39317] text-[#023047] font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/doralysantander/CRUDMVC" target="_blank">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#C39317] text-[#023047] font-bold text-lg">
                    Code
                  </button>
                </a>

              </div>
            </div>
          </div> */}
  {/*prueba */}


   

          




        </div>
      </div>

    </div>
  )
}

export default Projects