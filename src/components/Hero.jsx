import React from "react";
import { ArrowRight } from "lucide-react";
import ProfilePic from "../assets/img/pp.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute top-20 left-0 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full"></div>
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 min-h-[calc(100vh-80px)] flex items-center py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center w-full">
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm sm:text-base font-medium mb-5">Hello, I'm</p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight text-white">
              Retno<span className="block text-cyan-400">Wardani</span>
            </h1>
            <h2 className="mt-5 text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-300">Frontend Developer & Data Enthuaiast</h2>
            <p className="mt-6 text-gray-400 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
              Turning data into insights, building responsive web interfaces, and creating clean visual designs are my main interests. 
              I’m an Informatics Engineering graduate from Sriwijaya University focused on data, front-end development, and graphic design, 
              passionate about continuously learning and improving through real projects to deliver meaningful digital experiences.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button className="group w-full sm:w-auto px-8 py-4 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-[#020617] font-bold transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:scale-105 flex items-center justify-center gap-2">
                Hire Me
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto px-8 py-4 rounded-xl border border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300">
                View Projects
              </button>
            </div>
          </div>

            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full scale-110"></div>
                <div className="relative">
                  <img
                    src={ProfilePic}
                    alt="Profile"
                    className="
                      w-[260px] h-[320px]
                      sm:w-[320px] sm:h-[400px]
                      md:w-[360px] md:h-[460px]
                      lg:w-[420px] lg:h-[520px]
                      object-cover
                      drop-shadow-[0_20px_40px_rgba(0,255,255,0.25)]
                      hover:scale-105
                      transition-transform
                      duration-700
                    "
                  />
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
