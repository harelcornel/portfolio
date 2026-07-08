import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <p className="hero-greeting">
            👋 Hello, I'm
          </p>

          <h1 className="hero-name">
            Harel Bon Cornel
          </h1>

          <h2 className="hero-title">
            Virtual Legal Assistant
            <br />
            & Front-End Developer
          </h2>

          <p className="hero-description">
            I build modern web applications and provide reliable
            virtual legal assistance, helping businesses streamline
            their operations through technology and organized
            workflows.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              View My Work →
            </button>

            <button className="secondary-btn">
              Download Resume
            </button>
          </div>

          <div className="scroll-down">
            ↓ Scroll Down
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;