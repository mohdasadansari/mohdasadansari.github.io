import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./about.css";

const About = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [isDark, setIsDark] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const textArray = ["Asad Ansari", "Full Stack Developer", "Problem Solver"];
  const period = 2000;

  const textArrayIndexRef = useRef(0);
  const fullTextRef = useRef(textArray[0]);

  useEffect(() => {
    // Check dark/light mode
    const savedTheme = localStorage.getItem("theme");
    const isDarkMode = savedTheme === "dark" || !savedTheme;
    setIsDark(isDarkMode);

    // Detect mobile view
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Listen for theme changes via MutationObserver
    const observer = new MutationObserver(() => {
      const newTheme = localStorage.getItem("theme");
      const isDarkMode = newTheme === "dark" || !newTheme;
      setIsDark(isDarkMode);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    window.addEventListener("resize", handleResize);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleTyping = () => {
      const currentIndex = textArrayIndexRef.current;
      const fullText = textArray[currentIndex % textArray.length];
      fullTextRef.current = fullText;

      if (isDeleting) {
        setText((prevText) => prevText.substring(0, prevText.length - 1));
      } else {
        setText((prevText) => fullText.substring(0, prevText.length + 1));
      }

      let nextTypingSpeed = isDeleting ? 80 : 150;
      setTypingSpeed(nextTypingSpeed);

      if (!isDeleting && text === fullText) {
        setTimeout(() => {
          setIsDeleting(true);
        }, period);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        textArrayIndexRef.current = (currentIndex + 1) % textArray.length;
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, typingSpeed, textArray, period]);

  return (
    <motion.div
      className="hero-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="hero-bento-card glass-card tilt-card"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="hero-greeting">Hi, I'm</h2>
            <h1 className="hero-name">
              <span className="typed-text">{text}</span>
              <span className="cursor">|</span>
            </h1>

            <div className="hero-tags">
              <span className="tag tag-django">Software Engineering</span>
              <span className="tag tag-mern">MERN Stack</span>
              <span className="tag tag-fullstack">
                Data Structures and Algorithms
              </span>
            </div>

            <p className="hero-description">
              I'm a <span className="highlight">Computer Science Engineer</span>{" "}
              from the Batch of{" "}
              <span className="highlight">2026 at GLA University</span>. During
              my tenure as a Full-Stack Developer Intern at WhatBytes, I
              contributed to multiple production-level projects, handling both
              frontend and backend responsibilities. My work primarily focused
              on the backend, where I specialized in hunting down architectural
              bugs and resolving critical errors to ensure system stability.
              With 7+ months of hands-on experience, I am familiar with
              TypeScript, Next.js, and Django, focusing on writing clean,
              scalable, and efficient code.
            </p>

            <div className="hero-stats">
              <div className="stat-item">
                <h3>1000+</h3>
                <p>DSA Problems</p>
              </div>
              <div className="stat-item">
                <h3>25+</h3>
                <p>Projects</p>
              </div>
              <div className="stat-item">
                <h3>3x</h3>
                <p>Hackathon Winner</p>
              </div>
            </div>

            <motion.a
              href="https://drive.google.com/file/d/1CK_vA5_byYliRt4s9vZM-uXD_HeVCAJX/view?usp=sharing"
              download="Asad_Resume.pdf"
              className="download-resume-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download Resume
            </motion.a>
          </motion.div>

          <motion.div
            className="hero-3d-avatar"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div
              className="spline-container pointer-events-none"
              style={{
                width: "100%",
                height: "500px",
                position: "relative",
                borderRadius: "1rem",
                overflow: "hidden",
                touchAction: "none",
              }}
            >
              <iframe
                src={
                  !isMobile && isDark
                    ? "https://my.spline.design/batmanbeyond-ZFx7u6SnA395VyBHbsSY0e1x/"
                    : "https://my.spline.design/genkubgreetingrobot-OfnvjwAO3bZ3qU92J6OZMJc6/"
                }
                frameBorder="0"
                width="100%"
                height="100%"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "calc(100% + 60px)",
                  pointerEvents: "auto",
                  background: "transparent",
                }}
                title="3D Avatar"
                allow="accelerometer; ambient-light-sensor; autoplay; camera; encrypted-media; fullscreen; geolocation; gyroscope; magnetometer; microphone; midi; payment; picture-in-picture; usb; vr"
                key={`${isMobile}-${isDark}`}
              />
              {(isMobile || !isDark) && (
                <motion.div
                  style={{
                    position: "absolute",
                    bottom: "5px",
                    right: "20px",
                    textAlign: "center",
                    pointerEvents: "none",
                    zIndex: 10,
                  }}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  {/* <p
                    style={{
                      fontSize: "0.85rem",
                      fontWeight: "600",
                      letterSpacing: "0.5px",
                      color: "#fff",
                      margin: 0,
                      padding: "8px 16px",
                      borderRadius: "20px",
                      background: "linear-gradient(135deg, #8b5cf6, #ec4899)",
                      boxShadow: "0 8px 20px rgba(139, 92, 246, 0.4), 0 0 20px rgba(236, 72, 153, 0.3)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                    }}
                  >
                    Play with me
                  </p> */}
                </motion.div>
              )}            
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Decorative floating elements */}
      <div className="floating-elements">
        <motion.div
          className="float-circle circle-1"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="float-circle circle-2"
          animate={{
            y: [0, 20, 0],
            x: [0, -15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="float-circle circle-3"
          animate={{
            y: [0, -15, 0],
            x: [0, -10, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </motion.div>
  );
};

export default About;
