import React, { useState, useEffect } from "react";
import "../styles/VedicMaths.css";
import courseBanner from "../assets/courses_banner/vedic_maths.png";
import vedicMathsImage from "../assets/blogs/image.png";
import titleBg from "../assets/feature-icon/title-bg.webp";
import BookDemoModal from "./BookDemoModal";

export default function VedicMaths() {
  const [isModalOpen, setIsModalOpen] = useState(false);

useEffect(() => {
  // TITLE
  document.title =
    "Vedic Maths Training | Online Mental Math Course";

  // DESCRIPTION
  const descriptionContent =
    "Master Vedic Maths techniques with online training. Improve mental math speed, calculation skills & confidence with expert tutors. Book your free demo today.";

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
    "vedic maths classes for kids, learn vedic maths online, vedic mathematics course, fast calculation techniques for kids, mental maths classes, vedic maths training online";

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
    "https://www.learntelugunow.com/vedic-maths-training";

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
      <section className="vedic-hero-section">
        <div className="vedic-hero-bg">
          <img src={courseBanner} alt="Vedic Maths Training" className="vedic-hero-img" />
          <div className="vedic-hero-overlay" />
        </div>
        <div className="vedic-hero-content">
          <h1 className="vedic-hero-title">Vedic Maths Training – Online Mental Math Course</h1>
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
                <span className="vedic-about-subtitle">About Vedic Maths</span>
                <h2 className="vedic-about-title">
                  Know Something<br />
                  About Our <span className="vedic-title-highlight">Vedic Maths<img src={titleBg} alt="Title Background" className="vedic-title-bg-image" /></span><br />
                  Training Program<br />
                  At Learn Telugu Now
                </h2>
              </div>
              <div className="vedic-about-text">
                <p>
                Vedic Maths introduces clever ancient Indian calculation techniques that 
make math fast and fun. Students learn special tricks to solve arithmetic 
quickly and mentally, improving calculation speed and logical thinking. In our 
classes, math becomes like solving a puzzle — kids enjoy seeing patterns and 
mastering tricky problems. Available as group workshops or private coaching, 
our Vedic Maths sessions turn ordinary numbers into an exciting challenge. 
                </p>
              </div>
              <div className="vedic-buttons-wrapper">
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

