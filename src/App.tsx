import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Router and Routes
import Navbar from "./landing/page/navbar";
import Hero from "./landing/page/herosection";
import LatastJob from "./landing/page/latestJob";
import JobCategory from "./landing/page/jobCategory";
import Download from "./landing/page/download";
import Contact from "./landing/page/contact";
import Footer from "./landing/page/footer";
import About from "./landing/page/About";
import Services from "./landing/page/Services";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home Route - Displays HeroSection, JobCategory, and LatestJob */}
        <Route
          path="/"
          element={
            <div className="bg-white">
              <Hero />
              <JobCategory />
              <LatastJob />
              <Download />
              <Contact />
            </div>
          }
        />

        {/* About & Services Routes - Display Only Their Own Content */}
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
