import "../../src/App.css";

function Navigation() {
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800 dark:bg-gray-900 p-2 rounded-full shadow-lg border-2 border-gray-300 dark:border-gray-700">
      <div className="flex items-center space-x-2">
        <a href="#home" className="text-gray-300 hover:text-green-400 transition hover:scale-125" aria-label="Home">
          <i className="fas fa-home text-lg"></i>
        </a>
        <a href="https://github.com/eigonzalezrojas" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-green-400 transition hover:scale-125" aria-label="GitHub">
          <i className="fab fa-github text-lg"></i>
        </a>
        <a href="https://www.linkedin.com/in/eigonzalezrojas/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-green-400 transition hover:scale-125" aria-label="LinkedIn">
          <i className="fab fa-linkedin text-lg"></i>
        </a>
        <a href="mailto:eithelgonzalezrojas@gmail.com" className="text-gray-300 hover:text-green-400 transition hover:scale-125" aria-label="Email">
          <i className="fas fa-envelope text-lg"></i>
        </a>
      </div>
    </div>
  );
}

export default Navigation;
