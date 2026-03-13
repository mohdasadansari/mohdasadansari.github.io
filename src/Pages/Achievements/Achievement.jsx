import React from "react";
import { motion } from "framer-motion";
import "./Ach.css";
import CoderOfTheMonth from "../../images/month.jpg";
import CoderOfTheSession from "../../images/session.jpg";
import jovac from "../../images/jovac.jpg";

const Achievement = () => {
  const achievements = [
    {
      id: 1,
      title: "Coder of the Month",
      position: "2nd Position",
      description: "Secured 2nd position in a DSA hackathon among 600+ participants.",
      image: CoderOfTheMonth,
      delay: 0.2
    },
    {
      id: 2,
      title: "Coder of the Session",
      position: "3rd Position",
      description: "Secured 3rd position in a DSA hackathon among 600+ participants.",
      image: CoderOfTheSession,
      delay: 0.4
    },
    {
      id: 3,
      title: "Summer Synergy Showcase (S3)",
      position: "2nd Position",
      description: "Secured 2nd position among 200+ selected teams in the Summer Internship Best Project Competition organized by GLA University in 2024",
      image: jovac,
      delay: 0.6
    }
  ];

  return (
    <motion.div 
      className="achievements-container"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1 
        className="achievements-title"
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Programming Achievements
      </motion.h1>

      <div className="achievements-grid">
        {achievements.map((achievement) => (
          <motion.div
            key={achievement.id}
            className="achievement-card glass-card tilt-card"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: achievement.delay }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="achievement-image-container">
              <img 
                src={achievement.image} 
                alt={achievement.title} 
                className="achievement-image"
              />
              <div className="achievement-overlay">
                <span className="achievement-position">{achievement.position}</span>
              </div>
            </div>
            
            <div className="achievement-content">
              <h3 className="achievement-card-title">{achievement.title}</h3>
              <p className="achievement-description">{achievement.description}</p>
            </div>

            <div className="achievement-badge">
              <svg 
                width="28" 
                height="28" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" 
                  fill="url(#achievement-gradient)"
                />
                <defs>
                  <linearGradient id="achievement-gradient" x1="2" y1="2" x2="22" y2="21">
                    <stop offset="0%" stopColor="#a855f7" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Achievement;
