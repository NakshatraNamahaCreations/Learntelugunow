import React, { useEffect, useRef, useState } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/CaseStudies.css";

const caseStudies = [
  {
    id: 1,
    studentName: "Hema",
    parentName: "Amulu",
    course: "Telugu",
    tutorName: "Hemalatha",
    source: "Instagram",
    experience: "Awesome",
    suggestions: ""
  },
  {
    id: 2,
    studentName: "Padmaja",
    parentName: "N/A",
    course: "Telugu",
    tutorName: "Hemalatha Desai",
    source: "Internet",
    experience: "Hemalatha garu is an exceptional instructor. With her customized lessons and attention to my level, I became more confident with the language. She is not only encouraging and supportive, but challenges me and pushes me to increase my level. Her writing instruction is also very methodical and ensures I learn at a good pace.  She is considerate of my busy schedule and responsive to my questions.  I appreciate the consistency of the lessons and her joyful demeanor.",
    suggestions: "I have no suggestions since her instruction is well-developed, well-delivered, and a wonderful overall experience."
  },
  {
    id: 3,
    studentName: "Veda Anand",
    parentName: "Parvathy",
    course: "Spoken english and Phonics",
    tutorName: "Hemalatha",
    source: "Instagram",
    experience: "There is a lot of improvement in Veda after attending this class. I'm really happy to see this",
    suggestions: ""
  },
  {
    id: 4,
    studentName: "Sreenika",
    parentName: "Harshini",
    course: "Spoken english and Phonics",
    tutorName: "Hema",
    source: "Friends/ colleages",
    experience: "Teacher Hema understands the kids moods and tries to teach accordingly. She will make sure the kid is engaged during the class.",
    suggestions: ""
  },
  {
    id: 5,
    studentName: "Pratik & Nishanth",
    parentName: "Divya",
    course: "Telugu",
    tutorName: "Hema Latha",
    source: "Friends/ colleages",
    experience: "Teacher was very good and kids enjoyed her classes.",
    suggestions: ""
  },
  {
    id: 6,
    studentName: "Joshvika",
    parentName: "Kiran Kumar Gopi",
    course: "Telugu",
    tutorName: "Hemalatha",
    source: "Internet",
    experience: "Teacher was friendly and patient with the Kid while she teaches the language. My Kid was happy and had good learnings with the teacher.",
    suggestions: "No suggestions as such, but I definitely recommend the teacher to any kid who is looking for Telugu classes."
  },
  {
    id: 7,
    studentName: "Kriya",
    parentName: "Suresh",
    course: "Telugu",
    tutorName: "Hemalatha",
    source: "Through the tutor",
    experience: "Hemalatha madam has been instrumental in teaching my daughter the Telugu language from the basics. Within a year of weekly classes, my daughter has achieved a moderate level of proficiency in reading, writing, and speaking. The provided study materials are user-friendly, facilitating practice for both students and parents. I highly recommend Hemalatha madam to anyone seeking an excellent online tutor.",
    suggestions: "One suggestion I have is to implement a structured approach that assigns homework to students and reviews it in the subsequent class. This practice can help ensure that both students and parents focus on reinforcing the material that has been taught."
  },
  {
    id: 8,
    studentName: "Nityodita Kusuma",
    parentName: "Shailaja Kusuma",
    course: "Telugu",
    tutorName: "Hemalatha",
    source: "Google",
    experience: "Hemalatha is very good and kind. She is very supportive towards my kids. My kids don't know telugu at all as we live in USA. Now they can read as well write. Going to continue with her further.",
    suggestions: "She is more flexible with class time. I definitely recommend Hemalatha if you are looking for a knowledgeable teacher."
  },
  {
    id: 9,
    studentName: "Eshaan",
    parentName: "Hima",
    course: "Telugu",
    tutorName: "Hemalata",
    source: "Other",
    experience: "Hemalata ma'am is extremely supportive and a dedicated tutor . She has helped my son Eshaan in learning Telugu . When she started tutoring my son  he was getting very low grades for the subject but now he scores above 95 percentage. She makes sure that he is all well prepared for the exam and makes him confident for the exam. I am extremely thankful for her tremendous support and her dedication.",
    suggestions: ""
  },
  {
    id: 10,
    studentName: "Alina",
    parentName: "",
    course: "Telugu",
    tutorName: "Hemalatha",
    source: "Google",
    experience: "Hemalatha is so kind - she has a lot of empathy, explains and repeats things when needed and is following up later, too. I appreciate her patience and that she corrects pronounciation immediately and repeats it again.",
    suggestions: ""
  },
  {
    id: 11,
    studentName: "Reyanshi",
    parentName: "Sravanthi",
    course: "Telugu",
    tutorName: "Hema",
    source: "Friends/ colleages",
    experience: "Hema is very patient with kids, and the material she creates is kid specific - based on kid's interest and progress. She is very friendly with kids and builds rapport easily - which helps in getting the kids concentrate on the topics she is teaching. We are very happy with the progress our kid is making and I have been referring Hema to my friends as well.",
    suggestions: "None, she is doing great!"
  },
  {
    id: 12,
    studentName: "Raag Urs",
    parentName: "",
    course: "Telugu",
    tutorName: "Hema Latha",
    source: "Online",
    experience: "She's a good tutor. She makes sure that the student understands everything before going to the next lesson. And she makes sure the student understood the concept and is confident about learning the language correctly. I recommend Hemalatha mam if you want to learn Telugu.",
    suggestions: ""
  },
  {
    id: 13,
    studentName: "Bobby",
    parentName: "Srinivas",
    course: "Telugu",
    tutorName: "Hemalatha",
    source: "Instagram",
    experience: "My son liked the way of teaching",
    suggestions: ""
  },
  {
    id: 14,
    studentName: "Avyukth korada",
    parentName: "Prasanna tanakala",
    course: "Telugu",
    tutorName: "Hemalatha",
    source: "Instagram",
    experience: "I am completely satisfied with classes",
    suggestions: "None"
  },

];

