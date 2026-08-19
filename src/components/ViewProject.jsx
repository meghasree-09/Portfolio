import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProject } from "../api/projectApi";

function ViewProject() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProject = async () => {
      try {
        const data = await getProject(id);
        setProject(data);
      } catch (error) {
        console.error("Error loading project:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProject();
  }, [id]);

  if (loading) {
    return <p className="loading-text">Loading project...</p>;
  }

  if (!project) {
    return <p className="loading-text">Project not found.</p>;
  }

  return (
    <div className="project-details">

      <button
        className="back-button"
        onClick={() => navigate("/")}
      >
        ← Back to Projects
      </button>

      <div className="project-details-content">

        <p className="project-label">
          FEATURED PROJECT
        </p>

        <h1>{project.title}</h1>

        {project.image && (
          <div className="project-details-image">
            <img
              src={project.image}
              alt={project.title}
            />
          </div>
        )}

        <div className="project-details-text">

          <h2>About the Project</h2>

          <p>
            {project.description}
          </p>

          <h2>Technologies</h2>

          <div className="technology-list">
            {project.technologies.map((tech) => (
              <span key={tech}>
                {tech}
              </span>
            ))}
          </div>

          <div className="project-details-buttons">

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="primary-btn"
              >
                GitHub ↗
              </a>
            )}

            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noreferrer"
                className="secondary-btn"
              >
                Live Demo ↗
              </a>
            )}

          </div>

        </div>

      </div>

    </div>
  );
}

export default ViewProject;