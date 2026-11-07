import React from "react";

const skills = [
     {
          category: "Frontend",
          items: ["React.js", "Angular", "React Native", "JavaScript", "TypeScript", "Tailwind CSS"],
     },
     {
          category: "Backend",
          items: ["Node.js", "Express.js", "REST APIs"],
     },
     {
          category: "Databases",
          items: ["MongoDB", "MySQL", "Mongoose", "SQLite", "Redis"],
     },
     {
          category: "Cloud & DevOps",
          items: ["AWS", "Docker", "ECS", "ECR", "EC2", "Nginx", "GitHub Actions"],
     },
];

const projects = [
     {
          name: "PingMe",
          type: "Real-time Messaging Platform",
          description:
               "A cross-platform messaging application built with React Native and Node.js, featuring real-time communication, offline message persistence, media sharing, and background synchronization.",
          technologies: [
               "React Native",
               "Node.js",
               "Socket.IO",
               "MongoDB",
               "Redux Toolkit",
               "AWS S3",
          ],
          number: "01",
     },
     {
          name: "Scalable Load Balancer & Rate Limiter",
          type: "Backend Infrastructure",
          description:
               "A scalable backend infrastructure project featuring request distribution, Token Bucket rate limiting, health checks, and automatic failover using Docker and Nginx.",
          technologies: ["Node.js", "Docker", "Nginx", "Redis", "AWS"],
          number: "02",
     },
];

const experience = [
     {
          role: "Software Developer I",
          company: "Riverhouse Technologies Private Limited",
          duration: "June 2025 – June 2026",
          description: [
               "Developed and maintained full-stack web and mobile applications using React, Angular, React Native, and Node.js.",
               "Built REST APIs and integrated frontend applications with MySQL and MongoDB databases.",
               "Worked on AWS infrastructure, Docker-based deployments, and production application support.",
               "Contributed to feature planning, architecture discussions, code reviews, and application optimization.",
          ],
     },
];

