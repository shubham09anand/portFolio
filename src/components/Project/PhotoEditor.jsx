import React from 'react';

import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import Contacts from "../../assets/projectPhoto/Contacts.png";
import Create_Blog from "../../assets/projectPhoto/Create_Blog.png";
import Blog_Page from "../../assets/projectPhoto/Blog_Page.png";
import Chat_Section from "../../assets/projectPhoto/Chat_Section.png";
import Create_Story from "../../assets/projectPhoto/Create_Story.png";
import Create_Post from "../../assets/projectPhoto/Create_Post.png";
import Friends from "../../assets/projectPhoto/Friends.png";
import Edit_Profile from "../../assets/projectPhoto/Edit_Profile.png";
import LandingPage from "../../assets/projectPhoto/Landing Page.png";
import News_WEB_PAGE from "../../assets/projectPhoto/News_WEB_PAGE.png";
import userProfilePage from "../../assets/projectPhoto/userProfilePage.png";
import SelectedStory from "../../assets/projectPhoto/SelectedStory.png";
import Settings from "../../assets/projectPhoto/Settings.png";

const PhotoEditor = () => {
    return (
        <div className="text-zinc-800">
            <div className="md: items-center rounded-lg py-10 bg-gray-100">
                <div className="w-full shadow-2xl rounded-l-md p-2 scale-95">
                    <Link to="/projects">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 absolute bg-gray-200 rounded-full p-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>
                    </Link>
                    <div className="font-bold text-5xl mb-2 text-[#324997] text-center">PhotoEditor</div>
                    <Carousel className=''>
                        <img className=" mx-auto bg-white" src={LandingPage} alt="Sunset in the mountains" />
                        <img className=" mx-auto bg-white" src={userProfilePage} alt="Sunset in the mountains" />
                        <img className=" mx-auto bg-white" src={Friends} alt="Sunset in the mountains" />
                        <img className=" mx-auto bg-white" src={Contacts} alt="Sunset in the mountains" />
                        <img className=" mx-auto bg-white" src={Chat_Section} alt="Sunset in the mountains" />
                        <img className=" mx-auto bg-white" src={Create_Blog} alt="Sunset in the mountains" />
                        <img className=" mx-auto bg-white" src={Blog_Page} alt="Sunset in the mountains" />
                        <img className=" mx-auto bg-white" src={Create_Story} alt="Sunset in the mountains" />
                        <img className=" mx-auto bg-white" src={SelectedStory} alt="Sunset in the mountains" />
                        <img className=" mx-auto bg-white" src={Create_Post} alt="Sunset in the mountains" />
                        <img className=" mx-auto bg-white" src={News_WEB_PAGE} alt="Sunset in the mountains" />
                        <img className=" mx-auto bg-white" src={Edit_Profile} alt="Sunset in the mountains" />
                        <img className=" mx-auto bg-white" src={Settings} alt="Sunset in the mountains" />
                    </Carousel>
                </div>
                <div className='scale-95 bg-gradient-to-br from-indigo-300 via-indigo-500 to-indigo-800 rounded-lg p-5 shadow-2xl'>
                    <div className='p-2'>
                        <div className="py-4">
                            <div className="font-bold text-3xl mb-2 text-[#324997]">About</div>
                            <p className="text-white font-medium text-xl">
                                "PhotoEditor" is a dynamic social media platform offering users a seamless experience to connect, engage, and express themselves online.                            </p>
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
                            <span className="inline-block bg-gray-950 text-white rounded-full m-1 px-3 py-1 text-sm font-semibold">Stablity AI API (text-to-image)</span>
                            <span className="inline-block bg-gray-950 text-white rounded-full m-1 px-3 py-1 text-sm font-semibold">Google Gemni AI API (text-to-text)</span>
                            <span className="inline-block bg-gray-950 text-white rounded-full m-1 px-3 py-1 text-sm font-semibold">Material UI</span>
                            <span className="inline-block bg-gray-950 text-white rounded-full m-1 px-3 py-1 text-sm font-semibold">Socket.io</span>
                            <span className="inline-block bg-gray-950 text-white rounded-full m-1 px-3 py-1 text-sm font-semibold">CRON Job</span>
                            <span className="inline-block bg-gray-950 text-white rounded-full m-1 px-3 py-1 text-sm font-semibold">Responive UI</span>
                            <span className="inline-block bg-gray-950 text-white rounded-full m-1 px-3 py-1 text-sm font-semibold">Cross Browser Compatiblity</span>
                        </div>
                    </div>
                    <div>
                        <h2 className="font-extrabold text-2xl mb-2 mt-4">Features</h2>
                        <div>
                            <span className="inline-block bg-gray-950 text-white rounded-full m-1 px-3 py-1 text-sm font-semibold mr-2">Real Time Chat</span>
                            <span className="inline-block bg-gray-950 text-white rounded-full m-1 px-3 py-1 text-sm font-semibold mr-2">Scheduled Message</span>
                            <span className="inline-block bg-gray-950 text-white rounded-full m-1 px-3 py-1 text-sm font-semibold">Make Friends</span>
                            <span className="inline-block bg-gray-950 text-white rounded-full m-1 px-3 py-1 text-sm font-semibold">Create Story</span>
                            <span className="inline-block bg-gray-950 text-white rounded-full m-1 px-3 py-1 text-sm font-semibold mr-2">Post</span>
                            <span className="inline-block bg-gray-950 text-white rounded-full m-1 px-3 py-1 text-sm font-semibold mr-2">Comments</span>
                            <span className="inline-block bg-gray-950 text-white rounded-full m-1 px-3 py-1 text-sm font-semibold">Like</span>
                            <span className="inline-block bg-gray-950 text-white rounded-full m-1 px-3 py-1 text-sm font-semibold">Read News</span>
                            <span className="inline-block bg-gray-950 text-white rounded-full m-1 px-3 py-1 text-sm font-semibold">Create Blog</span>
                            <span className="inline-block bg-gray-950 text-white rounded-full m-1 px-3 py-1 text-sm font-semibold">Read Blog</span>
                            <span className="inline-block bg-gray-950 text-white rounded-full m-1 px-3 py-1 text-sm font-semibold">AI Text-to-Text Support</span>
                            <span className="inline-block bg-gray-950 text-white rounded-full m-1 px-3 py-1 text-sm font-semibold">AI Text-to-Image Support</span>
                        </div>
                    </div>
                    <div className='mt-5 text-white text-sm font-extrabold'>To See The Source Code Visit My GitHub Account From Contact Section</div>
                </div>
            </div>
        </div>
    )
}

export default PhotoEditor