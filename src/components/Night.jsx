import React, { useEffect } from 'react';
import '../style/Animation.css';

const Night = () => {
  useEffect(() => {
    const starContainer = document.getElementById('star');

    // Create stars and append them to the container
    for (let i = 0; i < 150; i++) {
      const star = document.createElement('div');
      star.className = 'rounded-full bg-white absolute glow-animation';
      star.style.width = `${Math.random() * 2 }px`; // Random width between 2 and 12 rem
      star.style.height = `${Math.random() * 2 }px`; // Rand
      star.style.top = `${Math.random() * 80}%`;
      star.style.left = `${Math.random() * 80}%`;
      starContainer.appendChild(star);
    }
  }, []);
  return (
    <div>
          <div className='backdrop-blur-2xl'>
               <div className='w-52 h-52 z-[10] opacity-80 md:w-60 md:h-60 top-2 rounded-full bg-gradient-to-r from-gray-300 to-gray-600 relative'>
                    <div className='absolute blur-[1px] rounded-full skew-x-[45deg] w-12 h-12 bg-gradient-to-r from-gray-800 to-gray-200 opacity-60 right-16 top-5 content-none z-20'></div>
                    <div className='absolute blur-[1px] rounded-full skew-y-[45deg] rotate-[60deg] w-12 h-12 bg-gradient-to-r from-gray-800 to-gray-200 opacity-60 left-36 top-28 content-none z-20' style={{borderRadius:"31% 69% 23% 77% / 66% 18% 82% 34%"}}></div>
                    <div className='absolute blur-[1px] rounded-full w-8 h-8 bg-gradient-to-r from-gray-800 to-gray-800 opacity-60 right-5 top-36 content-none z-20'></div>
                    <div className='absolute blur-[1px] rounded-full w-4 h-4 bg-gradient-to-r from-gray-500 to-gray-800 opacity-60 left-5 top-16 content-none z-20'></div>
                    <div className='absolute blur-[1px] rounded-full w-2 h-2 bg-gradient-to-r from-gray-500 to-gray-800 opacity-60 left-10 top-24 content-none z-20'></div>
                    <div className='absolute blur-[1px] rounded-full w-2 h-2 bg-gradient-to-r from-gray-500 to-gray-800 opacity-60 left-20 top-24 content-none z-20'></div>
                    <div className='absolute blur-[1px] rounded-full w-2 h-2 bg-gradient-to-r from-gray-500 to-gray-800 opacity-60 left-28 top-48 content-none z-20'></div>
               </div>
               <div className="scale-110 cloud absolute -left-20 z-[1000] top-0 blur-[1px]">
                    <div className="w-28 h-10 z-[40] border cloud absolute rounded-full bg-gray-400 left-56 top-[159px]"></div>
                    <div className="w-14 h-14 z-[40] border-t cloud absolute rounded-full bg-gray-400 left-60 top-32"></div>
                    <div className="w-10 h-10 z-[40] border-t cloud absolute rounded-full bg-gray-400 left-72 top-36"></div>
                    <div className="w-8 h-8 z-[40] border-t cloud absolute rounded-full bg-gray-400 left-[232px] top-36"></div>
               </div>
               <div className='w-[120%] h-80 absolute top-5 '>
                    <div id='star'></div>
               </div>
          </div>
     </div>
     
  )
}

export default Night

