import React, { useEffect, useRef } from "react";
import "../styles/StudentsReview.css";

const StudentsReview = () => {
  const countersRef = useRef([]);

  useEffect(() => {
    const counters = countersRef.current;

    if (!("IntersectionObserver" in window)) {
      // fallback: just set final values
      counters.forEach((c) => {
        if (c) {
          c.textContent = c.dataset.count;
        }
      });
      return;
    }

    function animateCount(el, to) {
      const duration = 1500; // ms
      const start = performance.now();
      const from = 0;
      const diff = to - from;

      function step(ts) {
        const t = Math.min(1, (ts - start) / duration);
        const eased = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t; // easeInOutQuad-ish
        el.textContent = Math.floor(from + diff * eased).toLocaleString();
        if (t < 1) requestAnimationFrame(step);
        else el.textContent = to.toLocaleString();
      }
      requestAnimationFrame(step);
    }

    const obs = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const to = parseInt(el.dataset.count, 10) || 0;
            animateCount(el, to);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.4 }
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
    <section className="students-review">
      <div className="wrapper">
        <div className="review-row">
          {/* LEFT TEXT */}
          <div className="col left-col">
            <h2 className="section-title">
              About us
            </h2>
            <div className="title-divider"></div>
            <p className="description">
              Learntelugunow is a comprehensive online platform dedicated to teaching Telugu language to learners of all ages and skill levels. We offer expert-led courses, interactive learning materials, and flexible schedules to help you master Telugu at your own pace. Our mission is to make Telugu language learning accessible, engaging, and effective for everyone.
            </p>
            <a href="#about" className="read-more-link">
              Read more <i className="fas fa-chevron-right"></i>
            </a>
          </div>

          {/* CENTER IMAGE (person) */}
          <div className="col center-col" aria-hidden="true">
            <img
              className="person-figure"
              src="/ChatGPT Image Nov 27, 2025, 06_27_41 PM.png"
              alt="student showing thumbs up"
            />
          </div>

          {/* RIGHT ABOUT US CARD */}
          <div className="col right-col">
            <div className="single-testimonial-content">
              <div className="content-text">
                <p>
                  <span className="highlight-brand">Learntelugunow</span> offers expert-led Telugu language courses for all skill levels. Master Telugu at your own pace with our comprehensive online platform featuring interactive lessons, flexible schedules, and personalized learning paths designed to help you succeed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* COUNTER BAR */}
      <div className="container">
        <div className="counter-wrapper bg_cover">
          <div className="row">
            <div className="col-sm-3 col-6 counter-col">
              <div className="single-counter mt-30 fadeInLeftBig">
                <span className="counter-count">
                  <span
                    className="count"
                    data-count="3652"
                    ref={(el) => (countersRef.current[0] = el)}
                  >
                    0
                  </span>{" "}
                  +
                </span>
                <p>Students</p>
              </div>
            </div>
            <div className="col-sm-3 col-6 counter-col">
              <div className="single-counter mt-30 fadeInLeftBig">
                <span className="counter-count">
                  <span
                    className="count"
                    data-count="105"
                    ref={(el) => (countersRef.current[1] = el)}
                  >
                    0
                  </span>{" "}
                  +
                </span>
                <p>Faculties</p>
              </div>
            </div>
            <div className="col-sm-3 col-6 counter-col">
              <div className="single-counter mt-30 fadeInLeftBig">
                <span className="counter-count">
                  <span
                    className="count"
                    data-count="120"
                    ref={(el) => (countersRef.current[2] = el)}
                  >
                    0
                  </span>{" "}
                  +
                </span>
                <p>Branches</p>
              </div>
            </div>
            <div className="col-sm-3 col-6 counter-col">
              <div className="single-counter mt-30 fadeInLeftBig">
                <span className="counter-count">
                  <span
                    className="count"
                    data-count="30"
                    ref={(el) => (countersRef.current[3] = el)}
                  >
                    0
                  </span>{" "}
                  +
                </span>
                <p>Awards win</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentsReview;

