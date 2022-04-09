import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';
const Home = () => {
  return (
    <div name="home" className = "w-full h-screen bg-[#023047]">
       <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-slate-100 '>
            <p className="text-white lg:text-2xl sm:text-3xl">Hi, my name is</p>
            <h1 className=" lg:text-5xl sm:text-4xl font-bold">DORALY SANTANDER CHAMORRO</h1>
            <h2 className="text-4xl sm:text-3xl font-bold text-l">I'M A DEVELOPER</h2>
            <div className="" >
            <button className="ease-in duration-300  bg-[#C39317] hover:bg-amber-500 text-white group font-bold py-2 px-6 border-2  flex items-center border-blue-800 rounded ">
            My resumé
            <span className=" group-hover:rotate-90 duration-400">
                <HiArrowNarrowRight className="ml-3" />
            </span>
        </button>
       {/* <button class="  bg-[#C39317] group-hover:ease-in duration-300">Button A</button>*/}
            </div>
        </div>
        
       

        
        

    </div>
  )
}

export default Home