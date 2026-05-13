import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Testimonials.css";

const testimonials = [
  {
    id: 1,
    name: "Meera S.",
    designation: "Orlando",
    text: "We enrolled our 5‑year‑old daughter for Telugu classes, and it has been amazing. Her teacher makes lessons fun with songs and stories, and now she proudly speaks Telugu with her grandparents. We're so happy!"
  },
  {
    id: 2,
    name: "Rajesh K.",
    designation: "San Francisco",
    text: "As an adult learner, I was a little shy to start Telugu. But my tutor was so kind and encouraging. After just a few lessons, I could write simple letters and even sang a Telugu hymn at home. This experience has been heartwarming."
  },
  {
    id: 3,
    name: "Latha P.",
    designation: "New York",
    text: "The program is perfect for busy families. We schedule twice a week, and our son looks forward to each session. I love how the teacher uses games to teach writing – it feels like play! I can already see his reading skills improving."
  },
  {
    id: 4,
    name: "Anitha R.",
    designation: "Houston",
    text: "Learning Telugu as an adult brought back so many memories of my childhood. My tutor was very patient, and I'm proud to now read Telugu newspapers on my own."
  },
  {
    id: 5,
    name: "Priya G.",
    designation: "Seattle",
    text: "Our whole family is grateful to Learn Telugu Now. Even our 2‑year‑old claps and dances along to the Telugu songs taught in class. It has truly become a joyous family affair."
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
  mobileFirst: true,          // 🔥 required
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 1,            // 📱 mobile default
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  pauseOnHover: true,
  adaptiveHeight: true,

  responsive: [
    {
      breakpoint: 1022,
      settings: {
        slidesToShow: 2,       // 🖥 desktop
        slidesToScroll: 1
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
          Testimonials – Success Stories        
          </h2>
          <p className="testimonials-description">Heartfelt stories from families and learners who reconnected with Telugu language and culture through Learn Telugu Now.</p>
        </div>

        {/* Testimonial Cards Slider */}
        <div className="testimonials-wrap">
          <Slider  {...settings}>

            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="testimonial-item wow fadeInUp animated" data-slick-index={index}>
                <div className="testimonial-quote-icon">
                  <i className="fas fa-quote-left"></i>
                </div>
                <div className="content">
                  <div className="testimonial-stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <p className="testimonial-text">{testimonial.text}</p>
                  <div className="testimonial-author">
                    <h4>{testimonial.name}</h4>
                    <span className="testimonial-location">{testimonial.designation}</span>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
