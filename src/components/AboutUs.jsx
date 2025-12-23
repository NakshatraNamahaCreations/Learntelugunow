import React from "react";
import "../styles/AboutUs.css";
import aboutHeroImage from "../assets/aboutus_images/picture2.avif";
import cardImage1 from "../assets/aboutus_images/picture1.avif";
import cardImage2 from "../assets/aboutus_images/two-colleagues-working-laptop.jpg";
import cardImage3 from "../assets/blogs/img4.avif";
import titleBg from "../assets/feature-icon/title-bg.webp";
import StatisticsSection from "./StatisticsSection";
import WhyLearnUs from "./WhyLearnUs";
import CourseCategories from "./CourseCategories";

export default function AboutUs() {
  return (
    <>
      {/* Hero Section */}
      <section className="about-hero-section">
        <div className="about-hero-bg">
          <img src={aboutHeroImage} alt="About Us" className="about-hero-img" />
          <div className="about-hero-overlay" />
        </div>
        <div className="about-hero-content">
          <h1 className="about-hero-title">
            <span className="about-hero-title-highlight">About Us<img src={titleBg} alt="Title Background" className="about-hero-title-bg-image" /></span>
          </h1>
          <p className="about-hero-description">
            Learn Telugu Now is dedicated to providing quality education<br />
            and helping students master the beautiful Telugu language.
          </p>
        </div>
      </section>

      {/* Opportunity for Online Learning Section */}
      <section className="opportunity-section">
        <div className="container">
          <div className="opportunity-header">
            <div className="gsc-heading">
              <div className="sub-title sub-1">
                <span className="tagline">How About Learn Us</span>
                <img src={titleBg} alt="Title Background" className="title-bg-image" />
              </div>
            </div>
            <h2 className="opportunity-title">Opportunity for Online Learning</h2>
          </div>

          <div className="feature-three-grid">
            {/* Card 1: Courses From Experts */}
            <div className="feature-three__single">
              <div className="feature-three__wrapper">
                <div className="feature-three__content">
                  <div className="feature-three__icon">
                    <i className="fas fa-users"></i>
                  </div>
                  <h3 className="feature-three__title">Courses From Experts</h3>
                  <div className="feature-three__desc">
                    Learn Telugu from certified native speakers with personalized guidance and interactive sessions.
                  </div>
                  <div className="feature-three__action">
                    <a className="btn-inline" href="#">Read More</a>
                  </div>
                </div>
                <div className="feature-three__image">
                  <img src={cardImage1} alt="Courses From Experts" />
                </div>
              </div>
            </div>

            {/* Card 2: Over 500+ Quality Topics (Blue background) */}
            <div className="feature-three__single feature-three__single--blue">
              <div className="feature-three__wrapper">
                <div className="feature-three__content">
                  <div className="feature-three__icon feature-three__icon--white">
                    <i className="fas fa-award"></i>
                  </div>
                  <h3 className="feature-three__title feature-three__title--white">Over 500+ Quality Topics</h3>
                  <div className="feature-three__desc feature-three__desc--white">
                    Access comprehensive Telugu learning materials covering grammar, vocabulary, literature, and cultural context.
                  </div>
                  <div className="feature-three__action">
                    <a className="btn-inline btn-inline--white" href="#">Read More →</a>
                  </div>
                </div>
                <div className="feature-three__image">
                  <img src={cardImage2} alt="Quality Topics" />
                </div>
              </div>
            </div>

            {/* Card 3: Program Video Update */}
            <div className="feature-three__single">
              <div className="feature-three__wrapper">
                <div className="feature-three__content">
                  <div className="feature-three__icon">
                    <i className="fas fa-play"></i>
                  </div>
                  <h3 className="feature-three__title">Flexible Learning Schedule</h3>
                  <div className="feature-three__desc">
                    Study at your own pace with flexible online classes, live sessions, and recorded lessons available anytime.
                  </div>
                  <div className="feature-three__action">
                    <a className="btn-inline" href="#">Read More</a>
                  </div>
                </div>
                <div className="feature-three__image">
                  <img src={cardImage3} alt="Flexible Learning Schedule" />
                </div>
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

      {/* About Content Section */}
      <section className="about-us-section">
        <div className="container">
          {/* Content will go here */}
        </div>
      </section>
    </>
  );
}

