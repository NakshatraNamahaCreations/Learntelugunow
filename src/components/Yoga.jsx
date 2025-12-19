import React, { useState } from "react";
import "../styles/Yoga.css";
import courseBanner from "../assets/courses_banner/course banner.avif";
import yogaImage from "../assets/courses/yogatraining.jpg";
import BookDemoModal from "./BookDemoModal";

export default function Yoga() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <section className="yoga-hero-section">
        <div className="yoga-hero-bg">
          <img src={courseBanner} alt="Yoga Training" className="yoga-hero-img" />
          <div className="yoga-hero-overlay" />
        </div>
        <div className="yoga-hero-content">
          <h1 className="yoga-hero-title">Yoga Training</h1>
          <p className="yoga-hero-description">
            Discover the ancient practice of yoga with our comprehensive training program<br />
            and enhance your physical and mental well-being.
          </p>
        </div>
      </section>

      {/* About Course Section */}
      <section className="yoga-about-section">
        <img 
          className="yoga-about-circle-dots" 
          src="/circle-dots-two.webp" 
          alt="Decorative circle" 
        />
        <div className="container">
          <div className="yoga-about-wrapper">
            {/* Left Column - Content */}
            <div className="col-lg-6">
              <div className="yoga-about-content">
                <div className="section-title">
                  <span className="sub-title-two">About Yoga</span>
                  <h2>Yoga Training Program</h2>
                </div>
                <div className={`yoga-about-text ${isExpanded ? 'expanded' : ''}`}>
                  <p>
                    In recent years, we can see that a form of exercise that has received a lot of impetus is none other than yoga. We have trainers who have deep understanding and knowledge of Yoga. The primary focus of kicktheknack is to teach yoga that can spread the benefits of yoga to society. Our aim is to remove anxiety, depression from the modern society. Along with that, we focus on healing personal and family problems by practising simple, authentic, and traditional yoga.
                  </p>
                  <p>
                    We have registered yoga trainers who can train you at online so that you can learn yoga from your place. Our Yoga training is based on classical teaching styles- Pranayamas, Mudras, Asanas, Meditation, Hatha Vinyasa Yoga, and power Yoga. Yoga classes will be taken only for women, and it will be on Monday/ Wednesday & Friday on below timings.
                  </p>
                  <p>
                    <strong>Class Timings:</strong> (6am-7am IST), (10am-11am IST), (5PM-6PM IST).
                  </p>
                  {isExpanded && (
                    <>
                      <div className="yoga-what-you-learn">
                        <h3>What Will You Learn?</h3>
                        <ul className="yoga-learn-list">
                          <li>Pranayamas</li>
                          <li>Mudras</li>
                          <li>Asanas</li>
                          <li>Meditation</li>
                          <li>Hatha Vinyasa Yoga</li>
                          <li>Power Yoga</li>
                        </ul>
                      </div>
                    </>
                  )}
                </div>
                <div className="yoga-buttons-wrapper">
                  <button 
                    className="yoga-show-more-btn"
                    onClick={() => setIsExpanded(!isExpanded)}
                  >
                    {isExpanded ? 'Show Less' : 'Show More'}
                    <i className={`fas fa-chevron-${isExpanded ? 'up' : 'down'}`}></i>
                  </button>
                  <button 
                    className="yoga-book-demo-btn"
                    onClick={() => setIsModalOpen(true)}
                  >
                    Book Demo
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="col-lg-6">
              <div className="yoga-about-image">
                <img src={yogaImage} alt="Yoga Training" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <BookDemoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        courseName="Yoga Training"
      />
    </>
  );
}

