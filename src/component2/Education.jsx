import React from 'react'
import { motion } from "framer-motion";

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

const Education = () => {
     return (
          <Reveal>
               <div className="mt-28 border-t border-white/10 pt-10">
                    <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.25em] text-neutral-400">
                         ( Education )
                    </p>

                    <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
                         <div>
                              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                                   Bachelor of Technology
                              </h2>
                              <p className="mt-3 text-sm text-neutral-400">
                                   Computer Science & Engineering
                              </p>
                              <p className="mt-2 text-sm text-neutral-400">
                                   Bhilai Institute of Technology, Durg
                              </p>
                         </div>

                         <span className="h-fit w-fit rounded-full border border-white/10 px-4 py-2 text-xs text-neutral-400">
                              Graduated 2025
                         </span>
                    </div>
               </div>
          </Reveal>
     )
}

export default Education
