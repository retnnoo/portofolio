import React, { useRef } from "react";
import { motion } from "framer-motion";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Intren from "../assets/img/intren-bpkad.jpeg";
import GenBI from "../assets/img/genbi.jpg";
import Dpm from "../assets/img/dpm.png";

const experiences = [
  {
    position: "Front-End Developer & Data Intern",
    company: "BPKAD Kota Palembang",
    period: "June 2024 – July 2024",
    description: [
      "Contributed to an asset management system focusing on UI and front-end development.",
      "Handled data entry and SP2D administrative checks.",
      "Verified data using physical and digital document comparison.",
      "Organized and archived documents by OPD classification.",
    ],
    image: Intren,
  },

  {
    position: "Bank Indonesia Scholarship Recipient",
    company: "Bank Indonesia – South Sumatra",
    period: "Apr 2024 – Dec 2024",
    description: [
      "Participated in community service and social programs.",
      "Created social media content for public awareness activities.",
      "Developed educational content on financial literacy and BI programs.",
      "Supported event planning and execution as committee member.",
    ],
    image: GenBI,
  },

  {
    position: "Head of Media & Information Division",
    company: "DPM KM FASILKOM UNSRI",
    period: "Jan 2024 – Dec 2024",
    description: [
      "Led and coordinated all Media & Information division activities.",
      "Managed social media strategy and organizational publications.",
      "Organized digital documentation and archiving system.",
      "Collaborated with other divisions for event documentation.",
    ],
    image: Dpm,
  },

  {
    position: "Media & Information Staff",
    company: "BEM KM FASILKOM UNSRI",
    period: "Feb 2023 – Dec 2023",
    description: [
      "Managed content publication on organizational social media.",
      "Scheduled and published content consistently.",
      "Wrote captions and content narratives.",
      "Coordinated with design team for visual preparation.",
      "Supported event documentation and organizational activities.",
    ],
    image: Intren,
  },
];

const Experiences = () => {
  const sliderRef = useRef(null);

  const getScrollAmount = () => {
    const card = sliderRef.current?.querySelector(".experience-card");
    if (!card) return 350;
    return card.offsetWidth + 16;
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
    <motion.section 
      id="experiences" className="relative overflow-hidden mt-3 md:mt-10"
      initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
      <div className="mx-auto px-8 sm:px-15 lg:px-10 2xl:px-20 mt-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className="md:text-4xl text-3xl 2xl:text-7xl font-bold text-cyan-400">
            My Experience
          </p>

          <p className="mt-5 text-sm md:text-lg 2xl:text-3xl text-white max-w-2xl 2xl:max-w-4xl">
            My internship, research, and organizational experiences.
          </p>
        </motion.div>

        <div className="relative mt-8">

          {/* LEFT BUTTON */}
          <button
            onClick={scrollLeft}
            className="absolute -left-3 md:-left-6 top-1/2 -translate-y-1/2 z-20 w-8 h-8 md:w-12 md:h-12
            rounded-full bg-[#07182E] border border-cyan-400 text-cyan-400 flex items-center justify-center
            shadow-[0_0_20px_rgba(34,211,238,0.35)] hover:bg-cyan-400 hover:text-black transition"
          >
            <ChevronLeft size={24} />
          </button>

          {/* RIGHT BUTTON */}
          <button
            onClick={scrollRight}
            className="absolute -right-3 md:-right-6 top-1/2 -translate-y-1/2 z-20 w-8 h-8 md:w-12 md:h-12
            rounded-full bg-[#07182E] border border-cyan-400 text-cyan-400 flex items-center justify-center
            shadow-[0_0_20px_rgba(34,211,238,0.35)] hover:bg-cyan-400 hover:text-black transition"
          >
            <ChevronRight size={24} />
          </button>

          {/* SLIDER */}
          <div
            ref={sliderRef}
            className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide snap-x snap-mandatory px-14 md:px-16 md:mr-10 md:ml-10 py-3 mr-8 ml-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="experience-card snap-start group flex flex-col md:flex-row
                min-w-[248px] md:min-w-[560px] lg:min-w-[540px] 2xl:min-w-[830px]
                max-w-[248px] md:max-w-[560px] lg:max-w-[540px] 2xl:min-w-[830px]
                overflow-hidden bg-white/5 backdrop-blur-md border border-white/20 rounded-3xl
                transition-all duration-300
                hover:-translate-y-2 hover:border-cyan-400/50 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]"
              >
                
                {/* IMAGE LEFT */}
                <div className="md:w-1/2 w-full h-35 md:h-auto overflow-hidden">
                  <motion.img
                    src={exp.image}
                    alt={exp.position}
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                {/* CONTENT RIGHT */}
                <div className="md:w-2/3 w-full p-4">
                  <p className="text-xs md:text-sm 2xl:text-2xl font-bold text-cyan-400">
                    {exp.company}
                  </p>

                  <h3 className="text-xs md:text-sm 2xl:text-2xl font-bold text-white mt-2">
                    {exp.position}
                  </h3>

                  <p className="text-gray-300 text-sm 2xl:text-xl mt-1">
                    {exp.period}
                  </p>

                  <ul className="text-gray-300 text-xs 2xl:text-xl mt-2 leading-relaxed list-disc pl-5 space-y-1">
                    {exp.description.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Experiences;