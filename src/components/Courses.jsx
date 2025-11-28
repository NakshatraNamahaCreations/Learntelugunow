import React from "react";
import "../styles/Courses.css";

export default function Courses() {
  const courses = [
    {
      title: "Expert Tutors",
      description: "Our skilled educators bring passion and proficiency to guide you on your Telugu learning journey, ensuring a personalized and impactful learning experience.",
      color: "#07294d"
    },
    {
      title: "Premium Courses",
      description: "Elevate your Telugu learning experience with expert-led content tailored for excellence and fluency.",
      color: "#2a8a73"
    },
    {
      title: "Earn Certificate",
      description: "Earn a certificate upon course completion to showcase your Telugu language proficiency.",
      color: "#ff9800"
    }
  ];


  return (
    <section className="courses-section" id="courses">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="section-title mt-40">
              <h2 className="title">Achieve your goal with Learntelugunow</h2>
              <p>Learning often happens in classrooms but it doesn't have to. Embrace flexible learning experiences anytime, anywhere! </p>
            </div>
          </div>
        </div>

        <div className="courses-wrapper">
          <div className="row">
            {courses.map((course, index) => (
              <div key={index} className="col-lg-4 col-sm-6 courses-col">
                <div className="single-courses mt-30" style={{ backgroundColor: course.color }}>
                  <h4 className="courses-title">
                    <a href="#">{course.title}</a>
                  </h4>
                  <p className="course-description">{course.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

