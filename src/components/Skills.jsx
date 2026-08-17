function Skills() {
  const skillGroups = [
    {
      title: "Frontend",
      skills: ["HTML5", "CSS3", "JavaScript", "React.js"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "REST APIs"]
    },
    {
      title: "Database",
      skills: ["MongoDB", "MySQL"]
    },
    {
      title: "Programming",
      skills: ["Python", "C", "JavaScript"]
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "VS Code", "Docker"]
    }
  ];

  return (
    <div className="section">
      <div className="section-title">
        <p>MY TECHNICAL EXPERTISE</p>
        <h2>My <span>Skills</span></h2>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div className="skill-group" key={group.title}>
            <h3>{group.title}</h3>

            <div className="skill-list">
              {group.skills.map((skill) => (
                <div className="skill-item" key={skill}>
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