import React, { useState, useEffect } from "react";
import "../styles/Yoga.css";
import BookDemoModal from "./BookDemoModal";

export default function Yoga() {
  const [isModalOpen, setIsModalOpen] = useState(false);
useEffect(() => {
  // TITLE
  document.title =
    "Yoga Training | Online Yoga Classes & Practice";

  // DESCRIPTION
  const descriptionContent =
    "Join Yoga Training online to learn asanas, breathing exercises (pranayama), meditation, and improve flexibility and mindfulness with expert instructors.";

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
    "online yoga classes for kids, yoga classes for adults online, beginner yoga classes online, kids yoga training, online yoga sessions, mindfulness yoga classes";

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
    "https://www.learntelugunow.com/yoga-training";

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
      <section className="yoga-hero-section">
        <div className="yoga-hero-bg">
          <img src="/yoga_banner.png" alt="Yoga Training" className="yoga-hero-img" />
        </div>
        <div className="yoga-hero-content">
          <h1 className="yoga-hero-title"> Yoga Training – Online Yoga Practice & Wellness</h1>
          <p className="yoga-hero-description">
            Discover the ancient practice of yoga with our comprehensive training program<br />
            and enhance your physical and mental well-being.
          </p>
        </div>
      </section>

      {/* About Course Section */}
      <section className="yoga-about-section">
        <img 
          className="yoga-about-circle-dots" 
          src="/circle-dots-two.webp" 
          alt="Decorative circle" 
        />
        <div className="container">
          <div className="yoga-about-wrapper">
            {/* Left Column - Content */}
            <div className="col-lg-6">
              <div className="yoga-about-content">
                <div className="section-title">
                  <span className="sub-title-two">About Yoga</span>
                  <h2>Yoga Training Program</h2>
                </div>
                <div className="yoga-about-text">
                  <p>
                  Our Yoga classes combine physical poses with breathing and mindfulness. 
Yoga helps improve strength and flexibility, and it supports mental focus and 
relaxation. Many young students find their stress melting away and their 
self‑esteem growing. We offer gentle yoga sessions online, guiding each pose 
step‑by‑step in a safe, supportive environment. These classes nurture both 
body and mind, fitting easily into a child's or adult's routine. 
                  </p>
                 
                  <p>
                    <strong>Class Timings:</strong> (6am-7am IST), (10am-11am IST), (5PM-6PM IST).
                  </p>
                </div>
                <div className="yoga-buttons-wrapper">
                  <button 
                    className="yoga-book-demo-btn"
                    onClick={() => setIsModalOpen(true)}
                  >
                    Book Demo
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="col-lg-6">
              <div className="yoga-about-image">
                <img src="/yoga.png" alt="Yoga Training" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <BookDemoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        courseName="Yoga Training"
      />
    </>
  );
}

