import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import { useState } from 'react';
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
        path="/"
        element={<About />}
      />
      <Route
        path="/work"
        element={<Work />}
      />
      <Route
        path="/contact"
        element={<Contact />}
      />
      <Route
        path="/resume"
        element={<Resume />}
      />
    </Routes>
    </div>
    </Router>
    <Footer></Footer>
    </main>
  );
}
  // const [currentPage, setCurrentPage] = useState("Work");

  // const determinePage = () => {

  //   if (currentPage === "About") {
  //     return <About />
  //   } else if (currentPage === "Work") {
  //     return <Work />
  //   } else if (currentPage === "Resume") {
  //     return <Resume />
  //   }
  //   return <Contact />;
  // };

  // const handlePageChange = (page) => setCurrentPage(page)
  // return (
  //   <div>
  //     <Router>
  //     <Navbar
  //     currentPage={currentPage}
  //     handlePageChange={handlePageChange}
  //     />
  //   {determinePage()}
  //   <Footer />
  //   </Router>
  //   </div>
  // );

export default App;
