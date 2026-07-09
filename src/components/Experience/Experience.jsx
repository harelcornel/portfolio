import "./Experience.css";

function Experience() {
  return (
    <section className="experience section" id="experience">
      <div className="container">

        <p className="section-tag">
          PROFESSIONAL EXPERIENCE
        </p>

        <h2 className="section-title">
          Building experience across legal support, business operations, and digital marketing.
        </h2>

        <div className="timeline">

          {/* LSH */}

          <div className="timeline-item">

            <div className="timeline-date">
              2026 – Present
            </div>

            <div className="timeline-content">

              <h3>Virtual Legal Assistant - Training </h3>

              <h4>Legal Support Help (LSH)</h4>

              <ul>
                <li>Support litigation teams by organizing case files and legal documentation.</li>
                <li>Review and organize medical records for personal injury cases.</li>
                <li>Assist with case management systems and administrative workflows.</li>
                <li>Prepare documents while maintaining confidentiality and accuracy.</li>
              </ul>

            </div>

          </div>

          {/* Susan's */}

          <div className="timeline-item">

            <div className="timeline-date">
              2019 – Present
            </div>

            <div className="timeline-content">

              <h3>Administrative & Payroll Manager</h3>

              <h4>Susan's Veranda</h4>

              <ul>
                <li>Managed payroll, employee records, attendance, and work schedules.</li>
                <li>Oversaw day-to-day administrative and restaurant operations.</li>
                <li>Designed menus, promotional materials, and social media graphics.</li>
                <li>Maintained organized business records and operational documents.</li>
              </ul>

            </div>

          </div>

          {/* DystoLabs */}

          <div className="timeline-item">

            <div className="timeline-date">
              2021 – 2024
            </div>

            <div className="timeline-content">

              <h3>Community & Marketing Coordinator</h3>

              <h4>DystoLabs</h4>

              <ul>
                <li>Managed online communities across Discord and social media platforms.</li>
                <li>Coordinated collaborations with YouTubers and high-value X (Twitter) creators.</li>
                <li>Supported community engagement, promotions, and marketing campaigns.</li>
                <li>Worked closely with project leadership to grow brand awareness.</li>
              </ul>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Experience;