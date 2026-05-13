import React, { useEffect, useRef } from "react";
import "../styles/StatisticsSection.css";

const StatisticsSection = () => {
  const countersRef = useRef([]);

  useEffect(() => {
    const counters = countersRef.current;

    if (!("IntersectionObserver" in window)) {
      // fallback: just set final values
      counters.forEach((c) => {
        if (c) {
          const suffix = c.dataset.suffix || "";
          const value = c.dataset.value || "0";
          c.textContent = value + suffix;
        }
      });
      return;
    }

    function animateCount(el, to, suffix) {
      const duration = 2000; // ms
      const start = performance.now();
      const from = 0;
      const diff = to - from;

      function step(ts) {
        const t = Math.min(1, (ts - start) / duration);
        const eased = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t; // easeInOutQuad
        const current = Math.floor(from + diff * eased);
        el.textContent = current + suffix;
        if (t < 1) {
          requestAnimationFrame(step);
        } else {
          el.textContent = to + suffix;
        }
      }
      requestAnimationFrame(step);
    }

    const obs = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const to = parseInt(el.dataset.value, 10) || 0;
            const suffix = el.dataset.suffix || "";
            animateCount(el, to, suffix);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.3 }
    );

    counters.forEach((c) => {
      if (c) obs.observe(c);
    });

    return () => {
      counters.forEach((c) => {
        if (c) obs.unobserve(c);
      });
    };
  }, []);

  return (
    <section className="statistics-section">
      <img 
        className="statistics-circle-dots" 
        src="/circle-dots.webp" 
        alt="Decorative circle" 
      />
      <img 
        className="statistics-rectangle-dots" 
        src="/rectangle-dots.webp" 
        alt="Decorative rectangle" 
      />
      <div className="statistics-container">
        <div className="statistics-inner">
          {/* First Counter - Member Active */}
          <div className="statistics-item">
            <div className="statistics-icon">
              <i className="mdi mdi-account-group"></i>
            </div>
            <div className="statistics-content">
              <div className="statistics-number-wrapper">
                <span
                  className="statistics-number"
                  data-value="47"
                  data-suffix="K+"
                  ref={(el) => (countersRef.current[0] = el)}
                >
                  0K+
                </span>
              </div>
              <div className="statistics-title">MEMBER ACTIVE</div>
            </div>
          </div>

          {/* Divider */}
          <div className="statistics-divider"></div>

          {/* Second Counter - Online Courses */}
          <div className="statistics-item">
            <div className="statistics-icon">
              <i className="mdi mdi-bookshelf"></i>
            </div>
            <div className="statistics-content">
              <div className="statistics-number-wrapper">
                <span
                  className="statistics-number"
                  data-value="715"
                  data-suffix="+"
                  ref={(el) => (countersRef.current[1] = el)}
                >
                  0+
                </span>
              </div>
              <div className="statistics-title">ONLINE COURSES</div>
            </div>
          </div>

          {/* Divider */}
          <div className="statistics-divider"></div>

          {/* Third Counter - Expert Instructor */}
          <div className="statistics-item">
            <div className="statistics-icon">
              <i className="mdi mdi-school"></i>
            </div>
            <div className="statistics-content">
              <div className="statistics-number-wrapper">
                <span
                  className="statistics-number"
                  data-value="264"
                  data-suffix="+"
                  ref={(el) => (countersRef.current[2] = el)}
                >
                  0+
                </span>
              </div>
              <div className="statistics-title">EXPERT INSTRUCTOR</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;

