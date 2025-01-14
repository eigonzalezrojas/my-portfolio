function About() {
  return (
    <div className="dark:bg-gray-900 bg-white dark:text-white text-black flex items-center justify-center p-4 py-16">
      <div className="max-w-4xl w-full">
        <h2 className="text-3xl sm:text-4xl font-bold dark:text-green-400 text-black mb-6 text-center">
          About Me
        </h2>
        <p className="dark:text-gray-300 text-black text-sm sm:text-base leading-relaxed">
          I am a Computer Engineer with over 5 years of experience in developing technological solutions and more than 3 years as an online computer science instructor. I hold a Master's degree in Educational Informatics, which allows me to combine technical knowledge with pedagogical skills to create effective learning experiences. 
        </p>
        <p className="dark:text-gray-300 text-black text-sm sm:text-base leading-relaxed mt-4">
          Additionally, I have worked as a freelance web designer and developer, specializing in creating personalized and functional web solutions. I am committed to innovation, continuous learning, and delivering high-quality results.
        </p>      
      <div className="flex justify-center gap-8 mt-8">          
          <div className="flex flex-col items-center">
            <i className="fas fa-laptop-code text-green-500 text-6xl"></i>
            <p className="mt-4 text-lg font-semibold">Programmer</p>
          </div>          
          <div className="flex flex-col items-center">
            <i className="fas fa-chalkboard-teacher text-green-500 text-6xl"></i>
            <p className="mt-4 text-lg font-semibold">Professor</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;