import React, { useState } from "react";
import "../styles/ReadingWritingTelugu.css";
import courseBanner from "../assets/courses_banner/course banner.avif";
import readingWritingImage from "../assets/aboutus_images/picture2.avif";
import BookDemoModal from "./BookDemoModal";

export default function ReadingWritingTelugu() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <section className="reading-writing-hero-section">
        <div className="reading-writing-hero-bg">
          <img src={courseBanner} alt="Reading and Writing Telugu for Adults" className="reading-writing-hero-img" />
          <div className="reading-writing-hero-overlay" />
        </div>
        <div className="reading-writing-hero-content">
          <h1 className="reading-writing-hero-title">Reading and Writing Telugu for Adults</h1>
          <p className="reading-writing-hero-description">
            Master the beautiful Telugu language with our comprehensive program<br />
            and learn to read, write, and speak Telugu with confidence.
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
                  <h2>Reading and Writing Telugu for Adults</h2>
                </div>
                <div className={`reading-writing-about-text ${isExpanded ? 'expanded' : ''}`}>
                  <p>
                    Looking for a tutor to learn Telugu? Kicktheknack is the best platform that connects students with our tutors all over the world. There are 75 million Telugu-speaking people and Telugu language ranked as the 15th-most spoken language in the world, it's a great option to learn Telugu in our kicktheknack. Our site offers simple, free, easy lessons for common words, structures & expressions in Telugu. The Telugu language is called as 'Italian of the East' because all words in Telugu end with a vowel sound — such as "du, mu, vu, lu" — as in Italian.
                  </p>
                  <p>
                    Telugu is derived from two base languages: Sanskrit and Dravidian. Telugu Accepts foreign words with accept and ease. There are number of reaons for telugu to be Unique.
                  </p>
                  <p>
                    Srikrishnadevaraya of the vijayanagara Empire used the Phrase "desha bhashalandu telugu lessa" because he felt that of all Languages spoken during his reign, Telugu was sweetest. Since Telugu is a sweetest language, we called it as "Sundhara Telugu"( which Means "Sweet Telugu"). Let's Book a demo to learn our sweet Telugu Language.
                  </p>
                  {isExpanded && (
                    <>
                      <div className="reading-writing-what-you-learn">
                        <h3>What Will You Learn?</h3>
                        <ul className="reading-writing-learn-list">
                          <li>The students will get to know how to read, write and speak Telugu</li>
                          <li>Can recognize all the letters in Telugu language</li>
                          <li>Can understand , read and write basic essential words</li>
                          <li>Learn 90% of the vocabulary used on daily basis</li>
                        </ul>
                      </div>
                    </>
                  )}
                </div>
                <div className="reading-writing-buttons-wrapper">
                  <button 
                    className="reading-writing-show-more-btn"
                    onClick={() => setIsExpanded(!isExpanded)}
                  >
                    {isExpanded ? 'Show Less' : 'Show More'}
                    <i className={`fas fa-chevron-${isExpanded ? 'up' : 'down'}`}></i>
                  </button>
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
                <img src={readingWritingImage} alt="Reading and Writing Telugu for Adults" />
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

