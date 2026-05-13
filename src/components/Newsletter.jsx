import React from "react";
import { Link } from "react-router-dom";
import "../styles/Newsletter.css";
import titleBg from "../assets/feature-icon/title-bg.webp";

export default function Newsletter() {
  return (
    <section className="newsletter-video-part">
      <div className="newsletter-container">
        {/* Left Section - Video/Image Background */}
        <div className="newsletter-left">
          <div 
            className="newsletter-video-part overlay p-100 rp-50 wow fadeInRight delay-0-2s animated"
            style={{ backgroundImage: `url('/Frame 69 (1).png')` }}
          >
            <div className="notification br-5 bg-white text-center">
              <img src="/notification.webp" alt="Notification" />
              <div className="content">
                <h4>Get Our Online Courses</h4>
              </div>
            </div>

            <span className="bg-text">Learn</span>
          </div>
          
          {/* Newsletter Card - Positioned on left section */}
          <section className="newsletter-card wow fadeInLeft delay-0-2s animated">
            <div className="newsletter-content">
              <div className="subtitle-wrapper">
                <span className="subtitle">GET STARTED</span>
                <img className="subtitle-bg-image" src={titleBg} alt="Decoration" />
              </div>
              <h2 className="title">
                Learn Telugu Online with Expert Guidance
              </h2>
              <p className="desc">
                Ready to start your journey? Book a free demo class today and experience how enjoyable and meaningful learning Telugu online can be. Join our community and unlock a world of culture, tradition, and confidence!
              </p>
              
              <Link to="/spoken-telugu-for-kids-and-adults" className="btn-contact-us">
                Enroll in Telugu Courses →
              </Link>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

