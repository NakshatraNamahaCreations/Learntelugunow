import React from "react";
import "../styles/Features.css";
import featureIcon1 from "../assets/feature-icon/feature-five-icon1.webp";
import featureIcon2 from "../assets/feature-icon/feature-five-icon2.webp";
import featureIcon3 from "../assets/feature-icon/feature-five-icon3.webp";
import featureIcon4 from "../assets/feature-icon/feature-five-icon4.webp";
import rectangleDots from "../assets/feature-icon/rectangle-dots-two.webp";

export default function Features() {
  return (
    <section className="features-section">
      <div className="container">
        {/* Top row: heading + paragraph (Why Learn Us) */}
        <div className="row large-gap mb-30">
          <div className="col-lg-6">
            <div className="feature-six-left">
              <div className="section-title">
                <span className="sub-title-three">Why Learn Telugu</span>
                <h2>
                  Experience The Best <span className="title-accent">Telugu</span> Learning Platform
              </h2>
                {/* Rectangle dots shape near section title */}
                <img className="hero-rectangle" src={rectangleDots} alt="Shape" />
              </div>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="feature-six-right">
              <p>
                Master the beautiful Telugu language through our comprehensive online courses designed for all skill levels.
                Our expert instructors provide interactive lessons that make learning Telugu engaging and effective. Join
                thousands of students who have successfully achieved fluency in reading, writing, and speaking Telugu.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom row: four feature cards */}
        <div className="row features-cards">
          <div className="col-lg-3 col-sm-6">
            <article className="feature-six-item mt-30">
              <div className="content">
                <div className="icon">
                  <img src={featureIcon1} alt="Exclusive Courses" />
                </div>
                <h5>Comprehensive Telugu Courses</h5>
                <p>
                  Structured curriculum covering beginner to advanced levels with interactive lessons and practice exercises
                </p>
              </div>
            </article>
          </div>

          <div className="col-lg-3 col-sm-6">
            <article className="feature-six-item">
              <div className="content">
                <div className="icon">
                  <img src={featureIcon2} alt="Creative Advisors" />
                </div>
                <h5>Expert Telugu Instructors</h5>
                <p>
                  Learn from native speakers and certified teachers with years of experience in Telugu language instruction
                </p>
              </div>
            </article>
                  </div>

          <div className="col-lg-3 col-sm-6">
            <article className="feature-six-item mt-30">
              <div className="content">
                <div className="icon">
                  <img src={featureIcon3} alt="Certifications" />
                </div>
                <h5>Telugu Language Certificates</h5>
                <p>
                  Earn recognized certificates upon course completion to showcase your Telugu language proficiency
                </p>
              </div>
            </article>
          </div>

          <div className="col-lg-3 col-sm-6">
            <article className="feature-six-item">
              <div className="content">
                <div className="icon">
                  <img src={featureIcon4} alt="Video Tutorials" />
                </div>
                <h5>Interactive Video Lessons</h5>
                <p>
                  Access high-quality video tutorials with pronunciation guides and real-world conversation examples
                </p>
            </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

