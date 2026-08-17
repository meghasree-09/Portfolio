function About() {
  return (
    <div className="section about-section">
      <div className="section-title">
        <p>GET TO KNOW ME</p>
        <h2>About <span>Me</span></h2>
      </div>

      <div className="about-content">
        <div className="about-image">
          <div className="about-photo">
            Your Photo
          </div>
        </div>

        <div className="about-text">
          <h3>I'm a passionate Full Stack Developer</h3>

          <p>
            I am a final-year Computer Science and Engineering student
            passionate about developing modern and efficient web
            applications.
          </p>

          <p>
            I enjoy learning new technologies, solving programming
            problems and transforming ideas into useful digital
            solutions.
          </p>

          <div className="about-info">
            <div>
              <strong>Name</strong>
              <span>Saraswata</span>
            </div>

            <div>
              <strong>Degree</strong>
              <span>B.Tech CSE</span>
            </div>

            <div>
              <strong>Focus</strong>
              <span>Full Stack Development</span>
            </div>

            <div>
              <strong>Location</strong>
              <span>India</span>
            </div>
          </div>

          <a href="#contact" className="primary-btn">
            Let's Connect
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;