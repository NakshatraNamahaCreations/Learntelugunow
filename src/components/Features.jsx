import React from "react";
import "../styles/Features.css";
import featureIcon1 from "../assets/feature-icon/img21.png";
import featureIcon2 from "../assets/feature-icon/feature-five-icon2.webp";
import featureIcon3 from "../assets/feature-icon/feature-five-icon3.webp";
import featureIcon4 from "../assets/feature-icon/feature-five-icon4.webp";
import rectangleDots from "../assets/feature-icon/rectangle-dots-two.webp";
import titleBg from "../assets/feature-icon/title-bg.webp";

export default function Features() {
  return (
    <section className="features-section">
      <div className="container">
        {/* Top row: heading + paragraph (Why Learn Us) */}
        <div className="row large-gap mb-30">
          <div className="col-lg-6">
            <div className="feature-six-left">
              <div className="section-title">
                <span className="sub-title-three">Key Features</span>
                <h2>
                 
                Learn <span className="title-accent">Telugu<img className="title-bg-image" src={titleBg} alt="Decoration" /></span> Online with Ease

              </h2>
                {/* Rectangle dots shape near section title */}
                <img className="hero-rectangle" src={rectangleDots} alt="Shape" />
              </div>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="feature-six-right">
              <p>
               
              Personalized one-on-one and group classes that help kids and 
adults connect with their Telugu roots, build confidence, and celebrate 
culture.




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
                  <img src={featureIcon1} alt="Live 1-on-1 Classes" />
                </div>
                <h5>
                  <span className="title-accent">Live 1‑on‑1 Classes</span>
</h5>
                <ul>
                  <li>Personalized lessons over Zoom/Google Meet for flexible, interactive learning.</li>
                  <li>Experience the feel of one‑on‑one online live Telugu learning with our friendly tutors.</li>
                </ul>
              </div>
            </article>
          </div>

          <div className="col-lg-3 col-sm-6">
            <article className="feature-six-item">
              <div className="content">
                <div className="icon">
                  <img src={featureIcon2} alt="All Ages & Levels" />
                </div>
                <h5>All Ages & Levels
                </h5>
                <ul>
                  <li>Engaging Telugu classes for kids and adults, from beginner to advanced proficiency.</li>
                  <li>Our Telugu classes online are perfect for heritage speakers and beginners alike.</li>
                </ul>
              </div>
            </article>
                  </div>

          <div className="col-lg-3 col-sm-6">
            <article className="feature-six-item mt-30">
              <div className="content">
                <div className="icon">
                  <img src={featureIcon3} alt="Expert Native Tutors" />
                </div>
                <h5>Expert Native Tutors
                </h5>
                <ul>
                  <li>Learn from experienced Telugu tutors who bring warmth and cultural insight to each lesson.</li>
                  <li>Our mentors treat students like family.</li>
                </ul>
              </div>
            </article>
          </div>

          <div className="col-lg-3 col-sm-6">
            <article className="feature-six-item">
              <div className="content">
                <div className="icon">
                  <img src={featureIcon4} alt="Flexible Scheduling" />
                </div>
                <h5>Flexible Scheduling</h5>
                <ul>
                  <li>We offer convenient class timings (all time zones) to fit busy family schedules.</li>
                </ul>
            </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

