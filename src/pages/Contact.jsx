import React, { useState, useEffect } from "react";
import "../styles/Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+91",
    phone: "",
    message: ""
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: ""
  });

  // Validation functions
  const validateName = (name) => {
    if (!name.trim()) {
      return "Name is required";
    }
    if (/\d/.test(name)) {
      return "Name should not contain numbers";
    }
    if (name.trim().length < 2) {
      return "Name must be at least 2 characters";
    }
    return "";
  };

  const validateEmail = (email) => {
    if (!email.trim()) {
      return "Email is required";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return "Please enter a valid email address";
    }
    return "";
  };

  const validatePhone = (phone) => {
    if (!phone.trim()) {
      return "Phone number is required";
    }
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone.replace(/\s/g, ""))) {
      return "Phone number must be exactly 10 digits";
    }
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let processedValue = value;

    // Prevent numbers in name field
    if (name === "name") {
      processedValue = value.replace(/\d/g, "");
    }

    // Only allow digits in phone field
    if (name === "phone") {
      processedValue = value.replace(/\D/g, "").slice(0, 10);
    }

    setFormData({
      ...formData,
      [name]: processedValue
    });

    // Validate on change
    let error = "";
    if (name === "name") {
      error = validateName(processedValue);
    } else if (name === "email") {
      error = validateEmail(processedValue);
    } else if (name === "phone") {
      error = validatePhone(processedValue);
    }

    setErrors({
      ...errors,
      [name]: error
    });
  };

useEffect(() => {
  // TITLE
  document.title =
    "Contact Learn Telugu Now | Telugu Classes for Kids & Adults";

  // DESCRIPTION
  const descriptionContent =
    "Have questions or want to join? Contact Learn Telugu Now for online Telugu classes for kids and adults, spoken lessons, reading, writing, one-on-one tutoring, and heritage learning";

  let metaDescription = document.querySelector(
    'meta[name="description"]'
  );

  if (!metaDescription) {
    metaDescription = document.createElement("meta");
    metaDescription.setAttribute("name", "description");
    document.head.appendChild(metaDescription);
  }

  metaDescription.setAttribute("content", descriptionContent);

  // KEYWORDS
  const keywordsContent =
    "learn telugu online, spoken telugu classes online, telugu classes for kids, telugu reading and writing lessons, one-on-one telugu tutoring, telugu for beginners, telugu heritage learning, online telugu classes with native tutors, telugu language course for children and adults, telugu lessons on zoom, telugu lessons on google meet, online phonics classes for kids, vedic maths online classes, carnatic music online lessons, online yoga for kids and adults, indian heritage classes online";

  let metaKeywords = document.querySelector(
    'meta[name="keywords"]'
  );

  if (!metaKeywords) {
    metaKeywords = document.createElement("meta");
    metaKeywords.setAttribute("name", "keywords");
    document.head.appendChild(metaKeywords);
  }

  metaKeywords.setAttribute("content", keywordsContent);

  // CANONICAL
  const canonicalURL =
    "https://www.learntelugunow.com/contact";

  let canonicalTag = document.querySelector(
    "link[rel='canonical']"
  );

  if (!canonicalTag) {
    canonicalTag = document.createElement("link");
    canonicalTag.setAttribute("rel", "canonical");
    document.head.appendChild(canonicalTag);
  }

  canonicalTag.setAttribute("href", canonicalURL);

}, []);

  const handleSubmit = async (e) => {
  e.preventDefault();

  const nameError = validateName(formData.name);
  const emailError = validateEmail(formData.email);
  const phoneError = validatePhone(formData.phone);

  setErrors({
    name: nameError,
    email: emailError,
    phone: phoneError,
  });

  if (nameError || emailError || phoneError) return;

  try {
    const apiBase =
      import.meta.env.VITE_API_BASE_URL ||
      "https://learntelugu-backend.vercel.app";

    const response = await fetch(
      `${apiBase}/api/learntelugu/contact`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const data = await response.json();

    if (data.success) {
      alert("Thank you! Your message has been sent successfully 🙏");

      setFormData({
        name: "",
        email: "",
        countryCode: "+91",
        phone: "",
        message: "",
      });
    } else {
      alert("Failed to send message. Please try again.");
    }
  } catch (error) {
    console.error("Frontend error:", error);
    alert("Something went wrong. Please try again later.");
  }
};


  return (
    <>
      {/* Hero Section */}
      <section className="contact-hero-section">
        <div className="contact-hero-bg">
          <img src="/contact_banner.png" alt="Contact Us" className="contact-hero-img" />
          <div className="contact-hero-overlay" />
        </div>
        <div className="contact-hero-content">
          <h1 className="contact-hero-title">Get in Touch</h1>
          <p className="contact-hero-description">
            Have questions or want to join? Our team is here to help you<br />
            start your Telugu journey with confidence.
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
                Have questions or want to join? Our team is here to help you start your Telugu journey with confidence.
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
                    <p>Support@learntelugunow.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <form onSubmit={handleSubmit} className="contact-form">
                <a href="#contact-form" className="form-link">Send Us Message</a>
                <h2 className="form-heading">Have Any Questions! Say Hello</h2>
                {/* Row 1: Full Name and Email Address */}
                <div className="form-row">
                  <div className="form-group">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className={`form-control ${errors.name ? "error" : ""}`}
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Full Name *"
                    />
                    {errors.name && <span className="error-message">{errors.name}</span>}
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      id="email-address"
                      name="email"
                      className={`form-control ${errors.email ? "error" : ""}`}
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email Address *"
                    />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                  </div>
                </div>
                {/* Row 2: Country Code and Phone Number */}
                <div className="form-row">
                  <div className="form-group">
                    <select
                      id="countryCode"
                      name="countryCode"
                      className="form-control form-control-country-code-standalone"
                      value={formData.countryCode}
                      onChange={handleChange}
                    >
                      <option value="+1">+1</option>
                      <option value="+44">+44</option>
                      <option value="+61">+61</option>
                      <option value="+91">+91</option>
                      <option value="+971">+971</option>
                      <option value="+65">+65</option>
                      <option value="+60">+60</option>
                      <option value="+27">+27</option>
                      <option value="+86">+86</option>
                      <option value="+81">+81</option>
                      <option value="+49">+49</option>
                      <option value="+33">+33</option>
                      <option value="+39">+39</option>
                      <option value="+34">+34</option>
                      <option value="+31">+31</option>
                      <option value="+41">+41</option>
                      <option value="+46">+46</option>
                      <option value="+47">+47</option>
                      <option value="+45">+45</option>
                      <option value="+32">+32</option>
                      <option value="+351">+351</option>
                      <option value="+353">+353</option>
                      <option value="+64">+64</option>
                      <option value="+52">+52</option>
                      <option value="+55">+55</option>
                      <option value="+54">+54</option>
                      <option value="+57">+57</option>
                      <option value="+56">+56</option>
                      <option value="+51">+51</option>
                      <option value="+66">+66</option>
                      <option value="+62">+62</option>
                      <option value="+63">+63</option>
                      <option value="+84">+84</option>
                      <option value="+82">+82</option>
                      <option value="+90">+90</option>
                      <option value="+20">+20</option>
                      <option value="+234">+234</option>
                      <option value="+254">+254</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className={`form-control ${errors.phone ? "error" : ""}`}
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number * (10 digits)"
                      maxLength="10"
                    />
                    {errors.phone && <span className="error-message">{errors.phone}</span>}
                  </div>
                </div>
                {/* Row 3: Message Field */}
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

