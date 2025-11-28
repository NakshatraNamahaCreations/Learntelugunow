import React, { useRef, useState, useEffect } from "react";
import "../styles/CampusVisit.css";
import campus1 from "../assets/courses/yogatraining.jpg";
import campus2 from "../assets/courses/carnaticmusic.jpg";
import campus3 from "../assets/courses/readingwriting.jpg";
import campus4 from "../assets/courses/phonotics.jpg";

const CampusVisit = () => {
  const viewportRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const campusImages = [
    { 
      src: campus1, 
      alt: "Yoga Training",
      courseName: "Yoga Training",
      description: "Discover the ancient practice of yoga with our comprehensive training program. Learn proper techniques, breathing exercises, and meditation to enhance your physical and mental well-being."
    },
    { 
      src: campus2, 
      alt: "Carnatic Music",
      courseName: "Carnatic Music",
      description: "Immerse yourself in the rich tradition of Carnatic music. Master classical ragas, talas, and vocal techniques under the guidance of expert musicians and learn the art of South Indian classical music."
    },
    { 
      src: campus3, 
      alt: "Reading and Writing Telugu",
      courseName: "Reading and Writing Telugu",
      description: "Master the beautiful Telugu script with our structured course. Learn to read and write Telugu fluently through interactive lessons, practice exercises, and expert guidance tailored for all skill levels."
    },
    { 
      src: campus4, 
      alt: "Phonics Training",
      courseName: "Phonics Training",
      description: "Build strong reading foundations with our phonics training program. Learn letter sounds, blending techniques, and pronunciation skills to improve reading fluency and comprehension in Telugu."
    }
  ];

  const scrollNext = () => {
    const viewport = viewportRef.current;
    const itemWidth = viewport.clientWidth;
    const newIndex = currentIndex < campusImages.length - 1 ? currentIndex + 1 : currentIndex;
    viewport.scrollBy({ left: itemWidth, behavior: "smooth" });
    setCurrentIndex(newIndex);
  };

  const scrollPrev = () => {
    const viewport = viewportRef.current;
    const itemWidth = viewport.clientWidth;
    const newIndex = currentIndex > 0 ? currentIndex - 1 : currentIndex;
    viewport.scrollBy({ left: -itemWidth, behavior: "smooth" });
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const viewport = viewportRef.current;
    if (viewport) {
      const handleScroll = () => {
        const scrollLeft = viewport.scrollLeft;
        const itemWidth = viewport.clientWidth;
        const newIndex = Math.round(scrollLeft / itemWidth);
        setCurrentIndex(newIndex);
      };
      viewport.addEventListener('scroll', handleScroll);
      return () => viewport.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <section className="campus-section">
      <div className="campus-section-header">
        <h2 className="campus-section-title">Our Courses</h2>
        <p className="campus-section-description">
          Explore a realm of learning possibilities in our courses section. From language mastery to skill refinement, each course is crafted to elevate your understanding.
        </p>
      </div>
      <div className="campus-section-content">
        {/* LEFT COLUMN */}
        <div className="left">
        <div className="gallery-window">
          <div className="gallery-viewport" ref={viewportRef}>
            <div className="track">
              {campusImages.map((image, index) => (
                <img key={index} src={image.src} alt={image.alt} />
              ))}
            </div>
          </div>
          <div className="controls">
            <button onClick={scrollPrev}>‹ Prev</button>
            <span>/</span>
            <button onClick={scrollNext}>Next ›</button>
          </div>
        </div>
      </div>

       {/* RIGHT COLUMN */}
       <div className="right">
         <div className="col-lg-8">
           <h1>
             {campusImages[currentIndex].courseName}
           </h1>
           <div className="divider"></div>
           <p className="lead">
             {campusImages[currentIndex].description}
           </p>
           
         </div>
       </div>
      </div>
    </section>
  );
};

export default CampusVisit;
