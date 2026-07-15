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
            <div className="featured-badge">
                ⭐ Featured Project
            </div>
            <h3>Debt Pilot</h3>

            <img
              src={debtCalculator}
              alt="Debt Payoff Calculator"
              className="project-image"
            />

            <p>
              A modern debt payoff planner that compares the Avalanche and Snowball strategies with interactive charts, payoff timelines, and support for both APR and monthly interest rates.
            </p>

            <div className="project-tags">
              <span className="react">React</span>
              <span className="javascript">JavaScript</span>
              <span className="tailwind">Tailwind CSS</span>
              <span className="shadcn">shadcn/ui</span>
              <span className="vite">Vite</span>
              <span className="vercel">Vercel</span>
            </div>

            <div className="project-links">
              <a
                href="https://debt-pilot-self.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                🌐 Live Demo
              </a>

              <a
                href="https://github.com/harelcornel/debt-pilot"
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
              <span className="react">React</span>
              <span className="javascript">JavaScript</span>
              <span className="css">CSS3</span>
              <span className="responsive">Responsive Design</span>
              <span className="vercel">Vercel</span>
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
              <span className="operations">Operations</span>
              <span className="payroll">Payroll</span>
              <span className="design">Graphic Design</span>
              <span className="marketing">Marketing</span>
            </div>

          </article>

        </div>

      </div>
    </section>
  );
}

export default Projects;