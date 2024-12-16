import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer'; // Import Intersection Observer hook
// import 'animate.css'; // Commented out animation library import
import './Introduction.css';
import IntroImage from './Images/What We Do.jpg';

const Introduction = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Allow animations to re-trigger on re-entry
    threshold: 0.1, // Trigger when 10% of the component is visible
  });

  return (
    <div
      className="introduction-container"
      ref={ref} // Attach Intersection Observer ref
    >
      <div
        className={`introduction-left ${
          // inView ? 'animate__animated animate__fadeInLeft' : '' // Commented out animation class toggle
          ''
        }`}
      >
        <img 
          src={IntroImage} 
          alt="Introduction"
          className="introduction-image"
        />
      </div>
      <div
        className={`introduction-right ${
          // inView ? 'animate__animated animate__fadeInRight' : '' // Commented out animation class toggle
          ''
        }`}
      >
        <h2 className="introduction-title">What We Do</h2>
        <p className="introduction-text">
          Welcome to a legacy built on vision, craftsmanship, and innovation.
          At the heart of everything we do is a commitment to excellence and a
          passion for creating meaningful experiences across multiple industries.
          From timeless jewelry to dynamic business ventures, our world is
          guided by the principles of integrity, sustainability, and social
          responsibility. Explore our journey and the brands that shape the
          future.
        </p>
      </div>
    </div>
  );
};

export default Introduction;
