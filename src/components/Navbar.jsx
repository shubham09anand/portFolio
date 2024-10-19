import React from 'react';
import { NavLink } from "react-router-dom";

const Navbar = () => {

     return (
          <div className="mb-4">
               <div className="flex justify-between px-2">
                    <NavLink to="/" className="active:bg-gray-100 w-full text-center select-none sm:hover:bg-gray-100 text-black px-3 sm:px-3 md:px-6 py-2 sm:text-base md:text-lg font-bold">About</NavLink>
                    <NavLink to="/projects" className="active:bg-gray-100 w-full text-center select-none sm:hover:bg-gray-100 text-black px-3 sm:px-3 md:px-6 py-2 sm:text-base md:text-lg font-bold">Project</NavLink>
                    <NavLink to="/technologies" className="active:bg-gray-100 w-full text-center select-none sm:hover:bg-gray-100 text-black px-3 sm:px-3 md:px-6 py-2 sm:text-base md:text-lg font-bold">Technologies</NavLink>
               </div>
          </div>
     )
}

export default Navbar