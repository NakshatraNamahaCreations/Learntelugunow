import React, { useState } from "react";
import "../styles/CarnaticMusic.css";
import courseBanner from "../assets/courses_banner/course2.avif";
import BookDemoModal from "./BookDemoModal";

export default function CarnaticMusic() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <section className="carnatic-hero-section">
        <div className="carnatic-hero-bg">
          <img src={courseBanner} alt="Carnatic Music" className="carnatic-hero-img" />
          <div className="carnatic-hero-overlay" />
        </div>
        <div className="carnatic-hero-content">
          <h1 className="carnatic-hero-title">Carnatic Music</h1>
          <p className="carnatic-hero-description">
            Immerse yourself in the rich tradition of Carnatic music<br />
            and master classical ragas, talas, and vocal techniques.
          </p>
        </div>
      </section>

      {/* About Course Section */}
      <section className="carnatic-about-section">
        <img 
          className="carnatic-about-circle-dots" 
          src="/circle-dots-two.webp" 
          alt="Decorative circle" 
        />
        <div className="container">
          <div className="carnatic-about-wrapper">
            {/* Left Column - Content */}
            <div className="col-lg-6">
              <div className="carnatic-about-content">
                <div className="section-title">
                  <span className="sub-title-two">About Carnatic Music</span>
                  <h2>Carnatic Music Training Program</h2>
                </div>
                <div className={`carnatic-about-text ${isExpanded ? 'expanded' : ''}`}>
                  <p>
                    Kicktheknack believe in continuing the rich Indian cultural and musical tradition by teaching and nurturing the next generation of artists and musicians and through our teaching methods, we seek to transform our student's passion in Carnatic and Hindustani Music into a lifelong journey of reward and fulfillment.
                  </p>
                  <p>
                    Learn Carnatic vocal Music online at your own pace using live online classes (customized skype/ Zoom lessons/ Gmeet), so start today and improve your skills.
                  </p>
                  {isExpanded && (
                    <>
                      <p>
                        If you have an Internet connection, you may take our lessons on your laptop, cell phone, tablets or desktop PC from any part of the world. Our online lessons have been meticulously designed to be clear, effective, and interesting – just like in-person lessons.
                      </p>
                      <p>
                        Our lessons have been professionally designed and are generally offered for a duration of about 45 minutes each. Most students take lessons once a week. However, the lesson duration, schedules and frequency are structured based on specific needs of students.
                      </p>
                      <p>
                        Our music classes impart methodical, intensive training to students to attain proficiency in carnatic music. Classes are structured to include carnatic music theory.
                      </p>
                    </>
                  )}
                </div>
                <div className="carnatic-buttons-wrapper">
                  <button 
                    className="carnatic-show-more-btn"
                    onClick={() => setIsExpanded(!isExpanded)}
                  >
                    {isExpanded ? 'Show Less' : 'Show More'}
                    <i className={`fas fa-chevron-${isExpanded ? 'up' : 'down'}`}></i>
                  </button>
                  <button 
                    className="carnatic-book-demo-btn"
                    onClick={() => setIsModalOpen(true)}
                  >
                    Book Demo
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="col-lg-6">
              <div className="carnatic-about-image">
                <img src="/carnatic_music.avif" alt="Carnatic Music" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <BookDemoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        courseName="Carnatic Music"
      />
    </>
  );
}

