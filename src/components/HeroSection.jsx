// import React from "react";
// import "../styles/HeroSection.css";
// import bgImageDefault from "../assets/home_banner/pexels-keira-burton-6146978.jpg";
// import image1 from "../assets/rightsideiamges/1.png";
// import image2 from "../assets/rightsideiamges/2.png";
// import image3 from "../assets/rightsideiamges/3.png";

// export default function HeroBanner({
//   bgImage = bgImageDefault,
// }) {
//   return (
//     <header className="hb-root" role="banner">
//       {/* Background image + dark overlay */}
//       <div className="hb-bg" aria-hidden="true">
//         <img src={bgImage} alt="" className="hb-bg-img" />
//         <div className="hb-dark-overlay" />
//       </div>

//       {/* Main content area */}
//       <div className="hb-container">
//         {/* slider-content removed per request */}
//         <div className="hb-grid">
//           {/* Centered hero text */}
//           <div className="hb-left">
//             <div className="hb-center-text">
            
//               <div>
//               <h1 className="hb-headlines">
//                 We're Best Online
//                 Education Partners
//                 University 2022
//               </h1>
//               </div>
//               <div className="hb-features">
//                 <div className="hb-feature-item">
//                   <div className="hb-feature-icon">
//                     <i className="fas fa-check"></i>
//                   </div>
//                   <span className="hb-feature-text">Experts Advisors</span>
//                 </div>
//                 <div className="hb-feature-item">
//                   <div className="hb-feature-icon">
//                     <i className="fas fa-check"></i>
//                   </div>
//                   <span className="hb-feature-text">538+ Courses</span>
//                 </div>
//               </div>

//               <div className="hb-cta-buttons">
//                 <a href="#courses" className="hb-btn-primary">
//                   GET STARTED
//                   <i className="fas fa-arrow-right"></i>
//                 </a>
//                 <a href="#courses" className="hb-btn-secondary">
//                   OUR COURSES
//                   <i className="fas fa-arrow-right"></i>
//                 </a>
//               </div>
//             </div>
//           </div>
          
//           {/* Right side images */}
//           <div className="hb-right-images">
//             {/* Image 2 - Left side of image 1 */}
//             <div className="hb-image-2">
//               <img src={image2} alt="" className="hb-img" />
//             </div>
            
//             {/* Image 1 - Center (1st place) */}
//             <div className="hb-image-1">
//               <img src={image1} alt="" className="hb-img" />
//             </div>
            
//             {/* Image 3 - Right side */}
//             <div className="hb-image-3">
//               <img src={image3} alt="" className="hb-img" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }
import React from "react";
import "../styles/HeroSection.css";

import bgImageDefault from "../assets/blogs/img4.avif";
import image1 from "../assets/rightsideiamges/1.png";
import image2 from "../assets/rightsideiamges/2.png";
import image3 from "../assets/rightsideiamges/3.png";

export default function HeroBanner({ bgImage = bgImageDefault }) {
  return (
    <header className="hb-root" role="banner">
      {/* Background */}
      <div className="hb-bg" aria-hidden="true">
        <img src={bgImage} alt="" className="hb-bg-img" />
        <div className="hb-dark-overlay" />
      </div>

      <div className="hb-container">
        <div className="hb-grid">
          
          {/* LEFT TEXT */}
          <div className="hb-left">
            <div className="hb-center-text">
              <h1 className="hb-headlines">
                Learn Telugu Now<br />
                Master the Beautiful<br />
                Telugu Language
              </h1>

              <div className="hb-features">
                <div className="hb-feature-item">
                  <div className="hb-feature-icon">
                    <i className="fas fa-check"></i>
                  </div>
                  <span className="hb-feature-text">Experts Advisors</span>
                </div>

                <div className="hb-feature-item">
                  <div className="hb-feature-icon">
                    <i className="fas fa-check"></i>
                  </div>
                  <span className="hb-feature-text">538+ Courses</span>
                </div>
              </div>

              <div className="hb-cta-buttons">
                <a href="#courses" className="hb-btn-primary">
                  GET STARTED <i className="fas fa-arrow-right"></i>
                </a>
                <a href="#courses" className="hb-btn-secondary">
                  OUR COURSES <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGES */}
          <div className="hb-right-images">
            <img src={image2} alt="" className="hb-img img-pos-2" />
            <img src={image1} alt="" className="hb-img img-pos-1" />
            <img src={image3} alt="" className="hb-img img-pos-3" />
          </div>

        </div>
      </div>
    </header>
  );
}
