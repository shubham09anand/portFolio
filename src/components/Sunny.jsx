import React from "react";
import "../style/Animation.css"

const Sunny = () => {
     return (
          <>
               <div className=" sunshine mt-4 ml-2 w-44 h-44 md:w-48 md:h-48 rounded-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-500 to-yellow-200 absolute z-30">
                    <div className="mx-auto w-40 h-40 md:w-44 md:h-44 rounded-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-500 to-yellow-200"></div>
               </div>
               <div className=" scale-110 cloud absolute -left-24 md:-left-20 z-30">
                    <div className="w-24 h-8 md:w-28 md:h-10 z-[40] border cloud absolute rounded-full bg-blue-200 left-56 top-[159px]"></div>
                    <div className="w-10 h-10 md:w-14 md:h-14 z-[40] border-t cloud absolute rounded-full bg-blue-200 left-60 top-32"></div>
                    <div className="w-10 h-10 md:w-10 md:h-10 z-[40] border-t cloud absolute rounded-full bg-blue-200 left-[270px] md:left-72 top-36"></div>
                    <div className="w-6 h-6 z-[40] border-t cloud absolute rounded-full bg-blue-200 left-[232px] top-36"></div>
               </div>
          </>
     );
};

export default Sunny;
