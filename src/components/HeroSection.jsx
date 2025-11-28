import React from "react";
import "../styles/HeroSection.css";
import bgImageDefault from "../assets/home_banner/pexels-keira-burton-6146978.jpg";
import image1 from "../assets/rightsideiamges/1.png";
import image2 from "../assets/rightsideiamges/2.png";
import image3 from "../assets/rightsideiamges/3.png";

export default function HeroBanner({
  bgImage = bgImageDefault,
}) {
  return (
    <header className="hb-root" role="banner">
      {/* Background image + dark overlay */}
      <div className="hb-bg" aria-hidden="true">
        <img src={bgImage} alt="" className="hb-bg-img" />
        <div className="hb-dark-overlay" />
      </div>

      {/* Main content area */}
      <div className="hb-container">
        <div className="container">
          <div className="slider-content">
            <h2 className="title" data-animation="fadeInLeft" data-delay="0.2s" style={{animationDelay: '0.2s'}}>
              Learn Telugu Now - Master the Language of Millions
            </h2>
            <p className="slider-description" data-animation="fadeInLeft" data-delay="0.4s" style={{animationDelay: '0.4s'}}>
              Discover the beauty of Telugu language through our comprehensive online courses. 
              Join thousands of learners and start your journey to fluency today.
            </p>
            <ul className="slider-btn">
              <li>
                <a data-animation="fadeInUp" data-delay="0.6s" className="main-btn main-btn-2" href="#courses" tabIndex="0" style={{animationDelay: '0.6s'}}>
                  Start Learning
                </a>
              </li>
              <li>
                <a data-animation="fadeInUp" data-delay="1s" className="main-btn" href="#" tabIndex="0" style={{animationDelay: '1s'}}>
                  Explore Courses
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="hb-grid">
          {/* Content area for headings / CTA */}
          <div className="hb-left" aria-hidden>
            {/* Content will go here */}
          </div>
          
          {/* Right side images */}
          <div className="hb-right-images">
            {/* Image 2 - Left side of image 1 */}
            <div className="hb-image-2">
              <img src={image2} alt="" className="hb-img" />
            </div>
            
            {/* Image 1 - Center (1st place) */}
            <div className="hb-image-1">
              <img src={image1} alt="" className="hb-img" />
            </div>
            
            {/* Image 3 - Right side */}
            <div className="hb-image-3">
              <img src={image3} alt="" className="hb-img" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
