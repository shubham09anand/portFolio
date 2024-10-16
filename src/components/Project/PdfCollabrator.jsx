import React from 'react';

import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

// E:\React Code\React\portfolio\portfolio\src\assets\projectPhoto\QRMS
import photo1 from "../../assets/projectPhoto/pdfcollabrtor/photo1.png";
import photo2 from "../../assets/projectPhoto/pdfcollabrtor/photo2.png";
import photo3 from "../../assets/projectPhoto/pdfcollabrtor/photo3.png";
import photo4 from "../../assets/projectPhoto/pdfcollabrtor/photo4.png";
import photo5 from "../../assets/projectPhoto/pdfcollabrtor/photo5.png";
import photo6 from "../../assets/projectPhoto/pdfcollabrtor/photo6.png";
import photo7 from "../../assets/projectPhoto/pdfcollabrtor/photo7.png";
import photo9 from "../../assets/projectPhoto/pdfcollabrtor/photo9.png";
import photo10 from "../../assets/projectPhoto/pdfcollabrtor/photo10.png";
import photo11 from "../../assets/projectPhoto/pdfcollabrtor/photo11.png";
import photo12 from "../../assets/projectPhoto/pdfcollabrtor/photo12.png";

const PdfCollabrator = () => {
     return (
          <div className="text-zinc-800">
               <div className="md: items-center rounded-lg py-10 bg-gray-100">
                    <div className="w-full shadow-2xl rounded-l-md p-2 scale-95">
                         <Link to="/projects">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 absolute bg-gray-200 rounded-full p-2">
                                   <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                              </svg>
                         </Link>
                         <div className="font-bold text-3xl mb-2 text-[#7b5df4] text-center">PDFCollaborator</div>
                         <Carousel className=''>
                              <img className=" mx-auto bg-white" src={photo1} alt="pdfCollab" />
                              <img className=" mx-auto bg-white" src={photo10} alt="pdfCollab" />
                              <img className=" mx-auto bg-white" src={photo11} alt="pdfCollab" />
                              <img className=" mx-auto bg-white" src={photo12} alt="pdfCollab" />
                              <img className=" mx-auto bg-white" src={photo2} alt="pdfCollab" />
                              <img className=" mx-auto bg-white" src={photo3} alt="pdfCollab" />
                              <img className=" mx-auto bg-white" src={photo6} alt="pdfCollab" />
                              <img className=" mx-auto bg-white" src={photo5} alt="pdfCollab" />
                              <img className=" mx-auto bg-white" src={photo4} alt="pdfCollab" />
                              <img className=" mx-auto bg-white" src={photo7} alt="pdfCollab" />
                              <img className=" mx-auto bg-white" src={photo9} alt="pdfCollab" />
                         </Carousel>
                    </div>
                    <div className='bg-gradient-to-br from-[#97bbf8] via-[#937cf1] to-[#7656f5] scale-95 rounded-lg p-5 shadow-2xl'>
                         <div className='p-2'>
                              <div className="py-4">
                                   <div className="font-bold text-3xl mb-2 text-[#2c79ff]">About</div>
                                   <p className="font-medium text-xl">
                                        PDFCollabrator is a comprehensive PDF editor featuring merge, image conversion, page deletion, and shuffling. Users can create PDFs via a text editor with AI support for queries and news summaries. It also enables real-time collaboration with messaging functionality for seamless communication and document editing.
                                   </p>
                              </div>
                              <h2 className="font-extrabold text-2xl mb-2">Technologies</h2>
                              <div>
                                   <span className="inline-block bg-gray-900 text-white rounded-full m-1 px-3 py-1 text-sm font-semibold mr-2">Java Script</span>
                                   <span className="inline-block bg-gray-900 text-white rounded-full m-1 px-3 py-1 text-sm font-semibold mr-2">Node.js</span>
                                   <span className="inline-block bg-gray-900 text-white rounded-full m-1 px-3 py-1 text-sm font-semibold">React.js</span>
                                   <span className="inline-block bg-gray-900 text-white rounded-full m-1 px-3 py-1 text-sm font-semibold mr-2">CSS</span>
                                   <span className="inline-block bg-gray-900 text-white rounded-full m-1 px-3 py-1 text-sm font-semibold mr-2">Tailwind</span>
                                   <span className="inline-block bg-gray-900 text-white rounded-full m-1 px-3 py-1 text-sm font-semibold">Responive UI</span>
                                   <span className="inline-block bg-gray-900 text-white rounded-full m-1 px-3 py-1 text-sm font-semibold">Cross Browser Compatiblity</span>
                                   <span className="inline-block bg-gray-900 text-white rounded-full m-1 px-3 py-1 text-sm font-semibold mr-2">AWS</span>
                                   <span className="inline-block bg-gray-900 text-white rounded-full m-1 px-3 py-1 text-sm font-semibold mr-2">Gemini</span>
                                   <span className="inline-block bg-gray-900 text-white rounded-full m-1 px-3 py-1 text-sm font-semibold mr-2">Web Scrapping</span>
                                   <span className="inline-block bg-gray-900 text-white rounded-full m-1 px-3 py-1 text-sm font-semibold mr-2">Puppeter</span>
                              </div>
                         </div>
                         <div>
                              <h2 className="font-extrabold text-2xl mb-2 mt-4">Features</h2>
                              <div>
                                   <span className="inline-block bg-gray-900 text-white rounded-full m-1 px-3 py-1 text-sm font-semibold mr-2">Cretate</span>
                                   <span className="inline-block bg-gray-900 text-white rounded-full m-1 px-3 py-1 text-sm font-semibold mr-2">Merge PDF</span>
                                   <span className="inline-block bg-gray-900 text-white rounded-full m-1 px-3 py-1 text-sm font-semibold mr-2">Split PDF</span>
                                   <span className="inline-block bg-gray-900 text-white rounded-full m-1 px-3 py-1 text-sm font-semibold mr-2">Delete Pages</span>
                                   <span className="inline-block bg-gray-900 text-white rounded-full m-1 px-3 py-1 text-sm font-semibold">Image to PDF</span>
                                   <span className="inline-block bg-gray-900 text-white rounded-full m-1 px-3 py-1 text-sm font-semibold mr-2">PDF to Images</span>
                              </div>
                         </div>
                         <div className='mt-5 text-white text-sm font-extrabold'>To See The Source Code Visit My GitHub Account From Contact Section</div>
                    </div>
               </div>
          </div>
     )
}

export default PdfCollabrator