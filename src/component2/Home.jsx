import React from "react";
import { motion } from "framer-motion";
import Experience from "./Experience";
import Technology from "./Technology";
import Education from "./Education";
import Stack from "./Stack";
import profile from "../assets/shubham.png";
import SocialContacts from "../components/SocialContacts";
import Selection from "./Selection";

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

export default function Home() {

     return (
          <section id="about" className="min-h-screen overflow-hidden bg-[#090b0f] px-5 py-12 text-neutral-100 md:px-10 lg:px-16 lg:py-32">
               {/* Floating Copy Button */}
               <Selection />

               <div className="mx-auto max-w-[1280px]">
                    <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">

                         <Reveal>
                              <p className="mb-6 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-neutral-400">
                                   <span className="h-px w-8 bg-lime-500" />
                                   ( A little about me )
                              </p>

                              <h2 className="max-w-2xl text-4xl font-semibold leading-[1.08] tracking-tighter md:text-6xl">
                                   Full Stack Developer.
                                   <br />
                                   <span className="text-white text-3xl tracking-normal md:text-5xl">
                                        Web&nbsp;
                                   </span>
                                   <span className="text-neutral-400 text-3xl tracking-normal md:text-5xl">
                                        &amp;&nbsp;
                                   </span>
                                   <span className="text-white text-3xl tracking-normal md:text-5xl">
                                        Mobile Applications
                                   </span>
                              </h2>

                              <p className="mt-8 max-w-lg text-sm leading-8 text-neutral-500 md:text-base"> I'm Shubham Anand, a Full Stack Developer with 1 year of professional experience building web and mobile applications. I work across the entire development process, from designing interfaces to developing backend services and deploying applications to the cloud.</p>

                              <p className="mt-4 max-w-lg text-sm leading-8 text-neutral-500 md:text-base"> My experience includes working on HealthTech, EdTech, and business platforms. I also build independent projects to explore real-time systems, application architecture, and scalable backend infrastructure.</p>

                              <div className="mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-white/10 pt-7">
                                   <div>
                                        <p className="text-3xl font-semibold tracking-tight">01+</p>
                                        <p className="mt-2 text-xs leading-5 text-neutral-400">
                                             Year of<br />experience
                                        </p>
                                   </div>

                                   <div>
                                        <p className="text-3xl font-semibold tracking-tight">03</p>
                                        <p className="mt-2 text-xs leading-5 text-neutral-400">
                                             Industry<br />domains
                                        </p>
                                   </div>

                                   <div>
                                        <p className="text-3xl font-semibold tracking-tight">Full</p>
                                        <p className="mt-2 text-xs leading-5 text-neutral-400">
                                             Stack<br />development
                                        </p>
                                   </div>
                              </div>

                              <SocialContacts />
                         </Reveal>

                         <div className="flex flex-col gap-10">
                              <Reveal delay={0.15}>
                                   <div className="relative mx-auto w-full max-w-sm">
                                        <div className="absolute -right-3 -top-3 h-full w-full rounded-full border border-lime-400/60" />

                                        <div className="relative overflow-hidden rounded-full bg-neutral-800 ring-1 ring-white/10">
                                             <img
                                                  src={profile}
                                                  alt="Shubham Anand"
                                                  loading="lazy"
                                                  className="h-full w-full object-cover object-center"
                                             />
                                        </div>
                                   </div>
                              </Reveal>

                              <Stack />
                         </div>
                    </div>

                    <Experience />
                    <Technology />
                    <Education />
               </div>
          </section>
     );
}