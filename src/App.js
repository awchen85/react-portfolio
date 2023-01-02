import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <main className="bg-[#0a192f] w-full h-screen">
    <Router>
    <div>
    <Navbar></Navbar>
      <Routes>
    
        <Route
        path="/react-portfolio"
        element={<About />}
      />
      <Route
        path="/react-portfolio/work"
        element={<Work />}
      />
      <Route
        path="/react-portfolio/contact"
        element={<Contact />}
      />
      <Route
        path="/react-portfolio/resume"
        element={<Resume />}
      />
    </Routes>
    </div>
    </Router>
    <Footer></Footer>
    </main>
  );
};

export default App;
