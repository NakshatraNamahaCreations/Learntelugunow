import React, { useState } from "react";
import "../styles/SpokenTelugu.css";
import courseBanner from "../assets/blogs/img2.jpg";
import titleBg from "../assets/feature-icon/title-bg.webp";
import BookDemoModal from "./BookDemoModal";

export default function SpokenTelugu() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <section className="spoken-hero-section">
        <div className="spoken-hero-bg">
          <img src={courseBanner} alt="Spoken Telugu for Kids and Adults" className="spoken-hero-img" />
          <div className="spoken-hero-overlay" />
        </div>
        <div className="spoken-hero-content">
          <h1 className="spoken-hero-title">Spoken Telugu for Kids and Adults</h1>
          <p className="spoken-hero-description">
            Master conversational Telugu with our comprehensive training program<br />
            designed for both kids and adults.
          </p>
        </div>
      </section>

      {/* About Course Section */}
      <section className="spoken-about-section">
        <div className="container">
          <div className="spoken-about-wrapper">
            {/* Left Column - Content */}
            <div className="spoken-about-content">
              <div className="spoken-about-heading">
                <span className="spoken-about-subtitle">ABOUT COURSE</span>
                <h2 className="spoken-about-title">
                  Know Something<br />
                  About Our <span className="spoken-title-highlight">Spoken Telugu<img src={titleBg} alt="Title Background" className="spoken-title-bg-image" /></span><br />
                  Training Program<br />
                  At Learntelugunow
                </h2>
              </div>
              <div className={`spoken-about-text ${isExpanded ? 'expanded' : ''}`}>
                <p>
                  Master everyday Telugu conversations with confidence! Designed for kids (ages 6–14) and adults, this course focuses on speaking, listening, and understanding Telugu in real-life scenarios. Learn through interactive games, role-plays, stories, and cultural immersion. Whether you're a parent teaching your child or an adult relocating to Telugu-speaking regions, this course makes learning fun, practical, and stress-free.
                </p>
                {isExpanded && (
                  <>
                    <div className="spoken-what-you-learn">
                      <h3>What Will You Learn?</h3>
                      <ul className="spoken-learn-list">
                        <li>Speak Telugu fluently in daily conversations (greetings, shopping, travel, etc.).</li>
                        <li>Understand common phrases, slang, and cultural references.</li>
                        <li>Pronounce words correctly with native-like intonation.</li>
                        <li>Build vocabulary for family, food, festivals, and emergencies.</li>
                        <li>Gain confidence to chat with friends, relatives, or colleagues.</li>
                      </ul>
                    </div>
                  </>
                )}
              </div>
              <div className="spoken-buttons-wrapper">
                <button 
                  className="spoken-show-more-btn"
                  onClick={() => setIsExpanded(!isExpanded)}
                >
                  {isExpanded ? 'Show Less' : 'Show More'}
                  <i className={`fas fa-chevron-${isExpanded ? 'up' : 'down'}`}></i>
                </button>
                <button 
                  className="spoken-book-demo-btn"
                  onClick={() => setIsModalOpen(true)}
                >
                  Book Demo
                </button>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="spoken-about-image">
              <img src="/portrait-young-boy.jpg" alt="Spoken Telugu" />
            </div>
          </div>
        </div>
      </section>
      <BookDemoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        courseName="Spoken Telugu for Kids and Adults"
      />
    </>
  );
}

