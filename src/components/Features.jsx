import React from "react";
import "../styles/Features.css";
import featuresImage from "../assets/features/features.webp";
import featuresBg from "../assets/features/features-bg.webp";
import featureimg from "../assets/home_banner/feature1.jpg";

export default function Features() {
  return (
    <section className="features-section">
      <div className="container">
        <div className="features-wrapper">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="features-title">
                <span className="title-green">Learn</span> <span className="title-orange">Telugu</span> <br />
                <span className="title-green">Master</span> <span className="title-orange">the Language</span>
              </h2>
              <p className="features-description">
                Explore our comprehensive Telugu learning platform designed for all skill levels. 
                Join expert-led courses and master the beautiful Telugu language at your own pace.
              </p>
            </div>
          </div>
          <div className="row justify-content-end">
            <div className="col-lg-11">
              <div className="features-image">
                <img src={featuresImage} width="1061" height="387" alt="features" />
                <div className="features-mask">
                  <div 
                    className="features-mask-image bg_cover" 
                    style={{ backgroundImage: `url(${featureimg})` }}
                  ></div>
                  <div className="features-mask-content">
                    <p>Telugu Courses</p>
                    <p>Expert Instructors</p>
                    <p>Learn Online</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

