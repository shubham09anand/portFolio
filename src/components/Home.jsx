import React, { useEffect, useState } from 'react';
import { Route, Routes } from "react-router-dom";

import About from "./About";
import Projects from "./Projects";
import Technology from "./Technology";
import Navbar from "./Navbar";
import SocialContacts from './SocialContacts';
import Snow from './Snow';
import Rain from './Rain';
import Sunny from './Sunny';
import Night from './Night';
import FlyingOBJ from './FlyingOBJ';
import FallingDrop from './FallingDrop';
import FallingSnow from './FallingSnow';
import Initial from './Initial';
import SocialNest from './Project/SocialNest';
import QRMS from './Project/QRMS';
import VMart from './Project/VMart';
import ToDoList from './Project/ToDoList';
import BlogManagement from './Project/BlogManagement';
import PdfCollabrator from './Project/PdfCollabrator';
import shuhbam from "../assets/shubham.jpg"

const Home = () => {
     const [currentTime, setCurrentTime] = useState(getFormattedTime());
     const [backgroundColor, setBackgroundColor] = useState("");
     const [textcolor, settextcolor] = useState("black");
     const [gradinet, setGradinet] = useState("bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800");
     const [svgCol, setsvgCol] = useState("black");
     const [isSunnytVisible, setIsSunnyVisible] = useState(true);
     const [isNightVisible, setIsNightVisible] = useState(false);
     const [isRainVisible, setIsRainVisible] = useState(false);
     const [isSnowVisible, setIsSnowVisible] = useState(false);

     useEffect(() => {
          const intervalId = setInterval(() => {
               setCurrentTime(getFormattedTime());
          }, 1000);

          return () => {
               clearInterval(intervalId);
          };
     }, []);

     function getFormattedTime() {
          const now = new Date();
          const hours = now.getHours();
          const minutes = now.getMinutes();
          const seconds = now.getSeconds();

          const formattedHours = hours < 10 ? '0' + hours : hours;
          const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
          const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;

          return formattedHours + ':' + formattedMinutes + ':' + formattedSeconds;

     }
     const currentDate = new Date();

     const options = { weekday: 'long', month: 'long', day: 'numeric' };
     const formattedDate = currentDate.toLocaleDateString('en-US', options);

     const setWeatherState = (svgColor, bgColor, textColor, gradient, isSunny, isNight, isRain, isSnow) => {
          setsvgCol(svgColor);
          setBackgroundColor(bgColor);
          settextcolor(textColor);
          setGradinet(gradient);
          setIsSunnyVisible(isSunny);
          setIsNightVisible(isNight);
          setIsRainVisible(isRain);
          setIsSnowVisible(isSnow);
     };

     useEffect(() => {
          const timeoutId = setTimeout(() => {
               const screenHeight = window.innerHeight;
               const screenWidth = window.innerWidth;
               if (screenWidth > 600) {
                    const scrollPosition = screenHeight * 1;
                    window.scrollTo(0, scrollPosition);
               }
               else {
                    const scrollPosition = screenHeight * 1.06;
                    window.scrollTo(0, scrollPosition);
               }
          }, 4000);

          return () => {
               clearTimeout(timeoutId);
          };
     }, []);


     return (
          <>
               {<Initial />}

               <div id='cell' style={{ background: backgroundColor }} className='pt- py-10'>
                    <div className='z-[200] w-screen h-14 sm:h-14 backdrop-blur-[10px] fixed top-0 flex '>
                         <div>
                              <div className='flex place-content-center items-end absolute right-0 p-1'>
                                   <div onClick={() => setWeatherState('black', 'white', 'black', 'bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800', true, false, false, false)} className='hover:bg-slate-100 rounded-md p-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill={svgCol} viewBox="0 0 24 24" strokeWidth="1.5" stroke={svgCol} className="w-7 h-7 md:w-8 md:h-8">
                                             <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                                        </svg>
                                   </div>
                                   <div onClick={() => setWeatherState('white', 'linear-gradient(to right, #a0aec0, #1a202c, #000000)', 'white', 'bg-gradient-to-r from-gray-500 via-gray-900 to-black', false, true, false, false)} className='hover:bg-slate-100 rounded-md p-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill={svgCol} className="bi bi-moon-stars-fill" viewBox="0 0 16 16">
                                             <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
                                             <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z" />
                                        </svg>
                                   </div>
                                   <div onClick={() => setWeatherState('black', 'linear-gradient(to right, #a0aec0, #cbd5e0, #a0aec0)', 'black', 'bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600', false, false, true, false)} className='hover:bg-slate-100 rounded-md p-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill={svgCol} className="bi bi-cloud-rain-fill" viewBox="0 0 16 16">
                                             <path d="M4.158 12.025a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm3 0a.5.5 0 0 1 .316.633l-1 3a.5.5 0 1 1-.948-.316l1-3a.5.5 0 0 1 .632-.317zm3 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm3 0a.5.5 0 0 1 .316.633l-1 3a.5.5 0 1 1-.948-.316l1-3a.5.5 0 0 1 .632-.317zm.247-6.998a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 11H13a3 3 0 0 0 .405-5.973z" />
                                        </svg>
                                   </div>
                                   <div onClick={() => setWeatherState('white', 'linear-gradient(to right, #a2e0e9, #66c1d4, #3a8ea2)', '#2c2c2c', 'bg-gradient-to-r from-cyan-200 via-cyan-400 to-cyan-600', false, false, false, true)} className='hover:bg-slate-100 rounded-md p-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill={svgCol} className="bi bi-cloud-snow-fill" viewBox="0 0 16 16">
                                             <path d="M2.625 11.5a.25.25 0 0 1 .25.25v.57l.501-.287a.25.25 0 0 1 .248.434l-.495.283.495.283a.25.25 0 0 1-.248.434l-.501-.286v.569a.25.25 0 1 1-.5 0v-.57l-.501.287a.25.25 0 0 1-.248-.434l.495-.283-.495-.283a.25.25 0 0 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25zm2.75 2a.25.25 0 0 1 .25.25v.57l.5-.287a.25.25 0 0 1 .249.434l-.495.283.495.283a.25.25 0 0 1-.248.434l-.501-.286v.569a.25.25 0 1 1-.5 0v-.57l-.501.287a.25.25 0 0 1-.248-.434l.495-.283-.495-.283a.25.25 0 0 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25zm5.5 0a.25.25 0 0 1 .25.25v.57l.5-.287a.25.25 0 0 1 .249.434l-.495.283.495.283a.25.25 0 0 1-.248.434l-.501-.286v.569a.25.25 0 0 1-.5 0v-.57l-.501.287a.25.25 0 0 1-.248-.434l.495-.283-.495-.283a.25.25 0 0 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25zm-2.75-2a.25.25 0 0 1 .25.25v.57l.5-.287a.25.25 0 0 1 .249.434l-.495.283.495.283a.25.25 0 0 1-.248.434l-.501-.286v.569a.25.25 0 1 1-.5 0v-.57l-.501.287a.25.25 0 0 1-.248-.434l.495-.283-.495-.283a.25.25 0 0 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25zm5.5 0a.25.25 0 0 1 .25.25v.57l.5-.287a.25.25 0 0 1 .249.434l-.495.283.495.283a.25.25 0 0 1-.248.434l-.501-.286v.569a.25.25 0 0 1-.5 0v-.57l-.501.287a.25.25 0 1 1-.248-.434l.495-.283-.495-.283a.25.25 0 0 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25zm-.22-7.223a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 10.25H13a3 3 0 0 0 .405-5.973z" />
                                        </svg>
                                   </div>
                              </div>
                              <div className="flex bg-white rounded-lg shadow-lg mt-2 ml-2 p-2">
                                   <div className="text-base md:text-3xl Panton font-bold">S</div>
                                   <div className="text-xs md:text-sm pt-1.5 md:pt-3.5 Panton font-bold w-0 animated-div1">hubham</div>
                                   <div className="text-base md:text-3xl Panton font-bold">A</div>
                                   <div className="text-xs md:text-sm pt-1.5 md:pt-3.5 Panton font-bold w-0 animated-div2">nand</div>
                              </div>
                         </div>
                         {isRainVisible && <FallingDrop />}
                         {isSnowVisible && <FallingSnow />}
                         <FlyingOBJ />
                    </div>
                    <div style={{ color: textcolor }} className="md:rounded-lg overflow-scroll example w-full lg:w-1/2 sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto">
                         <div className=' z-[80] relative'>
                              <div className={`h-56 w-full overflow-hidden relative ${gradinet}`}>
                                   {isSunnytVisible && <Sunny />}
                                   {isNightVisible && <Night />}
                                   {isRainVisible && <Rain />}
                                   {isSnowVisible && <Snow />}
                                   <div style={{ color: textcolor }} className="glass mt-2 p-2 md:p-5 bg-transparent backdrop-blur-md right-5 top-5 md:right-10 md:top-5 rounded-lg shadow-xl absolute">
                                        <div style={{ fontFamily: 'clock' }} className='md:text-xl text-center text-white'>{currentTime}</div>
                                        <div className='md:text-lg text-center text-white'>{formattedDate}</div>
                                   </div>
                              </div>

                              <div className='sm:flex justify-between w-full relative'>
                                   <img draggable="false" className="select-none  object-cover object-center h-28 w-28 rounded-full absolute -top-20 lg:-top-20 left-1 z-50" src={shuhbam} alt='Loding  Error' />
                                   <button className="w-fit absolute -top-5 right-5 h-fit text-xs sm:text-base mx-auto rounded-fullg-gray-900 hover:shadow-lg font-semibold text-white bg-black rounded-full px-5 py-2 glass hidden">Follow</button>
                              </div>
                         </div>
                         <div className="body-font border-b p-5">
                              <div className="container pt-16 md:pt-0 md:-translate-y-4 pl-5">
                                   <div className="flex flex-wrap -mx-4 -my-8">
                                        <div className="md:mt-20">
                                             <div className="h-full flex items-start">
                                                  <div className="flex-grow">
                                                       <h1 className="title-font text-3xl md:text-4xl font-bold mb-2">Shubham Anand</h1>
                                                       <div className='flex flex-wrap'>
                                                            <span className="flex items-center gap-1 m-2 ml-0 mt-0">
                                                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                                                      <path fillRule="evenodd" d="M6 3.75A2.75 2.75 0 018.75 1h2.5A2.75 2.75 0 0114 3.75v.443c.572.055 1.14.122 1.706.2C17.053 4.582 18 5.75 18 7.07v3.469c0 1.126-.694 2.191-1.83 2.54-1.952.599-4.024.921-6.17.921s-4.219-.322-6.17-.921C2.694 12.73 2 11.665 2 10.539V7.07c0-1.321.947-2.489 2.294-2.676A41.047 41.047 0 016 4.193V3.75zm6.5 0v.325a41.622 41.622 0 00-5 0V3.75c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25zM10 10a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1V11a1 1 0 00-1-1H10z" clipRule="evenodd"></path>
                                                                      <path d="M3 15.055v-.684c.126.053.255.1.39.142 2.092.642 4.313.987 6.61.987 2.297 0 4.518-.345 6.61-.987.135-.041.264-.089.39-.142v.684c0 1.347-.985 2.53-2.363 2.686a41.454 41.454 0 01-9.274 0C3.985 17.585 3 16.402 3 15.055z"></path>
                                                                 </svg>
                                                                 <span className="whitespace-nowrap"><span>Student</span></span>
                                                            </span>
                                                            <span className="flex items-center gap-1 m-2 mt-0">
                                                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                                                      <path d="M6.75.98l-.884.883a1.25 1.25 0 101.768 0L6.75.98zM13.25.98l-.884.883a1.25 1.25 0 101.768 0L13.25.98zM10 .98l.884.883a1.25 1.25 0 11-1.768 0L10 .98zM7.5 5.75a.75.75 0 00-1.5 0v.464c-1.179.305-2 1.39-2 2.622v.094c.1-.02.202-.038.306-.051A42.869 42.869 0 0110 8.5c1.93 0 3.83.129 5.694.379.104.013.206.03.306.051v-.094c0-1.232-.821-2.317-2-2.622V5.75a.75.75 0 00-1.5 0v.318a45.645 45.645 0 00-1.75-.062V5.75a.75.75 0 00-1.5 0v.256c-.586.01-1.17.03-1.75.062V5.75zM4.505 10.365A41.377 41.377 0 0110 10c1.863 0 3.697.124 5.495.365C16.967 10.562 18 11.838 18 13.28v.693a3.72 3.72 0 01-1.665-.393 5.222 5.222 0 00-4.67 0 3.722 3.722 0 01-3.33 0 5.222 5.222 0 00-4.67 0A3.72 3.72 0 012 13.972v-.693c0-1.441 1.033-2.716 2.505-2.914zM15.665 14.921a5.22 5.22 0 002.335.551V16.5a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 012 16.5v-1.028c.8 0 1.6-.183 2.335-.551a3.722 3.722 0 013.33 0c1.47.735 3.2.735 4.67 0a3.722 3.722 0 013.33 0z"></path>
                                                                 </svg>
                                                                 <span className="whitespace-nowrap">September 23th '03</span>
                                                            </span>
                                                            <span className="flex items-center gap-1 m-2 mt-0">
                                                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                                                      <path d="M5.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H6a.75.75 0 01-.75-.75V12zM6 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H6zM7.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H8a.75.75 0 01-.75-.75V12zM8 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H8zM9.25 10a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H10a.75.75 0 01-.75-.75V10zM10 11.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H10zM9.25 14a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H10a.75.75 0 01-.75-.75V14zM12 9.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V10a.75.75 0 00-.75-.75H12zM11.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H12a.75.75 0 01-.75-.75V12zM12 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H12zM13.25 10a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H14a.75.75 0 01-.75-.75V10zM14 11.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H14z"></path>
                                                                      <path fillRule="evenodd" d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z" clipRule="evenodd"></path>
                                                                 </svg>
                                                                 <span className="whitespace-nowrap">Joined Jan 2023</span>
                                                            </span>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                              <SocialContacts />
                         </div>
                         <Navbar />
                         <Routes>
                              <Route path="/" element={<About />} />
                              <Route path="/projects" element={<Projects />} />
                              <Route path="/technologies" element={<Technology props={textcolor} />} />
                              <Route path="/projects/SocialNest" element={<SocialNest />} />
                              <Route path="/projects/QRMS" element={<QRMS />} />
                              <Route path="/projects/VMart" element={<VMart />} />
                              <Route path="/projects/project" element={<BlogManagement />} />
                              <Route path="/projects/ToDoList" element={<ToDoList />} />
                              <Route path="/projects/PdfCollabrator" element={<PdfCollabrator />} />
                         </Routes>
                    </div>
               </div>
          </>
     )
}

export default Home
