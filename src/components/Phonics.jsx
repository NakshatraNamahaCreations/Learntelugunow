import React, { useState } from "react";
import "../styles/Phonics.css";
import courseBanner from "../assets/courses_banner/course3.avif";
import phonicsImage from "../assets/courses/phonotics.jpg";
import titleBg from "../assets/feature-icon/title-bg.webp";
import BookDemoModal from "./BookDemoModal";

export default function Phonics() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <section className="phonics-hero-section">
        <div className="phonics-hero-bg">
          <img src={courseBanner} alt="Phonics Training" className="phonics-hero-img" />
          <div className="phonics-hero-overlay" />
        </div>
        <div className="phonics-hero-content">
          <h1 className="phonics-hero-title">Phonics Training</h1>
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
                <span className="phonics-about-subtitle">ABOUT PHONICS</span>
                <h2 className="phonics-about-title">
                  Know Something<br />
                  About Our <span className="phonics-title-highlight">Phonics Training<img src={titleBg} alt="Title Background" className="phonics-title-bg-image" /></span><br />
                  Training Program<br />
                  At Learntelugunow
                </h2>
              </div>
              <div className={`phonics-about-text ${isExpanded ? 'expanded' : ''}`}>
                <p>
                  Phonics is the relationship between letter & its sounds. Learning Phonics will make the child to read, write and spell correctly. In English they are 26 letters but there are around 44 sounds or phonemes.
                </p>
                <p>
                  Build your childhood in Early child Education using phonics, wherever you are in the world, Phonics training is Just a click away!! Click on the demo and have a demo on our Phonics trainings. We will Focus on below concepts.
                </p>
                <ul className="phonics-concepts-list">
                  <li>Introduction to the vowels and consonants and their short sounds</li>
                  <li>Short vowel blends</li>
                  <li>Blending and reading three-letter words (CVC words)</li>
                  <li>Blends and Digraph</li>
                  <li>Long and short vowel sounds</li>
                </ul>
                {isExpanded && (
                  <>
                    <p>
                      No Matter where you are in learning Phonics journey, our kicktheknack Trainers will support you.
                    </p>
                    <p>
                      We have well-trained teachers who can teach Phonics, we can teach for all group of ages including kids & elders. We can teach online live one-one student teacher training using Skype/ Zoom/ Gmeet. Furthermore, we can teach as per individual student needs, syllabus is designed as per student needs.
                    </p>
                    <div className="phonics-what-you-learn">
                      <h3>What Will You Learn?</h3>
                      <ul className="phonics-learn-list">
                        <li>Introduction to the vowels and consonants and their short sounds</li>
                        <li>Short vowel blends</li>
                        <li>Blending and reading three-letter words (CVC words)</li>
                        <li>Blends and Digraph</li>
                        <li>Long and short vowel sounds</li>
                      </ul>
                    </div>
                  </>
                )}
              </div>
              <div className="phonics-buttons-wrapper">
                <button 
                  className="phonics-show-more-btn"
                  onClick={() => setIsExpanded(!isExpanded)}
                >
                  {isExpanded ? 'Show Less' : 'Show More'}
                  <i className={`fas fa-chevron-${isExpanded ? 'up' : 'down'}`}></i>
                </button>
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
              <img src={phonicsImage} alt="Phonics Training" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

