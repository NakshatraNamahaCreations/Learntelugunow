import React from "react";
import "../styles/Newsletter.css";
import bgImage from "../assets/blogs/img4.avif";
import titleBg from "../assets/feature-icon/title-bg.webp";

export default function Newsletter() {
  return (
    <section className="newsletter-video-part">
      <div className="newsletter-container">
        {/* Left Section - Video/Image Background */}
        <div className="newsletter-left">
          <div 
            className="newsletter-video-part overlay p-100 rp-50 wow fadeInRight delay-0-2s animated"
            style={{ backgroundImage: `url(${bgImage})` }}
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
              <span className="subtitle">Get In Touch</span>
              <h2 className="title">
                Start Learning <br />
                Telugu Today
              </h2>
              <p className="desc">
                Join thousands of students mastering the beautiful Telugu language. 
                Expert instructors, interactive lessons, and comprehensive courses 
                designed for all skill levels.
              </p>
              
              <a href="#contact" className="btn-contact-us">
                CONTACT US →
              </a>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

