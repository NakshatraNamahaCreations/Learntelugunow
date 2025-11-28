import React, { useState } from "react";
import "../styles/Events.css";

const Events = () => {
  const [activeCourse, setActiveCourse] = useState("yoga");

  const testimonials = {
    yoga: [
      {
        name: "Sarah Johnson",
        designation: "Yoga Training Student",
        text: "The yoga training course at Learntelugunow has transformed my practice. The instructors are knowledgeable and the sessions are well-structured. I've gained so much flexibility and inner peace!"
      },
      {
        name: "Michael Chen",
        designation: "Yoga Training Student",
        text: "Amazing experience! The yoga course helped me improve my posture and reduce stress. The online format is convenient and the teachers are very supportive."
      },
      {
        name: "Emily Rodriguez",
        designation: "Yoga Training Student",
        text: "I've completed the yoga training and it exceeded my expectations. The combination of physical poses and breathing techniques is perfectly balanced. Highly recommend!"
      }
    ],
    music: [
      {
        name: "Priya Sharma",
        designation: "Carnatic Music Student",
        text: "Learning Carnatic music here has been a dream come true. The teachers are masters of their craft and the curriculum is comprehensive. I can now sing beautiful ragas!"
      },
      {
        name: "Rajesh Patel",
        designation: "Carnatic Music Student",
        text: "The Carnatic music course is exceptional. The detailed explanations of ragas and talas have deepened my understanding of classical music. Truly enriching!"
      },
      {
        name: "Ananya Reddy",
        designation: "Carnatic Music Student",
        text: "As a music enthusiast, this course has been invaluable. The instructors are patient and the online classes are interactive. I've learned so much about South Indian classical music."
      }
    ],
    reading: [
      {
        name: "Lisa Anderson",
        designation: "Reading & Writing Telugu Student",
        text: "I started with zero knowledge of Telugu script, and now I can read and write fluently! The course is well-paced and the practice exercises are very helpful."
      },
      {
        name: "James Wilson",
        designation: "Reading & Writing Telugu Student",
        text: "The Reading and Writing Telugu course is fantastic. The step-by-step approach makes learning the script easy. I'm now able to read Telugu books and newspapers!"
      },
      {
        name: "Meera Nair",
        designation: "Reading & Writing Telugu Student",
        text: "Perfect course for learning Telugu script. The interactive lessons and expert guidance helped me master reading and writing in just a few months. Highly satisfied!"
      }
    ],
    phonics: [
      {
        name: "Jennifer Lee",
        designation: "Phonics Training Student",
        text: "The phonics training has been a game-changer for my Telugu pronunciation. The systematic approach to letter sounds and blending techniques is excellent. My reading fluency has improved significantly!"
      },
      {
        name: "Thomas Brown",
        designation: "Phonics Training Student",
        text: "Outstanding phonics course! The focus on pronunciation and sound recognition has helped me speak Telugu more naturally. The instructors provide great feedback."
      },
      {
        name: "Sneha Kapoor",
        designation: "Phonics Training Student",
        text: "This phonics training is perfect for building strong reading foundations. The techniques taught here have improved my comprehension and pronunciation. Very effective course!"
      }
    ]
  };

  const courses = [
    { id: "yoga", name: "Yoga Training" },
    { id: "music", name: "Carnatic Music" },
    { id: "reading", name: "Reading & Writing Telugu" },
    { id: "phonics", name: "Phonics Training" }
  ];

  return (
    <section className="events-section">
      <div className="container">
        <div className="event-title-tab-menu">
          <div className="event-title mt-40">
            <h2 className="title">Testimonials</h2>
           
          </div>

          <div className="event-tab-menu-wrapper mt-40">
            <div className="event-tab-menu">
              <ul className="nav" role="tablist">
                {courses.map((course) => (
                  <li key={course.id}>
                    <a
                      className={activeCourse === course.id ? "active" : ""}
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveCourse(course.id);
                      }}
                      role="tab"
                    >
                      {course.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="tab-content event-tab-items">
          <div
            className={`tab-pane fade ${activeCourse === "yoga" ? "show active" : ""}`}
            id="yoga"
            role="tabpanel"
          >
            <div className="row">
              {testimonials.yoga.map((testimonial, index) => (
                <div key={index} className="col-lg-4 col-sm-6">
                  <div className="single-event text-center mt-30">
                    <div className="testimonial-content">
                      <i className="fas fa-quote-right"></i>
                      <p className="testimonial-text">{testimonial.text}</p>
                      <div className="testimonial-meta">
                        <h4 className="testimonial-name">{testimonial.name}</h4>
                        <p className="testimonial-designation">{testimonial.designation}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`tab-pane fade ${activeCourse === "music" ? "show active" : ""}`}
            id="music"
            role="tabpanel"
          >
            <div className="row">
              {testimonials.music.map((testimonial, index) => (
                <div key={index} className="col-lg-4 col-sm-6">
                  <div className="single-event text-center mt-30">
                    <div className="testimonial-content">
                      <i className="fas fa-quote-right"></i>
                      <p className="testimonial-text">{testimonial.text}</p>
                      <div className="testimonial-meta">
                        <h4 className="testimonial-name">{testimonial.name}</h4>
                        <p className="testimonial-designation">{testimonial.designation}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`tab-pane fade ${activeCourse === "reading" ? "show active" : ""}`}
            id="reading"
            role="tabpanel"
          >
            <div className="row">
              {testimonials.reading.map((testimonial, index) => (
                <div key={index} className="col-lg-4 col-sm-6">
                  <div className="single-event text-center mt-30">
                    <div className="testimonial-content">
                      <i className="fas fa-quote-right"></i>
                      <p className="testimonial-text">{testimonial.text}</p>
                      <div className="testimonial-meta">
                        <h4 className="testimonial-name">{testimonial.name}</h4>
                        <p className="testimonial-designation">{testimonial.designation}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`tab-pane fade ${activeCourse === "phonics" ? "show active" : ""}`}
            id="phonics"
            role="tabpanel"
          >
            <div className="row">
              {testimonials.phonics.map((testimonial, index) => (
                <div key={index} className="col-lg-4 col-sm-6">
                  <div className="single-event text-center mt-30">
                    <div className="testimonial-content">
                      <i className="fas fa-quote-right"></i>
                      <p className="testimonial-text">{testimonial.text}</p>
                      <div className="testimonial-meta">
                        <h4 className="testimonial-name">{testimonial.name}</h4>
                        <p className="testimonial-designation">{testimonial.designation}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default Events;

