import React, { useState } from "react";
import "../styles/ReadingWritingTeluguKids.css";
import courseBanner from "../assets/blogs/img4.avif";
import readingWritingImage from "../assets/courses/readingwriting.jpg";
import titleBg from "../assets/feature-icon/title-bg.webp";
import BookDemoModal from "./BookDemoModal";

export default function ReadingWritingTeluguKids() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <section className="reading-writing-kids-hero-section">
        <div className="reading-writing-kids-hero-bg">
          <img src={courseBanner} alt="Reading and Writing Telugu for Kids" className="reading-writing-kids-hero-img" />
          <div className="reading-writing-kids-hero-overlay" />
        </div>
        <div className="reading-writing-kids-hero-content">
          <h1 className="reading-writing-kids-hero-title">Reading and Writing Telugu for Kids</h1>
          <p className="reading-writing-kids-hero-description">
            Help your kids master the beautiful Telugu language<br />
            with our fun and engaging program designed for children.
          </p>
        </div>
      </section>

      {/* About Course Section */}
      <section className="reading-writing-kids-about-section">
        <div className="container">
          <div className="reading-writing-kids-about-wrapper">
            {/* Left Column - Content */}
            <div className="reading-writing-kids-about-content">
              <div className="reading-writing-kids-about-heading">
                <span className="reading-writing-kids-about-subtitle">ABOUT COURSE</span>
                <h2 className="reading-writing-kids-about-title">
                  Know Something<br />
                  About Our Reading and Writing <span className="reading-writing-kids-title-highlight">Telugu<img src={titleBg} alt="Title Background" className="reading-writing-kids-title-bg-image" /></span><br />
                  Training Program<br />
                  At Learntelugunow
                </h2>
              </div>
              <div className={`reading-writing-kids-about-text ${isExpanded ? 'expanded' : ''}`}>
                <p>
                  Looking for a tutor for your kids to learn Telugu? Kicktheknack is the best platform that connects students with our tutors all over the world. There are 75 million Telugu-speaking people and Telugu language ranked as the 15th-most spoken language in the world, it's a great option to learn Telugu in our kicktheknack. Our site offers simple, free, easy lessons for common words, structures & expressions in Telugu. The Telugu language is called as 'Italian of the East' because all words in Telugu end with a vowel sound — such as "du, mu, vu, lu" — as in Italian.
                </p>
                <p>
                  Telugu is derived from two base languages: Sanskrit and Dravidian. Telugu Accepts foreign words with accept and ease. There are number of reaons for telugu to be Unique.
                </p>
                {isExpanded && (
                  <>
                    <p>
                      Srikrishnadevaraya of the vijayanagara Empire used the Phrase "desha bhashalandu telugu lessa" because he felt that of all Languages spoken during his reign, Telugu was sweetest. Since Telugu is a sweetest language, we called it as "Sundhara Telugu"( which Means "Sweet Telugu"). Let's Book a demo to learn our sweet Telugu Language.
                    </p>
                    <div className="reading-writing-kids-what-you-learn">
                      <h3>What Will You Learn?</h3>
                      <ul className="reading-writing-kids-learn-list">
                        <li>The students will get to know how to read, write and speak Telugu</li>
                        <li>Can recognize all the letters in Telugu language</li>
                        <li>Can understand , read and write basic essential words</li>
                        <li>Learn 90% of the vocabulary used on daily basis</li>
                      </ul>
                    </div>
                  </>
                )}
              </div>
              <div className="reading-writing-kids-buttons-wrapper">
                <button 
                  className="reading-writing-kids-show-more-btn"
                  onClick={() => setIsExpanded(!isExpanded)}
                >
                  {isExpanded ? 'Show Less' : 'Show More'}
                  <i className={`fas fa-chevron-${isExpanded ? 'up' : 'down'}`}></i>
                </button>
                <button 
                  className="reading-writing-kids-book-demo-btn"
                  onClick={() => setIsModalOpen(true)}
                >
                  Book Demo
                </button>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="reading-writing-kids-about-image">
              <img src={readingWritingImage} alt="Reading and Writing Telugu for Kids" />
            </div>
          </div>
        </div>
      </section>
      <BookDemoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        courseName="Reading and Writing Telugu for Kids"
      />
    </>
  );
}

