import React, { useEffect, useRef } from "react";
import "../styles/AchieveGoal.css";
import imgLarge from "../assets/blogs/img6.jpg";
import imgMid from "../assets/blogs/img4.avif";

export default function AchieveGoal() {
  const canvasRef = useRef(null);
  const counterValueRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const DPR = window.devicePixelRatio || 1;
    const W = 102;
    const H = 102;

    canvas.width = W * DPR;
    canvas.height = H * DPR;
    canvas.style.width = "85px";
    canvas.style.height = "85px";

    ctx.scale(DPR, DPR);

    const centerX = W / 2;
    const centerY = H / 2;
    const radius = 36;
    const lineWidth = 6;
    const trackColor = "rgba(255,255,255,0.2)";
    const fgColor = "#ffffff";
    const targetPercent = 85;
    let current = 0;
    const startAngle = -Math.PI / 2;

    function drawFrame(p) {
      // Clear canvas
      ctx.clearRect(0, 0, W, H);

      // Draw background track (full circle)
      ctx.beginPath();
      ctx.lineWidth = lineWidth;
      ctx.strokeStyle = trackColor;
      ctx.lineCap = "round";
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.stroke();

      // Draw progress arc (white)
      if (p > 0) {
        const endAngle = startAngle + (Math.PI * 2) * (p / 100);
        ctx.beginPath();
        ctx.strokeStyle = fgColor;
        ctx.lineWidth = lineWidth;
        ctx.lineCap = "round";
        ctx.arc(centerX, centerY, radius, startAngle, endAngle);
        ctx.stroke();
      }
    }

    function animate() {
      if (current < targetPercent) {
        current += 1.8;
        if (current > targetPercent) current = targetPercent;
        drawFrame(current);
        if (counterValueRef.current) {
          counterValueRef.current.textContent = Math.round(current);
        }
        requestAnimationFrame(animate);
      } else {
        drawFrame(targetPercent);
        if (counterValueRef.current) {
          counterValueRef.current.textContent = targetPercent;
        }
      }
    }

    drawFrame(0);
    requestAnimationFrame(animate);
  }, []);

  return (
    <section className="achieve-goal-section">
      <img 
        className="achieve-goal-circle-dots" 
        src="/circle-dots-two.webp" 
        alt="Decorative circle" 
      />
      <div className="container">
        <div className="achieve-goal-wrapper">
          {/* Left Column - Content */}
          <div className="achieve-goal-left">
            {/* Background shape */}
            <div className="bg-shape"></div>
            {/* Rotating circle animation */}
            <img 
              className="hero-circle" 
              src="/circle-dots-two.webp" 
              alt="Decorative circle" 
            />
            <span className="section-subtitle">About Learntelugunow</span>
            <h2 className="main-headline">
              Know Something{" "}
              <span className="title-accent">About Our Programs</span> Culture At Learntelugunow
            </h2>
            <p className="description">
              Discover the beauty of Telugu language through our comprehensive learning programs. Our expert instructors 
              guide you through interactive lessons designed to help you master reading, writing, and speaking Telugu 
              with confidence. Join thousands of students who have successfully achieved fluency through our structured 
              curriculum and personalized learning approach.
            </p>
            <ul className="feature-list">
              <li>
                <span className="check-icon">✓</span>
                Best Instructor & Best Programs
              </li>
              <li>
                <span className="check-icon">✓</span>
                100% ISO Certified Guarantee
              </li>
            </ul>
            <a href="#courses" className="learn-more-btn">
              LEARN MORE
            </a>
          </div>

          {/* Right Column - Image Stack (unchanged) */}
          <div className="achieve-goal-right">
            <div className="stage">
              <div className="image-stack">
                {/* Right tall image */}
                <img className="img-large" src={imgLarge} alt="student laptop" />

                {/* Middle image (foreground large) */}
                <img className="img-mid" src={imgMid} alt="student reading" />

                {/* Green counter card */}
                <div className="saticfiction bg-green br-5 text-white">
                  <span className="counter-number">
                <canvas
                  ref={canvasRef}
                  width="102"
                  height="102"
                  style={{ height: "70px", width: "70px" }}
                ></canvas>
                    <span className="counter-text">
                      <span ref={counterValueRef}>85</span>
                      <span>%</span>
                    </span>
                  </span>
                  <h4>85% Saticfied Students</h4>
                </div>

                {/* Blue experience advisor card on right */}
                <div className="blue-card text-white">
                  <div className="icon">
                    <i className="fas fa-graduation-cap"></i>
                  </div>
                  <h4>
                    Experience<br />Advisor
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
