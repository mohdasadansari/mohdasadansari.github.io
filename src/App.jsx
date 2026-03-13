import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import About from "./Pages/AboutMe/About";
import Projects from "./Pages/Projects/Projects";
import Platforms from "./Pages/Platforms/Platforms";
import Contact from "./Pages/Contact/Contact";
import SkillsAndExp from "./Pages/SkillsAndExp/SkillsAndExp";
import Achievement from './Pages/Achievements/Achievement';
import Experience from './Pages/Experience/Experience';
import Education from './Pages/Education/Education';
import ProjectDetails from './Pages/ProjectDetails/ProjectDetails';
import ScrollToTop from "./ScrollToTop";
import ScrollToTopButton from "./ScrollToTopButton";
import { initSessionTracking, trackVisitor } from "./utils/visitorTracker";

import "./App.css";

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    const cleanup = initSessionTracking();
    return cleanup;
  }, []);

  useEffect(() => {
    trackVisitor(location.pathname);
  }, [location.pathname]);

  return (
    <>
      <ScrollToTop /> {/* Ensures page scrolls to top on route change */}
      <div>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <About />
                <Experience />
                <Education />
                <Projects />
                <Achievement />
                <SkillsAndExp />
                <Platforms />
              </>
            }
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetails />} />
          <Route path="/platforms" element={<Platforms />} />
          <Route path="/achievements" element={<Achievement />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
        </Routes>
        <Footer />
        <ScrollToTopButton />
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
