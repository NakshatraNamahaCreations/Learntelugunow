import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/AchieveGoal.css";

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
    const targetPercent = 100;
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
            <span className="section-subtitle">About Learn Telugu Now</span>
            <h2 className="main-headline">
              Learn Telugu Online with Structured <span className="title-accent">Programs</span>
              Designed for Real Communication
            </h2>
            <p className="description">
            Welcome to Learn Telugu Now, your friendly portal to learning Telugu online. Telugu is a rich, vibrant language spoken by over 90 million people 
worldwide. Whether you’re a child eager to chat with grandparents or an 
adult reconnecting with your heritage, our personalized 
online Telugu learning and spoken Telugu classes make learning easy, fun 
and meaningful. Our passionate, native‑speaking tutors guide every student 
with patience and care, building confidence in speaking, reading and writing 
Telugu. 
            </p>
           
            <ul className="feature-list">
              <li>
                <span className="check-icon">✓</span>
                Expert Telugu Language Instructors
              </li>
              <li>
                <span className="check-icon">✓</span>
                Structured Online Telugu Learning Programs
              </li>
            </ul>
            <Link to="/reading-writing-telugu-for-kids-and-adults" className="learn-more-btn">
            Explore Telugu Learning Programs
            </Link>
          </div>

          {/* Right Column - Image Stack (unchanged) */}
          <div className="achieve-goal-right">
            <div className="stage">
              <div className="image-stack">
                {/* Right tall image */}
                <img className="img-large" src="/Frame 67 (1) (1).png" alt="student learning online" />

                {/* Middle image (foreground large) */}
                <img className="img-mid" src="/frame 66 (3).png" alt="student reading" />

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
                      <span ref={counterValueRef}>0</span>
                      <span>%</span>
                    </span>
                  </span>
                  <h4>100% Satisfied Students</h4>
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
