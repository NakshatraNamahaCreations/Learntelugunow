import React, { useState } from "react";
import "../styles/VedicMaths.css";
import courseBanner from "../assets/courses_banner/course4.avif";
import vedicMathsImage from "../assets/courses/vedicmaths.jpg";
import titleBg from "../assets/feature-icon/title-bg.webp";
import BookDemoModal from "./BookDemoModal";

export default function VedicMaths() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <section className="vedic-hero-section">
        <div className="vedic-hero-bg">
          <img src={courseBanner} alt="Vedic Maths Training" className="vedic-hero-img" />
          <div className="vedic-hero-overlay" />
        </div>
        <div className="vedic-hero-content">
          <h1 className="vedic-hero-title">Vedic Maths Training</h1>
          <p className="vedic-hero-description">
            Master the ancient art of Vedic Mathematics<br />
            and enhance your calculation speed and accuracy.
          </p>
        </div>
      </section>

      {/* About Course Section */}
      <section className="vedic-about-section">
        <div className="container">
          <div className="vedic-about-wrapper">
            {/* Left Column - Content */}
            <div className="vedic-about-content">
              <div className="vedic-about-heading">
                <span className="vedic-about-subtitle">ABOUT VEDICMATHS</span>
                <h2 className="vedic-about-title">
                  Know Something<br />
                  About Our <span className="vedic-title-highlight">Vedic Maths<img src={titleBg} alt="Title Background" className="vedic-title-bg-image" /></span><br />
                  Training Program<br />
                  At Learntelugunow
                </h2>
              </div>
              <div className={`vedic-about-text ${isExpanded ? 'expanded' : ''}`}>
                <p>
                  Do you want to learn Vedic Maths, a system of ancient Indian Mathematics that can help you to solve problems Faster and easier? Kicktheknack will provide one-one math tutoring for students online using skype/ Zoom/ Gmeet.
                </p>
                <p>
                  Vedic Maths is a system of mental math that was developed in ancient India. It is a system of methodologies that help you solve math problems faster and more accurately. Kicktheknack will provide the most innovative methodologies of teaching and strategies used in Vedic mathematics.
                </p>
                {isExpanded && (
                  <>
                    <p>
                      Vedic Maths is India's gift to the World just like Yoga and Ayurveda. By learning Vedic Maths you will be able to calculate much faster compared to the traditional system.
                    </p>
                    <p>
                      Vedic maths is a system of mathematics that was discovered by an Indian mathematician, Jagadguru Shri Bharathi Krishna Tirthaji during A.D. 1911 and 1918. He printed his findings in a Vedic Mathematics book – Tirthaji Maharaj. Vedic mathematics is also called mental mathematics in the mathematical world. We can say that the brain's capacity and its speed of calculations increases fivefold with the practice of Vedic maths.
                    </p>
                  </>
                )}
              </div>
              <div className="vedic-buttons-wrapper">
                <button 
                  className="vedic-show-more-btn"
                  onClick={() => setIsExpanded(!isExpanded)}
                >
                  {isExpanded ? 'Show Less' : 'Show More'}
                  <i className={`fas fa-chevron-${isExpanded ? 'up' : 'down'}`}></i>
                </button>
                <button 
                  className="vedic-book-demo-btn"
                  onClick={() => setIsModalOpen(true)}
                >
                  Book Demo
                </button>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="vedic-about-image">
              <img src={vedicMathsImage} alt="Vedic Maths" />
            </div>
          </div>
        </div>
      </section>
      <BookDemoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        courseName="Vedic Maths Training"
      />
    </>
  );
}

