import { useEffect, useState } from "react";
import { getProjects } from "../api/projectApi";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await getProjects();
        setProjects(data);
      } catch (error) {
        console.error("Error loading projects:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  return (
    <div className="section projects-section">

      <div className="section-title">
        <p>MY RECENT WORK</p>

        <h2>
          Featured <span>Projects</span>
        </h2>
      </div>

      {loading ? (
        <p className="loading-text">
          Loading projects...
        </p>
      ) : projects.length === 0 ? (
        <p className="loading-text">
          No projects available.
        </p>
      ) : (
        <div className="projects-grid">

          {projects.map((project, index) => (

            <div
              className="project-card"
              key={project._id}
            >

              <div className="project-image">

                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                  />
                ) : (
                  <div className="project-placeholder">
                    {project.title}
                  </div>
                )}

              </div>

              <div className="project-content">

                <span className="project-count">
                  0{index + 1}
                </span>

                <h3>
                  {project.title}
                </h3>

                <p>
                  {project.description}
                </p>

                <div className="technology-list">

                  {project.technologies.map((tech) => (
                    <span key={tech}>
                      {tech}
                    </span>
                  ))}

                </div>

                <div className="project-buttons">

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                    >
                      GitHub ↗
                    </a>
                  )}

                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                    >
                      Live Demo ↗
                    </a>
                  )}

                </div>

              </div>

            </div>

          ))}

        </div>
      )}

    </div>
  );
}

export default Projects;