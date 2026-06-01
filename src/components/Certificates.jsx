import React, { useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  Award,
} from "lucide-react";

const certificates = [
  {
    title: "Belajar Machine Learning",
    issuer: "Dicoding Indonesia",
    year: "2025",
    link: "https://drive.google.com/",
  },

  {
    title: "Belajar Dasar Data Science",
    issuer: "Dicoding Indonesia",
    year: "2025",
    link: "https://drive.google.com/",
  },

  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    year: "2024",
    link: "https://drive.google.com/",
  },

  {
    title: "Python for Data Science",
    issuer: "IBM",
    year: "2024",
    link: "https://drive.google.com/",
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
    <section className="relative overflow-hidden mt-20">
      <div className="mx-auto px-8 sm:px-15 lg:px-10 2xl:px-20">

        {/* HEADER */}
        <div>
          <h2 className="md:text-5xl text-3xl 2xl:text-7xl font-bold text-cyan-400">
            Certificates
          </h2>

          <p className="mt-5 text-sm md:text-lg 2xl:text-3xl text-white max-w-2xl 2xl:max-w-4xl">
            Certifications and courses that support my skills
            in software development, data science, and
            machine learning.
          </p>
        </div>

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
              <a
                key={index}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-card snap-start group

                  min-w-[248px]
                  md:min-w-[355px]
                  2xl:min-w-[470px]

                  max-w-[248px]
                  md:max-w-[355px]
                  2xl:max-w-[470px]

                  bg-white border-2 border-cyan-400 rounded-3xl p-5 flex-shrink-0 hover:-translate-y-2 transition-allduration-500
                "
              >
                {/* ICON */}
                <div
                  className="md:w-14 md:h-14 w-12 h-12 rounded-2xl bg-cyan-400 flex items-center justify-center"
                >
                  <Award size={28} />
                </div>

                {/* CONTENT */}
                <h3
                  className="
                    mt-4
                    text-black
                    font-bold
                    text-sm
                    md:text-lg
                    2xl:text-xl
                  "
                >
                  {cert.title}
                </h3>

                <p
                  className="
                    mt-2
                    text-cyan-700
                    font-semibold
                    text-sm
                    md:text-base
                  "
                >
                  {cert.issuer}
                </p>

                <p
                  className="
                    text-gray-500
                    text-sm
                    mt-1
                  "
                >
                  Issued {cert.year}
                </p>

                <div
                  className="
                    mt-5
                    flex
                    items-center
                    gap-2
                    text-sm
                    font-semibold
                    text-black
                  "
                >
                  View Certificate

                  <ArrowUpRight
                    size={18}
                    className="
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                      transition
                    "
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;