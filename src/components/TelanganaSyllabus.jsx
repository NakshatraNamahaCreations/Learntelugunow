import React, { useState } from "react";
import "../styles/TelanganaSyllabus.css";
import courseBanner from "../assets/courses_banner/course banner.avif";
import telanganaImage from "../assets/blogs/img1.jpg";
import BookDemoModal from "./BookDemoModal";

export default function TelanganaSyllabus() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <section className="telangana-hero-section">
        <div className="telangana-hero-bg">
          <img src={courseBanner} alt="Telangana State Academic Telugu Syllabus Teaching" className="telangana-hero-img" />
          <div className="telangana-hero-overlay" />
        </div>
        <div className="telangana-hero-content">
          <h1 className="telangana-hero-title">Telangana State Academic Telugu Syllabus Teaching</h1>
          <p className="telangana-hero-description">
            Embrace Telangana's unique academic Telugu syllabus<br />
            with our comprehensive teaching program designed for students.
          </p>
        </div>
      </section>

      {/* About Course Section */}
      <section className="telangana-about-section">
        <img 
          className="telangana-about-circle-dots" 
          src="/circle-dots-two.webp" 
          alt="Decorative circle" 
        />
        <div className="container">
          <div className="telangana-about-wrapper">
            {/* Left Column - Content */}
            <div className="col-lg-6">
              <div className="telangana-about-content">
                <div className="section-title">
                  <span className="sub-title-two">About Course</span>
                  <h2>Telangana State Academic Telugu Syllabus Teaching</h2>
                </div>
                <div className={`telangana-about-text ${isExpanded ? 'expanded' : ''}`}>
                  <p>
                    Embrace Telangana's unique academic Telugu syllabus with Kicktheknack! Tailored for the Telangana State Board, this course blends modern Telugu literature with the region's vibrant folk traditions and post-bifurcation cultural evolution. Analyze works by iconic figures like Kaloji Narayana Rao, study contemporary prose, and explore Telangana's distinct dialect and festivals such as Bonalu.
                  </p>
                  <p>
                    Our tutors, specializing in the TS syllabus, offer dynamic lessons, practice papers, and cultural insights to help students excel. From "Telangana Ugadi" celebrations to exam-ready strategies, discover the linguistic pride of Telangana's Telugu!
                  </p>
                  {isExpanded && (
                    <>
                      <div className="telangana-what-you-learn">
                        <h3>What Will You Learn?</h3>
                        <ul className="telangana-learn-list">
                          <li>Read, write, and speak Telugu with a focus on Telangana's dialect, slang, and folk-inspired expressions.</li>
                          <li>Recognize all Telugu letters, including regional variations like ఱ and ౠ, through engaging exercises.</li>
                          <li>Understand, read, and write foundational words from Telangana's modern textbooks and folk literature.</li>
                          <li>Learn 90% of daily vocabulary through lessons on colloquial phrases, festival terms (like Bonalu and Bathukamma), and local idioms.</li>
                          <li>Craft essays and answers in Telangana's exam-preferred style, blending academic rigor with cultural context.</li>
                          <li>Explore Telangana's identity through works by Kaloji, Dasarathi, and folk tales like Komaram Bheem Kathalu.</li>
                        </ul>
                      </div>
                    </>
                  )}
                </div>
                <div className="telangana-buttons-wrapper">
                  <button 
                    className="telangana-show-more-btn"
                    onClick={() => setIsExpanded(!isExpanded)}
                  >
                    {isExpanded ? 'Show Less' : 'Show More'}
                    <i className={`fas fa-chevron-${isExpanded ? 'up' : 'down'}`}></i>
                  </button>
                  <button 
                    className="telangana-book-demo-btn"
                    onClick={() => setIsModalOpen(true)}
                  >
                    Book Demo
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="col-lg-6">
              <div className="telangana-about-image">
                <img src={telanganaImage} alt="Telangana State Academic Telugu Syllabus Teaching" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <BookDemoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        courseName="Telangana State Academic Telugu Syllabus Teaching"
      />
    </>
  );
}

