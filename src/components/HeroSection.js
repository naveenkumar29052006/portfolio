import React from 'react';
import { ArrowDown, Github, Linkedin } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          {/* Animated orb/glow */}
          <div className="hero-glow" />
          
          {/* Small animated stars */}
          <div className="star" style={{ width: '4px', height: '4px', top: '40px', left: '25%', animation: 'star-pulse 2s infinite' }} />
          <div className="star" style={{ width: '6px', height: '6px', top: '80px', right: '33%', animation: 'star-pulse 2s infinite 0.5s' }} />
          <div className="star" style={{ width: '4px', height: '4px', bottom: '40px', left: '33%', animation: 'star-pulse 2s infinite 1s' }} />
          <div className="star" style={{ width: '8px', height: '8px', bottom: '80px', right: '25%', animation: 'star-pulse 2s infinite 1.5s' }} />
          
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Naveen Kumar</span>
          </h1>
          
          <h2 className="hero-subtitle">
            Front end developer
          </h2>
          
          <p className="hero-description">
            I build beautiful, responsive, and user-friendly websites and applications.
            Passionate about creating stellar digital experiences that leave an impact.
          </p>
          
          <div className="social-links">
            <a 
              href="https://github.com/naveenkumar29052006" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub Profile"
            >
              <Github size={24} color="white" />
            </a>
            <a 
              href="https://www.linkedin.com/in/naveen-kumar-4217931ab/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} color="white" />
            </a>
          </div>
          
          <a 
            href="#about" 
            className="scroll-arrow"
            aria-label="Scroll to About section"
          >
            <ArrowDown size={18} color="#9ca3af" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;