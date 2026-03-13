import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./Projects.css";
import { trackProjectClick } from "../../utils/visitorTracker";
import { projectsData } from "../../data/projectsData";

const Projects = () => {
  const projects = projectsData;
  const navigate = useNavigate();

  return (
    <motion.div 
      className="projects-container"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1 
        className="projects-title"
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Projects
      </motion.h1>

      <div className="projects-grid">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: project.delay }}
          >
            <motion.div
              className="project-card glass-card tilt-card"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              role="button"
              tabIndex={0}
              onClick={() => navigate(`/projects/${project.slug}`)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  navigate(`/projects/${project.slug}`);
                }
              }}
            >
              <div className="project-image-wrapper">
                <img
                  src={project.img}
                  alt={project.topic}
                  className="project-image"
                />
                <div className="project-overlay">
                  <span className="view-project">{project.summary}</span>
                </div>
              </div>

              <div className="project-info">
                <h3 className="project-name">{project.topic}</h3>

                <div className="project-tech-stack">
                  {project.techStack.map((tech, index) => (
                    <span key={index} className="tech-badge">{tech}</span>
                  ))}
                </div>

                <p className="project-achievement">{project.achievement}</p>

                <div className="project-actions">
                  <a
                    href={project.link}
                    target={project.link.startsWith("http") ? "_blank" : "_self"}
                    rel={project.link.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="project-btn project-btn-primary"
                    onClick={(event) => {
                      event.stopPropagation();
                      trackProjectClick(project.topic, project.link);
                    }}
                  >
                    Live Demo
                  </a>
                  <button
                    type="button"
                    className="project-btn project-btn-secondary"
                    onClick={(event) => {
                      event.stopPropagation();
                      navigate(`/projects/${project.slug}`);
                    }}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
