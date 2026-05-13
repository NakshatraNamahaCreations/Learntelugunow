import React, { useEffect } from "react";
import "../styles/FAQPage.css";
import FAQ from "../components/FAQ";
import Newsletter from "../components/Newsletter";

export default function FAQPage() {
 useEffect(() => {
  // TITLE
  document.title =
    "Learn Telugu Online FAQs | Telugu Classes Questions & Answers";

  // DESCRIPTION
  const descriptionContent =
    "Find answers to common questions about our online Telugu classes, spoken Telugu lessons, reading and writing courses for kids and adults.";

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
    "learn telugu now faq, telugu classes faq, online telugu learning questions, phonics vedic maths yoga faq, telugu classes payments rescheduling refund policy";

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
    "https://www.learntelugunow.com/faq";

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
    <div className="faq-page">
      {/* Hero Section */}
      <section className="faq-hero-section">
        <div className="faq-hero-bg">
          <img src="/Frame 69.png" alt="FAQ" className="faq-hero-img" />
          <div className="faq-hero-overlay" />
        </div>
        <div className="faq-hero-content">
          <h1 className="faq-hero-title">Learn Telugu Now FAQs | Online Telugu Classes & More</h1>
          <p className="faq-hero-description">
            Get answers about our Telugu online classes, phonics, Vedic Maths, Carnatic<br />
            music, yoga, payments, rescheduling, and refunds. Learn how our flexible, fun<br />
            sessions fit into your life.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* Newsletter Section */}
      <Newsletter />
    </div>
  );
}

