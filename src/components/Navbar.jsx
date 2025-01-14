import React, { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed w-full z-20 top-0 start-0 border-b border-gray-200" style={{ backgroundColor: "rgb(31, 41, 55)" }}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">        
        <a href="#" className="hidden sm:flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-xl sm:text-2xl font-semibold whitespace-nowrap text-white">
            Eithel González Rojas
          </span>
        </a>

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">          
          <a href="/CV-EithelGonzalez.pdf" download="CV-EithelGonzalez.pdf" className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-center">
            Download CV
          </a>
          <button onClick={toggleMenu} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-green-300" aria-controls="navbar-sticky" aria-expanded={isMenuOpen}>
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14" >
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>
        
        <div className={`${ isMenuOpen ? "block" : "hidden"} items-center justify-between w-full md:flex md:w-auto md:order-1`}id="navbar-sticky">
          <ul className="flex flex-col md:flex-row md:space-x-8 p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:border-0" style={{ backgroundColor: "rgb(31, 41, 55)" }}>
            <li>
              <a href="#" className="block py-2 px-3 text-white hover:text-green-400 md:p-0" aria-current="page" >
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="block py-2 px-3 text-white hover:text-green-400 md:p-0" >
                About
              </a>
            </li>
            <li>
              <a href="#experience" className="block py-2 px-3 text-white hover:text-green-400 md:p-0" >
                Experience
              </a>
            </li>
            <li>
              <a href="#education" className="block py-2 px-3 text-white hover:text-green-400 md:p-0" >
                Education
              </a>
            </li>
            <li>
              <a href="#projects" className="block py-2 px-3 text-white hover:text-green-400 md:p-0">
                Projects
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;