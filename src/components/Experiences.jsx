import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import sipindang from "../assets/img/sipindang.png";
import SelulerKu from "../assets/img/SelulerKu.png";

const experiences = [
  {
    position: "Front-End Developer Intern",
    company: "Diskominfo Kota Palembang",
    period: "Jan 2025 - Apr 2025",
    description:
      "Mengembangkan dan memelihara Sistem Informasi Aset Daerah serta membantu pengembangan sistem SP2D.",
    skills: ["Laravel", "Bootstrap", "JavaScript"],
    image: sipindang,
  },

  {
    position: "Machine Learning Researcher",
    company: "Personal Research Project",
    period: "2025",
    description:
      "Melakukan penelitian klasifikasi PCOS menggunakan TabNet dan SHAP.",
    skills: ["Python", "TabNet", "SHAP"],
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
  },

  {
    position: "Staff Himpunan Mahasiswa",
    company: "Teknik Informatika",
    period: "2024",
    description:
      "Berpartisipasi dalam kegiatan organisasi dan pengelolaan acara.",
    skills: ["Leadership", "Communication", "Teamwork"],
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55e",
  },

  {
    position: "Staff Himpunan Mahasiswa",
    company: "Teknik Informatika",
    period: "2024",
    description:
      "Berpartisipasi dalam kegiatan organisasi dan pengelolaan acara.",
    skills: ["Leadership", "Communication", "Teamwork"],
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55e",
  },
];

const Experiences = () => {
  const sliderRef = useRef(null);

  const getScrollAmount = () => {
    const card =
      sliderRef.current?.querySelector(".experience-card");

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
    <section className="relative overflow-hidden mt-10">
      <div className="mx-auto px-8 sm:px-15 lg:px-10 2xl:px-20 mt-10">
        {/* HEADER */}
        <div>
          <h2 className="md:text-5xl text-3xl 2xl:text-7xl font-bold text-cyan-400">
            My Experience
          </h2>

          <p className="mt-5 text-sm md:text-lg 2xl:text-3xl text-white max-w-2xl 2xl:max-w-4xl">
            My internship, research, and organizational experiences.
          </p>
        </div>

        <div className="relative mt-8">
          {/* LEFT */}
          <button
            onClick={scrollLeft}
            className="absolute -left-3 md:-left-6 top-1/2 -translate-y-1/2 z-20 w-8 h-8 md:w-12 md:h-12
              rounded-full bg-[#07182E] border border-cyan-400 text-cyan-400 flex items-center justify-center
              shadow-[0_0_20px_rgba(34,211,238,0.35)] hover:bg-cyan-400
              hover:text-black transition"
            >
            <ChevronLeft size={24} />
          </button>

          {/* RIGHT */}
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
            className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide snap-x snap-mandatory px-14 md:px-16 md:mr-10 md:ml-10 py-3 mr-8 ml-8"
          >
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="experience-card snap-start group
                min-w-[248px]
                md:min-w-[355px]
                2xl:min-w-[470px]

                max-w-[248px]
                md:max-w-[355px]
                2xl:max-w-[470px]

                bg-white border-2 border-cyan-400 rounded-3xl overflow-hidden flex-shrink-0 hover:-translate-y-2 transition-all duration-500"
              >
                {/* IMAGE */}
                <div className="overflow-hidden">
                  <img
                    src={exp.image}
                    alt={exp.position}
                    className="w-full h-30 md:h-50 2xl:h-65 object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-4">
                  <p className="text-xs md:text-sm 2xl:text-lg font-bold text-cyan-700">
                    {exp.company}
                  </p>

                  <h3 className="text-xs md:text-base 2xl:text-xl font-bold text-black mt-2">
                    {exp.position}
                  </h3>

                  <p className="text-gray-500 text-sm 2xl:text-lg mt-1">
                    {exp.period}
                  </p>

                  <p className="text-gray-600 text-xs md:text-sm 2xl:text-xl mt-2 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-1 2xl:gap-2 mt-3">
                    {exp.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="md:px-3 px-2 py-2 text-xs 2xl:text-sm rounded-full font-semibold bg-cyan-400 text-black"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;