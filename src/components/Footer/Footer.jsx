import React from 'react';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WebsiteIcon from '@mui/icons-material/Language';
import "./Footer.css";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <motion.div 
          className='footer-top'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className='footer-brand'>
            <h2 className='footer-logo'>Asad<span>.</span></h2>
            <p className='footer-tagline'>Building digital experiences</p>
          </div>
          
          <div className='footer-links'>
            <div className='footer-links-column'>
              <h3>Navigate</h3>
              <Link to='/'>Home</Link>
              <Link to='/projects'>Projects</Link>
              <Link to='/experience'>Experience</Link>
              <Link to='/education'>Education</Link>
              <Link to='/achievements'>Achievements</Link>
              <Link to='/contact'>Contact</Link>
            </div>
            
            <div className='footer-links-column'>
              <h3>Connect</h3>
              <Link to='https://www.linkedin.com/in/asad-as2/' target='_blank' rel="noopener noreferrer">
                LinkedIn
              </Link>
              <Link to='https://github.com/asad-as1' target='_blank' rel="noopener noreferrer">
                GitHub
              </Link>
              <Link to='/' target='_blank' rel="noopener noreferrer">
                Portfolio
              </Link>
            </div>
          </div>
        </motion.div>

        <div className='footer-divider'></div>

        <motion.div 
          className='footer-bottom'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className='footer-copyright'>
            &copy; 2026 Mohd Asad Ansari. All rights reserved.
          </p>
          
          <div className='footer-social'>
            <Link to='/' className='social-icon' aria-label="Website">
              <WebsiteIcon />
            </Link>
            <Link to='https://www.linkedin.com/in/asad-as2/' target='_blank' className='social-icon' aria-label="LinkedIn">
              <LinkedInIcon />
            </Link>
            <Link to='https://github.com/asad-as1' target='_blank' className='social-icon' aria-label="GitHub">
              <GitHubIcon />
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;