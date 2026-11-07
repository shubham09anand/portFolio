import React from "react";
import { motion } from "framer-motion";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import mongodb from "../assets/mongodb.png";
import mysql from "../assets/mysql.png";
import node from "../assets/node.png";
import express from "../assets/express.png";
import aws from "../assets/aws.png";
import angular from "../assets/Angular.png";
import typescript from "../assets/TypeScript.png";
import redux from "../assets/Redux.png";
import socketio from "../assets/Socket.io.png";
import docker from "../assets/Docker.png";
import github from "../assets/GitHub.png";
import gitactions from "../assets/GitHub Actions.png";
import jest from "../assets/Jest.png";
import Postman from "../assets/Postman.png";
import redis from "../assets/Redis.png";
import vscode from "../assets/Visual Studio Code (VS Code).png";
import ELB from "../assets/Elastic Load Balancing.png";
import S3 from "../assets/S3 on Outposts.png";
import EC2 from "../assets/EC2.png";

const categories = [
     {
          name: "Frontend",
          description: "Building responsive web and mobile experiences.",
          technologies: [
               { name: "Angular", image: angular },
               { name: "React.js", image: reactImage },
               { name: "React Native", image: reactImage },
               { name: "JavaScript (ES6+)", image: javascript },
               { name: "TypeScript", image: typescript },
               { name: "HTML5", image: html },
               { name: "CSS3", image: css },
               { name: "Tailwind CSS", image: tailwind },
               { name: "Redux Toolkit", image: redux },
          ],
     },
     {
          name: "Backend",
          description: "Developing APIs and server-side applications.",
          technologies: [
               { name: "Node.js", image: node },
               { name: "Express.js", image: express },
               { name: "REST APIs" },
               { name: "Socket.IO", image: socketio },
          ],
     },
     {
          name: "Databases",
          description: "Working with relational and NoSQL databases.",
          technologies: [
               { name: "MySQL", image: mysql },
               { name: "MongoDB", image: mongodb },
               { name: "Redis", image: redis },
          ],
     },
     {
          name: "Cloud & DevOps",
          description: "Deploying, managing, and scaling applications.",
          technologies: [
               { name: "AWS", image: aws },
               { name: "Docker", image: docker },
               { name: "GitHub Actions", image: gitactions },
               { name: "S3", image: S3 },
               { name: "AWS EC2", image: EC2 },
               { name: "ECS" },
               { name: "ECR" },
               { name: "Load Balancer", image: ELB },
               { name: "Nginx" },
               { name: "PM2" },
          ],
     },
     {
          name: "Tools",
          description: "Development, testing, and version control tools.",
          technologies: [
               { name: "GitHub", image: github },
               { name: "Postman", image: Postman },
               { name: "VS Code", image: vscode },
               { name: "Jest", image: jest },
          ],
     },
];

const Reveal = ({ children, className = "", delay = 0 }) => (
     <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
               duration: 0.7,
               delay,
               ease: [0.22, 1, 0.36, 1],
          }}
          className={className}
     >
          {children}
     </motion.div>
);

const Technology = () => {
     return (
          <section className="mt-28 border-t border-white/10 pt-10">
               <Reveal>
                    <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.25em] text-neutral-400">
                         ( My toolbox )
                    </p>

                    <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
                         <h2 className="text-4xl font-semibold tracking-[-0.055em] md:text-6xl">
                              Technologies.
                              <br />
                              <span className="text-neutral-400">I work with.</span>
                         </h2>

                         <p className="max-w-sm text-sm leading-7 text-neutral-400">
                              A collection of technologies and tools I use to build,
                              deploy, and maintain web and mobile applications.
                         </p>
                    </div>
               </Reveal>

               <div className="mt-14 space-y-14">
                 {categories.map((category, categoryIndex) => (
     <Reveal key={category.name} delay={categoryIndex * 0.05}>
          <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
               <h3 className="text-xl font-semibold tracking-tight">
                    {category.name}
               </h3>

               <p className="text-xs text-neutral-400">
                    {category.description}
               </p>
          </div>

          <div className="flex flex-wrap gap-5">
               {category.technologies.map((tech, index) => (
                    <motion.div
                         key={tech.name}
                         initial={{ opacity: 0, y: 10 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                         transition={{ delay: index * 0.03 }}
                         whileHover={{ y: -3 }}
                         className="group inline-flex min-w-[160px] items-center gap-2 rounded-full border border-white/10 bg-[#11151a] px-5 py-2 transition-all duration-300 hover:border-lime-400 hover:bg-[#171d20]"
                    >
                         {tech.image ? (
                              <img
                                   src={tech.image}
                                   alt={tech.name}
                                   loading="lazy"
                                   className="h-8 w-8 rounded-md object-contain transition-transform duration-300 group-hover:scale-110"
                              />
                         ) : (
                              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#1d2724] text-[9px] font-semibold text-neutral-300">
                                   {tech.name.slice(0, 2).toUpperCase()}
                              </span>
                         )}

                         <span className="whitespace-nowrap text-xs font-medium text-neutral-300 group-hover:text-white">
                              {tech.name}
                         </span>
                    </motion.div>
               ))}
          </div>
     </Reveal>
))}
               </div>
          </section>
     );
};

export default Technology;