/* ---------------- CARD COMPONENT ---------------- */
const CaseStudyCard = ({ study, canvasRef, extraClass }) => (
  <div className={`case-study-card ${extraClass}`}>
    {/* Progress */}
    <div className="case-study-progress">
      <canvas ref={canvasRef} width="102" height="102" />
      <div className="progress-text">
        <span>100</span><span>%</span>
      </div>
    </div>

    {/* Content */}
    <div className="case-study-content">
      <div className="case-study-header">
        <h3 className="student-name">{study.studentName}</h3>
        {study.parentName && study.parentName !== "N/A" && (
          <p className="parent-name">Parent: {study.parentName}</p>
        )}
      </div>

      <div className="case-study-details">
        <div className="detail-item">
          <span className="detail-label">Course:</span>
          <span className="detail-value">{study.course}</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Tutor:</span>
          <span className="detail-value">{study.tutorName}</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Source:</span>
          <span className="detail-value">{study.source}</span>
        </div>
      </div>

      <div className="case-study-experience">
        <h4>Experience</h4>
        <p>{study.experience}</p>
      </div>

      {study.suggestions && study.suggestions !== "None" && (
        <div className="case-study-suggestions">
          <h4>Suggestions</h4>
          <p>{study.suggestions}</p>
        </div>
      )}

      <div className="case-study-stars">
        {[...Array(5)].map((_, i) => (
          <i key={i} className="fas fa-star" />
        ))}
      </div>
    </div>
  </div>
);

/* ---------------- MAIN COMPONENT ---------------- */
export default function CaseStudies() {
  const canvasRefs = useRef([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  /* ---------- Canvas Animation ---------- */
  useEffect(() => {
    canvasRefs.current.forEach((canvas) => {
      if (!canvas) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const DPR = window.devicePixelRatio || 1;
      const W = 102;
      const H = 102;

      canvas.width = W * DPR;
      canvas.height = H * DPR;
      canvas.style.width = "85px";
      canvas.style.height = "85px";

      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);

      const center = W / 2;
      const radius = 36;
      const startAngle = -Math.PI / 2;
      let current = 0;

      const draw = (p) => {
        ctx.clearRect(0, 0, W, H);

        ctx.beginPath();
        ctx.lineWidth = 6;
        ctx.strokeStyle = "rgba(30,39,68,0.2)";
        ctx.arc(center, center, radius, 0, Math.PI * 2);
        ctx.stroke();

        ctx.beginPath();
        ctx.strokeStyle = "#1E2744";
        ctx.arc(
          center,
          center,
          radius,
          startAngle,
          startAngle + (Math.PI * 2 * p) / 100
        );
        ctx.stroke();
      };

      const animate = () => {
        if (current < 100) {
          current += 2;
          draw(current);
          requestAnimationFrame(animate);
        } else {
          draw(100);
        }
      };

      animate();
    });
  }, [isMobile]);

  /* ---------- Resize ---------- */
  useEffect(() => {
    const resize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  /* ---------- Slider Settings ---------- */
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    adaptiveHeight: false,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <section className="case-studies-section">
      <img
        className="case-studies-circle-dots"
        src="/circle-dots-two.webp"
        alt="Decorative circle"
      />

      <div className="container">
        {/* Header */}
        <div className="case-studies-header scroll-visible">
          <span className="case-studies-label">CASE STUDIES</span>
          <h2 className="case-studies-title">
            Real Success Stories from Our{" "}
            <span className="title-accent">Students</span>
          </h2>
          <p className="case-studies-description">
            Discover how our personalized approach to Telugu learning has
            transformed lives worldwide.
          </p>
        </div>

        {/* Cards */}
        <div className="case-studies-wrap">
          {isMobile ? (
            <div className="case-studies-mobile-list">
              {caseStudies.map((study, index) => (
                <CaseStudyCard
                  key={study.id}
                  study={study}
                  canvasRef={(el) => (canvasRefs.current[index] = el)}
                  extraClass="scroll-visible"
                />
              ))}
            </div>
          ) : (
            <Slider {...settings}>
              {caseStudies.map((study, index) => (
                <CaseStudyCard
                  key={study.id}
                  study={study}
                  canvasRef={(el) => (canvasRefs.current[index] = el)}
                 extraClass="scroll-visible"
                />
              ))}
            </Slider>
          )}
        </div>
      </div>
    </section>
  );
}