import React, { useState } from "react";
import "../styles/FAQ.css";
import titleBg from "../assets/feature-icon/title-bg.webp";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How long does it take to learn Telugu?",
      answer: "Everyone learns at their own pace. Many children start speaking simple Telugu phrases within a few months of weekly classes. With consistent practice, beginners can attain basic conversational skills in 6–12 months. Reading and writing Telugu script often comes faster – our specialized program can teach script literacy in as little as 20 hours. Progress depends on age, practice time and how regularly learners review outside class."
    },
    {
      question: "Is Telugu difficult for non‑native speakers?",
      answer: "Telugu has its challenges, but young children pick it up quickly with fun, play‑based lessons. The script might look different, but our step‑by‑step approach makes it easy. Even adults find themselves enjoying the learning process. Telugu's phonetic alphabet means once you learn the sounds, you can read any word!"
    },
    {
      question: "Do you offer one‑on‑one classes?",
      answer: "Yes! Our core offering is live one‑on‑one Telugu classes, ideal for focused learning. We also offer small group classes for students who enjoy learning with peers. One‑on‑one classes ensure that the tutor tailors each lesson to the student's interests and pace. Many parents say this personal attention accelerates their child's progress and builds confidence faster than in a large class."
    },
    {
      question: "What if I need to cancel or reschedule a lesson?",
      answer: "We understand plans change. You can reschedule any lesson by giving at least 24 hours' notice to your tutor – there's no extra charge. We'll gladly find a new time slot that works for you. If something urgent comes up last minute, just let us know and we'll accommodate you whenever possible."
    },
    {
      question: "What is your refund policy?",
      answer: "We stand by the quality of our teaching. If you are not satisfied after the first paid lesson, let us know and we will refund 50% of that lesson's fee. (Please note, free demo lessons are not refundable since they cost nothing.) We want you to feel confident that there is no risk in trying our classes."
    },
    {
      question: "Can my child learn Telugu online even if they've never heard it?",
      answer: "Absolutely. Our experienced tutors are skilled at starting from zero. For young children, we use games, stories and visual aids. For students who have heard some Telugu, we reinforce what they know and help them grow. Many beginners start understanding basic phrases within weeks. Online classes work very well because our native teachers use expressive methods to make the language come alive on screen."
    },
    {
      question: "How do you schedule classes for US students?",
      answer: "Our tutors in India adjust their schedules to align with US time zones. For example, an afternoon class in India is morning in the US.We understand the challenges of different time zones. Our team works with US-based families to find suitable class timings that work well for both the student and the tutor. While options may vary, we always strive for a convenient and consistent schedule."
    },
    {
      question: "Are there any materials or textbooks needed?",
      answer: "No special books are required. Your tutor will provide all necessary materials (worksheets, stories, exercises) digitally. Students only need a notebook and pen for writing. We focus on interactive, live content rather than formal textbooks, so learning is always engaging and relevant."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="container">
        <div className="faq-wrapper">
          <div className="faq-header">
            <div className="gsc-heading">
              <div className="sub-title sub-1">
                <span className="tagline">FAQ – Frequently Asked Questions</span>
                <img src={titleBg} alt="Title Background" className="title-bg-image" />
              </div>
            </div>
            <p className="faq-subheading">
              Quick answers to help you understand our classes, policies, and how Telugu learning works with us.
            </p>
          </div>

          <div className="faq-content">
            {faqs.map((faq, index) => (
              <div key={index} className={`faq-item ${openIndex === index ? 'active' : ''}`}>
                <div className="faq-question" onClick={() => toggleFAQ(index)}>
                  <h3 className="faq-question-text">{faq.question}</h3>
                  <span className="faq-icon">
                    <i className={`fas fa-chevron-${openIndex === index ? 'up' : 'down'}`}></i>
                  </span>
                </div>
                <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
                  <p className="faq-answer-text">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;






