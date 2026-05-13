import React, { useState } from "react";
import "../styles/PromotionalCards.css";
import advertise1 from "../assets/vectors/advertise1.webp";
import BookDemoModal from "./BookDemoModal";

export default function PromotionalCards() {
  const [isInstructorModalOpen, setIsInstructorModalOpen] = useState(false);

  return (
    <>
      <section className="promotional-cards-section">
        <div className="container">
          <div className="promotional-cards-wrapper">
            {/* Left Card - Become An Instructor */}
            <div className="advertise-item fadeInUp animated delay-0-2s promo-card-instructor">
              <div className="promo-card-content">
                <h2 className="promo-title">Become a Telugu Language Instructor</h2>
                <p className="promo-description">
                  Join Learn Telugu Now as a Telugu language instructor and share your knowledge with students across the world. Teach spoken Telugu online with flexible schedules and structured learning programs.
                </p>
                <button 
                  onClick={() => setIsInstructorModalOpen(true)} 
                  className="promo-btn promo-btn-green"
                >
                  Join as Telugu Instructor <i className="fas fa-arrow-right"></i>
                </button>
              </div>
              <div className="promo-card-image">
                <img src={advertise1} alt="Instructor illustration" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <BookDemoModal 
        isOpen={isInstructorModalOpen} 
        onClose={() => setIsInstructorModalOpen(false)}
        courseName="Become an Instructor"
      />
    </>
  );
}

