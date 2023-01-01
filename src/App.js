import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import { useState } from 'react';
import Resume from "./components/Resume";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Resume />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
