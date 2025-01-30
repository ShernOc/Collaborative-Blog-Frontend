import { useState } from "react";

function Contact(){

    // The goal is to be able to send the data to me through the email. 
    function mail(){
        window.location.href = 'mailto:sherlynea8622@gmail.com'
    }
    // window.location.href = 'mailto:sherlynea8622@gmail.com'
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form is submitted")
      };
    return (
        <>
         <div className="flex justify-center items-center min-h-[80vh] p-10">
            <br /> <br />
         <form  id="form_input"
          onSubmit={handleSubmit} 
          className="flex flex-col items-center w-2xs space-y-8 bg-cyan-100 rounded-2xl h-min ">
            <h3 className="text-2xl my-4  mb-2 font-bold font-mono">Contact </h3>
            <div className='relative mb-6'>
            <label htmlFor="name" className=" flex items-center mb-2 text-2xl font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="block w-full h-12 px-10 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
              placeholder='Enter Name'
              required
              />
            </div>
            <div className='relative mb-6'>
            <label htmlFor="email" className=" flex items-center mb-2 text-2xl font-medium">Email</label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full h-12 px-10 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
              placeholder='Enter Email'
              required autoComplete="on"
              />
            </div>
            <div className='relative mb-6'>
            <label htmlFor="message" className=" flex items-center mb-2 text-2xl font-medium">Leave a Message</label>
            <textarea className=" bg-gray-100 border-amber-400"
              type="text"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder='message'
              required 
            />
            </div>
            <button type="button" onClick={mail}
            className=" h-12 bg-gray-500 hover:bg-cyan-800 transition-all duration-700 rounded-full shadow-xs text-white text-base font-semibold leading-6 mb-6 px-10 "
            > Send </button>
          </form>
         </div>
    
        </>
        )
}
export default Contact; 