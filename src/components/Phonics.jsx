import React, { useState, useEffect } from "react";
import "../styles/Phonics.css";
import titleBg from "../assets/feature-icon/title-bg.webp";
import BookDemoModal from "./BookDemoModal";

export default function Phonics() {
  const [isModalOpen, setIsModalOpen] = useState(false);
useEffect(() => {
  // TITLE
  document.title =
    "Phonics Training | Learn English Sounds & Reading Skills";

  // DESCRIPTION
  const descriptionContent =
    "Join our Phonics Training online to build strong English reading and speaking skills through sound recognition and practice. Ideal for kids & beginners.";

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
    "phonics classes for kids, online phonics classes, phonics learning for children, phonics reading program, phonics course online, early reading skills for kids";

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
    "https://www.learntelugunow.com/phonics-training";

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
      <section className="phonics-hero-section">
        <div className="phonics-hero-bg">
          <img src="/phonics.png" alt="Phonics Training" className="phonics-hero-img" />
          <div className="phonics-hero-overlay" />
        </div>
        <div className="phonics-hero-content">
          <h1 className="phonics-hero-title">Phonics Training – Learn English Sounds & Reading Skills</h1>
          <p className="phonics-hero-description">
            Build strong reading foundations with our phonics training program<br />
            and improve reading fluency and comprehension in Telugu.
          </p>
        </div>
      </section>

      {/* About Course Section */}
      <section className="phonics-about-section">
        <div className="container">
          <div className="phonics-about-wrapper">
            {/* Left Column - Content */}
            <div className="phonics-about-content">
              <div className="phonics-about-heading">
                <span className="phonics-about-subtitle">About Phonics</span>
                <h2 className="phonics-about-title">
                  Know Something<br />
                  About Our <span className="phonics-title-highlight">Phonics Training<img src={titleBg} alt="Title Background" className="phonics-title-bg-image" /></span><br />
                  Training Program<br />
                  At Learn Telugu Now
                </h2>
              </div>
              <div className="phonics-about-text">
                <p>
                Our phonics course helps children master the English alphabetic principles in 
a fun, interactive way. Using songs, games and phonetic stories, young 
learners quickly grasp the relationship between letters and sounds. This 
boosts reading confidence – children soon start decoding words and 
enjoying storybooks on their own. Classes can be one‑on‑one or in small 
groups, ensuring each child gets attention and encouragement. For children 
who speak Telugu at home, learning English through Telugu phonetics can 
build strong bilingual foundations. 
                </p>
                
              
              </div>
              <div className="phonics-buttons-wrapper">
                <button 
                  className="phonics-book-demo-btn"
                  onClick={() => setIsModalOpen(true)}
                >
                  Book Demo
                </button>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="phonics-about-image">
              <img src="/Frame 68.png" alt="Phonics Training" />
            </div>
          </div>
        </div>
      </section>
      <BookDemoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        courseName="Phonics Training"
      />
    </>
  );
}

