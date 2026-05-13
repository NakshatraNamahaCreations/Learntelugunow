import React, { useState, useEffect } from "react";
import "../styles/TelanganaSyllabus.css";
import BookDemoModal from "./BookDemoModal";

export default function TelanganaSyllabus() {
  const [isModalOpen, setIsModalOpen] = useState(false);
useEffect(() => {
  // TITLE
  document.title =
    "Telugu States Academic Telugu Syllabus Teaching | Learn Telugu Now";

  // DESCRIPTION
  const descriptionContent =
    "Specialized Telugu syllabus teaching for Telangana state academic curriculum. Live online classes for kids and adults with expert tutors. Book a free demo.";

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
    "academic Telugu syllabus, Telangana Telugu syllabus, Andhra Pradesh Telugu syllabus, Telugu tuition online, Telugu exam preparation, Telugu grammar classes, Telugu lessons for students";

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
    "https://www.learntelugunow.com/telangana-academic-telugu-syllabus-teaching";

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
      <section className="telangana-hero-section">
        <div className="telangana-hero-bg">
          <img src="/Frame 87.png" alt="Telugu States Academic Telugu Syllabus Teaching" className="telangana-hero-img" />
          <div className="telangana-hero-overlay" />
        </div>
        <div className="telangana-hero-content">
          <h1 className="telangana-hero-title">Telugu States Academic Telugu Syllabus Teaching</h1>
          <p className="telangana-hero-description">
            Master the official academic Telugu syllabus for both<br />
            Telangana and Andhra Pradesh state boards with expert guidance.
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
                  <h2>Telugu States Academic Telugu Syllabus Teaching</h2>
                </div>
                <div className="telangana-about-text">
                  <p>
                    Master the official academic Telugu syllabus for both Telangana and Andhra Pradesh state boards with Learn Telugu Now. Our comprehensive program covers the complete curriculum designed by state education boards, helping students excel in their Telugu language studies.
                  </p>
                  <p>
                    Whether you're following the Telangana State Board syllabus or the Andhra Pradesh State Board syllabus, our expert tutors provide structured lessons, practice materials, and exam preparation aligned with your state's academic requirements. Learn grammar, literature, comprehension, and writing skills as per the official syllabus standards.
                  </p>
                </div>
                <div className="telangana-buttons-wrapper">
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
                <img src="/Frame 69 (1).png" alt="Telugu States Academic Telugu Syllabus Teaching" />
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

