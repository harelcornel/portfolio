import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="container hero-container">

        <div className="hero-badge">
          AVAILABLE FOR OPPORTUNITIES
        </div>

        <h1 className="hero-title">
          Harel Bon Cornel
        </h1>

        <h2 className="hero-subtitle">
          Virtual Legal Assistant
          <br />
          & Front-End Developer
        </h2>

        <p className="hero-description">
          I help law firms and businesses stay organized through legal
          support while building responsive web applications using modern
          front-end technologies.
        </p>

        <div className="hero-buttons">

          <a href="#projects" className="primary-btn">
            View Projects
          </a>

          <a
            href="/files/Harel_Cornel_Resume.pdf"
            download
            className="secondary-btn"
          >
            Download Resume
          </a>

        </div>

      </div>

    </section>
  );
}

export default Hero;