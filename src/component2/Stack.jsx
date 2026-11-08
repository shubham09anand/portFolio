import React from 'react'
import { motion } from "framer-motion";
import { ArrowUpRight, Cloud, Database, Layers3, Smartphone } from 'lucide-react';

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

const services = [
     {
          icon: <Smartphone size={21} strokeWidth={1.6} />,
          title: "Mobile applications",
          text: "Cross-platform mobile experiences built with React Native, with a focus on usability and performance.",
     },
     {
          icon: <Layers3 size={21} strokeWidth={1.6} />,
          title: "Web development",
          text: "Modern, responsive web applications built with React and Angular.",
     },
     {
          icon: <Database size={21} strokeWidth={1.6} />,
          title: "Backend engineering",
          text: "REST APIs, database architecture, real-time communication, and server-side workflows.",
     },
     {
          icon: <Cloud size={21} strokeWidth={1.6} />,
          title: "Cloud & deployment",
          text: "Containerized applications, AWS infrastructure, CI/CD, and production deployments.",
     },
];

const Stack = () => {

     return (
          <div className="space-y-3">
               {services.map((service, index) => (
                    <Reveal key={service.title} delay={index * 0.08}>
                         <motion.div
                              whileHover={{ x: 6 }}
                              className="group flex items-start gap-5 rounded-2xl border border-white/10 bg-[#11151a] p-5 transition-colors hover:border-lime-400 hover:bg-[#171d20] md:p-6"
                         >
                              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#1d2724] text-lime-300 transition-colors group-hover:bg-lime-400 group-hover:text-[#090b0f]">
                                   {service.icon}
                              </div>

                              <div className="flex-1">
                                   <h3 className="text-base font-semibold">
                                        {service.title}
                                   </h3>

                                   <p className="mt-2 text-sm leading-6 text-neutral-400">
                                        {service.text}
                                   </p>
                              </div>

                              {/* <ArrowUpRight
                                   size={18}
                                   className="text-neutral-500 transition-colors group-hover:text-lime-300"
                              /> */}
                         </motion.div>
                    </Reveal>
               ))}
          </div>
     )
}

export default Stack