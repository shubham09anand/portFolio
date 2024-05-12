import React from 'react';

import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import photo1 from "../../assets/projectPhoto/VMart/photo1.png";
import photo2 from "../../assets/projectPhoto/VMart/photo2.png";
import photo3 from "../../assets/projectPhoto/VMart/photo3.png";
import photo4 from "../../assets/projectPhoto/VMart/photo4.png";
import photo5 from "../../assets/projectPhoto/VMart/photo5.png";
import photo6 from "../../assets/projectPhoto/VMart/photo6.png";
import photo7 from "../../assets/projectPhoto/VMart/photo7.png";

const VMart = () => {
    return (
        <div className="text-zinc-800">
            <div className="md: items-center rounded-lg py-10 bg-gray-100">
                <div className="w-full shadow-2xl rounded-l-md p-2 scale-95">
                    <Link to="/projects">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 absolute bg-gray-200 rounded-full p-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>
                    </Link>
                    <div className="font-bold text-5xl mb-2 text-[#324997] text-center">VMart</div>
                    <Carousel className=''>
                        <img className=" mx-auto bg-white" src={photo1} alt="Sunset in the mountains" />
                        <img className=" mx-auto bg-white" src={photo2} alt="Sunset in the mountains" />
                        <img className=" mx-auto bg-white" src={photo3} alt="Sunset in the mountains" />
                        <img className=" mx-auto bg-white" src={photo4} alt="Sunset in the mountains" />
                        <img className=" mx-auto bg-white" src={photo5} alt="Sunset in the mountains" />
                        <img className=" mx-auto bg-white" src={photo6} alt="Sunset in the mountains" />
                        <img className=" mx-auto bg-white" src={photo7} alt="Sunset in the mountains" />
                    </Carousel>
                </div>
                <div className='scale-95 bg-gradient-to-br from-green-300 via-green-500 to-green-800 rounded-lg p-5 shadow-2xl'>
                    <div className='p-2'>
                        <div className="py-4">
                            <div className="font-bold text-3xl mb-2 text-[#324997]">About</div>
                            <p className="text-white font-medium text-xl">
                                "VMart" is A E-Commerce Website which is design to sell groceriers ,fruits and many more rural based product.</p>
                        </div>
                        <h2 className="font-extrabold text-2xl mb-2">Technologies</h2>
                        <div>
                            <span className="inline-block bg-gray-950 text-white rounded-full m-1 px-3 py-1 text-sm font-semibold mr-2">Node.js</span>
                            <span className="inline-block bg-gray-950 text-white rounded-full m-1 px-3 py-1 text-sm font-semibold mr-2">Express.js</span>
                            <span className="inline-block bg-gray-950 text-white rounded-full m-1 px-3 py-1 text-sm font-semibold">React.js</span>
                            <span className="inline-block bg-gray-950 text-white rounded-full m-1 px-3 py-1 text-sm font-semibold mr-2">MongoDB</span>
                            <span className="inline-block bg-gray-950 text-white rounded-full m-1 px-3 py-1 text-sm font-semibold mr-2">CSS</span>
                            <span className="inline-block bg-gray-950 text-white rounded-full m-1 px-3 py-1 text-sm font-semibold mr-2">Tailwind</span>
                            <span className="inline-block bg-gray-950 text-white rounded-full m-1 px-3 py-1 text-sm font-semibold">Java Script</span>
                        </div>
                    </div>
                    <div>
                        <h2 className="font-extrabold text-2xl mb-2 mt-4">Features</h2>
                        <div>
                            <span className="inline-block bg-gray-950 text-white rounded-full m-1 px-3 py-1 text-sm font-semibold">Sell</span>
                            <span className="inline-block bg-gray-950 text-white rounded-full m-1 px-3 py-1 text-sm font-semibold">Purchase</span>
                            <span className="inline-block bg-gray-950 text-white rounded-full m-1 px-3 py-1 text-sm font-semibold">Upload Photos Of Product </span>
                        </div>
                    </div>
                    <div className='mt-5 text-white text-sm font-extrabold'>To See The Source Code Visit My GitHub Account From Contact Section</div>
                </div>
            </div>
        </div>
    )
}

export default VMart