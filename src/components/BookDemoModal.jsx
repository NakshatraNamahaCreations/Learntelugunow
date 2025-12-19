import React, { useState } from "react";
import "../styles/BookDemoModal.css";

export default function BookDemoModal({ isOpen, onClose, courseName }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: courseName || "General Inquiry",
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
    alert("Thank you! We will contact you soon.");
    onClose();
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      course: courseName || "General Inquiry",
      message: ""
    });
  };

  if (!isOpen) return null;

  return (
    <div className="book-demo-overlay" onClick={onClose}>
      <div className="book-demo-modal" onClick={(e) => e.stopPropagation()}>
        <button className="book-demo-close" onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>
        <div className="book-demo-content">
          <h2>{courseName ? "Book a Demo" : "Get Started"}</h2>
          <p className="book-demo-subtitle">
            Fill out the form below and we'll get back to you soon!
          </p>
          <form onSubmit={handleSubmit} className="book-demo-form">
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Enter your phone number"
              />
            </div>
            {courseName && (
              <div className="form-group">
                <label htmlFor="course">Course *</label>
                <input
                  type="text"
                  id="course"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  required
                  readOnly
                />
              </div>
            )}
            <div className="form-group">
              <label htmlFor="message">Message (Optional)</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Any additional information..."
              />
            </div>
            <button type="submit" className="book-demo-submit-btn">
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}



