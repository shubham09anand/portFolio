import React from 'react'
import { motion } from "framer-motion";
import { BriefcaseBusiness } from "lucide-react";

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

const Experience = () => {
     return (
          <div className="mt-28 border-t border-white/10 pt-10">
               <Reveal>
                    <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.25em] text-neutral-400">
                         ( Professional journey )
                    </p>

                    <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
                         <h2 className="text-4xl font-semibold tracking-[-0.055em] md:text-6xl">
                              Where I've
                              <br />
                              <span className="text-neutral-400">worked.</span>
                         </h2>

                         <p className="max-w-sm text-sm leading-7 text-neutral-400">
                              Building products, solving engineering problems, and
                              contributing across the development lifecycle.
                         </p>
                    </div>
               </Reveal>

               <Reveal delay={0.1}>
                    <div className="mt-10 rounded-2xl border border-white/10 bg-[#11151a] p-6 shadow-2xl shadow-black/20 md:p-9">
                         <div className="flex flex-col justify-between gap-5 md:flex-row">
                              <div>
                                   <div className="mb-4 flex items-center gap-2 text-xs text-neutral-400">
                                        <BriefcaseBusiness size={15} />
                                        PROFESSIONAL EXPERIENCE
                                   </div>

                                   <h3 className="text-2xl font-semibold tracking-tight">
                                        Software Developer I
                                   </h3>

                                   <p className="mt-2 text-sm text-neutral-400">
                                        Riverhouse Technologies Private Limited
                                   </p>
                              </div>

                              <span className="h-fit w-fit rounded-full border border-white/10 px-4 py-2 text-xs text-neutral-400">
                                   June 2025 — June 2026
                              </span>
                         </div>

                         <div className="mt-8 grid gap-4 border-t border-white/10 pt-7 md:grid-cols-2">
                              {[
                                   "Developed full-stack web and mobile applications using React, Angular, React Native, and Node.js.",
                                   "Built REST APIs and integrated applications with MongoDB and MySQL databases.",
                                   "Worked with AWS infrastructure and Docker-based application deployments.",
                                   "Contributed to feature development, code reviews, architecture discussions, and production optimization.",
                              ].map((item, index) => (
                                   <div key={index} className="flex gap-3">
                                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-lime-500" />
                                        <p className="text-sm leading-7 text-neutral-400">
                                             {item}
                                        </p>
                                   </div>
                              ))}
                         </div>
                    </div>
               </Reveal>
          </div>
     )
}

export default Experience
