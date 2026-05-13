import React from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/blogs/image.png";
import course3Image from "../assets/courses_banner/course3.avif";
import carnaticMusicImage from "../assets/courses_banner/carnatic_music.avif";
import phonicsImage from "../assets/blogs/phonics.png";
import "../styles/Courses.css";

export default function Courses() {
  const courses = [
    {
      id: 1,
      category: "LANGUAGE COURSE",
      title: "Learn Telugu Online (Spoken & Written)",
      description: "Interactive spoken Telugu classes, along with reading and writing lessons, designed for kids and adults. Ideal for heritage learners and beginners looking to confidently connect with their family and culture.",
      image: "/Frame 69 (1).png",
      rating: 5,
      reviews: "3k",
      price: "256.95",
      lessons: 12,
      seats: "Unlimited"
 
    },
    {
      id: 2,
      category: "LANGUAGE COURSE",
      title: "Phonics Classes for Kids",
      description: " Fun, activity-based online phonics classes that help improve English reading, pronunciation, and speaking skills. Ideal for early learners who need a strong language foundation.",
      image: phonicsImage,
      rating: 5,
      reviews: "3k",
      price: "256.95",
      lessons: 12,
      seats: "Unlimited"
    },
    {
      id: 3,
      category: "MATH COURSE",
      title: "Vedic Maths Online",
      description: "Engaging Vedic Maths lessons that teach ancient Indian calculation techniques. Boost your child's mental agility, speed, and confidence in mathematics.",
      image: img1,
      rating: 5,
      reviews: "3k",
      price: "256.95",
      lessons: 12,
      seats: "Unlimited"
    },
    {
      id: 4,
      category: "CULTURAL COURSE",
      title: "Carnatic Music Classes",
      description: "Traditional Carnatic music online classes in singing and instruments. Learn devotional songs and classical ragas while staying connected to South Indian heritage.",
      image: carnaticMusicImage,
      rating: 5,
      reviews: "3k",
      price: "256.95",
      lessons: 12,
      seats: "Unlimited"
    },
    {
      id: 5,
      category: "WELLNESS COURSE",
      title: "Yoga & Wellness for Kids and Adults",
      description: "Gentle, guided online yoga sessions that improve focus, self-esteem, and well-being. A holistic practice for both children and adults.",
      rating: 5,
      image:"/yoga.png",
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
            Featured <span className="title-accent">Courses</span>
            </h2>
            <p className="courses-description">
              Explore our comprehensive range of online learning programs designed to support language development, cultural learning, and overall personal growth. From interactive Telugu classes to engaging phonics, Vedic Maths, Carnatic music, and yoga sessions, our courses are tailored for learners of all ages and skill levels.
            </p>
          </div>
          <div className="courses-header-right">
            <Link to="/vedic-maths-training" className="view-more-btn">
              View All Courses <i className="fas fa-arrow-right"></i>
            </Link>
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
