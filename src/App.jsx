import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experiences from "./components/Experiences";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";

function App() {
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
