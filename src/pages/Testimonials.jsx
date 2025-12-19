import React from "react";
import "../styles/TestimonialsPage.css";
import Testimonials from "../components/Testimonials";
import Newsletter from "../components/Newsletter";
import testimonialsBanner from "../assets/blogs/img6.jpg";

export default function TestimonialsPage() {
  return (
    <div className="testimonials-page">
      {/* Hero Section */}
      <section className="testimonials-hero-section">
        <div className="testimonials-hero-bg">
          <img src={testimonialsBanner} alt="Testimonials" className="testimonials-hero-img" />
          <div className="testimonials-hero-overlay" />
        </div>
        <div className="testimonials-hero-content">
          <h1 className="testimonials-hero-title">Testimonials</h1>
          <p className="testimonials-hero-description">
            Hear from our students about their learning journey<br />
            and discover how Learntelugunow has transformed their Telugu language skills.
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Newsletter Section */}
      <Newsletter />
    </div>
  );
}

