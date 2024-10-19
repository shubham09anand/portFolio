import React from 'react';

import socialNest from "../assets/projectPhoto/socialNest.png";
import vmart from "../assets/projectPhoto/vmart.png";
import toDoList from "../assets/projectPhoto/PhotoEditor/ToDoLogo.png";
import QRMS from "../assets/projectPhoto/QRMS/QRMS.png";
import PDFEditor from "../assets/projectPhoto/pdfcollabrtor/pdfEdit.jpg";
// import photoEditor from "../assets/projectPhoto/photoEditor.png";
import { Link } from 'react-router-dom';

const Projects = () => {

  return (
    <div className='p-5 md:p-10 py-0  relative z-[80] backdrop-blur-sm'>
      {true && (
        <div className="mx-auto rounded overflow-hidden relative">
          <div className="cursor-pointer w-fit absolute top-1/4 active:bg-gray-700 select-none backdrop-blur-xl text-white px-3 py-5 sm:text-base md:text-lg font-bold" style={{ writingMode: "vertical-rl", textOrientation: "up" }}>People I had Worked With</div>

          <div className="group p-2 relative mt-5">
            <div className="relative overflow-hidden shadow dark:shadow-gray-800 group-hover:shadow-lg bg-gradient-to-br from-gray-50 via-gray-100 to-gray-300 group-hover:dark:shadow-gray-800 rounded-md duration-500">
              <Link to="/projects/SocialNest">
                <img src={socialNest} className="mx-auto group-hover:scale-110 duration-500 w-80 h-80" alt="" />
              </Link>
              <div className="md:absolute z-20 -bottom-40 group-hover:bottom-3 start-3 end-3 duration-500">
                <div className="px-6 py-4">
                  <div className='mb-2 flex w-fit space-x-3'>
                    <div className="font-extrabold text-3xl text-[#6c8fe1]">SocialNest</div>
                    <Link to="/projects/SocialNest" className='text-white px-2 rounded-3xl mt-2.5 bg-black'>Read More</Link>
                  </div>
                  <p className="text-gray-700 text-base">A Social Media Platform</p>
                  <a target='_blank' href="https://socialnest.shubham09anand.in" className='flex space-x-2 place-content-center items-center w-fit'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#1d10ac" strokeWidth="2" className="bi bi-box-arrow-up-right h-4 w-4 font-extrabold" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5" />
                      <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z" />
                    </svg>
                    <span className='text-[#1d10ac] font-semibold'>https://socialnest.shubham09anand.in</span>
                  </a>
                </div>
                <div className="px-6 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#chat</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#connect</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#post</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#meet</span>
                </div>
              </div>
            </div>
          </div>
          <div to="/projects/PdfCollabrator" className="group p-2 relative mt-5">
            <div className="relative overflow-hidden shadow dark:shadow-gray-800 group-hover:shadow-lg bg-gradient-to-br from-gray-50 via-gray-100 to-gray-300 group-hover:dark:shadow-gray-800 rounded-md duration-500">
              <Link to="/projects/PdfCollabrator">
                <img src={PDFEditor} className="object-scale-down mx-auto group-hover:scale-[115%] scale-[120%] duration-500 w-96 h-72" alt="" />
              </Link>
              <div className="md:absolute z-20 -bottom-40 group-hover:bottom-3 start-3 end-3 duration-500">
                <div className="px-6 py-4">
                  <div className='mb-2 sm:flex w-fit gap-y-2 sm:space-x-3'>
                    <div className="font-extrabold text-3xl text-[#b9bbf4]">PDFCollabrator</div>
                    <Link to="/projects/PdfCollabrator" className='text-white px-2 rounded-3xl mt-2.5 bg-black'>Read More</Link>
                  </div>
                  <a target='_blank' href="https://pdfcollaborator.shubham09anand.in" className='flex space-x-2 place-content-center items-center w-fit'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#1d10ac" strokeWidth="2" className="bi bi-box-arrow-up-right h-4 w-4 font-extrabold" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5" />
                      <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z" />
                    </svg>
                    <div className='text-[#1d10ac] text-sm font-bold'>https://pdfcollaborator.shubham09anand.in</div>
                  </a>
                </div>
                <div className="px-6 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#create</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#share</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#collabrate</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#edit</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#messageing</span>
                </div>
              </div>
            </div>
          </div>
          <div to="/projects/QrCode" className="group p-2 relative mt-5">
            <div className="relative overflow-hidden shadow dark:shadow-gray-800 group-hover:shadow-lg bg-gradient-to-br from-gray-50 via-gray-100 to-gray-300 group-hover:dark:shadow-gray-800 rounded-md duration-500">
              <Link to="/projects/QrCode">
                <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQCD0vGmt0p-HZ_Xe6LGeDbOEyWqAl6mL7hA&s'} className="object-scale-down mx-auto group-hover:scale-[115%] scale-[120%] duration-500 w-96 h-72" alt="" />
              </Link>
              <div className="md:absolute z-20 -bottom-40 group-hover:bottom-3 start-3 end-3 duration-500">
                <div className="px-6 py-4">
                  <div className='mb-2 sm:flex w-fit sm:space-x-3'>
                    <div className="font-extrabold text-2xl sm:text-3xl text-gray-800">QR Code Genrator</div>
                    <Link to="/projects/QrCode" className='text-white px-2 rounded-3xl mt-2 bg-black'>Read More</Link>
                  </div>
                  <p className="text-gray-700 text-base">QR Code Genrator</p>
                  <a target='_blank' href="https://qrcode.shubham09anand.in/" className='flex space-x-2 place-content-center items-center w-fit'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#1d10ac" strokeWidth="2" className="bi bi-box-arrow-up-right h-4 w-4 font-extrabold" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5" />
                      <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z" />
                    </svg>
                    <div className='text-[#1d10ac] text-sm font-bold'>https://qrcode.shubham09anand.in/</div>
                  </a>
                </div>
                <div className="px-6 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#qrcode</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#style</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#logo</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#bussiness</span>
                </div>
              </div>
            </div>
          </div>
          <div className="group p-2 relative mt-5">
            <div className="relative overflow-hidden shadow dark:shadow-gray-800 group-hover:shadow-lg bg-gradient-to-br from-gray-50 via-gray-100 to-gray-300 group-hover:dark:shadow-gray-800 rounded-md duration-500">
              <Link to="/projects/blogmanagment">
                <img src={'https://yt3.googleusercontent.com/ytc/AIdro_l5tZObYHzS68glmJHa8mTawjTNCHt8aRucAN8WOjOCBmU=s160-c-k-c0x00ffffff-no-rj'} className="object-scale-down mx-auto group-hover:scale-110 scale-100 duration-500 w-96 h-72" alt="" />
              </Link>
              <div className="md:absolute z-20 -bottom-40 group-hover:bottom-3 start-3 end-3 duration-500">
                <div className="px-6 py-4">
                  <div className='mb-2 flex w-fit space-x-3'>
                    <div className="font-extrabold text-3xl text-gray-800">Insider</div>
                    <Link to="/projects/blogmanagment" className='text-white px-2 rounded-3xl mt-2.5 bg-black'>Read More</Link>
                  </div>
                  <p className="text-gray-700 text-base">Blog Managment</p>
                  <a target='_blank' href="http://insider.shubham09anand.in/insider" className='flex space-x-2 place-content-center items-center w-fit'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#1d10ac" strokeWidth="2" className="bi bi-box-arrow-up-right h-4 w-4 font-extrabold" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5" />
                      <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z" />
                    </svg>
                    <div className='text-[#1d10ac] text-sm font-bold'>http://insider.shubham09anand.in/insider</div>
                  </a>
                </div>
                <div className="px-6 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#create</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#commnet</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#search</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#share </span>
                </div>
              </div>
            </div>
          </div>
          <div className="group p-2 relative mt-5">
            <div className="relative overflow-hidden shadow dark:shadow-gray-800 group-hover:shadow-lg bg-gradient-to-br from-gray-50 via-gray-100 to-gray-300 group-hover:dark:shadow-gray-800 rounded-md duration-500">
              <Link to="/projects/QRMS">
                <img src={QRMS} className="mx-auto group-hover:scale-110 duration-500 w-96 h-72" alt="" />
              </Link>
              <div className="md:absolute z-20 -bottom-40 group-hover:bottom-3 start-3 end-3 duration-500">
                <div className="px-6 py-4">
                  <div className='mb-2 w-full'>
                    <div className="font-extrabold text-2xl mb-2"><span className='text-green-400'>BIT Quarterly</span> <span className='text-yellow-400'>Report</span> <span className='text-blue-400'>Management</span> <span className='text-red-400'>System</span></div>
                    <Link to="/projects/QRMS" className='text-white px-2 rounded-3xl mt-2.5 bg-black'>Read More</Link>
                  </div>
                  <p className="text-gray-700 text-base">Report Management System</p>
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
          </div>
          <div className="group p-2 relative mt-5">
            <div className="relative overflow-hidden shadow dark:shadow-gray-800 group-hover:shadow-lg bg-gradient-to-br from-gray-50 via-gray-100 to-gray-300 group-hover:dark:shadow-gray-800 rounded-md duration-500">
              <Link to="/projects/VMart">
                <img src={vmart} className="mx-auto group-hover:scale-110 scale-75 duration-500 w-96 h-72" alt="" />
              </Link>
              <div className="md:absolute z-20 -bottom-40 group-hover:bottom-3 start-3 end-3 duration-500">
                <div className="px-6 py-4">
                  <div className='mb-2 flex w-fit space-x-3'>
                    <div className="font-extrabold text-3xl text-green-400">V-Mart</div>
                    <Link to="/projects/VMart" className='text-white px-2 rounded-3xl mt-2.5 bg-black'>Read More</Link>
                  </div>
                  <p className="text-gray-700 text-base">A E-Commerce Website</p>
                </div>
                <div className="px-6 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#sell</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#purchase</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#ease</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#ruralBussiness </span>
                </div>
              </div>
            </div>
          </div>
          <div className="group p-2 relative mt-5">
            <div className="relative overflow-hidden shadow dark:shadow-gray-800 group-hover:shadow-lg bg-gradient-to-br from-gray-50 via-gray-100 to-gray-300 group-hover:dark:shadow-gray-800 rounded-md duration-500">
              <Link to="/projects/ToDoList">
                <img src={toDoList} className="mx-auto group-hover:scale-110 duration-500 w-72 h-72" alt="" />
              </Link>
              <div className="md:absolute z-20 -bottom-40 group-hover:bottom-3 start-3 end-3 duration-500">
                <div className="px-6 py-4">
                  <div className='mb-2 flex w-fit space-x-3'>
                    <div className="font-extrabold text-3xl text-[#ed4935]">To Do List</div>
                    <Link to="/projects/ToDoList" className='text-white px-2 rounded-3xl mt-2.5 bg-black'>Read More</Link>
                  </div>
                  <p className="text-gray-700 text-base">A Task Manager</p>
                </div>
                <div className="px-6 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#task</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#track</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#manage</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#organise</span>
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