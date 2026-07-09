import "./Contact.css";

import {
  Mail,
  Globe,
  FileText,
  Briefcase,
} from "lucide-react";

function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="container">

        <p className="section-tag">
          CONTACT
        </p>

        <h2 className="section-title">
          Let's build something great together.
        </h2>

        <p className="contact-description">
          I'm currently open to opportunities in
          Virtual Assistance, Front-End Development,
          and Administrative Support. Feel free to
          reach out!
        </p>

        <div className="contact-grid">

          <a
            href="mailto:harelcornel@gmail.com"
            className="contact-card"
          >
            <Mail size={28} />

            <h3>Email</h3>

            <p>harelcornel@gmail.com</p>

          </a>

          <a
            href="https://github.com/harelcornel"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <Globe size={28} />

            <h3>GitHub</h3>

            <p>github.com/harelcornel</p>

          </a>

          <a
            href="https://www.linkedin.com/in/harelcornel/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <Briefcase size={28} />

            <h3>LinkedIn</h3>

            <p>Let's Connect</p>

          </a>

          <a
            href="/files/Harel_Cornel_Resume.pdf"
            download
            className="contact-card"
          >
            <FileText size={28} />

            <h3>Resume</h3>

            <p>Download PDF</p>

          </a>

        </div>

      </div>
    </section>
  );
}

export default Contact;