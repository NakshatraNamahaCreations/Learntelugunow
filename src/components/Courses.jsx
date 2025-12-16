import React from "react";
import "../styles/Courses.css";

export default function Courses() {
  const courses = [
    {
      id: 1,
      category: "Phonics Training",
      title: "Phonics Training",
      description: "Build strong reading foundations with our phonics training program. Learn letter sounds, blending techniques, and pronunciation skills to improve reading fluency and comprehension in Telugu.",
      rating: 5,
      reviews: "3k",
      price: "256.95",
      lessons: 12,
      seats: "Unlimited"
    },
    {
      id: 2,
      category: "Yoga Training ",
      title: "Yoga Training ",
      description:"Discover the ancient practice of yoga with our comprehensive training program. Learn proper techniques, breathing exercises, and meditation to enhance your physical and mental well-being.",
      image: "/yoga.jpg",
      rating: 5,
      reviews: "3k",
      price: "256.95",
      lessons: 12,
      seats: "Unlimited"
    },
    {
      id: 3,
      category: "Carnatic Music",
      title: "Carnatic Music",
      description:"Immerse yourself in the rich tradition of Carnatic music. Master classical ragas, talas, and vocal techniques under the guidance of expert musicians and learn the art of South Indian classical music.",
      image: "/tabla-drums_926199-4360807.avif",
      rating: 5,
      reviews: "3k",
      price: "256.95",
      lessons: 12,
      seats: "Unlimited"
    }
  ];

  return (
    <section className="courses-section">
      <div className="container">
        <div className="courses-header">
          <div className="courses-header-left">
            <h2 className="courses-title">
              Our <span className="title-accent">Courses</span>
            </h2>
            <p className="courses-description">
              Explore our comprehensive range of courses designed to help you master Telugu language, culture, and related skills.
            </p>
          </div>
          <div className="courses-header-right">
            <a href="#all-courses" className="view-more-btn">
              View More <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
        <div className="row">
          {courses.map((course, index) => (
            <div key={course.id} className="col-md-6 col-lg-4">
              <div className={`coach-item fadeInUp animated ${index > 0 ? 'delay-0-4s' : ''}`}>
                <div className="coach-image">
                  <a href="#course" className={`category ${index % 2 === 0 ? 'category-orange' : 'category-green'}`}>{course.category}</a>
                  <img src={course.image || "/courses.avif"} alt={course.title} />
                </div>
                <div className="coach-content">
                  <span className="label">{course.label}</span>
                  <h4>
                    <a href="#course-details">{course.title}</a>
                  </h4>
                  {course.description && (
                    <p className="course-description">{course.description}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
