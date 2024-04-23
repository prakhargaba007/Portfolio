import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import Button from "./Button";
import DarkMode from "./DarkMode/DarkMode/DarkMode";
import { useState } from "react";

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <header>
      <div className="container">
        <div>
          <NavLink to="/">
            <h1>
              <span>PORTOFOLIO WEBSITE</span>
            </h1>
          </NavLink>
        </div>
        <nav>
          <ul
            aria-disabled
            className={`nav-links ${isMenuOpen ? "active" : ""}`}
          >
            <li>
              <a
                href="#home"
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                Project
              </a>
            </li>
            <li>
              <a
                href="https://github.com/prakhargaba007"
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                GitHub
              </a>
            </li>
          </ul>
          <div className="burger-menu" onClick={handleToggleMenu}>
            <span>&#9776;</span>
          </div>
        </nav>
      </div>
      <div className="login-button">
        <DarkMode />
        <Link to="/signup?mode=signup">
          <Button>Sign Up</Button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
