import React from 'react';
import Project1 from '../assets/project1.jpg';
import Project2 from '../assets/project2.jpg';
import Project3 from '../assets/project3.svg';
import Project4 from '../assets/img4.svg';
import Project5 from '../assets/project4.svg';


const Projects = () => {
  return (
    <div name='projects' className='w-full md:h-screen text-gray-300 bg-[#023047] p-4 '>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8 text-center p-8'>
          <p className='text-4xl font-bold inline  text-[#c39317] '>
          Projects
          </p>
          <p className="py-">some of my recent works</p>
        </div>

        {/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Project1})` }}
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
            style={{ backgroundImage: `url(${Project5})` }}
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






        </div>
      </div>

    </div>
  )
}

export default Projects