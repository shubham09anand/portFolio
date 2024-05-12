import React from 'react';

import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import photo from "../../assets/projectPhoto/todolist/photo.png";
import photo0 from "../../assets/projectPhoto/todolist/photo-0.png";
import photo1 from "../../assets/projectPhoto/todolist/photo-1.jpg";
import photo2 from "../../assets/projectPhoto/todolist/photo-2.png";
import photo3 from "../../assets/projectPhoto/todolist/photo-3.png";


const ToDoList = () => {
    return (
        <div className="text-zinc-800">
            <div className="md: items-center rounded-lg py-10 bg-gray-100">
                <div className="w-full shadow-2xl rounded-l-md p-2 scale-95">
                    <Link to="/projects">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 absolute bg-gray-200 rounded-full p-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>
                    </Link>
                    <div className="font-bold text-5xl mb-2 text-[#324997] text-center">To Do List</div>
                    <Carousel className=''>
                        <img className=" mx-auto bg-white" src={photo} alt="To Do List" />
                        <img className=" mx-auto bg-white" src={photo3} alt="To Do List" />
                        <img className=" mx-auto bg-white" src={photo0} alt="To Do List" />
                        <img className=" mx-auto bg-white" src={photo1} alt="To Do List" />
                        <img className=" mx-auto bg-white" src={photo2} alt="To Do List" />
                        
                    </Carousel>
                </div>
                <div className='scale-95 bg-gradient-to-br from-white  to-gray-500 rounded-lg p-5 shadow-2xl'>
                    <div className='p-2'>
                        <div className="py-4">
                            <div className="font-bold text-3xl mb-2 text-[#324997]">About</div>
                            <p className="text-black font-medium text-xl">"To Do List" is Work Organsing, Tracking and Mangaing Web base Platform.</p>
                        </div>
                        <h2 className="font-extrabold text-2xl mb-2">Technologies</h2>
                        <div>
                            <span className="inline-block bg-gray-950 text-white rounded-full m-1 px-3 py-1 text-sm font-semibold mr-2">Php</span>
                            <span className="inline-block bg-gray-950 text-white rounded-full m-1 px-3 py-1 text-sm font-semibold mr-2">jQuery</span>
                            <span className="inline-block bg-gray-950 text-white rounded-full m-1 px-3 py-1 text-sm font-semibold mr-2">MySQL</span>
                            <span className="inline-block bg-gray-950 text-white rounded-full m-1 px-3 py-1 text-sm font-semibold mr-2">CSS</span>
                            <span className="inline-block bg-gray-950 text-white rounded-full m-1 px-3 py-1 text-sm font-semibold mr-2">Tailwind</span>
                            <span className="inline-block bg-gray-950 text-white rounded-full m-1 px-3 py-1 text-sm font-semibold">Java Script</span>
                        </div>
                    </div>
                    <div>
                        <h2 className="font-extrabold text-2xl mb-2 mt-4">Features</h2>
                        <div>
                            <span className="inline-block bg-gray-950 text-white rounded-full m-1 px-3 py-1 text-sm font-semibold">Add Task</span>
                            <span className="inline-block bg-gray-950 text-white rounded-full m-1 px-3 py-1 text-sm font-semibold">Update Task</span>
                            <span className="inline-block bg-gray-950 text-white rounded-full m-1 px-3 py-1 text-sm font-semibold">Delete Task</span>
                        </div>
                    </div>
                    <div className='mt-5 text-white text-sm font-extrabold'>To See The Source Code Visit My GitHub Account From Contact Section</div>
                </div>
            </div>
        </div>
    )
}

export default ToDoList