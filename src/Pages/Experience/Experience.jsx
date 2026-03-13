import React from "react";
import { motion } from "framer-motion";
import "./Experience.css";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Full Stack Developer Intern",
      company: "WhatBytes",
      duration: "September 2025 - Present",
      description: "Working on building and maintaining full-stack solutions for a growing EdTech platform. I debugged critical data filtering and sorting issues across multiple fields, which significantly improved data accuracy and enhanced the experience for 300+ daily active users. Successfully integrated Razorpay payment gateway with secure webhook handling, reducing payment failures by 35%. Built a complete authentication system with OTP verification using JWT tokens and SMS gateway for 500+ new registrations. Implemented real-time bidirectional communication using Socket.io between POS system and admin dashboard, cutting support response time by 60%. Developed multiple responsive React.js screens with REST API integration and proper error handling.",
      technologies: ["TypeScript", "Django", "SQLite", "Next.js", "React", "Node.js", "MongoDB", "Express", "Socket.io", "Razorpay", "JWT", "REST APIs", "Git", "Fork"],
      delay: 0.2
    },
    // {
    //   id: 2,
    //   role: "Backend Developer Intern",
    //   company: "Startup Inc",
    //   duration: "January 2024 - May 2024",
    //   description: "Built scalable backend services and optimized database queries. Worked on microservices architecture.",
    //   technologies: ["Django", "Python", "PostgreSQL", "Docker"],
    //   delay: 0.4
    // }
  ];

  return (
    <motion.div 
      className="experience-container"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1 
        className="experience-title"
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Work Experience
      </motion.h1>

      <div className="experience-timeline">
        {experiences.map((exp) => (
          <motion.div
            key={exp.id}
            className="experience-card glass-card tilt-card"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: exp.delay }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="experience-header">
              <div className="experience-dot"></div>
              <div>
                <h3 className="experience-role">{exp.role}</h3>
                <p className="experience-company">{exp.company}</p>
                <p className="experience-duration">{exp.duration}</p>
              </div>
            </div>
            
            <p className="experience-description">{exp.description}</p>
            
            <div className="experience-technologies">
              {exp.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
