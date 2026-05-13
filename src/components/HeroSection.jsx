
import React from "react";
import { Link } from "react-router-dom";
import "../styles/HeroSection.css";


export default function HeroBanner({ bgImage = "/Frame 30 (7).png" }) {
  return (
    <header className="hb-root" role="banner">
      {/* Background */}
      <div className="hb-bg" aria-hidden="true">
        <img src={bgImage} alt="Learn Telugu online with live one-on-one Telugu classes for kids and adults" className="hb-bg-img" />
      </div>

      <div className="hb-container">
        <div className="hb-grid">
          
          {/* LEFT TEXT */}
          {/* <div className="hb-left">
            <div className="hb-center-text">
              <h1 className="hb-headlines">
              Learn Telugu Online | One-on-One Telugu Classes for Kids & Adults
              </h1>
              <p className="hb-description">
              Learn Telugu Now offers online Telugu classes, spoken Telugu courses and cultural programs for kids and adults. Experience live one‑on‑one Telugu lessons, flexible scheduling and a supportive community – start your free demo today!
              </p>

              <div className="hb-features">
                <div className="hb-feature-item">
                  <div className="hb-feature-icon">
                    <i className="fas fa-check"></i>
                  </div>
                  <span className="hb-feature-text">Live 1‑on‑1 Classes</span>
                </div>
                <div className="hb-feature-item">
                  <div className="hb-feature-icon">
                    <i className="fas fa-check"></i>
                  </div>
                  <span className="hb-feature-text">All Ages & Levels</span>
                </div>
                <div className="hb-feature-item">
                  <div className="hb-feature-icon">
                    <i className="fas fa-check"></i>
                  </div>
                  <span className="hb-feature-text">Flexible Scheduling </span>
                </div>

                <div className="hb-feature-item">
                  <div className="hb-feature-icon">
                    <i className="fas fa-check"></i>
                  </div>
                  <span className="hb-feature-text">Expert Native Tutors </span>
                </div>
              </div>

              

              

              <div className="hb-cta-buttons">
                <Link to="/spoken-telugu-for-kids-and-adults" className="hb-btn-primary">
                Start learning Telugu Today<i className="fas fa-arrow-right"></i>
                </Link>
                <Link to="/telangana-academic-telugu-syllabus-teaching" className="hb-btn-secondary">
                Explore Telugu Courses<i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div> */}

        </div>
      </div>
    </header>
  );
}
