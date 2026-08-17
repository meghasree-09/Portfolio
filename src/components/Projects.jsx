import { useState } from "react";

function Projects() {
  const [projects] = useState([
    {
      title: "DevConnect",
      description:
        "A developer collaboration platform where developers can showcase projects, connect with others and collaborate.",
      technologies: ["React", "Node.js", "Express", "MongoDB"]
    },
    {
      title: "TravelGo",
      description:
        "A travel booking platform designed to provide a unified experience for searching and booking travel services.",
      technologies: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "Anonymous Chat Box",
      description:
        "A real-time style anonymous communication platform designed for private conversations.",
      technologies: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "Digital Private Complaint Box",
      description:
        "A digital platform for submitting and managing complaints securely and efficiently.",
      technologies: ["React", "Express", "MongoDB"]
    }
  ]);

  return (
    <div className="section projects-section">
      <div className="section-title">
        <p>MY RECENT WORK</p>
        <h2>Featured <span>Projects</span></h2>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.title}>
            <div className="project-image">
              {project.title}
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="technology-list">
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <div className="project-buttons">
                <a href="#" className="project-link">
                  GitHub
                </a>

                <a href="#" className="project-link">
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;