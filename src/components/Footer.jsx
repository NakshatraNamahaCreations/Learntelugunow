import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  const courses = [
    { name: "Spoken Telugu for Kids and Adults", path: "/spoken-telugu-for-kids-and-adults" },
    { name: "Reading and Writing Telugu for Kids and Adults", path: "/reading-writing-telugu-for-kids-and-adults" },
    { name: "Telugu States Academic Telugu Syllabus Teaching", path: "/telangana-academic-telugu-syllabus-teaching" },
    { name: "Vedic Maths Training", path: "/vedic-maths-training" },
    { name: "Phonics Training", path: "/phonics-training" },
    { name: "Yoga Training", path: "/yoga-training" },
    { name: "Carnatic Music", path: "/carnatic-music-training" }
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
                      <img src="/learntelugu_logo.png" alt="Learn Telugu Now" className="site-footer-logo-img" />
                    </div>
                    <p className="site-footer-logo-description">
                    Learn Telugu Now is a trusted online learning platform helping students master the Telugu language through expert-led courses, interactive lessons, and structured learning programs designed for all skill levels.

                    </p>
                    
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
                      <Link to="/telugu-learning-classes-online" className="site-footer-link">Telugu</Link>
                    </li>
                    <li>
                      <Link to="/case-studies" className="site-footer-link">Case Studies</Link>
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


                    <div className="site-footer-contact-item" >
    <i className="fas fa-phone site-footer-contact-icon"></i>
    <a
      href="tel:+919380060928"
      className="site-footer-contact-text"
    >
      +91 9380060928
    </a>
  </div>

  {/* Email – Open Mail App */}
  <div className="site-footer-contact-item">
    <i className="far fa-envelope site-footer-contact-icon"></i>
   <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=support@learntelugunow.com&su=Website Enquiry"
  target="_blank"
  rel="noopener noreferrer"
  className="site-footer-contact-text"
>
  support@learntelugunow.com
</a>

  </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Keywords Section */}
            <div className="site-footer-keywords-section">
              <div className="site-footer-keywords-wrapper">
                <div className="site-footer-keywords-category">
                  <strong>KEYWORDS:</strong>
                  <div className="site-footer-keywords-list">
                    <Link to="/telugu-learning-classes-online" className="site-footer-keyword">Learn Telugu online</Link>
                    <span className="site-footer-keyword-separator">|</span>
                    <Link to="/spoken-telugu-for-kids-and-adults" className="site-footer-keyword">Spoken Telugu classes online</Link>
                    <span className="site-footer-keyword-separator">|</span>
                    <Link to="/spoken-telugu-for-kids-and-adults" className="site-footer-keyword">Telugu classes for kids</Link>
                    <span className="site-footer-keyword-separator">|</span>
                    <Link to="/reading-writing-telugu-for-kids-and-adults" className="site-footer-keyword">Telugu reading and writing lessons</Link>
                    <span className="site-footer-keyword-separator">|</span>
                    <Link to="/telugu-learning-classes-online" className="site-footer-keyword">One-on-one Telugu tutoring</Link>
                    <span className="site-footer-keyword-separator">|</span>
                    <Link to="/spoken-telugu-for-kids-and-adults" className="site-footer-keyword">Telugu for beginners</Link>
                    <span className="site-footer-keyword-separator">|</span>
                    <Link to="/telugu-learning-classes-online" className="site-footer-keyword">Telugu heritage learning</Link>
                    <span className="site-footer-keyword-separator">|</span>
                    <Link to="/telugu-learning-classes-online" className="site-footer-keyword">Online Telugu classes with native tutors</Link>
                    <span className="site-footer-keyword-separator">|</span>
                    <Link to="/spoken-telugu-for-kids-and-adults" className="site-footer-keyword">Telugu language course for children and adults</Link>
                    <span className="site-footer-keyword-separator">|</span>
                    <Link to="/telugu-learning-classes-online" className="site-footer-keyword">Telugu lessons on Zoom</Link>
                    <span className="site-footer-keyword-separator">|</span>
                    <Link to="/telugu-learning-classes-online" className="site-footer-keyword">Telugu lessons on Google Meet</Link>
                    <span className="site-footer-keyword-separator">|</span>
                    <Link to="/phonics-training" className="site-footer-keyword">Online phonics classes for kids</Link>
                    <span className="site-footer-keyword-separator">|</span>
                    <Link to="/vedic-maths-training" className="site-footer-keyword">Vedic Maths online classes</Link>
                    <span className="site-footer-keyword-separator">|</span>
                    <Link to="/carnatic-music-training" className="site-footer-keyword">Carnatic music online lessons</Link>
                    <span className="site-footer-keyword-separator">|</span>
                    <Link to="/yoga-training" className="site-footer-keyword">Online yoga for kids and adults</Link>
                    <span className="site-footer-keyword-separator">|</span>
                    <Link to="/telugu-learning-classes-online" className="site-footer-keyword">Indian heritage classes online</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="site-footer-bottom">
            <div className="site-footer-bottom-wrapper">
              <p className="site-footer-copyright">
                © 2026. Learn Telugu Now All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

