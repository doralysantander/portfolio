import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';
import Mysql from '../assets/mysql.png'

const Skills = () => {
  return (
    <div name="skills" className=" w-full h-full bg-[#fff] text-white p-8 "> 
        <div className=" max-w-[1000px] mx-auto p-8 flex-col justify-center w-full h-full">
            <div className=" pb-12 text-center  text-[#094B65] p-12">
                <p className="text-4xl font-bold inline  text-[#094B65]  ">Skills</p>{/* border-b-4  border-white*/}
                <p className="py-4  text-sm md:text-xl font-bold ">These are the tecnologies I've worked with </p>
            </div>
            <div className=" shadow-lg shadow-[#094B65] w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 px-8">
               
                <div className=" bg-[#094B65] shadow-lg  rounded shadow-[#5ab8c9] hover:scale-110 duration-500 py-4 ">
                    <img className="w-20 mx-auto" src={HTML} alt="html icon"/>
                    <p className= "my-4 ">HTML</p>
                </div>

                <div className=" bg-[#094B65] shadow-lg rounded shadow-[#5ab8c9]  hover:scale-110 duration-500 py-4">
                    <img className="w-20 mx-auto" src={CSS} alt="css icon"/>
                    <p className= "my-4">CSS</p>
                </div>

                <div className=" bg-[#094B65] shadow-lg rounded shadow-[#5ab8c9] hover:scale-110 duration-500 py-4">
                    <img className="w-20 mx-auto  " src={JavaScript} alt="html icon"/>
                    <p className= " my-4">Js</p>
                </div>

                <div className=" bg-[#094B65] shadow-lg rounded shadow-[#5ab8c9] hover:scale-110 duration-500 py-4">
                    <img className="w-20 mx-auto  " src={ReactImg} alt="react icon"/>
                    <p className= "my-4">REACT</p>
                </div>

                <div className=" bg-[#094B65] shadow-lg rounded shadow-[#5ab8c9] hover:scale-110 duration-500 py-4">
                    <img className="w-20 mx-auto  " src={GitHub } alt="github icon"/>
                    <p className= "my-4">GITHUB</p>
                </div>

                <div className=" bg-[#094B65] shadow-lg rounded shadow-[#5ab8c9] hover:scale-110 duration-500 py-4">
                    <img className="w-20 mx-auto" src={Tailwind } alt="talwind icon"/>
                    <p className= "my-4">TAILWIND</p>
                </div>
                <div className=" bg-[#094B65] shadow-md rounded shadow-[#5ab8c9] hover:scale-110 duration-500 py-4">
                    <img className="w-20 mx-auto " src={Mongo} alt="mongo icon"/>
                    <p className= "my-4">MONGO</p>
                </div>
                <div className=" bg-[#094B65] shadow-lg rounded shadow-[#5ab8c9] hover:scale-110 duration-500 py-4">
                    <img className="w-20 mx-auto " src={Mysql} alt="mysql icon"/>
                    <p className= "my-4">MYSQL</p>
                 </div>

              


            </div>
        </div>

    </div>
  )
}

export default Skills