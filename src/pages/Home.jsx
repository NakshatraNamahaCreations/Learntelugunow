import React, { useEffect } from 'react'
import HeroSection from '../components/HeroSection'
import HeroContent from '../components/HeroContent'
import Features from '../components/Features'
import Courses from '../components/Courses'
import AchieveGoal from '../components/AchieveGoal'
import CampusVisit from '../components/CampusVisit'
import StudentsReview from '../components/StudentsReview'
import Testimonials from '../components/Testimonials'
import PromotionalCards from '../components/PromotionalCards'
import Events from '../components/Events'
import Blog from '../components/Blog'
import Newsletter from '../components/Newsletter'

export default function Home() {
useEffect(() => {
  // TITLE
  document.title =
    "Learn Telugu Online | One-on-One Telugu Classes for Kids & Adults";

  // DESCRIPTION
  const descriptionContent =
    "Learn Telugu online with expert tutors. One-on-one spoken Telugu classes for kids and adults with flexible timings. Book a free demo today.";

  let metaDescription = document.querySelector(
    'meta[name="description"]'
  );

  if (metaDescription) {
    metaDescription.setAttribute("content", descriptionContent);
  } else {
    const meta = document.createElement("meta");
    meta.setAttribute("name", "description");
    meta.setAttribute("content", descriptionContent);
    document.head.appendChild(meta);
  }

  // KEYWORDS
  const keywordsContent =
    "learn Telugu online, online Telugu classes, spoken Telugu course, Telugu classes for kids, Telugu tutor online, learn Telugu speaking, Telugu language classes online";

  let metaKeywords = document.querySelector(
    'meta[name="keywords"]'
  );

  if (metaKeywords) {
    metaKeywords.setAttribute("content", keywordsContent);
  } else {
    const meta = document.createElement("meta");
    meta.setAttribute("name", "keywords");
    meta.setAttribute("content", keywordsContent);
    document.head.appendChild(meta);
  }

  // CANONICAL URL
  const canonicalURL = "https://www.learntelugunow.com";

  let canonicalTag = document.querySelector(
    "link[rel='canonical']"
  );

  if (canonicalTag) {
    canonicalTag.setAttribute("href", canonicalURL);
  } else {
    const link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    link.setAttribute("href", canonicalURL);
    document.head.appendChild(link);
  }

}, []);


  return (
    <>
      <HeroSection />
      <HeroContent />
      <AchieveGoal />
      <Features />
      <Testimonials />
      <Courses />
      <PromotionalCards />
      {/* <Events /> */}
      <Newsletter />
    </>
  )
}












