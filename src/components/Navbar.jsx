import React from "react";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <img src="/bgremove_learn.png" alt="Learn Telugu Now" className="logo-img" />
        </div>

        {/* Navigation Menu */}
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="#home" className="navbar-link">Home</a>
          </li>
          <li className="navbar-item">
            <a href="#about" className="navbar-link">Aboutus</a>
          </li>
          <li className="navbar-item">
            <a href="#courses" className="navbar-link">Courses</a>
          </li>
          <li className="navbar-item">
            <a href="#blog" className="navbar-link">Blogs</a>
          </li>
         
          <li className="navbar-item">
            <a href="#contact" className="navbar-link">Contact</a>
          </li>
        </ul>

        {/* CTA Button */}
        <div className="navbar-cta">
          <button className="navbar-button">Get Started</button>
        </div>
      </div>
    </nav>
  );
}

