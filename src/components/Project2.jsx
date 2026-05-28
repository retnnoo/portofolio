import React, { useRef } from "react";
import {ArrowUpRight,ChevronLeft,ChevronRight,} 
from "lucide-react";

import sipindang from "../assets/img/sipindang.png";
import SelulerKu from "../assets/img/SelulerKu.png";

const projects = [
  {
    title: "Sistem Informasi Aset dan Barang Milik Daerah Kota Palembang",
    category: "Front-End",
    description:
      "Sistem yang memuat informasi tentang aset dan barang milik Kota Palembang.",
    tech: ["Laravel", "Javascript", "Bootstrap"],
    image: sipindang,
    link: "https://r.search.yahoo.com/_ylt=AwrKDgKbMBVqUAIAyYjLQwx.;_ylu=Y29sbwNzZzMEcG9zAzIEdnRpZAMEc2VjA3Ny/RV=2/RE=1780983195/RO=10/RU=https%3a%2f%2fsipindang.palembang.go.id%2flogin/RK=2/RS=3e_fQyv1T4foIRSTOpBkZfNFAQ0-",
  },

  {
    title: "Sistem Pendukung Keputusan Pemilihan Operator Seluler Terbaik",
    category: "Front-End",
    description:
      "Membantu menentukan operator seluler terbaik dengan rekomendasi berbasis metode pengambilan keputusan yang cepat dan akurat.",
    tech: ["Laravel", "Tailwind", "Javascript"],
    image: SelulerKu,
    link: "#",
  },

  {
    title: "Portfolio Website",
    category: "Front-End",
    description:
      "Personal portfolio website built with React and Tailwind CSS.",
    tech: ["React", "Tailwind", "Vite"],
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200&auto=format&fit=crop",
    link: "#",
  },
  
];

const Projects = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -350,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: 350,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full py-14 md:py-20 px-5 md:px-12 lg:px-20 overflow-hidden">
      
      {/* HEADER */}
      <div className="max-w-7xl mx-auto mb-10">
        <h2 className="text-4xl md:text-5xl font-bold text-cyan-400">
          My Projects
        </h2>

        <p className="mt-3 text-sm md:text-lg text-white max-w-2xl">
          Some projects that I have worked on in machine learning,
          data science, and front-end development.
        </p>
      </div>

      {/* SLIDER WRAPPER */}
      <div className="relative max-w-7xl mx-auto">

        {/* LEFT BUTTON */}
        <button
          onClick={scrollLeft}
          className="
            absolute
            -left-2 md:-left-4
            top-1/2
            -translate-y-1/2
            z-20
            w-9 h-9 md:w-10 md:h-10
            rounded-full
            bg-[#07182E]
            shadow-lg
            border border-cyan-400
            text-cyan-400
            flex items-center justify-center
            hover:bg-cyan-400
            hover:text-black
            transition
          "
        >
          <ChevronLeft size={20} />
        </button>

        {/* RIGHT BUTTON */}
        <button
          onClick={scrollRight}
          className="
            absolute
            -right-2 md:-right-4
            top-1/2
            -translate-y-1/2
            z-20
            w-9 h-9 md:w-10 md:h-10
            rounded-full
            bg-[#07182E]
            shadow-lg
            border border-cyan-400
            text-cyan-400
            flex items-center justify-center
            hover:bg-cyan-400
            hover:text-black
            transition
          "
        >
          <ChevronRight size={20} />
        </button>

        {/* SLIDER */}
        <div
          ref={sliderRef}
          className=" flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide px-10 md:px-10 py-5">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group min-w-[270px] md:min-w-[330px] max-w-[270px] md:max-w-[330px]
                bg-white border-2 border-cyan-400 rounded-4xl overflow-hidden flex-shrink-0
                hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
              style={{
                boxShadow:
                  "0_20px_40px_rgba(0,255,255,0.25)",
              }}
            >
              
              {/* IMAGE */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full
                    h-40 md:h-50
                    object-cover
                    group-hover:scale-105
                    transition duration-500
                  "
                />
              </div>

              {/* CONTENT */}
              <div className="p-2 md:p-4">
                {/* CATEGORY */}
                <span className="text-sm font-semibold text-[#001f68]">
                  {project.category}
                </span>

                {/* TITLE */}
                <h3 className="text-sm font-bold text-black mt-2 leading-snug">
                  {project.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                  {project.description}
                </p>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="
                        px-3 py-1
                        md:px-4 md:py-1.5
                        text-xs
                        rounded-full
                        bg-cyan-400
                      "
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* BUTTON */}
                <div className="mt-4 flex items-center gap-2 text-sm md:text-base font-semibold text-black">
                  View Project

                  <ArrowUpRight
                    size={18}
                    className="
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                      transition
                    "
                  />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;