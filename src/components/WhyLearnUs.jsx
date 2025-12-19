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
                <h2>Exclusive Online Course Provide Categories</h2>
              </div>
              <p>
                On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue and equal blame belongs
              </p>
              <div className="why-learn-feature">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="feature-three-item">
                      <div className="icon">
                        <img src="/icon10.webp" alt="Icon" />
                      </div>
                      <h4>Expert Advisors</h4>
                      <p>Accutium doloremque lauda totarem aperiam eaque quaeo inventore veritatis quase</p>
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
                      <p>Quis autem vel eureh enderit voluptate velit esse nihlestiae consuatur veillum dolore</p>
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

