import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
import BookDemoModal from "./BookDemoModal";

export default function Navbar() {
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [isGetStartedOpen, setIsGetStartedOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileCoursesOpen, setIsMobileCoursesOpen] = useState(false);
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const timeoutRef = useRef(null);
  const navigate = useNavigate();

  const courses = [
    { name: "Vedic Maths Training", path: "/vedic-maths" },
    { name: "Carnatic Music", path: "/carnatic-music" },
    { name: "Phonics Training", path: "/phonics" },
    { name: "Yoga Training", path: "/yoga" },
    { name: "Spoken Telugu for Kids and Adults", path: "/spoken-telugu" },
    { name: "Reading and Writing Telugu for Adults", path: "/reading-writing-adults" },
    { name: "Reading and Writing Telugu for Kids", path: "/reading-writing-kids" },
    { name: "Andhra Pradesh State Academic Telugu Syllabus Teaching", path: "/andhra-syllabus" },
    { name: "Telangana State Academic Telugu Syllabus Teaching", path: "/telangana-syllabus" }
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsCoursesOpen(false);
      }
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        !event.target.closest('.mobile-menu-toggle')
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsCoursesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsCoursesOpen(false);
    }, 200); // 200ms delay before closing
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* LOGO */}
        <div className="navbar-logo">
          <Link to="/">
            <img
              src="/learntelugu_logo.png"
              alt="Learn Telugu Now"
              className="logo-img"
            />
          </Link>
        </div>

        {/* MENU */}
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/about" className="navbar-link">About Us</Link>
          </li>
          {/* COURSES DROPDOWN */}
          <li
            className="navbar-item dropdown"
            ref={dropdownRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span className="navbar-link">
              Courses <i className="fas fa-chevron-down"></i>
            </span>
            {isCoursesOpen && (
              <ul className="dropdown-menu">
                {courses.map((course, index) => (
                  <li key={index}>
                    <div
                      className="dropdown-item"
                      onClick={() => {
                        setIsCoursesOpen(false);
                        navigate(course.path);
                      }}
                    >
                      {course.name}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li className="navbar-item">
            <Link to="/testimonials" className="navbar-link">Testimonials</Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact" className="navbar-link">Contact</Link>
          </li>
        </ul>

        {/* CTA */}
        <div className="navbar-cta">
          <button className="navbar-button" onClick={() => setIsGetStartedOpen(true)}>Get Started</button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <i className={isMobileMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>
      <div 
        ref={mobileMenuRef}
        className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}
      >
        <div className="mobile-menu-header">
          <div className="mobile-menu-logo">
            <img src="/logo.png" alt="Learn Telugu Now" className="mobile-logo-img" />
          </div>
          <button 
            className="mobile-menu-close"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
        <ul className="mobile-menu-list">
          <li className="mobile-menu-item">
            <Link to="/" className="mobile-menu-link" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          </li>
          <li className="mobile-menu-item">
            <Link to="/about" className="mobile-menu-link" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
          </li>
          <li className="mobile-menu-item">
            <div 
              className="mobile-menu-link mobile-menu-link-dropdown"
              onClick={() => setIsMobileCoursesOpen(!isMobileCoursesOpen)}
            >
              Courses <i className={`fas fa-chevron-${isMobileCoursesOpen ? 'up' : 'down'}`}></i>
            </div>
            {isMobileCoursesOpen && (
              <ul className="mobile-dropdown-menu">
                {courses.map((course, index) => (
                  <li key={index}>
                    <div
                      className="mobile-dropdown-item"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setIsMobileCoursesOpen(false);
                        navigate(course.path);
                      }}
                    >
                      {course.name}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li className="mobile-menu-item">
            <Link to="/testimonials" className="mobile-menu-link" onClick={() => setIsMobileMenuOpen(false)}>Testimonials</Link>
          </li>
          <li className="mobile-menu-item">
            <Link to="/contact" className="mobile-menu-link" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
          </li>
          <li className="mobile-menu-item">
            <button 
              className="mobile-menu-button" 
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsGetStartedOpen(true);
              }}
            >
              Get Started
            </button>
          </li>
        </ul>
      </div>

      <BookDemoModal
        isOpen={isGetStartedOpen}
        onClose={() => setIsGetStartedOpen(false)}
        courseName=""
      />
    </nav>
  );
}
