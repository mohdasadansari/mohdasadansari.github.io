import React from "react";
import { motion } from "framer-motion";
import "./Contact.css";

const Contact = () => {
  return (
    <motion.div 
      className="contact-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div 
        className="contact-wrapper"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.h1 
          className="contact-title"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Get In Touch
        </motion.h1>

        <motion.p 
          className="contact-subtitle"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Have a project in mind or want to collaborate? Drop me a message!
        </motion.p>

        <motion.form 
          className="contact-form glass-card"
          action="https://formspree.io/f/xkgwowlv" 
          method="POST"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="form-group">
            <label htmlFor="username">Full Name</label>
            <input
              type="text"
              id="username"
              placeholder="Your Name"
              name="username"
              autoComplete="off"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="your.email@example.com"
              name="email"
              autoComplete="off"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              placeholder="What's this about?"
              name="subject"
              autoComplete="off"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              cols="30"
              rows="8"
              autoComplete="off"
              required
              placeholder="Tell me about your project or idea..."
            />
          </div>

          <motion.button 
            type="submit" 
            className="submit-button"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Send Message
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 20 20" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M19 1L9 11M19 1L13 19L9 11M19 1L1 7L9 11" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </motion.button>
        </motion.form>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
