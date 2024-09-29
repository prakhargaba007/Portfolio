import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import DarkMode from "./DarkMode/DarkMode/DarkMode";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <NavLink to="/">
            <h1>
              <span>PORTFOLIO</span> WEBSITE
            </h1>
          </NavLink>
        </div>
        <nav>
          <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a
                href="https://github.com/prakhargaba007"
                target="_blank"
                rel="noopener noreferrer"
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
      </div>
    </header>
  );
}

export default Header;
