function Skills() {
  const skillGroups = [
    {
      title: "Frontend",
      icon: "◈",
      skills: ["HTML5", "CSS3", "JavaScript", "React.js"]
    },
    {
      title: "Backend",
      icon: "⚙",
      skills: ["Node.js", "Express.js", "REST APIs"]
    },
    {
      title: "Database",
      icon: "◆",
      skills: ["MongoDB", "MySQL"]
    },
    {
      title: "Programming",
      icon: "</>",
      skills: ["Python", "C", "JavaScript"]
    },
    {
      title: "Tools",
      icon: "⌘",
      skills: ["Git", "GitHub", "VS Code", "Docker"]
    }
  ];

  return (
    <div className="section skills-section">

      <div className="section-title">
        <p>MY TECHNICAL EXPERTISE</p>

        <h2>
          My <span>Skills</span>
        </h2>
      </div>

      <div className="skills-grid">

        {skillGroups.map((group) => (
          <div
            className="skill-group"
            key={group.title}
          >

            <div className="skill-group-header">

              <div className="skill-icon">
                {group.icon}
              </div>

              <h3>
                {group.title}
              </h3>

            </div>

            <div className="skill-list">

              {group.skills.map((skill) => (
                <div
                  className="skill-item"
                  key={skill}
                >
                  {skill}
                </div>
              ))}

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Skills;