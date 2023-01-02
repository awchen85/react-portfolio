import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import { useState } from 'react';
import Resume from "./components/Resume";
import Footer from "./components/Footer";



function App() {
  const [currentPage, setCurrentPage] = useState("Work");

  const determinePage = () => {

    if (currentPage === "About") {
      return <About />
    } else if (currentPage === "Work") {
      return <Work />
    } else if (currentPage === "Resume") {
      return <Resume />
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page)
  return (
    <div>
      <Navbar
      currentPage={currentPage}
      handlePageChange={handlePageChange}
      />
    {determinePage()}
    <Footer />
    </div>
  );
}

export default App;
