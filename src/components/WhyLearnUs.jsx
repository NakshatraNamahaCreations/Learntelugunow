import React from "react";
import "../styles/WhyLearnUs.css";

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
                <span className="sub-title-two">Why Choose Learn Telugu Now</span>
                <h2>Why Choose Learn Telugu Now</h2>
              </div>
              <p>
                Learn Telugu Now offers a simple, practical, and effective way to learn Telugu online through structured lessons and expert guidance.
              </p>
              <div className="why-learn-feature">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="feature-three-item">
                      <div className="icon">
                        <img src="/icon10.webp" alt="Icon" />
                      </div>
                      <h4>Expert Telugu Instructors</h4>
                      <div className="feature-content">
                        <p>Our experienced Telugu instructors focus on:</p>
                        <ul>
                          <li>Spoken Telugu clarity</li>
                          <li>Correct pronunciation</li>
                          <li>Practical sentence usage</li>
                          <li>Confidence-building conversation practice</li>
                        </ul>
                        <p>Their teaching approach ensures learners understand Telugu and use it naturally in everyday life.</p>
                      </div>
                      
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="feature-three-item">
                      <div className="icon">
                        <img src="/icon11.webp" alt="Icon" />
                      </div>
                      <h4>Popular Telugu Language Courses</h4>
                      <div className="feature-content">
                        <p>We offer a wide range of Telugu language courses suitable for:</p>
                        <ul>
                          <li>Beginners with no prior knowledge</li>
                          <li>Professionals working in Telugu-speaking environments</li>
                          
                          <li>Students and language enthusiasts</li>
                        </ul>
                        <p>Each course follows a structured learning path that supports steady improvement.</p>
                      </div>
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="col-lg-6">
            <div className="why-learn-image">
              <img src="/Frame 68.png" alt="Learn Telugu Online" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyLearnUs;

