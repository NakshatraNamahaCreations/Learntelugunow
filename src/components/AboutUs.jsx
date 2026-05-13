import React, { useEffect } from "react";
import "../styles/AboutUs.css";
import titleBg from "../assets/feature-icon/title-bg.webp";
import StatisticsSection from "./StatisticsSection";
import WhyLearnUs from "./WhyLearnUs";
import CourseCategories from "./CourseCategories";

export default function AboutUs() {
useEffect(() => {
  // TITLE
  document.title =
    "About Learn Telugu Now | Passionate Tutors Teaching Telugu & Indian Heritage";

  // DESCRIPTION
  const descriptionContent =
    "Discover Learn Telugu Now, where experienced women tutors teach Telugu, phonics, Vedic Maths, Carnatic music, and yoga online with care, patience, and cultural pride.";

  let metaDescription = document.querySelector(
    'meta[name="description"]'
  );

  if (!metaDescription) {
    metaDescription = document.createElement("meta");
    metaDescription.setAttribute("name", "description");
    document.head.appendChild(metaDescription);
  }

  metaDescription.setAttribute("content", descriptionContent);

  // KEYWORDS
  const keywordsContent =
    "about learn telugu now, online telugu tutors, telugu classes online, indian heritage learning, telugu language teachers, phonics vedic maths carnatic music yoga classes";

  let metaKeywords = document.querySelector(
    'meta[name="keywords"]'
  );

  if (!metaKeywords) {
    metaKeywords = document.createElement("meta");
    metaKeywords.setAttribute("name", "keywords");
    document.head.appendChild(metaKeywords);
  }

  metaKeywords.setAttribute("content", keywordsContent);

  // CANONICAL
  const canonicalURL =
    "https://www.learntelugunow.com/about";

  let canonicalTag = document.querySelector(
    "link[rel='canonical']"
  );

  if (!canonicalTag) {
    canonicalTag = document.createElement("link");
    canonicalTag.setAttribute("rel", "canonical");
    document.head.appendChild(canonicalTag);
  }

  canonicalTag.setAttribute("href", canonicalURL);

}, []);


  return (
    <>
      {/* Hero Section */}
      <section className="about-hero-section">
        <div className="about-hero-bg">
          <img src="/reading_banner.png" alt="About Us" className="about-hero-img" />
          <div className="about-hero-overlay" />
        </div>
        <div className="about-hero-content">
          <h1 className="about-hero-title">
            <span className="about-hero-title-highlight">About Learn Telugu Now | Passionate Tutors Teaching Telugu & Indian Heritage<img src={titleBg} alt="Title Background" className="about-hero-title-bg-image" /></span>
          </h1>
          <p className="about-hero-description">
            Discover Learn Telugu Now – where experienced women tutors teach Telugu, <br /> Phonics, Vedic Maths, Carnatic music, and Yoga online. Our mission is to <br /> connect children and adults to their Telugu roots with love, and <br /> cultural pride.
          </p>
        </div>
      </section>

      {/* Opportunity for Online Learning Section */}
      <section className="opportunity-section">
        <div className="container">
          <div className="opportunity-header">
            <div className="gsc-heading">
              <div className="sub-title sub-1">
                <span className="tagline">Why <span className="tagline-learn">Learn<img src={titleBg} alt="Title Background" /></span> Telugu with Learn Telugu Now</span>
              </div>
            </div>
            <h2 className="opportunity-title">Your Opportunity to Learn Telugu Online with Confidence</h2>
            <p className="opportunity-description">
              Many learners can comprehend Telugu words but they are reluctant to speak. Learn Telugu Now is aimed at getting rid of this fright by concentrating on the spoken Telugu which is used in the daily life. Our learning approach focuses on building confidence through practical, real-world conversations.
            </p>
          </div>

          <div className="feature-three-grid">
            {/* Card 1: Learn Telugu from Expert Instructors */}
            <div className="feature-three__single feature-three__single--green">
              <div className="feature-three__wrapper">
                <div className="feature-three__content">
                  <div className="feature-three__icon">
                    <i className="fas fa-users"></i>
                  </div>
                  <h3 className="feature-three__title">Learn Telugu from Expert Instructors</h3>
                  <div className="feature-three__desc">
                    <p>Understand Telugu with the help of certified native speakers who not only know the language but also the common problems faced by the learners. Our instructors offer:</p>
                    <ul>
                      <li>Clear explanations in simple language</li>
                      <li>Real, life examples from daily Telugu conversations</li>
                      <li>Uninterrupted support to change your pronunciation and to make your sentences flow smoothly</li>
                    </ul>
                    <p>Such professional help makes it possible for learners to speak Telugu in a natural way and without any kind of hesitation.</p>
                  </div>
                 
                </div>
                <div className="feature-three__image">
                  <img src="/Frame 67 (1) (1).png" alt="Learn Telugu from Expert Instructors" />
                </div>
              </div>
            </div>

            {/* Card 2: Comprehensive Telugu Learning Topics (Blue background) */}
            <div className="feature-three__single feature-three__single--blue">
              <div className="feature-three__wrapper">
                <div className="feature-three__content">
                  <div className="feature-three__icon feature-three__icon--white">
                    <i className="fas fa-award"></i>
                  </div>
                  <h3 className="feature-three__title feature-three__title--white">Comprehensive Telugu Learning Topics</h3>
                  <div className="feature-three__desc feature-three__desc--white">
                    <p>Our Telugu courses cover everything needed for complete language understanding, including:</p>
                    <ul>
                      <li>Spoken Telugu for daily communication</li>
                      <li>Grammar basics explained simply</li>
                      <li>Vocabulary used in real conversations</li>
                      <li>Sentence formation and pronunciation</li>
                      <li>Cultural context and respectful usage</li>
                    </ul>
                    <p>Each topic is structured to help learners progress smoothly from beginner to confident speaker.</p>
                  </div>
                  
                </div>
                <div className="feature-three__image">
                  <img src="/Frame 69 (1).png" alt="Comprehensive Telugu Learning Topics" />
                </div>
              </div>
            </div>

            {/* Card 3: Flexible Online Telugu Learning */}
            <div className="feature-three__single feature-three__single--orange">
              <div className="feature-three__wrapper">
                <div className="feature-three__content">
                  <div className="feature-three__icon">
                    <i className="fas fa-play"></i>
                  </div>
                  <h3 className="feature-three__title">Flexible Online Telugu Learning</h3>
                  <div className="feature-three__desc">
                    <p>Learn Telugu at your own pace with flexible online learning options that fit into your lifestyle. Our platform offers:</p>
                    <ul>
                      <li>Live interactive Telugu classes</li>
                      <li>Recorded lessons for revision</li>
                      <li>Flexible schedules for working professionals and students</li>
                    </ul>
                    <p>This flexibility allows you to learn Telugu comfortably, without pressure.</p>
                  </div>
                 
                </div>
                <div className="feature-three__image">
                  <img src="/frame 66 (3).png" alt="Flexible Online Telugu Learning" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story & Vision Section */}
      <section className="story-vision-section">
        <div className="container">
          <div className="story-vision-wrapper">
            <div className="story-vision-header">
              <div className="gsc-heading">
                <div className="sub-title sub-1">
                  <span className="tagline">Our Story & <span className="tagline-vision">Vision<img src={titleBg} alt="Title Background" /></span></span>
                </div>
              </div>
              <p className="story-vision-subheading">
                A team of passionate women educators dedicated to preserving the Telugu language and culture through love, patience, and fun learning.
              </p>
            </div>

            <div className="story-vision-content">
              <div className="story-section">
                <div className="story-section-wrapper">
                  <div className="story-section-image">
                    <img src="/founder1.PNG" alt="Hemalatha - Founder of Learn Telugu Now" />
                  </div>
                  <div className="story-section-text-content">
                    <h3 className="story-section-title">Meet Mrs. Hemalatha</h3>
                    <p className="story-text">
                      The heart and soul of Learn Telugu Now is Hemalatha, a passionate educator who has dedicated her life to the Telugu language and culture. She spent many years teaching at schools and colleges, inspiring students with her warmth and creativity. When her family moved abroad, Hemalatha noticed that young children often lost touch with their Telugu roots. This inspired her to launch online classes — blending modern technology with traditional teaching methods.
                    </p>
                    <p className="story-text">
                      With over a decade of experience, Hemalatha and her team have guided thousands of learners worldwide. She founded Learn Telugu Now to offer the same caring guidance she provided in person, now available online. Every lesson is infused with her enthusiasm and patience. Hemalatha believes in treating students like family: celebrating every milestone and cheering on each student's progress.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Values Section */}
      <section className="team-values-section">
        <div className="container">
          <div className="team-values-wrapper">
            <div className="team-values-header">
              <div className="gsc-heading">
                <div className="sub-title sub-1">
                  <span className="tagline">Our <span className="tagline-team">Team<img src={titleBg} alt="Title Background" /></span> Values</span>
                </div>
              </div>
            </div>

            <div className="team-values-content">
              <div className="team-values-card">
                <p className="team-values-text">
                  Empathy, passion and dedication drive our all‑women team. Our tutors are often mothers and professionals who restarted their careers through teaching. They bring real‑life experience, kindness and commitment to every lesson. Each teacher shares Hemalatha's vision of making Telugu learning classes a joyful journey.
                </p>
                <p className="team-values-text">
                  We pride ourselves on a warm, supportive learning environment. Small classes and one‑on‑one sessions ensure every student receives personal attention. We tailor lessons to individual goals, whether a child giggles through a Telugu song or an adult practices everyday phrases. Through stories, music and interactive games, Hemalatha and her team spark curiosity and confidence in each student.
                </p>
                <p className="team-values-text team-values-quote">
                  Join our family and discover why so many learners say, "Our teacher feels like family — learning Telugu has never been this fun!" We're here to nurture a community that cherishes our culture, our language and each other.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

     

      {/* Statistics Section */}
      <StatisticsSection />

      {/* Why Learn Us Section */}
      <WhyLearnUs />

      {/* Course Categories Section */}
      <CourseCategories />
    </>
  );
}

