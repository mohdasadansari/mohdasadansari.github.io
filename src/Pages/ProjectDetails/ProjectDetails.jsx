import React from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { getProjectBySlug } from "../../data/projectsData";
import "./ProjectDetails.css";

const ProjectDetails = () => {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <div className="project-details-container">
        <div className="project-details-card glass-card">
          <h1 className="project-details-title">Project Not Found</h1>
          <p className="project-details-text">
            The requested project details are not available.
          </p>
          <Link to="/projects" className="detail-btn detail-btn-secondary">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className="project-details-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
    >
      <div className="project-details-card glass-card">
        <img src={project.img} alt={project.topic} className="project-details-image" />

        <h1 className="project-details-title">{project.topic}</h1>
        <p className="project-details-subtitle">{project.summary}</p>

        <div className="project-detail-block">
          <h3>Why I Built It</h3>
          <p className="project-details-text">{project.whyBuilt}</p>
        </div>

        <div className="project-detail-block">
          <h3>Problem It Solves</h3>
          <p className="project-details-text">{project.problemSolved}</p>
        </div>

        <div className="project-detail-block">
          <h3>Key Features</h3>
          <ul className="project-list">
            {project.keyFeatures.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="project-detail-block">
          <h3>Impact Snapshot</h3>
          <ul className="project-list">
            {project.impactStats.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="project-detail-block">
          <h3>What I Learned</h3>
          <ul className="project-list">
            {project.learned.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="project-detail-block">
          <h3>Tech Stack</h3>
          <div className="project-tech-stack">
            {project.techStack.map((tech) => (
              <span key={tech} className="tech-badge">{tech}</span>
            ))}
          </div>
        </div>

        <div className="project-details-actions">
          <a
            href={project.link}
            target={project.link.startsWith("http") ? "_blank" : "_self"}
            rel={project.link.startsWith("http") ? "noopener noreferrer" : undefined}
            className="detail-btn detail-btn-primary"
          >
            Open Live Project
          </a>
          <Link to="/projects" className="detail-btn detail-btn-secondary">
            Back to Projects
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetails;
