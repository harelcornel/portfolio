import "./Projects.css";

import debtCalculator from "../../assets/images/debt-calculator.png";
import portfolio from "../../assets/images/portfolio.png";

function Projects() {
  return (
    <section className="projects section" id="projects">
      <div className="container">

        <p className="section-tag">
          FEATURED PROJECTS
        </p>

        <h2 className="section-title">
          Projects that showcase my skills.
        </h2>

        <div className="projects-grid">

          <article className="project-card">

            <h3>Debt Payoff Calculator</h3>

            <img
              src={debtCalculator}
              alt="Debt Payoff Calculator"
              className="project-image"
            />

            <p>
              A React application that helps users calculate monthly loan payments,
              compare repayment strategies, and estimate remaining balances through
              an intuitive financial calculator.
            </p>

            <div className="project-tags">
              <span>React</span>
              <span>JavaScript</span>
              <span>Vite</span>
              <span>CSS</span>
            </div>

            <div className="project-links">
              <a
                href="https://debt-payoff-calculator-self.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                🌐 Live Demo
              </a>

              <a
                href="https://github.com/harelcornel/debt-payoff-calculator"
                target="_blank"
                rel="noopener noreferrer"
              >
                📂 GitHub
              </a>
            </div>

          </article>

          <article className="project-card">

            <h3>Portfolio Website</h3>

            <img
              src={portfolio}
              alt="Portfolio Website"
              className="project-image"
            />

            <p>
              A modern portfolio built with React that showcases my
              projects, experience, and front-end development skills.
            </p>

            <div className="project-tags">
              <span>React</span>
              <span>Responsive</span>
              <span>CSS</span>
            </div>

            <div className="project-links">
              <a href="#">🌐 Live Demo</a>
              <a href="#">📂 GitHub</a>
            </div>

          </article>

          <article className="project-card">

            <h3>Susan's Veranda Digital Operations</h3>

            <p>
              Digital assets and operational tools supporting restaurant
              management, including payroll tracking, menu design,
              employee records, and marketing materials.
            </p>

            <div className="project-tags">
              <span>Operations</span>
              <span>Design</span>
              <span>Administration</span>
            </div>

          </article>

        </div>

      </div>
    </section>
  );
}

export default Projects;