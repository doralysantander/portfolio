import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#023047] text-white">
      <div className="flex justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
            <div className="sm:text-right pb-8 pl-4">
                <h1 className="text-3xl font-bold inline border-b-4 border-orange-500">ABOUT</h1>
            </div>
            <div></div>
        
            <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 ">
              <div>
                <h1>I'M DORALY NICE TOO MEET YOU, LET'S TALK ABOUT ME</h1>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About