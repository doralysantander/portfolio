import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#023047] text-white'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4  border-orange-500'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Doraly, nice too meet you. Let's talk about me.</p>
            </div>
            <div>
              <p>I am highly motivated to continue perfecting my skills and growing professionally, my ambition to learn is huge. I am very dedicated responsible, self-taught, disciplined, I am always looking for new xhallenges and never stop learning</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;