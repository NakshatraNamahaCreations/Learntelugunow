import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Footer Content */}
      <div className="footer-background">
        <div className="container">
          <div className="footer-content">
            <div className="row">
              {/* Learn Telugu Now Column */}
              <div className="col-lg-3 col-md-6 footer-col">
                <div className="footer-widget">
                  <div className="footer-logo-section">
                    <div className="footer-brand">
                      <img src="/bgremove_learn.png" alt="Learn Telugu Now" className="footer-logo-img" />
                     
                    </div>
                    <p className="footer-logo-description">
                      Your trusted platform for mastering the beautiful Telugu language. Join thousands of students learning Telugu through our expert-led courses, interactive lessons, and comprehensive curriculum designed for all skill levels.
                    </p>
                    <div className="social-links">
                      <a href="#" className="social-link" aria-label="Facebook">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="#" className="social-link" aria-label="Twitter">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="#" className="social-link" aria-label="LinkedIn">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                      <a href="#" className="social-link" aria-label="YouTube">
                        <i className="fab fa-youtube"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Courses Column */}
              <div className="col-lg-3 col-md-6 footer-col">
                <div className="footer-widget">
                  <h3 className="footer-title">Courses</h3>
                  <ul className="footer-links">
                    <li>
                      <a href="#">Spoken Telugu for Beginners</a>
                    </li>
                    <li>
                      <a href="#">Advanced Telugu Grammar</a>
                    </li>
                    <li>
                      <a href="#">Telugu for Kids</a>
                    </li>
                    <li>
                      <a href="#">Business Telugu</a>
                    </li>
                    <li>
                      <a href="#">Telugu Literature</a>
                    </li>
                    <li>
                      <a href="#">Telugu Writing Skills</a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Get In Touch Column */}
              <div className="col-lg-3 col-md-6 footer-col">
                <div className="footer-widget">
                  <h3 className="footer-title">Get In Touch</h3>
                  <div className="contact-info">
                    <div className="contact-item">
                      <i className="fas fa-map-marker-alt contact-icon"></i>
                      <span className="contact-text">55 Main Street, 2nd Block, New York</span>
                    </div>
                    <div className="contact-item">
                      <i className="far fa-envelope contact-icon"></i>
                      <span className="contact-text">support@gmail.com</span>
                    </div>
                    <div className="contact-item">
                      <i className="fas fa-phone contact-icon"></i>
                      <span className="contact-text">+012 (345) 67 89</span>
                    </div>
                    <div className="contact-item">
                      <i className="far fa-clock contact-icon"></i>
                      <span className="contact-text">Sunday - Friday, 08 am - 05 pm</span>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <div className="footer-bottom-wrapper">
              <p className="copyright">
                © 2025. Learn Telugu Now All rights reserved.
              </p>
             
            </div>
          </div>
        </div>
        
        {/* Scroll to Top Button */}
        <button className="scroll-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <i className="fas fa-arrow-up"></i>
        </button>
      </div>
    </footer>
  );
};

export default Footer;

