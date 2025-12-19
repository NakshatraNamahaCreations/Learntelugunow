import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
import BookDemoModal from "./BookDemoModal";

export default function Navbar() {
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [isGetStartedOpen, setIsGetStartedOpen] = useState(false);
  const dropdownRef = useRef(null);
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
              src="/bgremove_learn.png"
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
      </div>
      <BookDemoModal
        isOpen={isGetStartedOpen}
        onClose={() => setIsGetStartedOpen(false)}
        courseName=""
      />
    </nav>
  );
}