const About = ({ textcolor = "black" }) => {
     return (
          <section
               className="w-full px-4 py-8 sm:px-6 lg:px-10"
               style={{ color: textcolor }}
          >
               <div className="mx-auto max-w-6xl">

                    {/* Introduction */}
                    <div className="mb-12">
                         <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] opacity-60">
                              Get to know me
                         </p>

                         <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                              About <span className="text-blue-500">Me.</span>
                         </h1>

                         <div className="mt-6 grid gap-8 lg:grid-cols-[1.5fr_1fr]">
                              <div>
                                   <h2 className="text-2xl font-semibold leading-snug sm:text-3xl">
                                        Building digital products, from frontend interfaces to backend
                                        infrastructure.
                                   </h2>

                                   <p className="mt-5 text-base leading-8 opacity-75 sm:text-lg">
                                        I'm Shubham Anand, a Full Stack Developer with 1 year of
                                        professional experience building and deploying web and mobile
                                        applications. My work spans frontend development, backend API
                                        development, database integration, and cloud infrastructure.
                                   </p>

                                   <p className="mt-4 text-base leading-8 opacity-75 sm:text-lg">
                                        I have worked across HealthTech, EdTech, and business platforms,
                                        using technologies such as React, Angular, React Native,
                                        Node.js, MongoDB, MySQL, and AWS. I also build personal projects
                                        to explore scalable systems, real-time communication, and
                                        application architecture.
                                   </p>
                              </div>

                              {/* Quick Overview */}
                              <div className="grid grid-cols-2 gap-3 self-start">
                                   {[
                                        ["01+", "Year Experience"],
                                        ["03", "Industry Domains"],
                                        ["Web", "Development"],
                                        ["Mobile", "Development"],
                                   ].map(([value, label]) => (
                                        <div
                                             key={label}
                                             className="rounded-2xl border border-current/10 bg-white/5 p-5 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/10"
                                        >
                                             <h3 className="text-2xl font-bold text-blue-500 sm:text-3xl">
                                                  {value}
                                             </h3>
                                             <p className="mt-2 text-sm opacity-65">{label}</p>
                                        </div>
                                   ))}
                              </div>
                         </div>
                    </div>

                    {/* Experience */}
                    <div className="mb-14">
                         <div className="mb-7 flex items-center gap-4">
                              <h2 className="text-2xl font-bold sm:text-3xl">Experience</h2>
                              <div className="h-px flex-1 bg-current/15" />
                         </div>

                         {experience.map((item) => (
                              <div
                                   key={item.company}
                                   className="relative rounded-2xl border border-current/10 bg-white/5 p-6 backdrop-blur-sm sm:p-8"
                              >
                                   <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                                        <div>
                                             <h3 className="text-xl font-semibold">{item.role}</h3>
                                             <p className="mt-1 text-blue-500">{item.company}</p>
                                        </div>

                                        <span className="w-fit rounded-full border border-current/10 px-4 py-2 text-xs opacity-70">
                                             {item.duration}
                                        </span>
                                   </div>

                                   <ul className="mt-6 space-y-3">
                                        {item.description.map((point, index) => (
                                             <li
                                                  key={index}
                                                  className="flex gap-3 text-sm leading-7 opacity-75 sm:text-base"
                                             >
                                                  <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                                                  {point}
                                             </li>
                                        ))}
                                   </ul>
                              </div>
                         ))}
                    </div>

                    {/* Technical Skills */}
                    <div className="mb-14">
                         <div className="mb-7 flex items-center gap-4">
                              <h2 className="text-2xl font-bold sm:text-3xl">
                                   Technical Skills
                              </h2>
                              <div className="h-px flex-1 bg-current/15" />
                         </div>

                         <div className="grid gap-4 sm:grid-cols-2">
                              {skills.map((group) => (
                                   <div
                                        key={group.category}
                                        className="rounded-2xl border border-current/10 bg-white/5 p-6 transition duration-300 hover:border-blue-500/40"
                                   >
                                        <h3 className="mb-5 text-lg font-semibold">
                                             {group.category}
                                        </h3>

                                        <div className="flex flex-wrap gap-2">
                                             {group.items.map((skill) => (
                                                  <span
                                                       key={skill}
                                                       className="rounded-lg border border-current/10 px-3 py-2 text-sm opacity-80 transition duration-200 hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-500"
                                                  >
                                                       {skill}
                                                  </span>
                                             ))}
                                        </div>
                                   </div>
                              ))}
                         </div>
                    </div>

                    {/* Personal Projects */}
                    <div className="mb-14">
                         <div className="mb-7 flex items-center gap-4">
                              <h2 className="text-2xl font-bold sm:text-3xl">
                                   Personal Projects
                              </h2>
                              <div className="h-px flex-1 bg-current/15" />
                         </div>

                         <div className="grid gap-5 lg:grid-cols-2">
                              {projects.map((project) => (
                                   <div
                                        key={project.number}
                                        className="group rounded-2xl border border-current/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/5 sm:p-8"
                                   >
                                        <div className="mb-6 flex items-center justify-between">
                                             <span className="text-3xl font-bold text-blue-500/50">
                                                  {project.number}
                                             </span>

                                             <span className="rounded-full border border-current/10 px-3 py-1 text-xs opacity-60">
                                                  {project.type}
                                             </span>
                                        </div>

                                        <h3 className="text-xl font-bold transition group-hover:text-blue-500">
                                             {project.name}
                                        </h3>

                                        <p className="mt-4 text-sm leading-7 opacity-70">
                                             {project.description}
                                        </p>

                                        <div className="mt-6 flex flex-wrap gap-2">
                                             {project.technologies.map((tech) => (
                                                  <span
                                                       key={tech}
                                                       className="rounded-md bg-blue-500/10 px-2.5 py-1.5 text-xs text-blue-500"
                                                  >
                                                       {tech}
                                                  </span>
                                             ))}
                                        </div>
                                   </div>
                              ))}
                         </div>
                    </div>

                    {/* Education */}
                    <div className="mb-8">
                         <div className="mb-7 flex items-center gap-4">
                              <h2 className="text-2xl font-bold sm:text-3xl">Education</h2>
                              <div className="h-px flex-1 bg-current/15" />
                         </div>

                         <div className="rounded-2xl border border-current/10 bg-white/5 p-6 sm:p-8">
                              <div className="flex flex-col justify-between gap-3 sm:flex-row">
                                   <div>
                                        <h3 className="text-xl font-semibold">
                                             Bachelor of Technology — Computer Science
                                        </h3>
                                        <p className="mt-2 opacity-70">
                                             Bhilai Institute of Technology, Durg
                                        </p>
                                   </div>

                                   <span className="h-fit w-fit rounded-full border border-current/10 px-4 py-2 text-sm opacity-70">
                                        Graduated 2025
                                   </span>
                              </div>
                         </div>
                    </div>

               </div>
          </section>
     );
};

export default About;