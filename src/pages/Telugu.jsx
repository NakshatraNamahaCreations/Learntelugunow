import React, { useEffect } from "react";
import Slider from "react-slick";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../styles/TeluguPage.css";
import "../styles/AboutUs.css";
import Newsletter from "../components/Newsletter";
import titleBg from "../assets/feature-icon/title-bg.webp";

export default function Telugu() {
  

  useEffect(() => {
  // TITLE
  document.title =
    "Spoken Telugu & Literacy Classes Online | Learn Telugu for Kids & Adults";

  // DESCRIPTION
  const descriptionContent =
    "Join online Telugu learning classes for kids and adults with live sessions covering spoken Telugu, reading, and writing. Improve fluency with expert tutors.";

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
    "spoken telugu classes online, learn telugu online, telugu literacy classes, telugu reading and writing classes, telugu classes for kids and adults, online telugu tutor";

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
    "https://www.learntelugunow.com/telugu-learning-classes-online";

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




  return (
    <div className="telugu-page">
      {/* Hero Section */}
      <section className="telugu-hero-section">
        <div className="telugu-hero-bg">
          <img src="/Frame 68.png" alt="Learn Telugu" className="telugu-hero-img" />
        </div>
        <div className="telugu-hero-content">
          <h1 className="telugu-hero-title">Telugu Learning – Spoken & Literacy Classes Online for Kids & Adults</h1>
          <p className="telugu-hero-description">
            Master the beautiful Telugu language with our comprehensive online program<br />
            designed for kids and adults. Learn to speak, read, and write Telugu with confidence.
          </p>
        </div>
      </section>

      {/* Telugu Language Learning Section */}
      <section className="telugu-main-section">
        <div className="container">
          <div className="telugu-main-wrapper">
            <div className="gsc-heading">
              <div className="sub-title sub-1">
                <span className="tagline">Telugu Language Learning – A Bridge Across Generations</span>
                <img src={titleBg} alt="Title Background" className="title-bg-image" />
              </div>
            </div>
            <div className="telugu-main-content">
              <p>
                Learning Telugu is an emotional journey of cultural connection. Telugu ties learners to centuries of vibrant tradition, and for families abroad it becomes a bridge across generations. Over one million Telugu speakers now live across the United States, Europe and the Gulf, forming vibrant cultural networks. Children who speak Telugu can share jokes and stories with grandparents, and adults rediscover the joy of heritage festivals and literature.
              </p>
              <p>
                Our courses cover conversational Telugu, the Telugu script and Telugu language courses tailored for both kids and adult beginners. In just a few weeks, many young students can start greeting loved ones in Telugu; in about 20 hours of focused lessons an enthusiastic learner can master basic reading and writing. Classes are held live over Zoom or Google Meet, with online Telugu classes and small group options at convenient US‑friendly times.
              </p>
              <p>
                Our all‑women tutors create warm, encouraging bonds with each student. Parents often see their kids excited to call teachers "Mam" and show off new words. For instance, one mother shared, "My daughter was delighted when she sang a Telugu lullaby to her grandmother after just a month of lessons!" An adult learner noted, "I never imagined I'd read my prayer book in Telugu, but now I do – thanks to my patient teacher." These stories reflect the strong emotional connections built in our classes.
              </p>
              <p className="telugu-main-quote">
                At Learn Telugu Now, our goal is not only fluency but also family and friendship. Each Telugu lesson is filled with supportive encouragement, cultural stories and laughter. Join us, and feel the happiness of speaking Telugu – a gift that lasts a lifetime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="telugu-how-it-works-section">
        <div className="container">
          <div className="telugu-how-it-works-wrapper">
            <div className="gsc-heading">
              <div className="sub-title sub-1">
                <span className="tagline">How It Works – Steps to Start Learning</span>
                <img src={titleBg} alt="Title Background" className="title-bg-image" />
              </div>
            </div>
             <div className="telugu-steps-grid">
               <div className="telugu-step-card">
                 <article className="telugu-feature-item">
                   <div className="content">
                     <div className="telugu-feature-icon">
                       <i className="fas fa-calendar-check"></i>
                     </div>
                     <h3 className="telugu-step-title">Book a Free Demo</h3>
                     <p className="telugu-step-text">
                       Simply fill out our form or call to schedule a 30‑minute demo class at no cost. We'll match you with a Telugu tutor online based on your level and goals.
                     </p>
                   </div>
                 </article>
               </div>
               <div className="telugu-step-card">
                 <article className="telugu-feature-item">
                   <div className="content">
                     <div className="telugu-feature-icon">
                       <i className="fas fa-handshake"></i>
                     </div>
                     <h3 className="telugu-step-title">Try It Out</h3>
                     <p className="telugu-step-text">
                       In your demo session (via Zoom or Google Meet), you'll experience our teaching style and get to know your tutor. Ask any questions, and see how comfortable you feel learning with us.
                     </p>
                   </div>
                 </article>
               </div>
               <div className="telugu-step-card">
                 <article className="telugu-feature-item">
                   <div className="content">
                     <div className="telugu-feature-icon">
                       <i className="fas fa-check-circle"></i>
                     </div>
                     <h3 className="telugu-step-title">Choose a Plan</h3>
                     <p className="telugu-step-text">
                       If you love the demo (no obligation!), you can enroll in regular classes. We offer flexible packages – one‑on‑one private lessons or small group classes – whichever fits you best.
                     </p>
                   </div>
                 </article>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Platform & Scheduling, Tutors & Values, Punctuality & Flexibility, Money-Back Guarantee, A Typical Session Section */}
      <section className="telugu-info-section">
        <div className="container">
          <div className="telugu-info-header">
            <div className="gsc-heading">
              <div className="sub-title sub-1">
                <span className="tagline">Why Choose Learn Telugu Now</span>
                <img src={titleBg} alt="Title Background" className="title-bg-image" />
              </div>
            </div>
          </div>
          <div className="telugu-info-carousel-wrapper">
            <Swiper
  modules={[Navigation, Pagination, Autoplay]}
  spaceBetween={20}
  slidesPerView={3}
  autoplay={{ delay: 4000 }}
  pagination={{ clickable: true }}
  navigation
  breakpoints={{
    0: {
      slidesPerView: 1,   // ✅ mobile
    },
    768: {
      slidesPerView: 2,   // tablet
    },
    1024: {
      slidesPerView: 3,   // desktop
    },
  }}
>
              {/* Card 1: Platform & Scheduling */}
              <SwiperSlide>
              <div>
                <div className="feature-three__single">
                  <div className="feature-three__wrapper">
                    <div className="feature-three__content">
                      <div className="feature-three__icon">
                        <i className="fas fa-video"></i>
                      </div>
                      <h3 className="feature-three__title">Platform & Scheduling</h3>
                      <div className="feature-three__desc">
                        <p>All classes are live online using secure video chat (Zoom or Google Meet) and interactive tools like digital whiteboards. This means you can learn from home or anywhere with an internet connection. Our tutors are based in India but schedule their hours to suit families in the US and other time zones (for example, an evening class in India is morning in America). Simply choose a slot that works for you, and we'll take care of the rest.</p>
                      </div>
                    </div>
                    <div className="feature-three__image">
                      <img src="/frame 66 (3).png" alt="Platform & Scheduling" />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {/* Card 2: Tutors & Values (Blue background) */}
              <div>
                <div className="feature-three__single feature-three__single--blue">
                  <div className="feature-three__wrapper">
                    <div className="feature-three__content">
                      <div className="feature-three__icon feature-three__icon--white">
                        <i className="fas fa-users"></i>
                      </div>
                      <h3 className="feature-three__title feature-three__title--white">Tutors & Values</h3>
                      <div className="feature-three__desc feature-three__desc--white">
                        <p>Our tutors are all women – many are mothers or career‑driven professionals who returned to teaching. They have strong credentials in Telugu language and a passion for empowering students. Each tutor is carefully selected for qualifications and personality: patient, friendly and deeply caring. They treat your child like their own or encourage adult learners with real‑world examples.</p>
                      </div>
                    </div>
                    <div className="feature-three__image">
                      <img src="/Frame 67 (1) (1).png" alt="Tutors & Values" />
                    </div>
                  </div>
                </div>
              </div>
</SwiperSlide>
            <SwiperSlide>
              {/* Card 3: Punctuality & Flexibility */}
              <div>
                <div className="feature-three__single">
                  <div className="feature-three__wrapper">
                    <div className="feature-three__content">
                      <div className="feature-three__icon">
                        <i className="fas fa-clock"></i>
                      </div>
                      <h3 className="feature-three__title">Punctuality & Flexibility</h3>
                      <div className="feature-three__desc">
                        <p>We value your time. Tutors arrive early and classes start promptly. If you need to reschedule, just let us know at least 24 hours in advance and we'll accommodate you. In case of emergency changes, we do our best to find a new time.</p>
                      </div>
                    </div>
                    <div className="feature-three__image">
                      <img src="/Frame 68.png" alt="Punctuality & Flexibility" />
                    </div>
                  </div>
                </div>
              </div>
</SwiperSlide>
            <SwiperSlide>
              {/* Card 4: Money-Back Guarantee */}
              <div>
                <div className="feature-three__single">
                  <div className="feature-three__wrapper">
                    <div className="feature-three__content">
                      <div className="feature-three__icon">
                        <i className="fas fa-shield-alt"></i>
                      </div>
                      <h3 className="feature-three__title">Money‑Back Guarantee</h3>
                      <div className="feature-three__desc">
                        <p>Your satisfaction is our priority. If you decide not to continue after the first paid lesson, let us know and we will refund 50% of that lesson's fee. There's no risk in trying – we want you to feel confident and happy in your Telugu journey.</p>
                      </div>
                    </div>
                    <div className="feature-three__image">
                      <img src="/Frame 69 (1).png" alt="Money-Back Guarantee" />
                    </div>
                  </div>
                </div>
              </div>
</SwiperSlide>
            <SwiperSlide>
              {/* Card 5: A Typical Session (Blue background) */}
              <div>
                <div className="feature-three__single feature-three__single--blue">
                  <div className="feature-three__wrapper">
                    <div className="feature-three__content">
                      <div className="feature-three__icon feature-three__icon--white">
                        <i className="fas fa-chalkboard-teacher"></i>
                      </div>
                      <h3 className="feature-three__title feature-three__title--white">A Typical Session</h3>
                      <div className="feature-three__desc feature-three__desc--white">
                        <p>Your lesson will feel friendly and engaging. We start with a warm greeting and a brief review of last time's lesson. Then your tutor introduces new material through stories, songs or games, always encouraging you to speak or write. By the end of class, students have learned a couple of new words or concepts and have fun practicing them. We often end with praise and a quick preview of the next class.</p>
                      </div>
                    </div>
                    <div className="feature-three__image">
                      <img src="/Frame 69.png" alt="A Typical Session" />
                    </div>
                  </div>
                </div>
              </div>
         
            </SwiperSlide>
            </Swiper>
          </div>
          
        </div>
        
      </section>

      {/* Newsletter Section */}
      <Newsletter />
    </div>
  );
}

