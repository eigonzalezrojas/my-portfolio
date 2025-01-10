import React from "react";
import Navbar from "./components/Navbar";
import Presentation from "./components/Presentation";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Navbar />
      <section id ="#" className="mb-0">
        <Presentation />
      </section>
      <section id ="about" className="mt-0">
        <About />
      </section>
      <section id ="experience" className="mt-0">
        <Experience />
      </section>
      <section id ="education" className="mt-0">
        <Education />
      </section>
      <section id ="projects" className="mt-0">
        <Projects />
      </section>
      <Navigation />
    </div>
  );
}

export default App;