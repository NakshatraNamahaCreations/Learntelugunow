import React, { useState } from "react";
import "../styles/AndhraSyllabus.css";
import courseBanner from "../assets/courses_banner/course banner.avif";
import teluguImage from "../assets/courses/readingwriting.jpg";
import titleBg from "../assets/feature-icon/title-bg.webp";
import BookDemoModal from "./BookDemoModal";

export default function AndhraSyllabus() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <section className="andhra-hero-section">
        <div className="andhra-hero-bg">
          <img src={courseBanner} alt="Andhra Pradesh State Academic Telugu Syllabus Teaching" className="andhra-hero-img" />
          <div className="andhra-hero-overlay" />
        </div>
        <div className="andhra-hero-content">
          <h1 className="andhra-hero-title">Andhra Pradesh State Academic Telugu Syllabus Teaching</h1>
          <p className="andhra-hero-description">
            Master the official Andhra Pradesh State Academic Telugu Syllabus<br />
            with our comprehensive teaching program designed for students.
          </p>
        </div>
      </section>

      {/* About Course Section */}
      <section className="andhra-about-section">
        <div className="container">
          <div className="andhra-about-wrapper">
            {/* Left Column - Content */}
            <div className="andhra-about-content">
              <div className="andhra-about-heading">
                <span className="andhra-about-subtitle">ABOUT COURSE</span>
                <h2 className="andhra-about-title">
                  Know Something<br />
                  About Our <span className="andhra-title-highlight">Andhra Pradesh<img src={titleBg} alt="Title Background" className="andhra-title-bg-image" /></span><br />
                  State Academic Telugu Syllabus Teaching<br />
                  At Learntelugunow
                </h2>
              </div>
              <div className={`andhra-about-text ${isExpanded ? 'expanded' : ''}`}>
                <p>
                  Looking for expert tutors to help your child master the Andhra Pradesh State Academic Telugu Syllabus? Kicktheknack is the best platform that connects students with our experienced tutors all over the world. We provide comprehensive online Telugu teaching aligned with the official Andhra Pradesh State Board curriculum.
                </p>
                <p>
                  Our specialized program covers all aspects of the Andhra Pradesh State Academic Telugu Syllabus, ensuring students excel in their academic Telugu studies. Whether your child needs help with reading, writing, grammar, literature, or exam preparation, our qualified tutors provide personalized one-on-one instruction tailored to the state syllabus requirements.
                </p>
                {isExpanded && (
                  <>
                    <p>
                      We understand the importance of following the official curriculum and preparing students for their state board examinations. Our tutors are well-versed with the Andhra Pradesh State Academic Telugu Syllabus and use effective teaching methodologies to make learning engaging and effective.
                    </p>
                    <p>
                      With 75 million Telugu-speaking people and Telugu ranked as the 15th-most spoken language in the world, mastering Telugu through the state syllabus opens doors to academic excellence and cultural understanding. Let's Book a demo to help your child excel in Andhra Pradesh State Academic Telugu Syllabus.
                    </p>
                    <div className="andhra-what-you-learn">
                      <h3>What Will You Learn?</h3>
                      <ul className="andhra-learn-list">
                        <li>Complete coverage of Andhra Pradesh State Academic Telugu Syllabus</li>
                        <li>Reading, writing, and comprehension skills as per state curriculum</li>
                        <li>Grammar, vocabulary, and literature components</li>
                        <li>Exam preparation and practice tests aligned with state board standards</li>
                        <li>Cultural context and understanding of Telugu language</li>
                        <li>Interactive learning methods tailored to state syllabus requirements</li>
                      </ul>
                    </div>
                  </>
                )}
              </div>
              <div className="andhra-buttons-wrapper">
                <button 
                  className="andhra-show-more-btn"
                  onClick={() => setIsExpanded(!isExpanded)}
                >
                  {isExpanded ? 'Show Less' : 'Show More'}
                  <i className={`fas fa-chevron-${isExpanded ? 'up' : 'down'}`}></i>
                </button>
                <button 
                  className="andhra-book-demo-btn"
                  onClick={() => setIsModalOpen(true)}
                >
                  Book Demo
                </button>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="andhra-about-image">
              <img src={teluguImage} alt="Andhra Pradesh State Academic Telugu Syllabus Teaching" />
            </div>
          </div>
        </div>
      </section>
      <BookDemoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        courseName="Andhra Pradesh State Academic Telugu Syllabus Teaching"
      />
    </>
  );
}

