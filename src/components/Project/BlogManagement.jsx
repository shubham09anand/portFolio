import React from 'react';

import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

// E:\React Code\React\portfolio\portfolio\src\assets\projectPhoto\QRMS
import photo1 from "../../assets/projectPhoto/Blogmanagment/photo1.png";
import photo2 from "../../assets/projectPhoto/Blogmanagment/photo2.png";
import photo3 from "../../assets/projectPhoto/Blogmanagment/photo3.png";
import photo4 from "../../assets/projectPhoto/Blogmanagment/photo4.png";
import photo5 from "../../assets/projectPhoto/Blogmanagment/photo5.png";
import photo6 from "../../assets/projectPhoto/Blogmanagment/photo6.png";
import photo7 from "../../assets/projectPhoto/Blogmanagment/photo7.png";

const BlogManagement = () => {
     return (
          <div className="text-zinc-800">
               <div className="md: items-center rounded-lg py-10 bg-gray-100">
                    <div className="w-full shadow-2xl rounded-l-md p-2 scale-95">
                         <Link to="/projects">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 absolute bg-gray-200 rounded-full p-2">
                                   <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                              </svg>
                         </Link>
                         <div className="font-bold text-3xl mb-2 text-[#34ab45] text-center">BIT Quarterly Report Management System</div>
                         <Carousel className=''>
                              <img className=" mx-auto bg-white" src={photo3} alt="blogManagment" />
                              <img className=" mx-auto bg-white" src={photo1} alt="blogManagment" />
                              <img className=" mx-auto bg-white" src={photo2} alt="blogManagment" />
                              <img className=" mx-auto bg-white" src={photo4} alt="blogManagment" />
                              <img className=" mx-auto bg-white" src={photo5} alt="blogManagment" />
                              <img className=" mx-auto bg-white" src={photo6} alt="blogManagment" />
                         </Carousel>
                    </div>
                    <div className='bg-gradient-to-br from-green-100 via-green-500 to-green-800 scale-95 rounded-lg p-5 shadow-2xl'>
                         <div className='p-2'>
                              <div className="py-4">
                                   <div className="font-bold text-3xl mb-2 text-[#34ab45]">About</div>
                                   <p className="font-medium text-xl">
                                   INSIDER is a blog management platform with Jodit as the text editor, making content creation and editing effortless. It simplifies post organization, managing images and tags, while ensuring scalability and performance, all deployed on AWS.
                                   </p>
                              </div>
                              <h2 className="font-extrabold text-2xl mb-2">Technologies</h2>
                              <div>
                                   <span className="inline-block bg-gray-900 text-white rounded-full m-1 px-3 py-1 text-sm font-semibold mr-2">Golang</span>
                                   <span className="inline-block bg-gray-900 text-white rounded-full m-1 px-3 py-1 text-sm font-semibold mr-2">Gin Framework</span>
                                   <span className="inline-block bg-gray-900 text-white rounded-full m-1 px-3 py-1 text-sm font-semibold">React.js</span>
                                   <span className="inline-block bg-gray-900 text-white rounded-full m-1 px-3 py-1 text-sm font-semibold mr-2">MongoDB</span>
                                   <span className="inline-block bg-gray-900 text-white rounded-full m-1 px-3 py-1 text-sm font-semibold mr-2">CSS</span>
                                   <span className="inline-block bg-gray-900 text-white rounded-full m-1 px-3 py-1 text-sm font-semibold mr-2">Tailwind</span>
                                   <span className="inline-block bg-gray-900 text-white rounded-full m-1 px-3 py-1 text-sm font-semibold">Java Script</span>
                                   <span className="inline-block bg-gray-900 text-white rounded-full m-1 px-3 py-1 text-sm font-semibold">Responive UI</span>
                                   <span className="inline-block bg-gray-900 text-white rounded-full m-1 px-3 py-1 text-sm font-semibold">Cross Browser Compatiblity</span>
                                   <span className="inline-block bg-gray-900 text-white rounded-full m-1 px-3 py-1 text-sm font-semibold mr-2">AWS</span>
                              </div>
                         </div>
                         <div>
                              <h2 className="font-extrabold text-2xl mb-2 mt-4">Features</h2>
                              <div>
                                   <span className="inline-block bg-gray-900 text-white rounded-full m-1 px-3 py-1 text-sm font-semibold mr-2">Read</span>
                                   <span className="inline-block bg-gray-900 text-white rounded-full m-1 px-3 py-1 text-sm font-semibold mr-2">Create</span>
                                   <span className="inline-block bg-gray-900 text-white rounded-full m-1 px-3 py-1 text-sm font-semibold mr-2">Edit</span>
                                   <span className="inline-block bg-gray-900 text-white rounded-full m-1 px-3 py-1 text-sm font-semibold mr-2">Comment</span>
                                   <span className="inline-block bg-gray-900 text-white rounded-full m-1 px-3 py-1 text-sm font-semibold">Filter</span>
                                   <span className="inline-block bg-gray-900 text-white rounded-full m-1 px-3 py-1 text-sm font-semibold mr-2">Share</span>
                              </div>
                         </div>
                         <div className='mt-5 text-white text-sm font-extrabold'>To See The Source Code Visit My GitHub Account From Contact Section</div>
                    </div>
               </div>
          </div>
     )
}

export default BlogManagement