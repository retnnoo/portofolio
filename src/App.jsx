import React, { useEffect } from "react";
import Lenis from "lenis";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experiences from "./components/Experiences";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2,
    });

    window.lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <div className="bg-[#020617] min-h-screen overflow-x-hidden pt-[80px]">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Experiences />
      <Certificates />
      <Contact />
    </div>
  );
}

export default App;