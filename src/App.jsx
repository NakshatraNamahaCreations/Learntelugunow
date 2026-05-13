import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import TestimonialsPage from "./pages/Testimonials";
import FAQPage from "./pages/FAQPage";
import TeluguPage from "./pages/Telugu";
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
import NotFound from "./pages/NotFound ";

function App() {
  return (
    <Router>
      <ScrollToTop />
      {/* COMMON LAYOUT */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/case-studies" element={<TestimonialsPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/telugu-learning-classes-online" element={<TeluguPage />} />
        <Route path="/vedic-maths-training" element={<VedicMathsPage />} />
        <Route path="/phonics-training" element={<PhonicsPage />} />
        <Route path="/carnatic-music-training" element={<CarnaticMusicPage />} />
        <Route path="/yoga-training" element={<YogaPage />} />
        <Route path="/spoken-telugu-for-kids-and-adults" element={<SpokenTeluguPage />} />
        <Route path="/reading-writing-telugu-for-kids-and-adults" element={<ReadingWritingTeluguPage />} />
        <Route path="/reading-writing-kids" element={<ReadingWritingTeluguKidsPage />} />
        <Route path="/andhra-syllabus" element={<AndhraSyllabusPage />} />
        <Route path="/telangana-academic-telugu-syllabus-teaching" element={<TelanganaSyllabusPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
      <ScrollToTopButton />
    </Router>
  );
}

export default App;
