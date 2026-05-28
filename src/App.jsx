import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Project2 from "./components/Project2";

function App() {
  return (
    <div className="bg-[#020617] min-h-screen overflow-x-hidden pt-[80px]">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
