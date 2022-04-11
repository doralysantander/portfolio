import React from 'react'
import emailjs from 'emailjs-com';
export default class Contact extends React.Component {
render() {
function enviarEmail(e){
e.preventDefault();

emailjs.sendForm('service_sgoyhbs', 'template_hxe2mkl', e.target, 'KI-dunL_Ng_VxiRSm')
.then(function(response) {
alert("mensaje enviado")
console.log('SUCCESS!', response.status, response.text);
}, function(error) {
console.log('FAILED...', error);
});
e.target.reset();
}

return (
<div name='contact' className='w-full h-full bg-[#B1D7C8] flex justify-center items-center p-8 '>
<form id="myForm" onSubmit={enviarEmail} className='flex flex-col max-w-[600px] w-full'>
<div className='pb-12 p-12'>
<p className="text-4xl font-bold text-[#023047]">Contact</p>
</div>
<input className=' shadow-sm border-slate-300 focus:outline-none focus:border-[#C39317] focus:ring-[#C39317] block w-full rounded-md sm:text-sm focus:ring-1 bg-[#fff] p-2 ' type="text" placeholder='Name' name='name' required/>
<input className='my-4 p-2 focus:outline-none focus:border-[#C39317] focus:ring-[#C39317] block w-full rounded-md sm:text-sm focus:ring-1 bg-[#fff]' type="email" placeholder='Email' name='email' required/>
<textarea className='p-2 focus:outline-none focus:border-[#C39317] focus:ring-[#C39317] block w-full rounded-md sm:text-sm focus:ring-1 bg-[#fff]' name="message" rows="10" placeholder='Message'required></textarea>
<button className=" text-white border-2 px-4 py-3 my-8 mx-auto flex items-center bg-[#023047] hover:bg-amber-500">
LET'S COLLABORATE
</button>
</form>
</div>
)
}

} 


