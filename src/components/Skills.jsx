import React from "react";
import { BookHeart, Brain, BrainCircuit, ChartBar, Database, FolderCode, Laptop, Wallpaper, WandSparkles } from "lucide-react";
import { SiReact, SiPython, SiTailwindcss, SiJavascript, SiMysql, SiCanva, SiLaravel, SiLaragon, SiPhp, SiFigma, SiClaude, SiGithub } from "react-icons/si";

const Skills = () => {
  return (
    <section className="w-full lg:py-10 py-8 px-5 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-20 gap-10 items-center">
        <div>
          <h2 className="md:text-5xl text-4xl font-bold leading-tight text-cyan-400">
            Skills and
            <br/>
            Digital Experiences
          </h2>

          {/* TECH STACK */}
          <div className="mt-10">
            <h3 className="text-2xl font-semibold text-white mb-6">
              My tech stack
            </h3>
            <div className="grid lg:grid-cols-8 grid-cols-6 gap-4">
              <div className="w-12 h-12 bg-white rounded-2xl shadow-md flex items-center justify-center text-3xl">
                <SiTailwindcss />
              </div>
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white rounded-2xl shadow-md flex items-center justify-center text-3xl">
                <SiJavascript/>
              </div>
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white rounded-2xl shadow-md flex items-center justify-center text-3xl">
                <SiPhp />
              </div>
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white rounded-2xl shadow-md flex items-center justify-center text-3xl">
                <SiReact />
              </div>
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white rounded-2xl shadow-md flex items-center justify-center text-3xl">
                <SiLaravel />
              </div>
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white rounded-2xl shadow-md flex items-center justify-center text-3xl">
                <SiPython />
              </div>
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white rounded-2xl shadow-md flex items-center justify-center text-3xl">
                <SiLaragon />
              </div>
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white rounded-2xl shadow-md flex items-center justify-center text-3xl">
                <SiMysql />
              </div>
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white rounded-2xl shadow-md flex items-center justify-center text-3xl">
                <SiCanva />
              </div>
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white rounded-2xl shadow-md flex items-center justify-center text-3xl">
                <SiFigma />
              </div>
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white rounded-2xl shadow-md flex items-center justify-center text-3xl">
                <SiClaude />
              </div>
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white rounded-2xl shadow-md flex items-center justify-center text-3xl">
                <SiGithub />
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-cyan-400 text-black flex items-center justify-center">
              <ChartBar size={24} />
            </div>
            <h3 className="md:text-2xl text-base font-medium text-white">
              Data Analysis & Visualization
            </h3>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-cyan-400 text-black flex items-center justify-center">
              <BrainCircuit size={24} />
            </div>
            <h3 className="md:text-2xl text-base font-medium text-white">
              Machine Learning
            </h3>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-cyan-400 text-black flex items-center justify-center">
              <FolderCode size={24} />
            </div>
            <h3 className="md:text-2xl text-base font-medium text-white">
              Front-End Development
            </h3>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-cyan-400 text-black flex items-center justify-center">
              <Wallpaper size={24} />
            </div>
            <h3 className="md:text-2xl text-base font-medium text-white">
              UI Design
            </h3>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-cyan-400 text-black flex items-center justify-center">
              <WandSparkles size={24} />
            </div>
            <h3 className="md:text-2xl text-base font-medium text-white">
              Graphic Design
            </h3>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-cyan-400 text-black flex items-center justify-center">
              <Database size={24} />
            </div>
            <h3 className="md:text-2xl text-base font-medium text-white">
              Database Management
            </h3>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-cyan-400 text-black flex items-center justify-center">
              <BookHeart size={24} />
            </div>
            <h3 className="md:text-2xl text-base font-medium text-white">
              Social Media Management
            </h3>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Skills;