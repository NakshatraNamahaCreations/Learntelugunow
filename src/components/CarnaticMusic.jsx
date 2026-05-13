import React, { useState, useEffect } from "react";
import "../styles/CarnaticMusic.css";
import BookDemoModal from "./BookDemoModal";

export default function CarnaticMusic() {
  const [isModalOpen, setIsModalOpen] = useState(false);
useEffect(() => {
  // TITLE
  document.title =
    "Carnatic Music Training | Online Vocal & Theory Classes";

  // DESCRIPTION
  const descriptionContent =
    "Learn Carnatic music online with expert instructors. Improve vocal skills, swara training, rhythm, and music theory with personalized sessions.";

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
    "online carnatic music classes, carnatic music classes for kids, carnatic vocal classes online, learn carnatic music online, veena classes online, classical music lessons for kids and adults";

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
    "https://www.learntelugunow.com/carnatic-music-training";

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
      <section className="carnatic-hero-section">
        <div className="carnatic-hero-bg">
          <img src="/carnatic_banner1.png" alt="Carnatic Music" className="carnatic-hero-img" />
          <div className="carnatic-hero-overlay" />
        </div>
        <div className="carnatic-hero-content">
          <h1 className="carnatic-hero-title">Carnatic Music Training – Online Classes</h1>
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
                <div className="carnatic-about-text">
                  <p>
                  Our Carnatic music classes teach South Indian classical singing or 
instruments (such as Veena or Tabla). Carnatic music is an ancient tradition 
that enhances memory, discipline and emotional well‑being. Students learn 
devotional songs (kritis) and rhythmic exercises from qualified gurus. Classes 
can be one‑on‑one or in groups, suitable for young beginners and adult 
learners alike. Through practice and performance, learners connect with 
centuries of cultural heritage while building focus and confidence. The Telugu 
language is especially musical and expressive, making it a perfect 
complement to Carnatic music. 
                  </p>
                </div>
                <div className="carnatic-buttons-wrapper">
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

