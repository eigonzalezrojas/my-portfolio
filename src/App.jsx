import React from "react";
import Navbar from "./components/Navbar";
import Presentation from "./components/Presentation";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Navbar />
      <section className="mb-0">
        <Presentation />
      </section>
      <section className="mt-0">
        <About />
      </section>
      <section className="mt-0">
        <Experience />
      </section>
      <Navigation />
    </div>
  );
}

export default App;