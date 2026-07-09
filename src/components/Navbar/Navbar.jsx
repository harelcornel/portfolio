import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">

        <div className="logo">
          Harel<span>.</span>
        </div>

          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          <a
            href="/files/Harel_Cornel_Resume.pdf"
            download
            className="resume-btn"
          >
            Resume
          </a>

      </div>
    </nav>
  );
}

export default Navbar;