import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Harel.</div>

      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <button className="resume-btn">Resume</button>
    </nav>
  );
}

export default Navbar;