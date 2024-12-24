import React from 'react';
import './style.css';


function Hero() {
  return (
    
    <div className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h2 className="hero-title">Expand Your Knowledge</h2>
          <p className="hero-quote">
            "The capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice." - Brian Herbert
          </p>
          <div className="hero-cta">
            <button className="hero-button">Start Quiz</button>
          </div>
        </div>
        <div className="hero-image">
          <img 
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DrawKit%20Vector%20Illustration%20Fun%20&%20Playful%20Finn%20Character%20(13)-V2HY52EQ1QzoJ7H1w2Is8RYptAm2Sm.png" 
            alt="Illustration of a person with a pencil and lightbulb" 
          />
        </div>
      </div>
    </div>
    
  );
}

export default Hero;