import React from "react";
import "../styles/CourseCategories.css";

// Category Card Component
function CategoryCard({ title, active }) {
  return (
    <div className={`category-card ${active ? "active" : ""}`}>
      <span className="arrow">↗</span>
      <div className="icon">
        {getIcon(title)}
      </div>
      <h4>{title}</h4>
      <a href="#courses" className="category-link"></a>
    </div>
  );
}

// Icon function
function getIcon(type) {
  switch (type) {
    case "Yoga Training":
      return (
        <svg className="category-icon" viewBox="0 0 24 24">
          <circle cx="12" cy="8" r="3" />
          <path d="M6 21c0-3 2.5-5 6-5s6 2 6 5" />
          <path d="M12 12v-2" />
          <path d="M10 14l2-2 2 2" />
          <path d="M8 16l4-4 4 4" />
        </svg>
      );
    case "Carnatic Music":
      return (
        <svg className="category-icon" viewBox="0 0 24 24">
          <path d="M9 18V5l12-2v13" />
          <circle cx="6" cy="18" r="3" />
          <circle cx="18" cy="16" r="3" />
          <path d="M9 9l12-2" />
        </svg>
      );
    case "Phonotics":
      return (
        <svg className="category-icon" viewBox="0 0 24 24">
          <path d="M3 12h18" />
          <path d="M3 6h12" />
          <path d="M3 18h15" />
          <path d="M8 9l2-2 2 2" />
          <path d="M8 15l2-2 2 2" />
          <circle cx="18" cy="9" r="1" />
          <circle cx="20" cy="15" r="1" />
        </svg>
      );
    case "Learn Telugu":
      return (
        <svg className="category-icon" viewBox="0 0 24 24">
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M7 8h10" />
          <path d="M7 12h8" />
          <path d="M7 16h6" />
          <path d="M12 4v4" />
          <path d="M12 20v-4" />
        </svg>
      );
    default:
      return null;
  }
}

const CourseCategories = () => {

  return (
    <section className="course-categories-section">
      <div className="container">
        <div className="course-categories-wrapper">
          {/* Left Column - Content */}
          <div className="course-categories-left">
            <div className="gsc-heading box-align-left">
              <div className="content-inner">
                <div className="sub-title sub-2">
                  <span className="tagline">Which Category Intrest You</span>
                </div>
                <h2 className="title">
                  <span>Browse Our Online Course Categories</span>
                </h2>
                <div className="title-desc">
                  Sit amet consectetur adipiscing sed eiusmod tempore labore dolore magna aliuaes suspendisse ultrice gravida commodo viverra maecenas lacus.
                </div>
                <a className="btn-inline-theme-2" href="#courses">
                  <span>View Categories</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Categories Grid */}
          <div className="course-categories-right">
            <div className="category-grid">
              <CategoryCard title="Yoga Training" />
              <CategoryCard title="Carnatic Music" />
              <CategoryCard title="Phonotics" />
              <CategoryCard title="Learn Telugu" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseCategories;

