import "./Services.css";

import {
  Laptop,
  Scale,
  Brush,
  Check,
} from "lucide-react";

function Services() {
  return (
    <section className="services section" id="skills">
      <div className="container">

        <p className="section-tag">
          CORE SKILLS
        </p>

        <h2 className="section-title">
          Skills I've developed through real-world experience.
        </h2>

        <div className="services-grid">

          {/* Front-End */}

          <div className="service-card">

            <div className="service-icon">
              <Laptop size={42} strokeWidth={2.2} />
            </div>

            <h3>Front-End Development</h3>

            <ul className="skill-list">

              <li><Check size={16}/> React</li>
              <li><Check size={16}/> JavaScript</li>
              <li><Check size={16}/> HTML5</li>
              <li><Check size={16}/> CSS3</li>
              <li><Check size={16}/> Git & GitHub</li>
              <li><Check size={16}/> Vite</li>

            </ul>

          </div>

          {/* Legal */}

          <div className="service-card">

            <div className="service-icon">
              <Scale size={42} strokeWidth={2.2} />
            </div>

            <h3>Legal Support</h3>

            <ul className="skill-list">

              <li><Check size={16}/> Medical Records</li>
              <li><Check size={16}/> Case Management</li>
              <li><Check size={16}/> Litigation Support</li>
              <li><Check size={16}/> Document Review</li>
              <li><Check size={16}/> Microsoft Office</li>
              <li><Check size={16}/> Administrative Support</li>

            </ul>

          </div>

          {/* Design */}

          <div className="service-card">

            <div className="service-icon">
              <Brush size={42} strokeWidth={2.2} />
            </div>

            <h3>Design & Business</h3>

            <ul className="skill-list">

              <li><Check size={16}/> Adobe Photoshop</li>
              <li><Check size={16}/> Canva</li>
              <li><Check size={16}/> Video Editing</li>
              <li><Check size={16}/> Payroll Management</li>
              <li><Check size={16}/> Restaurant Operations</li>
              <li><Check size={16}/> Social Media Marketing</li>

            </ul>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Services;