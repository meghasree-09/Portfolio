function Hero() {
  return (
    <div className="hero">

      <div className="hero-content">

        <p className="hero-small">
          HELLO, I'M
        </p>

        <h1>
          Saraswata
        </h1>

        <h2>
          Full Stack <span>Developer</span>
        </h2>

        <p className="hero-description">
          I'm a final-year Computer Science and Engineering student
          passionate about building modern, responsive and scalable
          web applications.
        </p>

        <div className="hero-buttons">

          <a
            href="#projects"
            className="primary-btn"
          >
            View My Work
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="secondary-btn"
          >
            Download Resume
          </a>

        </div>

        <div className="social-links">

          <a
            href="https://github.com/YOUR_USERNAME"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/YOUR_USERNAME"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

        </div>

      </div>

      <div className="hero-image-container">

        <div className="tech-circle circle-one">
          ⚛
        </div>

        <div className="tech-circle circle-two">
          JS
        </div>

        <div className="tech-circle circle-three">
          M
        </div>

        <div className="profile-ring">

          <div className="profile-placeholder">

            <img
              src="/profile.jpg"
              alt="Saraswata"
            />

          </div>

        </div>

      </div>

    </div>
  );
}

export default Hero;