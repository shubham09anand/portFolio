import React from 'react'

const Contact = () => {
  return (
    <div className='md:flex relative z-[80] backdrop-blur-md'>
      <div className='w-full my-auto border-l pl-2'>
        <div className='text-4xl font-bold pl-3 mb-4'>Drop A line</div>
        <div className='sm:flex ssm:pace-x-5 mt-8'>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-[10px] pl-1 font-bold mb-1" htmlFor="name">Name</label>
            <input className="w-full appearance-none block border-gray-500 border rounded-lg text-gray-700 py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Jovanca Azalea"/>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-[10px] pl-1 font-bold mb-1" htmlFor="email">Email</label>
            <input className="w-full appearance-none block border-gray-500 border rounded-lg text-gray-700 py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Type Your email"/>
          </div>
        </div>
        <div className="w-full px-3 mb-6 md:mb-0 mt-5">
          <label className="block uppercase tracking-wide text-[10px] pl-1 font-bold mb-1" htmlFor="message">Message</label>
          <textarea className=" w-full border-gray-500 border rounded-lg text-gray-700 py-2 px-4 mb-3 h-20 leading-tight focus:outline-none focus:bg-white resize-none" type="text" placeholder="Type Your Message"/>
        </div>
        <div className='select-none w-fit h-fit font-semibold rounded-lg bg-orange-600 text-white px-4 py-2 text-center mt-10 ml-2'>Submit</div>
      </div>
    </div>
  )
}

export default Contact