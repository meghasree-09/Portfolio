function Education() {
  return (
    <div className="section">
      <div className="section-title">
        <p>MY ACADEMIC JOURNEY</p>
        <h2>Education</h2>
      </div>

      <div className="timeline">
        <div className="timeline-item">
          <span className="timeline-dot"></span>

          <div>
            <span className="timeline-date">2023 - Present</span>
            <h3>B.Tech - Computer Science & Engineering</h3>
            <p>Vignan University</p>
          </div>
        </div>

        <div className="timeline-item">
          <span className="timeline-dot"></span>

          <div>
            <span className="timeline-date">Previous Education</span>
            <h3>Intermediate</h3>
            <p>Completed Intermediate Education</p>
          </div>
        </div>

        <div className="timeline-item">
          <span className="timeline-dot"></span>

          <div>
            <span className="timeline-date">School Education</span>
            <h3>SSC</h3>
            <p>Completed Secondary School Education</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;