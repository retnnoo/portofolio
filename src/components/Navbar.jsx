import React, { useState } from "react";
import { Download, Menu, X } from "lucide-react";
import cv from "../assets/RetnoWardani-CV.pdf";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "hero" },
    { name: "Skills", href: "skills" },
    { name: "Projects", href: "project" },
    { name: "Experiences", href: "experiences" },
    { name: "Certificates", href: "certificate" },
    { name: "Contact", href: "contact" },
  ];

  const handleScroll = (id) => {
    const target = document.getElementById(id);

    if (target && window.lenis) {
      window.lenis.scrollTo(target, {
        duration: 2,
        offset: -80,
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-[#020617]/80 backdrop-blur-xl">
      
      <nav className="mx-auto flex items-center justify-between px-5 sm:px-6 lg:px-10 2xl:px-20 h-[80px] 2xl:h-[100px]">
        
        {/* LOGO */}
        <a
          href="#"
          className="text-2xl sm:text-3xl 2xl:text-5xl font-extrabold text-white"
        >
          Port<span className="text-cyan-400">folio</span>
        </a>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-10 2xl:gap-15">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleScroll(link.href)}
              className="relative text-gray-300 text-sm 2xl:text-2xl font-medium transition-all duration-300 hover:text-cyan-400 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* DOWNLOAD CV */}
        <a href={cv} download 
            className="hidden md:flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 text-sm 2xl:text-2xl font-semibold 
          text-[#020617] transition-all duration-300 hover:scale-105 hover:bg-cyan-300 shadow-lg shadow-cyan-500/20">
          Download CV <Download className="w-5 h-5 2xl:w-7 2xl:h-7" />
        </a>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white"
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[400px]" : "max-h-0"
        }`}
      >
        <div className="border-t border-white/10 bg-[#020617] px-5 py-5">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => {
                  handleScroll(link.href);
                  setIsOpen(false);
                }}
                className="text-base font-medium text-gray-300 transition-colors duration-300 hover:text-cyan-400 text-left">
                {link.name}
              </button>
            ))}

            <button href={cv} download className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-cyan-400 py-3 font-semibold text-[#020617] transition-all duration-300 hover:bg-cyan-300">
              Download CV <Download size={18} />
            </button>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;