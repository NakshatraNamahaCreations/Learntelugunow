import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
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

  return (
    <footer className="site-footer">
      {/* Footer Content */}
      <div className="site-footer-background">
        <div className="site-footer-container">
          <div className="site-footer-content">
            <div className="site-footer-row">
              {/* Learn Telugu Now Column */}
              <div className="site-footer-col site-footer-col-about">
                <div className="site-footer-widget">
                  <div className="site-footer-logo-section">
                    <div className="site-footer-brand">
                      <img src="/bgremove_learn.png" alt="Learn Telugu Now" className="site-footer-logo-img" />
                    </div>
                    <p className="site-footer-logo-description">
                      Your trusted platform for mastering the beautiful Telugu language. Join thousands of students learning Telugu through our expert-led courses, interactive lessons, and comprehensive curriculum designed for all skill levels.
                    </p>
                    <div className="site-footer-social-links">
                      <a href="#" className="site-footer-social-link" aria-label="Facebook">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="#" className="site-footer-social-link" aria-label="Twitter">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="#" className="site-footer-social-link" aria-label="LinkedIn">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                      <a href="#" className="site-footer-social-link" aria-label="YouTube">
                        <i className="fab fa-youtube"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Links Column */}
              <div className="site-footer-col site-footer-col-quicklinks">
                <div className="site-footer-widget">
                  <h3 className="site-footer-title">Quick Links</h3>
                  <ul className="site-footer-links">
                    <li>
                      <Link to="/" className="site-footer-link">Home</Link>
                    </li>
                    <li>
                      <Link to="/about" className="site-footer-link">About Us</Link>
                    </li>
                    <li>
                      <Link to="/testimonials" className="site-footer-link">Testimonials</Link>
                    </li>
                    <li>
                      <Link to="/contact" className="site-footer-link">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Courses Column */}
              <div className="site-footer-col site-footer-col-courses">
                <div className="site-footer-widget">
                  <h3 className="site-footer-title">Courses</h3>
                  <ul className="site-footer-links">
                    {courses.map((course, index) => (
                      <li key={index}>
                        <Link to={course.path} className="site-footer-link">{course.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Get In Touch Column */}
              <div className="site-footer-col site-footer-col-contact">
                <div className="site-footer-widget">
                  <h3 className="site-footer-title">Get In Touch</h3>
                  <div className="site-footer-contact-info">
                    <div className="site-footer-contact-item">
                      <i className="fas fa-map-marker-alt site-footer-contact-icon"></i>
                      <span className="site-footer-contact-text">Flat no: 104, Ss carona apartment, Harsha layout, Kengeri Bangalore 560060</span>
                    </div>
                    <div className="site-footer-contact-item">
                      <i className="fas fa-phone site-footer-contact-icon"></i>
                      <span className="site-footer-contact-text">+91 9380060928</span>
                    </div>
                    <div className="site-footer-contact-item">
                      <i className="far fa-envelope site-footer-contact-icon"></i>
                      <span className="site-footer-contact-text">support@kicktheknack.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="site-footer-bottom">
            <div className="site-footer-bottom-wrapper">
              <p className="site-footer-copyright">
                © 2025. Learn Telugu Now All rights reserved.
              </p>
            </div>
          </div>
        </div>
        
        {/* Scroll to Top Button */}
        <button className="site-footer-scroll-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <i className="fas fa-arrow-up"></i>
        </button>
      </div>
    </footer>
  );
};

export default Footer;

