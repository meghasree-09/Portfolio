function About() {
  return (
    <div className="section about-section">

      <div className="section-title">
        <p>GET TO KNOW ME</p>
        <h2>
          About <span>Me</span>
        </h2>
      </div>

      <div className="about-content">

        {/* Left side */}
        <div className="about-intro">

          <div className="about-badge">
            <span>01</span>
            ABOUT ME
          </div>

          <h3>
            Turning ideas into
            <span> digital experiences.</span>
          </h3>

          <p>
            I am a final-year Computer Science and Engineering
            student passionate about full stack development and
            building modern web applications.
          </p>

          <p>
            I enjoy solving problems, learning new technologies
            and transforming ideas into useful digital solutions.
          </p>

          <a
            href="#contact"
            className="primary-btn"
          >
            Let's Connect →
          </a>

        </div>

        {/* Right side */}
        <div className="about-side">

          <div className="about-code-card">

            <div className="code-header">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="code-content">
              <p>
                <span className="code-purple">const</span>{" "}
                developer = {"{"}
              </p>

              <p>
                &nbsp;&nbsp;name:
                <span className="code-blue">
                  "Saraswata"
                </span>,
              </p>

              <p>
                &nbsp;&nbsp;degree:
                <span className="code-blue">
                  "B.Tech CSE"
                </span>,
              </p>

              <p>
                &nbsp;&nbsp;focus:
                <span className="code-blue">
                  "Full Stack"
                </span>,
              </p>

              <p>
                &nbsp;&nbsp;passion:
                <span className="code-blue">
                  "Building"
                </span>
              </p>

              <p>{"};"}</p>
            </div>

          </div>

          <div className="about-stats">

            <div className="about-stat">
              <strong>4+</strong>
              <span>Projects</span>
            </div>

            <div className="about-stat">
              <strong>10+</strong>
              <span>Technologies</span>
            </div>

            <div className="about-stat">
              <strong>∞</strong>
              <span>Learning</span>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default About;