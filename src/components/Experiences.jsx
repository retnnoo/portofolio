import React, { useRef, useState } from "react";
import {ArrowUpRight, ChevronLeft, ChevronRight,} from "lucide-react";

const Experiences = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto px-8 sm:px-15 lg:px-10 2xl:px-20 mt-10">

        {/* HEADER */}
        <div>
          <h2 className="md:text-5xl text-3xl 2xl:text-7xl font-bold leading-tight text-cyan-400">
            My Experiences
          </h2>
          <p className="mt-5 2xl:py-5 text-sm md:text-lg 2xl:text-3xl text-white max-w-2xl 2xl:max-w-4xl">
            Some projects that I have worked on in machine
            learning, data science, and front-end development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experiences;