import React from 'react';

import socialNest from "../assets/projectPhoto/socialNest.png";
import vmart from "../assets/projectPhoto/vmart.png";
import toDoList from "../assets/projectPhoto/PhotoEditor/ToDoLogo.png";
import QRMS from "../assets/projectPhoto/QRMS/QRMS.png"; 
import { Link } from 'react-router-dom';

const Projects = () => {


  return (
    <div className='p-5 md:p-10 py-0  relative z-[80] backdrop-blur-sm'>
      {true && (
        <div className="mx-auto rounded overflow-hidden relative">
          <div className="cursor-pointer w-fit absolute top-1/4 active:bg-gray-700 select-none backdrop-blur-xl text-white px-3 py-5 sm:text-base md:text-lg font-bold" style={{ writingMode: "vertical-rl", textOrientation: "up" }}>People I had Worked With</div>

          <Link to="/projects/SocialNest" className="group p-2">
            <div className="relative overflow-hidden shadow dark:shadow-gray-800 group-hover:shadow-lg bg-gradient-to-br from-gray-50 via-gray-100 to-gray-300 group-hover:dark:shadow-gray-800 rounded-md duration-500">
              <img src={socialNest} className="mx-auto group-hover:scale-110 duration-500 w-80 h-80" alt="" />
              <div className="md:absolute -bottom-40 group-hover:bottom-3 start-3 end-3 duration-500">
                <div className="px-6 py-4">
                  <div className="font-extrabold text-3xl mb-2 text-[#6c8fe1]">SocialNest</div>
                  <p className="text-gray-700 text-base">
                    A Social Media Platform
                  </p>
                </div>
                <div className="px-6 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#chat</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#connect</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#post</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#meet</span>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/projects/ToDoList" className="group p-2">
            <div className="relative overflow-hidden shadow dark:shadow-gray-800 group-hover:shadow-lg bg-gradient-to-br from-gray-50 via-gray-100 to-gray-300 group-hover:dark:shadow-gray-800 rounded-md duration-500">
              <img src={toDoList} className="mx-auto group-hover:scale-110 duration-500 w-72 h-72" alt="" />
              <div className="md:absolute -bottom-40 group-hover:bottom-3 start-3 end-3 duration-500">
                <div className="px-6 py-4">
                  <div className="font-extrabold text-3xl mb-2 text-[#ed4935]">To Do List</div>
                  <p className="text-gray-700 text-base">
                    A Task Manager
                  </p>
                </div>
                <div className="px-6 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#task</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#track</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#manage</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#organise</span>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/projects/QRMS" className="group p-2">
            <div className="relative overflow-hidden shadow dark:shadow-gray-800 group-hover:shadow-lg bg-gradient-to-br from-gray-50 via-gray-100 to-gray-300 group-hover:dark:shadow-gray-800 rounded-md duration-500">
              <img src={QRMS} className="mx-auto group-hover:scale-110 duration-500 w-96 h-72" alt="" />
              <div className="md:absolute -bottom-40 group-hover:bottom-3 start-3 end-3 duration-500">
                <div className="px-6 py-4">
                  <div className="font-extrabold text-2xl mb-2"><span className='text-green-400'>BIT Quarterly</span> <span className='text-yellow-400'>Report</span> <span className='text-blue-400'>Management</span> <span className='text-red-400'>System</span></div>
                  <p className="text-gray-700 text-base">
                    Report Management System
                  </p>
                </div>
                <div className="px-6 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#BIT</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#report</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#manage</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#organise</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#academic</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#records</span>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/projects/VMart" className="group p-2">
            <div className="relative overflow-hidden shadow dark:shadow-gray-800 group-hover:shadow-lg bg-gradient-to-br from-gray-50 via-gray-100 to-gray-300 group-hover:dark:shadow-gray-800 rounded-md duration-500">
              <img src={vmart} className="mx-auto group-hover:scale-110 scale-75 duration-500 w-96 h-72" alt="" />
              <div className="md:absolute -bottom-40 group-hover:bottom-3 start-3 end-3 duration-500">
                <div className="px-6 py-4">
                  <div className="font-extrabold text-3xl mb-2 text-green-400">V-Mart</div>
                  <p className="text-gray-700 text-base">
                    A E-Commerce Website
                  </p>
                </div>
                <div className="px-6 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#sell</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#purchase</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#ease</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#ruralBussiness </span>
                </div>
              </div>
            </div>
          </Link>
          <div className="group p-2">
            <div className="relative overflow-hidden shadow dark:shadow-gray-800 group-hover:shadow-lg bg-gradient-to-br from-gray-50 via-gray-100 to-gray-300 group-hover:dark:shadow-gray-800 rounded-md duration-500">
              <img src={toDoList} className="mx-auto group-hover:scale-110 duration-500 w-72 h-72" alt="" />
              <div className="md:absolute -bottom-40 group-hover:bottom-3 start-3 end-3 duration-500">
                <div className="px-6 py-4">
                  <div className="font-extrabold text-3xl mb-2 text-black">PhotoEditor</div>
                  <p className="text-gray-700 text-base">
                    A Photo Editing Web Based Platform
                  </p>
                </div>
                <div className="px-6 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#edit</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#download</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#filter</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      )}
    </div>
  )
}

export default Projects