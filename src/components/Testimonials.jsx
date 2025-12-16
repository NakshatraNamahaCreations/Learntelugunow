import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Testimonials.css";
import img1 from "../assets/blogs/img1.jpg";
import img2 from "../assets/blogs/img2.jpg";
import img3 from "../assets/blogs/img3.jpg";
import img5 from "../assets/blogs/img5.avif";
import img6 from "../assets/blogs/img6.jpg";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    designation: "Language Enthusiast",
    image: img1,
    badge: "Language Enthusiast",
    text: "Learntelugunow has been an incredible journey for me. The structured courses and expert instructors helped me master Telugu in just a few months."
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    designation: "Software Engineer",
    image: img2,
    badge: "Software Engineer",
    text: "As someone who wanted to connect with my Telugu heritage, this platform exceeded my expectations. The comprehensive curriculum and flexible schedule allowed me to learn at my own pace."
  },
  {
    id: 3,
    name: "Anita Reddy",
    designation: "Student",
    image: img3,
    badge: "Verified Student",
    text: "The best investment I made for my language learning journey. The courses are well-designed, the instructors are patient and knowledgeable."
  },
  {
    id: 4,
    name: " Abhijeeth Patel",
    designation: "Business Professional",
    image: img5,
    badge: "Business Professional",
    text: "Learning Telugu through Learntelugunow has opened new opportunities for me in my career. The practical approach and real-world examples made learning enjoyable and effective."
  },
  {
    id: 5,
    name: "Sneha Singh",
    designation: "College Student",
    image: img6,
    badge: "College Student",
    text: "I was amazed by how quickly I progressed with the interactive lessons. The platform's user-friendly interface and supportive community made my learning experience truly exceptional."
  }
];

export default function Testimonials() {
  useEffect(() => {
    // Add WOW animation classes after component mounts
    const testimonialItems = document.querySelectorAll('.testimonial-item');
    testimonialItems.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add('wow', 'fadeInUp', 'animated');
        if (index === 0) {
          item.classList.add('delay-0-4s');
        } else if (index === 1) {
          item.classList.add('delay-0-6s');
        }
      }, 100);
    });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    centerMode: false,
    variableWidth: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 3000
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 3000
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 3000
        }
      }
    ]
  };

  return (
    <section className="testimonials-section text-white">
      <div className="container">
        {/* Decorative background text */}
        <span className="bg-text">LEARN</span>
        
        {/* Decorative images */}
        <img src="/rectangle-dots.webp" alt="Decorative" className="decorative-rectangle" />
        <img src="/circle-dots.webp" alt="Decorative" className="decorative-circle" />

        {/* Header */}
        <div className="testimonials-header">
          <span className="testimonials-label">TESTIMONIALS</span>
          <h2 className="testimonials-title">
            What Our Students Say About Us
          </h2>
        </div>

        {/* Testimonial Cards Slider */}
        <div className="testimonials-wrap">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="testimonial-item wow fadeInUp animated" data-slick-index={index}>
                <div className="image">
                  <img src={testimonial.image} alt={testimonial.name} />
                  <span className="badge">{testimonial.badge}</span>
                </div>
                <div className="content">
                  <h4>{testimonial.name}</h4>
                  <p className="testimonial-text">{testimonial.text}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
