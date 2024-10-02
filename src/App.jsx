// src/App.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Features from './components/Features';
import HeroSection from './components/HeroSection';
import Technology from './components/Technology';
import Contact from './components/Contact';
import LoginForm from './components/LoginForm';
import Dashboard from './components/DashBoard';
// Import other components or pages as needed

export default function App() {
  return (
    <Router>
      <Navbar/>
      
      <HeroSection />
      <Features />
      <Technology />
      
      
      <Routes>
        
        <Route path="/" element={<HeroSection />} />
        <Route path="/features" element={<Features />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        
      </Routes>
      
    </Router>
  );
}
