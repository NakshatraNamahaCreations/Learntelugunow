import React from "react";
import "../styles/PromotionalCards.css";
import advertise1 from "../assets/vectors/advertise1.webp";
import advertise2 from "../assets/vectors/advertise2.webp";

export default function PromotionalCards() {
  return (
    <section className="promotional-cards-section">
      <div className="container">
        <div className="promotional-cards-wrapper">
          {/* Left Card - Become An Instructor */}
          <div className="advertise-item fadeInUp animated delay-0-2s promo-card-instructor">
            <div className="promo-card-content">
              <h2 className="promo-title">Become An Instructor?</h2>
              <p className="promo-description">
                Sit amet consectetur adipiscing sed eiusmod tempore dolore magna suspendisse
              </p>
              <a href="#instructor" className="promo-btn promo-btn-green">
                JOIN WITH US <i className="fas fa-arrow-right"></i>
              </a>
            </div>
            <div className="promo-card-image">
              <img src={advertise1} alt="Instructor illustration" />
            </div>
          </div>

          {/* Right Card - Get Online Courses */}
          <div className="advertise-item fadeInUp animated delay-0-2s promo-card-courses">
            <div className="promo-card-content">
              <h2 className="promo-title">Get Online Courses</h2>
              <p className="promo-description">
                Amet consectetur adipiscing sed eius tempore dolore magna suspens
              </p>
              <a href="#courses" className="promo-btn promo-btn-orange">
                JOIN WITH US <i className="fas fa-arrow-right"></i>
              </a>
            </div>
            <div className="promo-card-image">
              <img src={advertise2} alt="Online courses illustration" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

