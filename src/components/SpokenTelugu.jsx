import React, { useState, useEffect } from "react";
import "../styles/SpokenTelugu.css";
import titleBg from "../assets/feature-icon/title-bg.webp";
import BookDemoModal from "./BookDemoModal";

export default function SpokenTelugu() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
useEffect(() => {
  // TITLE
  document.title = "Spoken Telugu for Kids and Adults | Learn Telugu Now";

  // DESCRIPTION
  const descriptionContent =
    "Learn spoken Telugu for kids and adults with live one-on-one online classes. Improve conversational Telugu with expert tutors. Book a free demo today.";

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
    "spoken Telugu classes, learn spoken Telugu online, Telugu classes for kids, Telugu speaking course, Telugu language classes online, Telugu lessons for adults";

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
    "https://www.learntelugunow.com/spoken-telugu-for-kids-and-adults";

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
      <section className="spoken-hero-section">
        <div className="spoken-hero-bg">
          <img src="/banner_no_title_1920x797.png" alt="Spoken Telugu for Kids and Adults" className="spoken-hero-img" />
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
                <span className="spoken-about-subtitle">About Spoken Telugu</span>
                <h2 className="spoken-about-title">
                  Know Something<br />
                  About Our <span className="spoken-title-highlight">Spoken Telugu<img src={titleBg} alt="Title Background" className="spoken-title-bg-image" /></span><br />
                  Training Program<br />
                  At Learn Telugu Now
                </h2>
              </div>
              <div className="spoken-about-text">
                <p>
                Our Telugu program includes spoken Telugu, reading & writing and 
academic courses. These lessons are perfect for children who want to 
playfully learn their heritage language, as well as for adults wanting to 
reconnect with Telugu culture. Beginners build basic greetings and alphabet 
skills, while advanced students explore conversational fluency and script. 
Classes are offered one‑on‑one or in small groups for personalized attention. 
By learning Telugu, families find new ways to bond across generations and 
strengthen their cultural identity.
                </p>
              </div>
              <div className="spoken-buttons-wrapper">
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

