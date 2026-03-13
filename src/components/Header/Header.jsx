import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import "./Header.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Check for the saved theme preference in localStorage
    const savedTheme = localStorage.getItem("theme");
    const isDarkMode = savedTheme === "dark" || !savedTheme;
    setIsDark(isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }

    // Handle scroll effect
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function toggleDarkMode() {
    const root = document.documentElement;
    if (root.classList.contains("dark")) {
      root.classList.remove("dark");
      root.classList.add("light");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      root.classList.remove("light");
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  }

  const isActive = (path) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <motion.header 
      className={`header ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="header-content">
        <motion.div 
          className="logo"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link to="/" className="logo-link">
            <img src="/logo.jpeg" alt="Asad Logo" className="logo-image" />
            <div className="logo-text-wrapper">
              <span className="logo-text">Asad</span><span className="logo-dot">.</span>
            </div>
          </Link>
        </motion.div>

        <motion.nav 
          className="nav-menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link 
            to="/" 
            className={`nav-link ${isActive('/') ? 'active' : ''}`}
          >
            Home
          </Link>
          <Link 
            to="/projects" 
            className={`nav-link ${isActive('/projects') ? 'active' : ''}`}
          >
            Projects
          </Link>
          {/* <Link 
            to="/achievements" 
            className={`nav-link ${isActive('/achievements') ? 'active' : ''}`}
          >
            Achievements
          </Link> */}
          <Link 
            to="/contact" 
            className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
          >
            Contact
          </Link>
        </motion.nav>

        <motion.div 
          className="header-actions"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <button 
            className="theme-toggle" 
            onClick={toggleDarkMode}
            aria-label="Toggle theme"
          >
            <svg 
              className="theme-icon"
              width="20" 
              height="20" 
              viewBox="0 0 20 20" 
              fill="none"
            >
              <path 
                d="M10 3V1M10 19V17M17 10H19M1 10H3M15.5 4.5L16.5 3.5M3.5 16.5L4.5 15.5M15.5 15.5L16.5 16.5M3.5 3.5L4.5 4.5M14 10C14 12.2091 12.2091 14 10 14C7.79086 14 6 12.2091 6 10C6 7.79086 7.79086 6 10 6C12.2091 6 14 7.79086 14 10Z" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
