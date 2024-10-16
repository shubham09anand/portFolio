import React from 'react';

import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import photo1 from "../../assets/projectPhoto/QrCode/photo1.png";
import photo2 from "../../assets/projectPhoto/QrCode/photo2.png";

const QrCode = () => {
     return (
          <div className="text-zinc-800">
               <div className="md: items-center rounded-lg py-10 bg-gray-100">
                    <div className="w-full shadow-2xl rounded-l-md p-2 scale-95">
                         <Link to="/projects">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 absolute bg-gray-200 rounded-full p-2">
                                   <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                              </svg>
                         </Link>
                         <div className="font-bold text-3xl mb-2 text-black text-center">QrCode Genrator</div>
                         <Carousel className=''>
                              <img className=" mx-auto bg-white" src={photo1} alt="blogManagment" />
                              <img className=" mx-auto bg-white" src={photo2} alt="blogManagment" />
                         </Carousel>
                    </div>
                    <div className='bg-gradient-to-br from-[#1facc2] via-[#00b2cd] to-[#1facc2] scale-95 rounded-lg p-5 shadow-2xl'>
                         <div className='p-2'>
                              <div className="py-4">
                                   <div className="font-bold text-3xl mb-2 text-[#0e464f]">About</div>
                                   <p className="font-medium text-xl">
                                        Last month, I had the opportunity to develop a web-based QR code generator for 𝗞𝗲𝗿𝗮𝗺 𝗥𝗲𝘀𝘁𝗮𝘂𝗿𝗮𝗻𝘁 ( <a href="https://keramrestaurant.co.uk/" className='text-blue-700'>keramrestaurant</a> ) in 𝗡𝗼𝗿𝘄𝗶𝗰𝗵, 𝗕𝗿𝗶𝘁𝗮𝗶𝗻 🇬🇧.
                                        This tool enables restaurant employees to easily generate QR codes for their daily menu items and social media advertisements, helping them expand their presence locally and beyond.
                                        The project was built using 𝗥𝗲𝗮𝗰𝘁.𝗷𝘀 and 𝗧𝗮𝗶𝗹𝘄𝗶𝗻𝗱 𝗖𝗦𝗦 and deployed remotely on 𝗩𝗲𝗿𝗰𝗲𝗹 for smooth performance.
                                   </p>
                              </div>
                              <h2 className="font-extrabold text-2xl mb-2">Technologies</h2>
                              <div>
                                   <span className="inline-block bg-gray-900 text-white rounded-full m-1 px-3 py-1 text-sm font-semibold">React.js</span>
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
                                   <span className="inline-block bg-gray-900 text-white rounded-full m-1 px-3 py-1 text-sm font-semibold mr-2">qrcode</span>
                                   <span className="inline-block bg-gray-900 text-white rounded-full m-1 px-3 py-1 text-sm font-semibold mr-2">scan</span>
                                   <span className="inline-block bg-gray-900 text-white rounded-full m-1 px-3 py-1 text-sm font-semibold mr-2">share</span>
                              </div>
                         </div>
                         <div className='mt-5 text-white text-sm font-extrabold'>To See The Source Code Visit My GitHub Account From Contact Section</div>
                    </div>
               </div>
          </div>
     )
}

export default QrCode