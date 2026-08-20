function Education() {
  return (
    <div className="section">

      <div className="section-title">
        <p>MY ACADEMIC JOURNEY</p>
        <h2>
          Education <span>& Learning</span>
        </h2>
      </div>

      <div className="timeline">

        <div className="timeline-item">
          <span className="timeline-dot"></span>

          <div>
            <span className="timeline-date">
              2023 - Present
            </span>

            <h3>
              B.Tech - Computer Science & Engineering
            </h3>

            <p>
              Vignan University
            </p>

            <small>
              Currently pursuing my Bachelor's degree with
              a focus on software development and modern
              web technologies.
            </small>
          </div>
        </div>


        <div className="timeline-item">
          <span className="timeline-dot"></span>

          <div>
            <span className="timeline-date">
              Intermediate
            </span>

            <h3>
              Intermediate Education
            </h3>

            <p>
              Completed Intermediate Education
            </p>
          </div>
        </div>


        <div className="timeline-item">
          <span className="timeline-dot"></span>

          <div>
            <span className="timeline-date">
              SSC
            </span>

            <h3>
              Secondary School Education
            </h3>

            <p>
              Completed Secondary School Education
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Education;