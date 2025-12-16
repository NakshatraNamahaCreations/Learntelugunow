import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Features from './components/Features'
import Courses from './components/Courses'
import AchieveGoal from './components/AchieveGoal'
import CampusVisit from './components/CampusVisit'
import StudentsReview from './components/StudentsReview'
import Testimonials from './components/Testimonials'
import PromotionalCards from './components/PromotionalCards'
import Events from './components/Events'
import Blog from './components/Blog'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AchieveGoal />
      <Features />
      
      <Testimonials />
      <Courses />
      
      {/* <Blog /> */}
      <PromotionalCards />
      <Events />
       <Newsletter /> 
    
      
      {/* <CampusVisit /> */}
     
   
      
      <Footer />
    </>
  )
}

export default App
