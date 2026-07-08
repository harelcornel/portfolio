import "./Services.css";

function Services() {
  return (
    <section className="services section" id="services">
      <div className="container">

        <p className="section-tag">
          WHAT I DO
        </p>

        <h2 className="section-title">
          Helping businesses through technology,
          organization, and creativity.
        </h2>

        <div className="services-grid">

          <div className="service-card">

            <span className="service-icon">
              💻
            </span>

            <h3>
              Front-End Development
            </h3>

            <p>
              I build responsive web applications,
              modern user interfaces, and interactive
              websites using React, JavaScript, HTML,
              and CSS.
            </p>

          </div>

          <div className="service-card">

            <span className="service-icon">
              ⚖️
            </span>

            <h3>
              Virtual Legal Assistance
            </h3>

            <p>
              Experienced in document organization,
              medical record management, case support,
              and administrative assistance.
            </p>

          </div>

          <div className="service-card">

            <span className="service-icon">
              🎨
            </span>

            <h3>
              Creative Design
            </h3>

            <p>
              Graphic design, branding,
              social media graphics,
              menus, and promotional
              materials.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Services;