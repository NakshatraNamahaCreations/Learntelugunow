import React from "react";
import "../styles/WhyLearnUs.css";
import rightImage from "../assets/aboutus_images/two-colleagues-working-laptop.jpg";

const WhyLearnUs = () => {
  return (
    <section className="why-learn-section">
      <img 
        className="why-learn-circle-dots" 
        src="/circle-dots-two.webp" 
        alt="Decorative circle" 
      />
      <div className="container">
        <div className="why-learn-wrapper">
          {/* Left Column - Content */}
          <div className="col-lg-6">
            <div className="why-learn-content">
              <div className="section-title">
                <span className="sub-title-two">Why Learn Us</span>
                <h2>Why Choose Learntelugunow</h2>
              </div>
              <p>
                We provide comprehensive Telugu language education with expert instructors, flexible learning schedules, and personalized guidance to help you master Telugu effectively.
              </p>
              <div className="why-learn-feature">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="feature-three-item">
                      <div className="icon">
                        <img src="/icon10.webp" alt="Icon" />
                      </div>
                      <h4>Expert Advisors</h4>
                      <p>Learn from certified Telugu instructors with years of teaching experience and native language expertise.</p>
                      <a href="#about" className="read-more color-two">
                        Read more <i className="fas fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="feature-three-item">
                      <div className="icon">
                        <img src="/icon11.webp" alt="Icon" />
                      </div>
                      <h4>Popular Courses</h4>
                      <p>Choose from a wide range of Telugu courses including reading, writing, speaking, and academic syllabus programs.</p>
                      <a href="#about" className="read-more color-two">
                        Read more <i className="fas fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="col-lg-6">
            <div className="why-learn-image">
              <img src={rightImage} alt="Two colleagues working on laptop" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyLearnUs;

