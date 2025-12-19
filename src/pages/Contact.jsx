import React, { useState } from "react";
import "../styles/Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for contacting us! We will get back to you soon.");
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="contact-hero-section">
        <div className="contact-hero-bg">
          <img src="/courses.avif" alt="Contact Us" className="contact-hero-img" />
          <div className="contact-hero-overlay" />
        </div>
        <div className="contact-hero-content">
          <h1 className="contact-hero-title">Contact Us</h1>
          <p className="contact-hero-description">
            Get in touch with us for any questions or inquiries<br />
            We're here to help you on your Telugu learning journey.
          </p>
        </div>
      </section>

      {/* Contact Info Section with Background Text */}
      <section className="contact-info-area">
        <div className="bg-text">LEARN</div>
        <div className="container">
          <div className="contact-info-wrapper">
            <div className="contact-info-content">
              <div className="section-title">
                <span className="sub-title-two">Get In Touch</span>
                <h2>Contact Information</h2>
              </div>
              <p className="contact-info-description">
                Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
              
              <div className="contact-info-list">
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="contact-info-details">
                    <h4>Address</h4>
                    <p>Flat no: 104, Ss carona apartment, Harsha layout, Kengeri Bangalore 560060</p>
                  </div>
                </div>
                
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className="contact-info-details">
                    <h4>Phone</h4>
                    <p>+91 9380060928</p>
                  </div>
                </div>
                
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <i className="far fa-envelope"></i>
                  </div>
                  <div className="contact-info-details">
                    <h4>E-mail Address</h4>
                    <p>support@kicktheknack.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <form onSubmit={handleSubmit} className="contact-form">
                <a href="#contact-form" className="form-link">Send Us Message</a>
                <h2 className="form-heading">Have Any Questions! Say Hello</h2>
                <div className="form-row">
                  <div className="form-group">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Full Name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      id="email-address"
                      name="email"
                      className="form-control"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email Address"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="form-control"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    id="message"
                    name="message"
                    className="form-control"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    placeholder="Write Message"
                  />
                </div>
                <button type="submit" className="contact-submit-btn">
                  SEND MESSAGE <i className="fas fa-arrow-right"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

