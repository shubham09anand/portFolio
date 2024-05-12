import React from 'react'
import "../style/RainAnimation.css"

const Rain = () => {
  
  return (
    <>  
         <div className="glass absolute scale-[60%] md:scale-95 -top-14 -left-28 md:-left-10 -rotate-12 w-96 h-96 rounded-full overflow-hidden backdrop-blur-xl">
          <div className="rainyDay cloud">
            <div className="umbrella">
                <input id='panel' className="cloud" type='checkbox'/>
              <label className='panel' htmlFor='panel'></label>
              <div className="stick"></div>
            </div>
            <div className="rain">
              <div className="dropletOne"></div>
              <div className="dropletTwo"></div>
              <div className="dropletThree"></div>
              <div className="dropletFour"></div>
              <div className="dropletFive"></div>
              <div className="dropletSix"></div>
            </div>
          </div>
            <div className="md:scale-110 absolute rotate-12 left-5  top-16 md:-top-10 md:left-28 z-30">
                <div className="w-24 h-8 md:w-28 md:h-10 z-[40] border absolute rounded-full bg-gray-200 left-56 top-[159px]"></div>
                <div className="w-10 h-10 md:w-14 md:h-14 z-[40] border-t absolute rounded-full bg-gray-200 left-60 top-32"></div>
                <div className="w-10 h-10 md:w-10 md:h-10 z-[40] border-t absolute rounded-full bg-gray-200 left-[270px] md:left-72 top-36"></div>
                <div className="w-6 h-6 z-[40] border-t absolute rounded-full bg-gray-200 left-[232px] top-36"></div>
            </div>
            <div className="md:scale-110 absolute rotate-12 left-24 -top-36 md:left-16 right-0 z-30">
                <div className="w-24 h-8 md:w-28 md:h-10 z-[40] border absolute rounded-full bg-gray-200 left-56 top-[159px]"></div>
                <div className="w-10 h-10 md:w-14 md:h-14 z-[40] border-t absolute rounded-full bg-gray-200 left-60 top-32"></div>
                <div className="w-10 h-10 md:w-10 md:h-10 z-[40] border-t absolute rounded-full bg-gray-200 left-[270px] md:left-72 top-36"></div>
                <div className="w-6 h-6 z-[40] border-t absolute rounded-full bg-gray-200 left-[232px] top-36"></div>
            </div>
            <div className="absolute rotate-12 -top-20 -left-40 -z-30">
                <div className="w-24 h-8 md:w-28 md:h-10 z-[40] border absolute rounded-full bg-gray-400 left-56 top-[159px]"></div>
                <div className="w-10 h-10 md:w-14 md:h-14 z-[40] border-t absolute rounded-full bg-gray-400 left-60 top-32"></div>
                <div className="w-10 h-10 md:w-10 md:h-10 z-[40] border-t absolute rounded-full bg-gray-400 left-[270px] md:left-72 top-36"></div>
                <div className="w-6 h-6 z-[40] border-t absolute rounded-full bg-gray-400 left-[232px] top-36"></div>
            </div>
            <div className="absolute rotate-12 top-8 left-36 -z-30">
                <div className="w-24 h-8 md:w-28 md:h-10 z-[40] border absolute rounded-full bg-gray-700 left-56 top-[159px]"></div>
                <div className="w-10 h-10 md:w-14 md:h-14 z-[40] border-t absolute rounded-full bg-gray-700 left-60 top-32"></div>
                <div className="w-10 h-10 md:w-10 md:h-10 z-[40] border-t absolute rounded-full bg-gray-700 left-[270px] md:left-72 top-36"></div>
                <div className="w-6 h-6 z-[40] border-t absolute rounded-full bg-gray-700 left-[232px] top-36"></div>
            </div>
     </div>
    </>
  )
}

export default Rain