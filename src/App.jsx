import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import TestimonialsPage from "./pages/Testimonials";
import VedicMathsPage from "./components/VedicMaths";
import PhonicsPage from "./components/Phonics";
import CarnaticMusicPage from "./components/CarnaticMusic";
import YogaPage from "./components/Yoga";
import SpokenTeluguPage from "./components/SpokenTelugu";
import ReadingWritingTeluguPage from "./components/ReadingWritingTelugu";
import ReadingWritingTeluguKidsPage from "./components/ReadingWritingTeluguKids";
import AndhraSyllabusPage from "./components/AndhraSyllabus";
import TelanganaSyllabusPage from "./components/TelanganaSyllabus";
import "./App.css";

function App() {
  return (
    <Router>
      {/* COMMON LAYOUT */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/vedic-maths" element={<VedicMathsPage />} />
        <Route path="/phonics" element={<PhonicsPage />} />
        <Route path="/carnatic-music" element={<CarnaticMusicPage />} />
        <Route path="/yoga" element={<YogaPage />} />
        <Route path="/spoken-telugu" element={<SpokenTeluguPage />} />
        <Route path="/reading-writing-adults" element={<ReadingWritingTeluguPage />} />
        <Route path="/reading-writing-kids" element={<ReadingWritingTeluguKidsPage />} />
        <Route path="/andhra-syllabus" element={<AndhraSyllabusPage />} />
        <Route path="/telangana-syllabus" element={<TelanganaSyllabusPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
