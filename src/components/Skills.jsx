import React from "react";
import { BookHeart, Brain, BrainCircuit, ChartBar, Database, FolderCode, Laptop, Wallpaper, WandSparkles } from "lucide-react";
import { SiReact, SiPython, SiTailwindcss, SiJavascript, SiMysql, SiCanva, SiLaravel, SiLaragon, SiPhp, SiFigma, SiClaude, SiGithub, SiFig } from "react-icons/si";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.section id="skills" 
      className="relative overflow-hidden mt-5 mb-5"
      initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
      
      <div className="mx-auto px-8 sm:px-15 lg:px-10 2xl:px-20 grid grid-cols-1 lg:grid-cols-2 lg:gap-20 gap-10 2xl:gap-40 items-center">
        <div>
          <motion.p
            className="md:text-4xl text-3xl 2xl:text-7xl font-bold leading-tight text-cyan-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Skills and
            <br />
            Digital Experiences
          </motion.p>

          {/* TECH STACK */}
          <div className="mt-10">
            <p className="text-2xl 2xl:text-4xl font-semibold text-white mb-6 2xl:mb-10">
              My tech stack
            </p>
            <motion.div
              className="grid md:grid-cols-10 lg:grid-cols-8 grid-cols-6 gap-4"
              initial="hidden" whileInView="show"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.05,
                  },
                },
              }}
              >

              <motion.div
                className="w-10 h-10 md:w-12 md:h-12 2xl:w-16 2xl:h-16 bg-white rounded-2xl shadow-md flex items-center justify-center text-3xl"
                variants={{hidden: { opacity: 0, scale: 0.8 }, show: { opacity: 1, scale: 1 },}}
              >
                <SiTailwindcss />
              </motion.div>
              <motion.div
                className="w-10 h-10 md:w-12 md:h-12 2xl:w-16 2xl:h-16 bg-white rounded-2xl shadow-md flex items-center justify-center text-3xl"
                variants={{hidden: { opacity: 0, scale: 0.8 }, show: { opacity: 1, scale: 1 },}}
              >
                <SiJavascript />
              </motion.div>
              <motion.div
                className="w-10 h-10 md:w-12 md:h-12 2xl:w-16 2xl:h-16 bg-white rounded-2xl shadow-md flex items-center justify-center text-3xl"
                variants={{hidden: { opacity: 0, scale: 0.8 }, show: { opacity: 1, scale: 1 },}}
              >
                <SiPhp />
              </motion.div>
              <motion.div
                className="w-10 h-10 md:w-12 md:h-12 2xl:w-16 2xl:h-16 bg-white rounded-2xl shadow-md flex items-center justify-center text-3xl"
                variants={{hidden: { opacity: 0, scale: 0.8 }, show: { opacity: 1, scale: 1 },}}
              >
                <SiReact />
              </motion.div>
              <motion.div
                className="w-10 h-10 md:w-12 md:h-12 2xl:w-16 2xl:h-16 bg-white rounded-2xl shadow-md flex items-center justify-center text-3xl"
                variants={{hidden: { opacity: 0, scale: 0.8 }, show: { opacity: 1, scale: 1 },}}
              >
                <SiLaravel />
              </motion.div>
              <motion.div
                className="w-10 h-10 md:w-12 md:h-12 2xl:w-16 2xl:h-16 bg-white rounded-2xl shadow-md flex items-center justify-center text-3xl"
                variants={{hidden: { opacity: 0, scale: 0.8 }, show: { opacity: 1, scale: 1 },}}
              >
                <SiPython />
              </motion.div>
              <motion.div
                className="w-10 h-10 md:w-12 md:h-12 2xl:w-16 2xl:h-16 bg-white rounded-2xl shadow-md flex items-center justify-center text-3xl"
                variants={{hidden: { opacity: 0, scale: 0.8 }, show: { opacity: 1, scale: 1 },}}
              >
                <SiLaragon />
              </motion.div>
              <motion.div
                className="w-10 h-10 md:w-12 md:h-12 2xl:w-16 2xl:h-16 bg-white rounded-2xl shadow-md flex items-center justify-center text-3xl"
                variants={{hidden: { opacity: 0, scale: 0.8 }, show: { opacity: 1, scale: 1 },}}
              >
                <SiMysql />
              </motion.div>
              <motion.div
                className="w-10 h-10 md:w-12 md:h-12 2xl:w-16 2xl:h-16 bg-white rounded-2xl shadow-md flex items-center justify-center text-3xl"
                variants={{hidden: { opacity: 0, scale: 0.8 }, show: { opacity: 1, scale: 1 },}}
              >
                <SiCanva />
              </motion.div>
              <motion.div
                className="w-10 h-10 md:w-12 md:h-12 2xl:w-16 2xl:h-16 bg-white rounded-2xl shadow-md flex items-center justify-center text-3xl"
                variants={{hidden: { opacity: 0, scale: 0.8 }, show: { opacity: 1, scale: 1 },}}
              >
                <SiFigma />
              </motion.div>
              <motion.div
                className="w-10 h-10 md:w-12 md:h-12 2xl:w-16 2xl:h-16 bg-white rounded-2xl shadow-md flex items-center justify-center text-3xl"
                variants={{hidden: { opacity: 0, scale: 0.8 }, show: { opacity: 1, scale: 1 },}}
              >
                <SiClaude />
              </motion.div>
              <motion.div
                className="w-10 h-10 md:w-12 md:h-12 2xl:w-16 2xl:h-16 bg-white rounded-2xl shadow-md flex items-center justify-center text-3xl"
                variants={{hidden: { opacity: 0, scale: 0.8 }, show: { opacity: 1, scale: 1 },}}
              >
                <SiGithub />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <motion.div className="space-y-6 2xl:space-y-8"
             initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}>
          <div className="flex items-center gap-3 2xl:gap-5">
            <div className="w-12 h-12 2xl:w-18 2xl:h-18 rounded-full bg-cyan-400 text-black flex items-center justify-center">
              <ChartBar className="w-7 h-7 2xl:w-10 2xl:h-10" />
            </div>
            <p className="md:text-2xl 2xl:text-3xl text-base font-medium text-white">
              Data Analysis & Visualization
            </p>
          </div>

          <div className="flex items-center gap-3 2xl:gap-5">
            <div className="w-12 h-12 2xl:w-18 2xl:h-18 rounded-full bg-cyan-400 text-black flex items-center justify-center">
              <BrainCircuit className="w-7 h-7 2xl:w-10 2xl:h-10" />
            </div>
            <p className="md:text-2xl 2xl:text-3xl text-base font-medium text-white">
              Machine Learning
            </p>
          </div>

          <div className="flex items-center gap-3 2xl:gap-5">
            <div className="w-12 h-12 2xl:w-18 2xl:h-18 rounded-full bg-cyan-400 text-black flex items-center justify-center">
              <FolderCode className="w-7 h-7 2xl:w-10 2xl:h-10" />
            </div>
            <p className="md:text-2xl 2xl:text-3xl text-base font-medium text-white">
              Front-End Development
            </p>
          </div>

          <div className="flex items-center gap-3 2xl:gap-5">
            <div className="w-12 h-12 2xl:w-18 2xl:h-18 rounded-full bg-cyan-400 text-black flex items-center justify-center">
              <Wallpaper className="w-7 h-7 2xl:w-10 2xl:h-10" />
            </div>
            <p className="md:text-2xl 2xl:text-3xl text-base font-medium text-white">
              UI Design
            </p>
          </div>

          <div className="flex items-center gap-3 2xl:gap-5">
            <div className="w-12 h-12 2xl:w-18 2xl:h-18 rounded-full bg-cyan-400 text-black flex items-center justify-center">
              <WandSparkles className="w-7 h-7 2xl:w-10 2xl:h-10" />
            </div>
            <p className="md:text-2xl 2xl:text-3xl text-base font-medium text-white">
              Graphic Design
            </p>
          </div>

          <div className="flex items-center gap-3 2xl:gap-5">
            <div className="w-12 h-12 2xl:w-18 2xl:h-18 rounded-full bg-cyan-400 text-black flex items-center justify-center">
              <Database className="w-7 h-7 2xl:w-10 2xl:h-10" />
            </div>
            <p className="md:text-2xl 2xl:text-3xl text-base font-medium text-white">
              Database Management
            </p>
          </div>

          <div className="flex items-center gap-3 2xl:gap-5">
            <div className="w-12 h-12 2xl:w-18 2xl:h-18 rounded-full bg-cyan-400 text-black flex items-center justify-center">
              <BookHeart className="w-7 h-7 2xl:w-10 2xl:h-10" />
            </div>
            <p className="md:text-2xl 2xl:text-3xl text-base font-medium text-white">
              Social Media Management
            </p>
          </div>

        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;