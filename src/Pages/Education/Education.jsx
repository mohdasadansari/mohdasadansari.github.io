import React from "react";
import { motion } from "framer-motion";
import "./Education.css";

const Education = () => {
  const education = [
    {
      id: 1,
      degree: "Bachelor of Technology in Computer Science",
      institution: "GLA University",
      location: "Mathura, Uttar Pradesh",
      duration: "2022 - 2026",
    //   grade: "CGPA: 8.02/10",
      // grade: "Grade: First Class with Distinction",
      grade: "Grade: First Division with Honours",
      description: "Specializing in Full Stack Development, Data Structures & Algorithms, and Software Engineering.",
      subjects: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming (OOPS)",
        "Operating Systems",
        "SQL",
        "Computer Networks",
        "Cloud Computing",
        "Design & Analysis of Algorithms",
        "Database Management Systems",
        "Software Engineering",
        "Web Development"
      ],
      achievements: [
        "Secured 2nd position in Coder of the Month",
        "Active member of coding club",
        "Completed multiple hackathons"
      ],
      delay: 0.2
    },
    {
        id: 2,
        degree: "Higher Secondary Education (12th)",
        institution: "Theosophical Inter College",
        location: "Uttar Pradesh",
        duration: "2020 - 2022",
        grade: "Percentage: 90%",
        description: "Completed with focus on Science stream (PCM).",
        achievements: [
            "School topper in Computer Science",
            "Participated in science exhibitions"
        ],
      delay: 0.4
    },
    {
        id: 3,
        degree: "Secondary Education (10th)",
        institution: "Theosophical Inter College",
        location: "Uttar Pradesh",
        duration: "2018 - 2020",
        grade: "Percentage: 82%",
        description: "Completed with focus on Science and Mathematics.",
        achievements: [
            "Secured distinction in Mathematics and Science",
            "Active participant in school coding competitions"
        ],
      delay: 0.6
    }
  ];

  return (
    <motion.div 
      className="education-container"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1 
        className="education-title"
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Education
      </motion.h1>

      <div className="education-grid">
        {education.map((edu) => (
          <motion.div
            key={edu.id}
            className="education-card glass-card tilt-card"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: edu.delay }}
            whileHover={{ scale: 1.02 }}
          >
            {/* <div className="education-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3L1 9L12 15L23 9L12 3Z" stroke="url(#edu-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1 15L12 21L23 15" stroke="url(#edu-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <defs>
                  <linearGradient id="edu-gradient" x1="1" y1="3" x2="23" y2="21">
                    <stop offset="0%" stopColor="#a855f7" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                </defs>
              </svg>
            </div> */}

            <h3 className="education-degree">{edu.degree}</h3>
            <p className="education-institution">{edu.institution}</p>
            <p className="education-location">{edu.location}</p>
            
            <div className="education-meta">
              <span className="education-duration">{edu.duration}</span>
              {edu.degree !== "Higher Secondary Education (12th)" && (
                <span className="education-grade">{edu.grade}</span>
              )}
            </div>

            <p className="education-description">{edu.description}</p>

            {edu.subjects && (
              <div className="education-subjects">
                <h4>Relevant Coursework:</h4>
                <div className="subjects-grid">
                  {edu.subjects.map((subject, index) => (
                    <span key={index} className="subject-tag">{subject}</span>
                  ))}
                </div>
              </div>
            )}

            <div className="education-achievements">
              <h4>Key Highlights:</h4>
              <ul>
                {edu.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Education;
