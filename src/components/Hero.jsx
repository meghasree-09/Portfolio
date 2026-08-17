function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <p className="hero-small">HELLO, I'M</p>

        <h1>
          Saraswata
        </h1>

        <h2>
          Full Stack <span>Developer</span>
        </h2>

        <p className="hero-description">
          I build modern, responsive and user-friendly web applications
          using modern technologies.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-btn">
            View My Work
          </a>

          <a href="#contact" className="secondary-btn">
            Contact Me
          </a>
        </div>

        <div className="social-links">
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            GitHub
          </a>

          <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>

      <div className="hero-image-container">
        <div className="tech-circle circle-one">⚛</div>
        <div className="tech-circle circle-two">JS</div>
        <div className="tech-circle circle-three">M</div>

        <div className="profile-ring">
          <div className="profile-placeholder">
            <span>Your</span>
            <strong>Photo</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;