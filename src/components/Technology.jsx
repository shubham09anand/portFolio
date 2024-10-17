import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import php from "../assets/php.png";
import mongodb from "../assets/mongodb.png";
import mysql from "../assets/mysql.png";
import node from "../assets/node.png";
import express from "../assets/express.png";
import jquery from "../assets/jquery.png";
import python from "../assets/python.jpg";
import java from "../assets/java.png";
import ginFramework from "../assets/ginFramework.png";
import aws from "../assets/aws.png";
import goLang from "../assets/goLang.png";

const Experiences = ({ textcolor }) => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
    },
    {
      id: 4,
      src: tailwind,
      title: "Tailwind",
    },
    {
      id: 5,
      src: jquery,
      title: "Jquery",
    },
    {
      id: 6,
      src: reactImage,
      title: "React",
    },
    {
      id: 7,
      src: mysql,
      title: "MySQL",
    },
    {
      id: 8,
      src: mongodb,
      title: "MongoDB",
    },
    {
      id: 9,
      src: php,
      title: "php",
    },
    {
      id: 10,
      src: node,
      title: "Node.js",
    },
    {
      id: 11,
      src: goLang,
      title: "Golang",
    },
    {
      id: 12,
      src: ginFramework,
      title: "Gin Framework",
    },
    {
      id: 13,
      src: express,
      title: "Express.js",
    },
    {
      id: 14,
      src: aws,
      title: "AWS",
    },
    {
      id: 15,
      src: python,
      title: "Python",
    },
    {
      id: 16,
      src: java,
      title: "Java",
    },
  ];

  const renderTechs = (startId, endId) => (
    techs
      .filter((tech) => tech.id >= startId && tech.id <= endId)
      .map((tech) => (
        <div key={tech.id} className="xl:w-1/3 md:w-1/3 sm:w-1/2 w-full p-2 backdrop-blur-lg">
          <div className="border border-gray-200 p-6 flex place-content-center items-center flex-col rounded-lg">
            <div className="w-10 h-10 mx-auto inline-flex items-center justify-center rounded-full text-indigo-500 mb-4">
              <img draggable="false" className="select-none" src={tech.src} alt={tech.title} />
            </div>
            <h2 className="text-lg  font-medium title-font mb-2" style={{color:textcolor}}>{tech.title}</h2>
          </div>
        </div>
      ))
  );
  
  return (
        <>
         <section className="body-font select-none relative z-[80] backdrop-blur-sm">
          <div className="container px-5 pb-10 mx-auto">
            <div className="flex flex-wrap w-full mb-10 flex-col items-center text-center">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 mt-5">My Technology Stack</h1>
            </div>
            <h1 className="title-font text-3xl pl-5 font-bold">Front End</h1>
            <div className="flex flex-wrap mb-2">            
              {renderTechs(1,6)}
            </div>
            <h1 className="title-font text-3xl pl-5 font-bold">Data Base</h1>
            <div className="flex flex-wrap mb-2">
              {renderTechs(7,8)}
            </div>
            <h1 className="title-font text-3xl pl-5 font-bold">Backend End</h1>
            <div className="flex flex-wrap mb-2">
              {renderTechs(9,13)}
            </div>
            <h1 className="title-font text-3xl pl-5 font-bold">Cloud</h1>
            <div className="flex flex-wrap mb-2">
              {renderTechs(14,14)}
            </div>
            <h1 className="title-font text-3xl pl-5 font-bold">Other Technologies</h1>
            <div className="flex flex-wrap mb-2">
              {renderTechs(15,16)}
            </div>
          </div>
        </section>
        </>
  );
};

export default Experiences;
