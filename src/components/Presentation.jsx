function Presentation() {
  return (
    <div className="dark:bg-gray-900 bg-white dark:text-white text-black min-h-screen flex items-center justify-center p-4 mb-0">
      <div className="flex flex-col lg:flex-row items-center dark:bg-gray-800 bg-green-500 p-6 md:p-8 rounded-lg shadow-lg max-w-4xl w-full">
        <div className="lg:w-1/2 text-center lg:text-left mb-6 lg:mb-0">
          <p className="dark:text-green-400 text-white uppercase tracking-wide text-sm mb-2">
            Hello, I'm
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold dark:text-green-400 text-white mb-4">
            Eithel González Rojas!
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4">
            Full Stack Web Developer
          </h2>
          <p className="dark:text-gray-300 text-black text-sm sm:text-base mb-6">
            Web developer based in Talca, Chile. I am an adventurous person and I
            am ready for the next challenge!
          </p>
          <div className="flex flex-col items-center gap-4 text-1xl text-gray-300">
            <button className="dark:bg-green-500 bg-black text-white px-6 py-2 rounded-lg hover:dark:bg-green-600 hover:bg-white transition hover:text-black">
              Contact Me
            </button>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/eithel.gonzalezrojas" target="_blank" rel="noopener noreferrer" className="text-black dark:text-white hover:dark:text-green-400 hover:text-white transition">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://www.instagram.com/eithel_08/" target="_blank" rel="noopener noreferrer" className="text-black dark:text-white hover:dark:text-green-400 hover:text-white transition">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://x.com/Eithel_08" target="_blank" rel="noopener noreferrer" className="text-black dark:text-white hover:dark:text-green-400 hover:text-white transition">
                <i className="fab fa-twitter"></i>
              </a>
            </div>            
          </div>          
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <div className="w-44 h-44 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg bg-gray-700 p-2 flex items-center justify-center" style={{ backgroundColor: "rgb(247, 239, 228)" }}>
            <img
              src="/eithel_img.jpeg"
              alt="Eithel"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Presentation;