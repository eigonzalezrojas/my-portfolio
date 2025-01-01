import React from "react";
import Navbar from "./components/Navbar";
import Presentation from "./components/Presentation";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <Presentation />
      <Navigation />  
    </div>    
  );
}

export default App;