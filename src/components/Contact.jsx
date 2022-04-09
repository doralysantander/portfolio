import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-full  bg-[#B1D7C8]  flex justify-center items-center p-2 '>
        <form method='' action="" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className="text-4xl font-bold text-[#023047]">Contact</p>
                
            </div>
            <input className=' shadow-sm border-slate-300  focus:outline-none focus:border-[#C39317] focus:ring-[#C39317] block w-full rounded-md sm:text-sm focus:ring-1 bg-[#fff] p-2 ' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#fff]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#fff] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className=" text-white border-2 px-4 py-3 my-8 mx-auto flex items-center bg-[#023047] hover:bg-amber-500">
            LET'S COLLABORATE
           </button>
           
        
        
        </form>
    </div>
  )
}

export default Contact
