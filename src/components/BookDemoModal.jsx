import React, { useState, useEffect } from "react";
import "../styles/BookDemoModal.css";

const courses = [
  "Spoken Telugu for Kids and Adults",
  "Reading and Writing Telugu for Kids and Adults",
  "Telugu States Academic Telugu Syllabus Teaching",
  "Vedic Maths Training",
  "Phonics Training",
  "Yoga Training",
  "Carnatic Music"
];

const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kosovo",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
  "Other"
];

const timeZones = [
  "IST (Indian Standard Time)",
  "PST (Pacific Standard Time)",
  "CST (Central Standard Time)",
  "EST (Eastern Standard Time)"
];

const referralSources = [
  "Google Search",
  "Social Media",
  "Friend/Family Referral",
  "Advertisement",
  "Other"
];

const qualifications = [
  "High School",
  "Bachelor's Degree",
  "Master's Degree",
  "PhD",
  "Teaching Certificate",
  "Other"
];

const subjects = [
  "Telugu Language",
  "Spoken Telugu",
  "Reading and Writing Telugu",
  "Telugu Grammar",
  "Carnatic Music",
  "Vedic Maths",
  "Phonics",
  "Yoga",
  "Other"
];

const onlineTeachingOptions = [
  "Yes",
  "No",
  "Maybe"
];

const languages = [
  "Telugu",
  "English",
  "Hindi",
  "Tamil",
  "Kannada",
  "Malayalam",
  "Other"
];

