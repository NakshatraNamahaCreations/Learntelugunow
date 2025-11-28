import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Newsletter Subscription Box */}
      <div className="newsletter-section">
        <div className="container">
          <div className="newsletter-box">
            <div className="newsletter-icons">
              <i className="fas fa-graduation-cap"></i>
              <i className="fas fa-book"></i>
              <i className="fas fa-microscope"></i>
              <i className="fas fa-pencil-alt"></i>
              <i className="fas fa-book-open"></i>
              <i className="fas fa-flask"></i>
            </div>
            <div className="newsletter-content">
              <h2 className="newsletter-title">Join Our Free Demo Class</h2>
              <p className="newsletter-description">
              Sign up for a free demo class and preview our interactive teaching approach. Start your educational journey with us today!
              </p>
            </div>
            <div className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email here"
                className="newsletter-input"
              />
              <button className="newsletter-button">Get Started</button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="footer-background">
        <div className="footer-overlay"></div>
        <div className="container">
          <div className="footer-content">
            <div className="row">
              {/* Logo Section */}
              <div className="col-lg-3 col-md-6 footer-col">
                <div className="footer-widget">
                  <div className="footer-logo-section">
                    <img src="/bgremove_learn.png" alt="Learn Telugu Now" className="footer-logo" />
                    <p className="footer-logo-description">
                      Your trusted platform for mastering Telugu language through expert-led courses and interactive learning experiences.
                    </p>
                    <div className="social-links">
                      <a href="#" className="social-link" aria-label="Facebook">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="#" className="social-link" aria-label="Instagram">
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a href="#" className="social-link" aria-label="LinkedIn">
                        <i className="fab fa-linkedin"></i>
                      </a>
                      <a href="#" className="social-link" aria-label="YouTube">
                        <i className="fab fa-youtube"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Get Started Section */}
              <div className="col-lg-3 col-md-6 footer-col">
                <div className="footer-widget">
                  <h3 className="footer-title">Get Started</h3>
                  <ul className="footer-links">
                    <li>
                      <a href="#">Vedic Maths Training</a>
                    </li>
                    <li>
                      <a href="#">Phonics Training</a>
                    </li>
                    <li>
                      <a href="#">Carnatic Music</a>
                    </li>
                    <li>
                      <a href="#">Yoga Training</a>
                    </li>
                    <li>
                      <a href="#">Spoken Telugu for Kids and Adults</a>
                    </li>
                    <li>
                      <a href="#">Andhra Pradesh State Academic Telugu Syllabus Teaching</a>
                    </li>
                    
                  </ul>
                </div>
              </div>

              {/* About Section */}
              <div className="col-lg-3 col-md-6 footer-col">
                <div className="footer-widget">
                  <h3 className="footer-title">About</h3>
                  <ul className="footer-links">
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Testimonials</a>
                    </li>
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Contact Info Section */}
              <div className="col-lg-3 col-md-6 footer-col">
                <div className="footer-widget">
                  <h3 className="footer-title">Contact Info</h3>
                  <div className="contact-info">
                    <div className="contact-item">
                      <h4 className="contact-label">Address</h4>
                      <p className="contact-value">
                        Flat no: 104, Ss carona apartment, Harsha layout, Kengeri Bangalore 560060
                      </p>
                    </div>
                    <div className="contact-item">
                      <h4 className="contact-label">Phone</h4>
                      <p className="contact-value">
                        <a href="tel:+919380060928">+91 9380060928</a>
                      </p>
                    </div>
                    <div className="contact-item">
                      <h4 className="contact-label">E-mail Address</h4>
                      <p className="contact-value">
                        <a href="mailto:support@kicktheknack.com">support@kicktheknack.com</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <p className="copyright">
                © 2025 Learntelugunow.All rights reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

