import React, { useRef, useState } from "react";
import {ArrowUpRight, ChevronLeft, ChevronRight,} from "lucide-react";

import sipindang from "../assets/img/sipindang.png";
import SelulerKu from "../assets/img/SelulerKu.png";
import Sp2d from "../assets/img/sp2d.jpeg";
import Tpp from "../assets/img/tpp.jpeg";
import Resnet from "../assets/img/resnet.png";
import Apriori from "../assets/img/apriori.png";
import XGboost from "../assets/img/XGBoost.png";
import Movie from "../assets/img/movie.png";
import Market1 from "../assets/img/market1.jpeg";

const projects = [
  {
    title: "Sistem Informasi Aset dan Barang Milik Daerah Kota Palembang",
    category: "Web Development",
    role: "Front-End",
    description:
      "Facilitates the management of regional asset data through structured and integrated asset registration and reporting processes, ensuring better accuracy and efficiency in asset administration.",
    tech: ["Laravel", "Javascript", "Bootstrap"],
    image: sipindang,
    link: "https://sipindang.palembang.go.id/login",
  },

  {
    title: "Sistem Pendukung Keputusan Pemilihan Operator Seluler Terbaik",
    category: "Web Development",
    role: "Front-End",
    description:
      "Assists users in selecting the best mobile network operator by providing fast and accurate recommendations based on a decision-support method.",
    tech: ["Laravel", "Tailwind", "Javascript"],
    image: SelulerKu,
    link: "https://selulerku-dss-swara-copras-laravel.vercel.app/",
  },

  {
    title: "Sistem Informasi Manajemen SP2D Kota Palembang",
    category: "Web Development",
    role: "Front-End",
    description:
      "Facilitates the SP2D process from submission to issuance through an integrated system that supports verification, approval, tracking, and efficient data management to ensure accuracy and transparency.",
    tech: ["Laravel", "Tailwind", "Javascript"],
    image:Sp2d,
    link: "https://spmonline.palembang.go.id/",
  },

  {
    title: "Sistem Informasi TPP Kota Palembang",
    category: "Web Development",
    role: "Front-End",
    description:
      "The TPP Information System of Palembang City is a system designed to manage Employee Additional Income (TPP) data in an integrated way, from calculation to reporting, to improve efficiency, accuracy, and transparency in TPP management",
    tech: ["Laravel", "Javascript", "Bootstrap"],
    image:Tpp,
    link: "https://sistem-informasi-tpp.vercel.app/",
  },

  {
    title: "Real vs AI-Generated Image Classification Using ResNet101",
    category: "Artificial Intelligence",
    role: "Deep Learning Engineer",
    description:
      "A ResNet101-based image classification system for distinguishing real and AI-generated (fake) images by analyzing visual characteristics to support content authenticity detection.",
    tech: ["ResNet101", "Python", "Tensorflow"],
    image:Resnet,
    link: "https://github.com/retnnoo/ResNet101_CIFAKE_Classification",
  },

  {
    title: "Recommendation System Based on Association Rules",
    category: "Artificial Intelligence",
    role: "Data  Mining Engineer",
    description:
      "A recipe recommendation system using the Apriori algorithm to find patterns among ingredients, which are used to recommend recipes based on country and available ingredients.",
    tech: ["Apriori Algorithm", "Python", "Streamlit"],
    image:Apriori,
    link: "https://github.com/retnnoo/Recommendation-System-Based-on-Association-Rules",
  },

  {
    title: "Smart Sales Channel Prediction: Multi-Class Classification with XGBoost",
    category: "Artificial Intelligence",
    role: "Data Scientist",
    description:
      "A multi-class classification system using XGBoost to predict customer shopping channel preferences (online, offline, or hybrid) based on demographic and behavioral data.",
    tech: ["XGBoost", "Python", "Scikit-Learn"],
    image:XGboost,
    link: "https://github.com/retnnoo/Sales-Channel-Classification-using-XGBoost",
  },

  {
    title: "Movie Rating Classification",
    category: "Artificial Intelligence",
    role: "Data Analyst",
    description:
      "A machine learning system for predicting movie rating categories based on metadata such as budget, popularity, runtime, genre, and release year to support movie quality analysis.",
    tech: ["Decision Tree", "Random Forest", "XGBoost", "Python", "Scikit-Learn"],
    image:Movie,
    link: "https://github.com/retnnoo/Movie-Rating-Classification-with-Machine-Learning",
  },

  {
    title: "Marketing Customer Analysis Dashboard",
    category: "Artificial Intelligence",
    role: "Data Analyst",
    description:
      "A customer data analysis dashboard to understand segmentation and purchasing behavior based on demographics, geography, and registration time using Excel pivot tables and visualizations.",
    tech: ["Microsoft Excel", "Pivot Table"],
    image:Market1,
    link: "https://github.com/retnnoo/marketing-customer-analysis-dashboard",
  },
];

const Projects = () => {
  const sliderRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = [
    "All",
    "Web Development",
    "Artificial Intelligence",
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
          <p className="md:text-4xl text-3xl 2xl:text-7xl font-bold leading-tight text-cyan-400">
            My Projects
          </p>

          <p className="mt-5 2xl:py-5 text-sm md:text-lg 2xl:text-3xl text-white max-w-2xl 2xl:max-w-4xl leading-relaxed">
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

                  overflow-hidden bg-white/5 backdrop-blur-md border border-white/20 rounded-3xl transition-all duration-300
                  hover:-translate-y-2 hover:border-cyan-400/50 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]
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
                    <span className="text-xs md:text-sm 2xl:text-lg font-bold text-cyan-400">
                      {project.role}
                    </span>

                    <span
                      className="px-2 py-1 rounded-full text-[10px] md:text-xs font-semibold bg-cyan-100 text-cyan-800">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xs md:text-base 2xl:text-xl font-bold text-white mt-2 2xl:mt-3 leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-xs md:text-sm 2xl:text-xl mt-2 2xl:mt-3 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1 2xl:gap-2 mt-3 2xl:mt-6">
                    {project.tech.map((item, i) => (
                      <span key={i} className="md:px-3 px-2 py-2 text-xs 2xl:text-sm rounded-full font-semibold bg-cyan-400 text-black">
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="md:mt-5 mt-3 mb-2 2xl:mt-7 flex items-center gap-2 text-xs md:text-sm 2xl:text-lg font-semibold text-white">
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