import React, { useRef, useState } from "react";
import {ArrowUpRight, ChevronLeft, ChevronRight,} from "lucide-react";

import sipindang from "../assets/img/sipindang.png";
import SelulerKu from "../assets/img/SelulerKu.png";

const projects = [
  {
    title: "Sistem Informasi Aset dan Barang Milik Daerah Kota Palembang",
    category: "Web Development",
    role: "Front-End",
    description:
      "Membantu pengelolaan data aset daerah melalui proses pendataan, inventarisasi, dan pelaporan secara terstruktur dan terintegrasi.",
    tech: ["Laravel", "Javascript", "Bootstrap"],
    image: sipindang,
    link: "https://sipindang.palembang.go.id/login",
  },

  {
    title: "Sistem Pendukung Keputusan Pemilihan Operator Seluler Terbaik",
    category: "Web Development",
    role: "Front-End",
    description:
      "Membantu menentukan operator seluler terbaik dengan rekomendasi berbasis metode pengambilan keputusan yang cepat dan akurat.",
    tech: ["Laravel", "Tailwind", "Javascript"],
    image: SelulerKu,
    link: "#",
  },

  {
    title: "Klasifikasi PCOS Menggunakan TabNet",
    category: "Machine Learning",
    role: "Data Science",
    description:
      "Model klasifikasi PCOS menggunakan TabNet dan Explainable AI.",
    tech: ["Python", "TabNet", "SHAP"],
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
    link: "#",
  },

  {
    title: "Mobile Banking UI Design",
    category: "UI/UX or Design",
    role: "UI Designer",
    description:
      "Desain antarmuka aplikasi mobile banking menggunakan Figma.",
    tech: ["Figma", "UI Design"],
    image:
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e",
    link: "#",
  },
];

const Projects = () => {
  const sliderRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = [
    "All",
    "Web Development",
    "Machine Learning",
    "UI/UX or Design",
  ];

const filteredProjects =
  activeCategory === "All"
    ? projects
    : projects.filter(
        (project) =>
          project.category === activeCategory
      );

  const getScrollAmount = () => {
    const card =
      sliderRef.current?.querySelector(".project-card");
    if (!card) return 350;
    const gap = 16;
    return card.offsetWidth + gap;
  };

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({
      left: -getScrollAmount(),
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({
      left: getScrollAmount(),
      behavior: "smooth",
    });
  };

  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto px-8 sm:px-15 lg:px-10 2xl:px-20 mt-10">

        {/* HEADER */}
        <div>
          <h2 className="md:text-4xl text-3xl 2xl:text-7xl font-bold leading-tight text-cyan-400">
            My Projects
          </h2>

          <p className="mt-5 2xl:py-5 text-sm md:text-lg 2xl:text-3xl text-white max-w-2xl 2xl:max-w-4xl">
            Some projects that I have worked on in machine
            learning, data science, and front-end development.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mt-6 md:mt-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`
                px-4 py-2
                rounded-full
                text-xs md:text-sm 2xl:text-2xl
                font-medium
                border
                transition-all
                duration-300

                ${
                  activeCategory === category
                    ? "bg-cyan-400 text-black border-cyan-400"
                    : "bg-transparent text-white border-white/30 hover:border-cyan-400"
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="relative mt-8">
          {/* LEFT BUTTON */}
          <button
            onClick={scrollLeft}
            className="absolute -left-3 md:-left-6 top-1/2 -translate-y-1/2 z-20 w-8 h-8 md:w-12 md:h-12
              rounded-full bg-[#07182E] border border-cyan-400 text-cyan-400 flex items-center justify-center
              shadow-[0_0_20px_rgba(34,211,238,0.35)] hover:bg-cyan-400
              hover:text-black transition"
          >
            <ChevronLeft size={24} />
          </button>

          {/* RIGHT BUTTON */}
          <button
            onClick={scrollRight}
            className="absolute -right-3 md:-right-6 top-1/2 -translate-y-1/2 z-20 w-8 h-8 md:w-12 md:h-12
              rounded-full bg-[#07182E] border border-cyan-400 text-cyan-400 flex items-center justify-center
              shadow-[0_0_20px_rgba(34,211,238,0.35)] hover:bg-cyan-400
              hover:text-black transition"
          >
            <ChevronRight size={24} />
          </button>

          <div
            ref={sliderRef}
            className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide snap-x snap-mandatory px-14 md:px-16 md:mr-10 md:ml-10 py-3 mr-8 ml-8">
            {filteredProjects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card snap-start group
                  min-w-[248px]
                  md:min-w-[355px]
                  2xl:min-w-[470px]

                  max-w-[248px]
                  md:max-w-[355px]
                  2xl:max-w-[470px]

                  bg-white border-2 border-cyan-400 rounded-3xl overflow-hidden flex-shrink-0 hover:-translate-y-2 transition-all duration-500
                "
              >
                {/* IMAGE */}
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-30 md:h-50 2xl:h-65 object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                {/* CONTENT */}
                <div className="2xl:p-5 p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs md:text-sm 2xl:text-lg font-bold text-cyan-700">
                      {project.role}
                    </span>

                    <span
                      className="px-2 py-1 rounded-full text-[10px] md:text-xs font-semibold bg-cyan-100 text-cyan-800">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xs md:text-base 2xl:text-xl font-bold text-black mt-2 2xl:mt-3 leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 text-xs md:text-sm 2xl:text-xl mt-2 2xl:mt-3 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1 2xl:gap-2 mt-3 2xl:mt-6">
                    {project.tech.map((item, i) => (
                      <span key={i} className="md:px-3 px-2 py-2 text-xs 2xl:text-sm rounded-full font-semibold bg-cyan-400 text-black">
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="md:mt-5 mt-3 mb-2 2xl:mt-7 flex items-center gap-2 text-xs md:text-sm 2xl:text-lg font-semibold text-black">
                    View Project
                    <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition"/>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;