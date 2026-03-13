// ScrollToTopButton.js
import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa"; // Using Font Awesome arrow icon
import "./ScrollToTopButton.css"; // Make sure to style the button

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    setIsVisible(window.scrollY > 300); // Show button after scrolling 300px
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    isVisible && (
      <button className="scroll-to-top" onClick={scrollToTop}>
        <FaArrowUp />
      </button>
    )
  );
};

export default ScrollToTopButton;
