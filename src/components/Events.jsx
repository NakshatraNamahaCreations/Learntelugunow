import React from "react";
import "../styles/Events.css";
import img1 from "../assets/blogs/img1.jpg";
import img2 from "../assets/blogs/img2.jpg";
import img3 from "../assets/blogs/img3.jpg";

const events = [
  {
    id: 1,
    image: img1,
    date: "March 15",
    location: "55 Main Street, USA",
    title: "Telugu Script Mastery Workshop For Beginners"
  },
  {
    id: 2,
    image: img2,
    date: "March 17",
    location: "55 Main Street, USA",
    title: "Advanced Telugu Conversation Practice Session"
  },
  {
    id: 3,
    image: img3,
    date: "March 19",
    location: "55 Main Street, USA",
    title: "Telugu Grammar Fundamentals Interactive Class"
  },
  {
    id: 4,
    image: img1,
    date: "March 23",
    location: "55 Main Street, USA",
    title: "Telugu Cultural Heritage & Language Connection"
  }
];

const Events = () => {
  return (
    <section className="events-section">
      <div className="container">
        <div className="events-header">
          <span className="events-subtitle">Latest News & Blog</span>
          <h2 className="events-title">Learn Every News & Blog</h2>
        </div>

        <div className="events-cards-container">
          <div className="row">
            {events.map((event, index) => (
              <div key={event.id} className="col-xl-6">
                <div className={`event-item-three fadeInUp animated ${index > 0 ? 'delay-0-2s' : ''}`}>
                  <div className="image">
                    <img src={event.image} alt={event.title} />
                    <span className="date">{event.date}</span>
                  </div>
                  <div className="content">
                    <h4>
                      <a href="#contact">{event.title}</a>
                    </h4>
                  </div>
                  <a href="#contact" className="details-link">
                    <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default Events;
