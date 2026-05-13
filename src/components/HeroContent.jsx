import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/HeroSection.css";
import BookDemoModal from "./BookDemoModal";

export default function HeroContent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
    <section className="hero-content-section">
      <div className="hb-container">
        <img src="/temple.jpeg" alt="Learn Telugu Online | One-on-One Telugu Classes for Kids & Adults" className="hero-content-temple-img" />
        <div className="hb-grid">
          <div className="hb-left">
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
                <button 
                  className="hb-btn-primary"
                  onClick={() => setIsModalOpen(true)}
                >
                  Start learning Telugu Today<i className="fas fa-arrow-right"></i>
                </button>
                <Link to="/telangana-academic-telugu-syllabus-teaching" className="hb-btn-secondary">
                  Explore Telugu Courses<i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <BookDemoModal
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      courseName=""
    />
    </>
  );
}



