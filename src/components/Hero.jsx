import React from "react";
import { ArrowRight } from "lucide-react";
import ProfilePic from "../assets/img/pp.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section id="hero" className="relative overflow-hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
      <motion.div 
        className="mx-auto px-5 sm:px-6 lg:px-10 2xl:px-20 min-h-0 flex items-center py-10 lg:py-15 2xl:py-25"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}>

        <div className="grid lg:grid-cols-2 gap-10 items-center w-full">
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <motion.p 
              className="text-white uppercase tracking-[0.3em] text-sm sm:text-base 2xl:text-3xl font-medium mb-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}>
              Hello, I'm</motion.p>

            <motion.p  initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-6xl 2xl:text-7xl font-extrabold leading-tight text-cyan-400">
              Retno Wardani
            </motion.p>
            <p className="mt-5 text-xl sm:text-2xl lg:text-3xl 2xl:text-4xl font-semibold text-gray-300">Frontend Developer & Data Enthuaiast</p>
            <p className="mt-6 2xl:mt-10 text-gray-400 text-sm sm:text-base 2xl:text-3xl leading-relaxed max-w-xl lg:max-w-lg 2xl:max-w-4xl mx-auto lg:mx-0">
              Turning data into insights, building responsive web interfaces, and creating clean visual designs are my main interests. 
              I’m an Informatics Engineering graduate from Sriwijaya University focused on data, front-end development, and graphic design, 
              passionate about continuously learning and improving through real projects to deliver meaningful digital experiences.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 mt-8 2xl:gap-10 2xl:mt-10">
              <div>
                <h3 className="text-cyan-400 text-2xl 2xl:text-4xl font-bold">5+</h3>
                <p className="text-gray-500 text-sm 2xl:text-xl 2xl:py-2">Projects</p>
              </div>

              <div>
                <h3 className="text-cyan-400 text-2xl 2xl:text-4xl font-bold">3+</h3>
                <p className="text-gray-500 text-sm 2xl:text-xl 2xl:py-2">Certifications</p>
              </div>

              <div>
                <h3 className="text-cyan-400 text-2xl 2xl:text-4xl font-bold">10+</h3>
                <p className="text-gray-500 text-sm 2xl:text-xl 2xl:py-2">Technologies</p>
              </div>
            </div>

            <div className="mt-10 2xl:mt-12 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 2xl:gap-6">
              <button 
                onClick={() =>
                  window.open(
                    "https://mail.google.com/mail/?view=cm&fs=1&to=retnowardani024@gmail.com",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
                className="group w-full 2xl:text-2xl sm:w-auto px-8 py-4 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-[#020617] font-bold transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:scale-105 flex items-center justify-center gap-2">
                Hire Me
                <ArrowRight className="group-hover:translate-x-1 transition-transform w-5 h-5 2xl:w-7 2xl:h-7" />
              </button>

              <button
                onClick={() => {
                  const target = document.getElementById("project");

                  if (target && window.lenis) {
                    window.lenis.scrollTo(target, {
                      duration: 1.5,
                      offset: -80,
                    });
                  }
                }}
                className="w-full sm:w-auto 2xl:text-2xl px-8 py-4 rounded-xl border border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300"
              >
                View Projects
              </button>
            </div>
          </div>

            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full scale-110"></div>
                <div className="relative">
                  <motion.img
                    src={ProfilePic}
                    alt="Profile"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
                    transition={{
                      opacity: { duration: 0.6 },
                      scale: { duration: 0.6 },
                      y: { repeat: Infinity, duration: 4 }
                    }}
                    className="
                      w-[240px] h-[300px]
                      sm:w-[280px] sm:h-[350px]
                      md:w-[320px] md:h-[400px]
                      lg:w-[400px] lg:h-[450px]
                      2xl:w-[600px] 2xl:h-[680px]
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
      </motion.div>
    </motion.section>
  );
};

export default Hero;
