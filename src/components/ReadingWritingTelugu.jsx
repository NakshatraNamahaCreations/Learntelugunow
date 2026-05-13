import React, { useState, useEffect } from "react";
import "../styles/ReadingWritingTelugu.css";
import BookDemoModal from "./BookDemoModal";

export default function ReadingWritingTelugu() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  useEffect(() => {
  // TITLE
  document.title =
    "Reading and Writing Telugu for Kids and Adults | Learn Telugu Now";

  // DESCRIPTION
  const descriptionContent =
    "Master reading and writing Telugu for kids and adults with live online classes. Learn Telugu alphabet, grammar, writing skills, and fluency with expert tutors.";

  let metaDescription = document.querySelector(
    'meta[name="description"]'
  );

  if (metaDescription) {
    metaDescription.setAttribute("content", descriptionContent);
  } else {
    const meta = document.createElement("meta");
    meta.setAttribute("name", "description");
    meta.setAttribute("content", descriptionContent);
    document.head.appendChild(meta);
  }

  // KEYWORDS
  const keywordsContent =
    "reading and writing Telugu, learn Telugu writing, Telugu reading classes, Telugu language classes for kids, Telugu handwriting classes, learn Telugu alphabet, Telugu lessons online";

  let metaKeywords = document.querySelector(
    'meta[name="keywords"]'
  );

  if (metaKeywords) {
    metaKeywords.setAttribute("content", keywordsContent);
  } else {
    const meta = document.createElement("meta");
    meta.setAttribute("name", "keywords");
    meta.setAttribute("content", keywordsContent);
    document.head.appendChild(meta);
  }

  // CANONICAL
  const canonicalURL =
    "https://www.learntelugunow.com/reading-writing-telugu-for-kids-and-adults";

  let canonicalTag = document.querySelector(
    "link[rel='canonical']"
  );

  if (canonicalTag) {
    canonicalTag.setAttribute("href", canonicalURL);
  } else {
    const link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    link.setAttribute("href", canonicalURL);
    document.head.appendChild(link);
  }
}, []);


  return (
    <>
      {/* Hero Section */}
      <section className="reading-writing-hero-section">
        <div className="reading-writing-hero-bg">
          <img src="/reading_banner.png" alt="Reading and Writing Telugu for Adults" className="reading-writing-hero-img" />
          <div className="reading-writing-hero-overlay" />
        </div>
        <div className="reading-writing-hero-content">
          <h1 className="reading-writing-hero-title">Reading and Writing Telugu for Kids and Adults</h1>
          <p className="reading-writing-hero-description">
            Learn to read and write Telugu with our structured program<br />
            designed for both kids and adults with expert guidance.
          </p>
        </div>
      </section>

      {/* About Course Section */}
      <section className="reading-writing-about-section">
        <img 
          className="reading-writing-about-circle-dots" 
          src="/circle-dots-two.webp" 
          alt="Decorative circle" 
        />
        <div className="container">
          <div className="reading-writing-about-wrapper">
            {/* Left Column - Content */}
            <div className="col-lg-6">
              <div className="reading-writing-about-content">
                <div className="section-title">
                  <span className="sub-title-two">About Course</span>
                  <h2>Reading and Writing Telugu for Kids and Adults</h2>
                </div>
                <div className="reading-writing-about-text">
                  <p>
                    A concise program for both kids and adults to read and write Telugu. Live tutors guide you through letters, sounds, simple words, and everyday phrases so you gain confidence to read, write, and speak.
                  </p>
                  <p>
                    We blend phonics, handwriting practice, and spoken drills with cultural context to keep sessions practical and fun. Book a demo to start learning Telugu together as a family.
                  </p>
                </div>
                <div className="reading-writing-buttons-wrapper">
                  <button 
                    className="reading-writing-book-demo-btn"
                    onClick={() => setIsModalOpen(true)}
                  >
                    Book Demo
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="col-lg-6">
              <div className="reading-writing-about-image">
                <img src="/Frame 67 (1) (1).png" alt="Reading and Writing Telugu for Adults" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <BookDemoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        courseName="Reading and Writing Telugu for Adults"
      />
    </>
  );
}

