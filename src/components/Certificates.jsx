import React, { useRef } from "react";
import {ChevronLeft,ChevronRight,ArrowUpRight,Award,} from "lucide-react";
import { motion } from "framer-motion";

const certificates = [
  {
    title: "Intro to Data Analytics",
    issuer: "RevoU",
    year: "2026",
    link: "https://drive.google.com/file/d/1oOGfccqWCFWP-g5nPaTFZB7SiKu3NAF7/view",
  },

  {
    title: "Data Analysis",
    issuer: "MySkill",
    year: "2026",
    link: "https://storage.googleapis.com/myskill-v2-certificates/topic-qtKMZ78xyd6TPzUQOESu/5cyl2FSxsmNQ67dJAXEh0309LyE3-3tD4fYCcToOVDF7gYp3X.pdf",
  },

  {
    title: "Data Science",
    issuer: "MySkill",
    year: "2026",
    link: "https://storage.googleapis.com/myskill-v2-certificates/topic-4TAQx7X8U6vFPkMvU9L6/5cyl2FSxsmNQ67dJAXEh0309LyE3-jStnZJP0eGuldZeBWFpS.pdf",
  },

  {
    title: "Content Creator (Digital Marketing)",
    issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
    year: "2025",
    link: "https://drive.google.com/drive/folders/1gZHnaY7rDYz0m4VHS_mbZJnhsWPdWl4T",
  },
  {
    title: "Computer and Network Engineering",
    issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
    year: "2022",
    link: "http://drive.google.com/drive/folders/1gCa3-qY5IV0L4Qk9CJbvCmBnjTNlQ89N",
  },
];

const Certificates = () => {
  const sliderRef = useRef(null);

  const getScrollAmount = () => {
    const card =
      sliderRef.current?.querySelector(".certificate-card");
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
      id="certificate" className="relative overflow-hidden mt-20"
      initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
      <div className="mx-auto px-8 sm:px-15 lg:px-10 2xl:px-20">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}>
          <p className="md:text-5xl text-3xl 2xl:text-7xl font-bold text-cyan-400">Certificates</p>
          <p className="mt-5 2xl:py-5 text-sm md:text-lg 2xl:text-3xl text-white max-w-2xl 2xl:max-w-4xl leading-relaxed">
            Certifications and courses that support my skills
            in software development, data science, and
            machine learning.
          </p>
        </motion.div>

        <div className="relative mt-8">
          {/* LEFT BUTTON */}
          <button
            onClick={scrollLeft}
            className="
              absolute
              -left-3 md:-left-6
              top-1/2
              -translate-y-1/2
              z-20
              w-8 h-8
              md:w-12 md:h-12
              rounded-full
              bg-[#07182E]
              border border-cyan-400
              text-cyan-400
              flex items-center justify-center
              shadow-[0_0_20px_rgba(34,211,238,0.35)]
              hover:bg-cyan-400
              hover:text-black
              transition
            "
          >
            <ChevronLeft size={24} />
          </button>

          {/* RIGHT BUTTON */}
          <button
            onClick={scrollRight}
            className="
              absolute
              -right-3 md:-right-6
              top-1/2
              -translate-y-1/2
              z-20
              w-8 h-8
              md:w-12 md:h-12
              rounded-full
              bg-[#07182E]
              border border-cyan-400
              text-cyan-400
              flex items-center justify-center
              shadow-[0_0_20px_rgba(34,211,238,0.35)]
              hover:bg-cyan-400
              hover:text-black
              transition
            "
          >
            <ChevronRight size={24} />
          </button>

          {/* SLIDER */}
          <div
            ref={sliderRef}
            className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide snap-x snap-mandatory px-14 md:px-16 md:mr-10 md:ml-10 py-3 mr-8 ml-8"
          >
            {certificates.map((cert, index) => (
              <motion.a
                key={index}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="certificate-card snap-start group
                  min-w-[248px]
                  md:min-w-[355px]
                  2xl:min-w-[530px]

                  max-w-[248px]
                  md:max-w-[355px]
                  2xl:max-w-[530px]

                  overflow-hidden bg-white/5 backdrop-blur-md border p-5 2xl:p-10 border-white/20 rounded-3xl transition-all duration-300
                  hover:-translate-y-2 hover:border-cyan-400/50 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]
                "
              >
                <div className="md:w-12 md:h-12 2xl:w-2/10 2xl:h-2/9  w-10 h-10 rounded-2xl flex items-center justify-center
                                 text-black transition-all duration-300 bg-cyan-400 border border-cyan-400/20 group-hover:scale-110">
                  <Award className="2xl:w-13 xl:h-13 md:w-9 md:h-9 w-7 h-7" />
                </div>

                {/* CONTENT */}
                <p className="mt-2 2xl:mt-4 text-white font-bold text-sm md:text-lg 2xl:text-4xl">{cert.title}</p>
                <p className="mt-2 2xl:mt-4 text-cyan-400 font-semibold text-sm md:text-base 2xl:text-3xl">{cert.issuer}</p>
                <p className="text-gray-300 text-sm 2xl:text-2xl 2xl:mt-1">Issued {cert.year}</p>
                <div className="mt-5 flex items-center gap-2 text-sm 2xl:text-2xl font-semibold text-white">
                  View Certificate
                  <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition 2xl:w-7 xl:h-7 w-5 h-5"/>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Certificates;