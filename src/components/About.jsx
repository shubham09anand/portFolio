import React from 'react'
import Timeline from './Timeline'

import shuhbam from "../assets/shubham.jpg"

const About = () => {
  return (
    <div>
      <div className='p-5 md:px-10 py-5 shadow-sm  backdrop-blur-md relative z-[50]'>
        <div className='font-bold text-4xl mb-5'>Howdy! 👌</div>
        <div className='mb-2 font-[300]'>Hello! I'm Shubham Anand, I am 20-year old with a budding passion for web development. Currently , I am pursuing Computer Science Engineering at Bhilai Institute Of Technology, Durg, Chhattisgarh.</div>
        <div className='mb-2 font-[300]'>Feel free to reach out if you're interested in chatting about coding, web development, or just sharing experiences. You can search on any popular social media platform with username <span className='px-1 pb-1 font-extralight rounded-md bg-slate-200 w-fit'>shubham09anand</span>, or you can check out specfic contacts above;</div>
        <div>
          <img draggable="false" src={shuhbam} alt="" className='w-1/2 h-1/4 rounded-md py-5 select-none' />
        </div>
        <div className='pl-4'>
          <div className='text-4xl mb-4 font-bold'>Education</div>

          <div className='mb-2'>
            <div className='text-2xl font-semibold'>Bachelor of Technology</div>
            <div className='text-xs font-extrabold'>2021-2025</div>
            <div className='text-lg font-light'>Since November 2021, I've been pursuing Computer Science Engineering at Bhilai Institute Of Technology, Durg, Chhattisgarh.</div>
          </div>

          <div className='mb-2'>
            <div className='text-2xl font-semibold'>School (12th Class)</div>
            <div className='text-xs font-extrabold'>2020-2020</div>
            <div className='text-lg font-light'>I successfully concluded my 12th-grade studies, majoring in Physics, Chemistry, and Mathematics (PCM) with 91.2% at Kendriya Vidyalaya No.2 Raipur, Chhattisgarh.</div>
          </div>

          <div className='mb-2'>
            <div className='text-2xl font-semibold'>School (10th Class)</div>
            <div className='text-xs font-extrabold'>2018-2019</div>
            <div className='text-lg font-light'>I entered Class 10 in 2018 and completed it in June 2019 with 88.8% at Kendriya Vidyalaya No.2 Raipur, Chhattisgarh.</div>
          </div>
        </div>
        {/* <Timeline /> */}
      </div>
    </div>
  )
}

export default About