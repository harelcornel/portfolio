import "./Footer.css";

import {
  Mail,
  Globe,
  Briefcase,
} from "lucide-react";

function Footer() {
  return (
    <footer className="footer">

      <div className="container">

        <h2 className="footer-logo">
          Harel<span>.</span>
        </h2>

        <p className="footer-title">
          Virtual Legal Assistant • Front-End Developer
        </p>

        <div className="footer-links">

          <a href="mailto:harelcornel@gmail.com">
            <Mail size={18} />
            harelcornel@gmail.com
          </a>

          <a
            href="https://github.com/harelcornel"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Globe size={18} />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/harelcornel/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Briefcase size={18} />
            LinkedIn
          </a>

        </div>

        <p className="footer-copy">
          © 2026 Harel Bon Cornel. Built with React, Vite & hosted on Vercel.
        </p>

      </div>

    </footer>
  );
}

export default Footer;