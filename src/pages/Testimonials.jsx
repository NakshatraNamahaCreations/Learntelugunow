import React, { useEffect } from "react";
import "../styles/TestimonialsPage.css";
import CaseStudies from "../components/CaseStudies";
import Newsletter from "../components/Newsletter";
import DetailedCaseStudies from "../components/DetailedCaseStudies";

export default function TestimonialsPage() {
useEffect(() => {
  // TITLE
  document.title =
    "Case Studies | Learn Telugu Now Success Stories";

  // DESCRIPTION
  const descriptionContent =
    "Read Learn Telugu Now success stories and case studies. See how students improved in spoken Telugu, reading, writing, and confidence with online classes.";

  let metaDescription = document.querySelector(
    'meta[name="description"]'
  );

  if (!metaDescription) {
    metaDescription = document.createElement("meta");
    metaDescription.setAttribute("name", "description");
    document.head.appendChild(metaDescription);
  }

  metaDescription.setAttribute("content", descriptionContent);

  // KEYWORDS
  const keywordsContent =
    "learn telugu now case studies, student success stories telugu classes, online telugu learning results, phonics music yoga testimonials, telugu learning success stories";

  let metaKeywords = document.querySelector(
    'meta[name="keywords"]'
  );

  if (!metaKeywords) {
    metaKeywords = document.createElement("meta");
    metaKeywords.setAttribute("name", "keywords");
    document.head.appendChild(metaKeywords);
  }

  metaKeywords.setAttribute("content", keywordsContent);

  // CANONICAL
  const canonicalURL =
    "https://www.learntelugunow.com/case-studies";

  let canonicalTag = document.querySelector(
    "link[rel='canonical']"
  );

  if (!canonicalTag) {
    canonicalTag = document.createElement("link");
    canonicalTag.setAttribute("rel", "canonical");
    document.head.appendChild(canonicalTag);
  }

  canonicalTag.setAttribute("href", canonicalURL);

}, []);


  return (
    <div className="testimonials-page">
      {/* Hero Section */}
      <section className="testimonials-hero-section">
        <div className="testimonials-hero-bg">
          <img src="/frame 66 (3).png" alt="Case Studies" className="testimonials-hero-img" />
          <div className="testimonials-hero-overlay" />
        </div>
        <div className="testimonials-hero-content">
          <h1 className="testimonials-hero-title">Case Studies | Learn Telugu Now Success Stories</h1>
          <p className="testimonials-hero-description">
            Read real case studies from students and parents about their<br />
            Telugu, phonics, music, and yoga learning journey. Success stories of cultural<br />
            pride and family connection through Learn Telugu Now.
          </p>
        </div>
      </section>

      {/* Case Studies Section */}
      <CaseStudies />
      <DetailedCaseStudies/>
      {/* Newsletter Section */}
      <Newsletter />
    </div>
  );
}

