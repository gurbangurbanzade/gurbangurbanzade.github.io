"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import PropTypes from "prop-types";
import "./ProjectModal.scss";

function ProjectModal({ project, isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        ".project-modal-overlay",
        { opacity: 0 },
        { opacity: 1, duration: 0.3 }
      );
      gsap.fromTo(
        ".project-modal-content",
        { scale: 0.8, opacity: 0, y: 50 },
        { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: "back.out(1.7)" }
      );
    }
  }, [isOpen]);

  if (!isOpen || !project) return null;

  return (
    <div className="project-modal-overlay" onClick={onClose}>
      <div
        className="project-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close-btn" onClick={onClose}>
          ×
        </button>
        <div className="modal-image">
          <img src={project.image} alt={project.name} />
        </div>
        <div className="modal-info">
          <h2>{project.name}</h2>
          <p className="modal-category">{project.category}</p>
          <p className="modal-description">{project.fullDescription}</p>
          <div className="modal-tech">
            <h3>Built with:</h3>
            <div className="tech-tags">
              {project.technologies?.map((tech, idx) => (
                <span key={idx} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="modal-actions">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="modal-btn modal-btn-code"
            >
              View Code
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="modal-btn modal-btn-live"
            >
              Visit Site
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

ProjectModal.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string,
    category: PropTypes.string,
    description: PropTypes.string,
    fullDescription: PropTypes.string,
    image: PropTypes.any,
    githubUrl: PropTypes.string,
    liveUrl: PropTypes.string,
    technologies: PropTypes.arrayOf(PropTypes.string),
  }),
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ProjectModal;
