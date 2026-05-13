import React, { useState } from "react";
import "../styles/AndhraSyllabus.css";
import courseBanner from "../assets/courses_banner/course banner.avif";
import teluguImage from "../assets/courses/readingwriting.jpg";
import titleBg from "../assets/feature-icon/title-bg.webp";
import BookDemoModal from "./BookDemoModal";

export default function AndhraSyllabus() {
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
                  At Learn Telugu Now
                </h2>
              </div>
              <div className="andhra-about-text">
                <p>
                  Looking for expert tutors to help your child master the Andhra Pradesh State Academic Telugu Syllabus? Learn Telugu Now is the best platform that connects students with our experienced tutors all over the world. We provide comprehensive online Telugu teaching aligned with the official Andhra Pradesh State Board curriculum.
                </p>
                <p>
                  Our specialized program covers all aspects of the Andhra Pradesh State Academic Telugu Syllabus, ensuring students excel in their academic Telugu studies. Whether your child needs help with reading, writing, grammar, literature, or exam preparation, our qualified tutors provide personalized one-on-one instruction tailored to the state syllabus requirements.
                </p>
              </div>
              <div className="andhra-buttons-wrapper">
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

