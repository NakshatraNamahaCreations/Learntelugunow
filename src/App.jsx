import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Features from './components/Features'
import Courses from './components/Courses'
import AchieveGoal from './components/AchieveGoal'
import CampusVisit from './components/CampusVisit'
import StudentsReview from './components/StudentsReview'
import Events from './components/Events'
import Blog from './components/Blog'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Features />
      <Courses />
      <StudentsReview />
      <AchieveGoal />
      <CampusVisit />
     
      <Events />
      <Blog />
      <Footer />
    </>
  )
}

export default App