export default function BookDemoModal({ isOpen, onClose, courseName }) {
  const isInstructorForm = courseName === "Become an Instructor";
  
  const [formData, setFormData] = useState({
    // Student form fields
    name: "",
    email: "",
    whatsapp: "",
    country: "",
    course: courseName || "",
    demoDate: "",
    demoTime: "",
    timeZone: "",
    message: "",
    referralSource: "",
    // Instructor form fields
    fullName: "",
    highestQualification: "",
    subjects: "",
    teachingExperience: "",
    onlineTeaching: "",
    languages: "",
    preferredTime: "",
    currentLocation: "",
    contactNumber: "",
    emailAddress: ""
  });

  const [errors, setErrors] = useState({
    // Student form errors
    name: "",
    email: "",
    whatsapp: "",
    country: "",
    course: "",
    demoDate: "",
    demoTime: "",
    timeZone: "",
    referralSource: "",
    // Instructor form errors
    fullName: "",
    highestQualification: "",
    subjects: "",
    teachingExperience: "",
    onlineTeaching: "",
    languages: "",
    preferredTime: "",
    currentLocation: "",
    contactNumber: "",
    emailAddress: ""
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

  const validateRequired = (value, fieldName) => {
    if (!value || !value.trim()) {
      return `${fieldName} is required`;
    }
    return "";
  };

  // Update course when courseName prop changes
  useEffect(() => {
    if (courseName && !isInstructorForm) {
      setFormData(prev => ({
        ...prev,
        course: courseName
      }));
    }
  }, [courseName, isInstructorForm]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let processedValue = value;

    // Prevent numbers in name fields
    if (name === "name" || name === "fullName") {
      processedValue = value.replace(/\d/g, "");
    }

    // Only allow digits in phone fields
    if (name === "whatsapp" || name === "contactNumber") {
      processedValue = value.replace(/\D/g, "").slice(0, 10);
    }

    setFormData({
      ...formData,
      [name]: processedValue
    });

    // Validate on change
    let error = "";
    if (name === "name" || name === "fullName") {
      error = validateName(processedValue);
    } else if (name === "email" || name === "emailAddress") {
      error = validateEmail(processedValue);
    } else if (name === "whatsapp" || name === "contactNumber") {
      error = validatePhone(processedValue);
    } else if (name === "country" || name === "course" || name === "demoDate" || 
               name === "demoTime" || name === "timeZone" || name === "referralSource" ||
               name === "highestQualification" || name === "subjects" || 
               name === "teachingExperience" || name === "onlineTeaching" ||
               name === "languages" || name === "preferredTime" || name === "currentLocation") {
      const fieldName = name.charAt(0).toUpperCase() + name.slice(1).replace(/([A-Z])/g, " $1").trim();
      error = validateRequired(processedValue, fieldName);
    }

    setErrors({
      ...errors,
      [name]: error
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  let newErrors = {};
  let hasErrors = false;

  if (isInstructorForm) {
    newErrors = {
      fullName: validateName(formData.fullName),
      contactNumber: validatePhone(formData.contactNumber),
      emailAddress: validateEmail(formData.emailAddress),
    };
  } else {
    newErrors = {
      name: validateName(formData.name),
      email: validateEmail(formData.email),
      whatsapp: validatePhone(formData.whatsapp),
      country: validateRequired(formData.country, "Country"),
      course: validateRequired(formData.course, "Course"),
      demoDate: validateRequired(formData.demoDate, "Demo Date"),
      demoTime: validateRequired(formData.demoTime, "Demo Time"),
      timeZone: validateRequired(formData.timeZone, "Time Zone"),
    };
  }

  hasErrors = Object.values(newErrors).some(err => err !== "");
  if (hasErrors) {
    setErrors(newErrors);
    return;
  }

  const phoneNumber = isInstructorForm
    ? formData.contactNumber
    : formData.whatsapp;

  const payload = isInstructorForm
    ? {
        formType: "instructor",
        name: formData.fullName,
        email: formData.emailAddress,
        phone: phoneNumber ? phoneNumber.trim() : "",
        qualification: formData.highestQualification,
        subjects: formData.subjects,
        experience: formData.teachingExperience,
        onlineTeaching: formData.onlineTeaching,
        languages: formData.languages,
        preferredTime: formData.preferredTime,
        currentLocation: formData.currentLocation,
      }
    : {
        formType: "demo",
        name: formData.name,
        email: formData.email,
        phone: phoneNumber ? phoneNumber.trim() : "",
        course: formData.course,
        country: formData.country,
        demoDate: formData.demoDate,
        demoTime: formData.demoTime,
        timeZone: formData.timeZone,
        referralSource: formData.referralSource,
        message: formData.message,
      };

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
        body: JSON.stringify(payload),
      }
    );

    const data = await response.json();

    if (data.success) {
      alert("✅ Thank you! We will contact you shortly.");
      onClose();
    } else {
      alert("❌ Failed to submit. Please try again.");
    }
  } catch (error) {
    console.error("Book demo error:", error);
    alert("❌ Something went wrong. Please try later.");
  }
};


  if (!isOpen) return null;

  return (
    <div className="book-demo-overlay" onClick={onClose}>
      <div className="book-demo-modal" onClick={(e) => e.stopPropagation()}>
        <button className="book-demo-close" onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>
        <div className="book-demo-content">
          <h2>{isInstructorForm ? "Teacher Application Form" : "Book Free Demo"}</h2>
          <p className="book-demo-subtitle">
            Fill out the form below and we'll get back to you soon!
          </p>
          <form onSubmit={handleSubmit} className="book-demo-form">
            {isInstructorForm ? (
              <>
                <div className="form-group">
                  <label htmlFor="fullName">Full Name *</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={errors.fullName ? "error" : ""}
                    placeholder="Enter your full name"
                  />
                  {errors.fullName && <span className="error-message">{errors.fullName}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="highestQualification">Highest Qualification *</label>
                  <select
                    id="highestQualification"
                    name="highestQualification"
                    value={formData.highestQualification}
                    onChange={handleChange}
                    className={`form-select ${errors.highestQualification ? "error" : ""}`}
                  >
                    <option value="">Select Qualification</option>
                    {qualifications.map((qual) => (
                      <option key={qual} value={qual}>
                        {qual}
                      </option>
                    ))}
                  </select>
                  {errors.highestQualification && <span className="error-message">{errors.highestQualification}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="subjects">Subjects You Can Teach *</label>
                  <select
                    id="subjects"
                    name="subjects"
                    value={formData.subjects}
                    onChange={handleChange}
                    className={`form-select ${errors.subjects ? "error" : ""}`}
                  >
                    <option value="">Select Subject</option>
                    {subjects.map((subject) => (
                      <option key={subject} value={subject}>
                        {subject}
                      </option>
                    ))}
                  </select>
                  {errors.subjects && <span className="error-message">{errors.subjects}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="teachingExperience">Total Teaching Experience *</label>
                  <input
                    type="text"
                    id="teachingExperience"
                    name="teachingExperience"
                    value={formData.teachingExperience}
                    onChange={handleChange}
                    className={errors.teachingExperience ? "error" : ""}
                    placeholder="e.g., 5 years"
                  />
                  {errors.teachingExperience && <span className="error-message">{errors.teachingExperience}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="onlineTeaching">Are you interested in online teaching? *</label>
                  <select
                    id="onlineTeaching"
                    name="onlineTeaching"
                    value={formData.onlineTeaching}
                    onChange={handleChange}
                    className={`form-select ${errors.onlineTeaching ? "error" : ""}`}
                  >
                    <option value="">Select an option</option>
                    {onlineTeachingOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  {errors.onlineTeaching && <span className="error-message">{errors.onlineTeaching}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="languages">Languages Proficient In *</label>
                  <select
                    id="languages"
                    name="languages"
                    value={formData.languages}
                    onChange={handleChange}
                    className={`form-select ${errors.languages ? "error" : ""}`}
                  >
                    <option value="">Select Language</option>
                    {languages.map((lang) => (
                      <option key={lang} value={lang}>
                        {lang}
                      </option>
                    ))}
                  </select>
                  {errors.languages && <span className="error-message">{errors.languages}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="preferredTime">Preferred time to work: *</label>
                  <input
                    type="text"
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className={errors.preferredTime ? "error" : ""}
                    placeholder="e.g., 9 AM - 5 PM IST"
                  />
                  {errors.preferredTime && <span className="error-message">{errors.preferredTime}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="currentLocation">Current Location / Time Zone *</label>
                  <input
                    type="text"
                    id="currentLocation"
                    name="currentLocation"
                    value={formData.currentLocation}
                    onChange={handleChange}
                    className={errors.currentLocation ? "error" : ""}
                    placeholder="e.g., New York, EST"
                  />
                  {errors.currentLocation && <span className="error-message">{errors.currentLocation}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="contactNumber">Contact Number (WhatsApp) *</label>
                  <input
                    type="tel"
                    id="contactNumber"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    className={errors.contactNumber ? "error" : ""}
                    placeholder="Enter your WhatsApp number (10 digits)"
                    maxLength="10"
                  />
                  {errors.contactNumber && <span className="error-message">{errors.contactNumber}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="emailAddress">Email Address *</label>
                  <input
                    type="email"
                    id="emailAddress"
                    name="emailAddress"
                    value={formData.emailAddress}
                    onChange={handleChange}
                    className={errors.emailAddress ? "error" : ""}
                    placeholder="Enter your email"
                  />
                  {errors.emailAddress && <span className="error-message">{errors.emailAddress}</span>}
                </div>
              </>
            ) : (
              <>
            <div className="form-group">
              {/* <label htmlFor="name">Name *</label> */}
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? "error" : ""}
                placeholder="Enter your full name"
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>
            <div className="form-group">
              {/* <label htmlFor="email">Email *</label> */}
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? "error" : ""}
                placeholder="Enter your email"
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>
            <div className="form-group">
              {/* <label htmlFor="whatsapp">WhatsApp Number *</label> */}
              <input
                type="tel"
                id="whatsapp"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                className={errors.whatsapp ? "error" : ""}
                placeholder="Enter your WhatsApp number (10 digits)"
                maxLength="10"
              />
              {errors.whatsapp && <span className="error-message">{errors.whatsapp}</span>}
            </div>
            <div className="form-group">
              {/* <label htmlFor="country">Country *</label> */}
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className={`form-select ${errors.country ? "error" : ""}`}
              >
                <option value="">Select Country</option>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
              {errors.country && <span className="error-message">{errors.country}</span>}
            </div>
            <div className="form-group">
              {/* <label htmlFor="course">Course *</label> */}
              <select
                id="course"
                name="course"
                value={formData.course}
                onChange={handleChange}
                className={`form-select ${errors.course ? "error" : ""}`}
              >
                <option value="">Select Course</option>
                {courses.map((course) => (
                  <option key={course} value={course}>
                    {course}
                  </option>
                ))}
              </select>
              {errors.course && <span className="error-message">{errors.course}</span>}
            </div>
            <div className="form-group">
               <label htmlFor="demoDate">Date </label> 
              <input
  type="date"
  id="demoDate"
  name="demoDate"
  value={formData.demoDate}
  onChange={handleChange}
  className={errors.demoDate ? "error" : ""}
  min={new Date().toISOString().split('T')[0]}
  placeholder="Select demo date"
/>

              {errors.demoDate && <span className="error-message">{errors.demoDate}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="demoTime">Time (24 hours clock) *</label>
              <input
  type="time"
  id="demoTime"
  name="demoTime"
  value={formData.demoTime}
  onChange={handleChange}
  className={errors.demoTime ? "error" : ""}
/>

              {errors.demoTime && <span className="error-message">{errors.demoTime}</span>}
            </div>
            <div className="form-group">
              {/*  <label htmlFor="timeZone">Time Zone *</label>  */}
              <select
                id="timeZone"
                name="timeZone"
                value={formData.timeZone}
                onChange={handleChange}
                className={`form-select ${errors.timeZone ? "error" : ""}`}
              >
                {/* <option value="">Select Time Zone</option> */}
                {timeZones.map((tz) => (
                  <option key={tz} value={tz}>
                    {tz}
                  </option>
                ))}
              </select>
              {errors.timeZone && <span className="error-message">{errors.timeZone}</span>}
            </div>
            <div className="form-group">
              {/* <label htmlFor="message">Message</label> */}
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Any additional information..."
              />
            </div>
            <div className="form-group">
              {/* <label htmlFor="referralSource">How did you get to know us? *</label> */}
              <select
                id="referralSource"
                name="referralSource"
                value={formData.referralSource}
                onChange={handleChange}
                className={`form-select ${errors.referralSource ? "error" : ""}`}
              >
                <option value="">Select an option</option>
                {referralSources.map((source) => (
                  <option key={source} value={source}>
                    {source}
                  </option>
                ))}
              </select>
              {errors.referralSource && <span className="error-message">{errors.referralSource}</span>}
            </div>
              </>
            )}
            <button type="submit" className="book-demo-submit-btn">
              {isInstructorForm ? "Submit Application" : "Submit Request"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}



