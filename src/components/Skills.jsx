import React from "react";
import { BookHeart, Brain, BrainCircuit, ChartBar, Database, FolderCode, Laptop, Wallpaper, WandSparkles } from "lucide-react";
import { SiReact, SiPython, SiTailwindcss, SiJavascript, SiMysql, SiCanva, SiLaravel, SiLaragon, SiPhp, SiFigma, SiClaude, SiGithub } from "react-icons/si";

const Skills = () => {
  return (
    <section className="relative overflow-hidden mt-5 mb-5">
      <div className="mx-auto px-8 sm:px-15 lg:px-10 2xl:px-20 grid grid-cols-1 lg:grid-cols-2 lg:gap-20 gap-10 2xl:gap-40 items-center">
        <div>
          <h2 className="md:text-4xl text-3xl 2xl:text-7xl font-bold leading-tight text-cyan-400">
            Skills and
            <br/>
            Digital Experiences
          </h2>

          {/* TECH STACK */}
          <div className="mt-10">
            <h3 className="text-2xl 2xl:text-4xl font-semibold text-white mb-6 2xl:mb-10">
              My tech stack
            </h3>
            <div className="grid md:grid-cols-10 lg:grid-cols-8  grid-cols-6 gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 2xl:w-16 2xl:h-16 2xl:text-5xl bg-white rounded-2xl shadow-md flex items-center justify-center text-3xl">
                <SiTailwindcss />
              </div>
              <div className="w-10 h-10 md:w-12 md:h-12 2xl:w-16 2xl:h-16 2xl:text-5xl bg-white rounded-2xl shadow-md flex items-center justify-center text-3xl">
                <SiJavascript/>
              </div>
              <div className="w-10 h-10 md:w-12 md:h-12  2xl:w-16 2xl:h-16 2xl:text-5xl bg-white rounded-2xl shadow-md flex items-center justify-center text-3xl">
                <SiPhp />
              </div>
              <div className="w-10 h-10 md:w-12 md:h-12  2xl:w-16 2xl:h-16 2xl:text-5xl bg-white rounded-2xl shadow-md flex items-center justify-center text-3xl">
                <SiReact />
              </div>
              <div className="w-10 h-10 md:w-12 md:h-12  2xl:w-16 2xl:h-16 2xl:text-5xl bg-white rounded-2xl shadow-md flex items-center justify-center text-3xl">
                <SiLaravel />
              </div>
              <div className="w-10 h-10 md:w-12 md:h-12  2xl:w-16 2xl:h-16 2xl:text-5xl bg-white rounded-2xl shadow-md flex items-center justify-center text-3xl">
                <SiPython />
              </div>
              <div className="w-10 h-10 md:w-12 md:h-12  2xl:w-16 2xl:h-16 2xl:text-5xl bg-white rounded-2xl shadow-md flex items-center justify-center text-3xl">
                <SiLaragon />
              </div>
              <div className="w-10 h-10 md:w-12 md:h-12  2xl:w-16 2xl:h-16 2xl:text-5xl bg-white rounded-2xl shadow-md flex items-center justify-center text-3xl">
                <SiMysql />
              </div>
              <div className="w-10 h-10 md:w-12 md:h-12  2xl:w-16 2xl:h-16 2xl:text-5xl bg-white rounded-2xl shadow-md flex items-center justify-center text-3xl">
                <SiCanva />
              </div>
              <div className="w-10 h-10 md:w-12 md:h-12  2xl:w-16 2xl:h-16 2xl:text-5xl bg-white rounded-2xl shadow-md flex items-center justify-center text-3xl">
                <SiFigma />
              </div>
              <div className="w-10 h-10 md:w-12 md:h-12  2xl:w-16 2xl:h-16 2xl:text-5xl bg-white rounded-2xl shadow-md flex items-center justify-center text-3xl">
                <SiClaude />
              </div>
              <div className="w-10 h-10 md:w-12 md:h-12  2xl:w-16 2xl:h-16 2xl:text-5xl bg-white rounded-2xl shadow-md flex items-center justify-center text-3xl">
                <SiGithub />
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6 2xl:space-y-8">
          <div className="flex items-center gap-3 2xl:gap-5">
            <div className="w-12 h-12 2xl:w-18 2xl:h-18 rounded-full bg-cyan-400 text-black flex items-center justify-center">
              <ChartBar className="w-7 h-7 2xl:w-10 2xl:h-10" />
            </div>
            <h3 className="md:text-2xl 2xl:text-3xl text-base font-medium text-white">
              Data Analysis & Visualization
            </h3>
          </div>

          <div className="flex items-center gap-3 2xl:gap-5">
            <div className="w-12 h-12 2xl:w-18 2xl:h-18 rounded-full bg-cyan-400 text-black flex items-center justify-center">
              <BrainCircuit className="w-7 h-7 2xl:w-10 2xl:h-10" />
            </div>
            <h3 className="md:text-2xl 2xl:text-3xl text-base font-medium text-white">
              Machine Learning
            </h3>
          </div>

          <div className="flex items-center gap-3 2xl:gap-5">
            <div className="w-12 h-12 2xl:w-18 2xl:h-18 rounded-full bg-cyan-400 text-black flex items-center justify-center">
              <FolderCode className="w-7 h-7 2xl:w-10 2xl:h-10" />
            </div>
            <h3 className="md:text-2xl 2xl:text-3xl text-base font-medium text-white">
              Front-End Development
            </h3>
          </div>

          <div className="flex items-center gap-3 2xl:gap-5">
            <div className="w-12 h-12 2xl:w-18 2xl:h-18 rounded-full bg-cyan-400 text-black flex items-center justify-center">
              <Wallpaper className="w-7 h-7 2xl:w-10 2xl:h-10" />
            </div>
            <h3 className="md:text-2xl 2xl:text-3xl text-base font-medium text-white">
              UI Design
            </h3>
          </div>

          <div className="flex items-center gap-3 2xl:gap-5">
            <div className="w-12 h-12 2xl:w-18 2xl:h-18 rounded-full bg-cyan-400 text-black flex items-center justify-center">
              <WandSparkles className="w-7 h-7 2xl:w-10 2xl:h-10" />
            </div>
            <h3 className="md:text-2xl 2xl:text-3xl text-base font-medium text-white">
              Graphic Design
            </h3>
          </div>

          <div className="flex items-center gap-3 2xl:gap-5">
            <div className="w-12 h-12 2xl:w-18 2xl:h-18 rounded-full bg-cyan-400 text-black flex items-center justify-center">
              <Database className="w-7 h-7 2xl:w-10 2xl:h-10" />
            </div>
            <h3 className="md:text-2xl 2xl:text-3xl text-base font-medium text-white">
              Database Management
            </h3>
          </div>

          <div className="flex items-center gap-3 2xl:gap-5">
            <div className="w-12 h-12 2xl:w-18 2xl:h-18 rounded-full bg-cyan-400 text-black flex items-center justify-center">
              <BookHeart className="w-7 h-7 2xl:w-10 2xl:h-10" />
            </div>
            <h3 className="md:text-2xl 2xl:text-3xl text-base font-medium text-white">
              Social Media Management
            </h3>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Skills;