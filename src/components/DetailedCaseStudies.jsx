import React from "react";
import "../styles/DetailedCaseStudies.css";

const detailedCaseStudies = [
  {
    id: 1,
    studentName: "Padmaja",
    parentName: "",
    course: "Telugu",
    tutor: "Hemalatha Desai",
    source: "Instagram",
    content: [
      "I am a PhD candidate at the University of California, Davis living in San José, California. Two years ago, I spent a long time searching online for a Telugu teacher who could help me reach conversational fluency and a primary school reading level. I was lucky to find Hemalatha-garu, and she has far exceeded my expectations. From the start, she brought a perfect balance of structure, discipline, and warmth to our lessons.",
       "Her teaching is tailored exactly to my goals, and she consistently gave me the confidence to read, write, and speak. Thanks to her guidance, I was able to tour Andhra Pradesh and speak with farmers for three weeks in 2024. More importantly, she helped me build the consistency and accountability I used to struggle with. She is patient yet focused, adapting to my pace while still holding me to a high standard. Because of our work together, I felt fully prepared to return to Andhra Pradesh for five months to conduct research interviews in Telugu.",
        "I was so impressed by her professionalism that I asked her to assist with my academic research. Since July 2025, she has been transcribing hours of interviews and translating complex articles into English. She even took on the challenge of transcribing village songs in local dialects. Her work is consistently accurate and delivered on time. Her attention to detail and sensitivity to context are incredible; she is truly meticulous about finding the right nuance for every word.",
         "Hemalathagaru’s diligence, integrity, and commitment have been critical to my work. Beyond her own contributions, she has become an essential part of my research team, taking on the role of managing two other young women and teaching them how to transcribe recordings into digital Telugu. I truly cannot imagine having completed this project without her. She is the only person I would recommend for Telugu language instruction, professional translation, or research management.",
    ]
  },

];

export default function DetailedCaseStudies() {
  return (
    <section className="detailed-case-studies-section">
      <div className="container">
        {/* Section Header */}
        <div className="detailed-cs-header">
          <span className="detailed-cs-label">CASE STUDIES</span>
          <h2 className="detailed-cs-title">
            In-Depth Learning Journeys of Our Students
          </h2>
          <p className="detailed-cs-description">
            Explore complete learning stories and understand how personalized teaching
            creates long-term impact.
          </p>
        </div>

        {/* Case Study Cards */}
        <div className="detailed-cs-list">
          {detailedCaseStudies.map((study) => (
            <article key={study.id} className="detailed-cs-card">
              
              {/* Header */}
              <div className="detailed-cs-card-header">
                <h3 className="detailed-student-name">
                  {study.studentName}
                </h3>
                {study.parentName && (
                  <p className="detailed-parent-name">
                    Parent: {study.parentName}
                  </p>
                )}
              </div>

              {/* Meta Info */}
              <div className="detailed-cs-meta">
                <span><strong>Course:</strong> {study.course}</span>
                <span><strong>Tutor:</strong> {study.tutor}</span>
                <span><strong>Source:</strong> {study.source}</span>
              </div>

              {/* Content */}
              <div className="detailed-cs-content">
                {study.content.map((para, index) => (
                  <p key={index}>{para}</p>
                ))}
              </div>

            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
