import React from 'react';
import './style.css';

const features = [
  {
    title: "Enhance Your Knowledge",
    description: "Our quizzes cover a wide range of topics to help you learn and grow.",
    icon: "🧠",
  },
  {
    title: "Compete with Others",
    description: "Challenge yourself and compete with friends on our leaderboards.",
    icon: "🏆",
  },
  {
    title: "Learn Together",
    description: "Join a community of learners and share your knowledge with others.",
    icon: "👥",
  },
];

function Features() {
  return (
    <div className="features">
      <div className="features-container">
        <h2 className="features-title">Why Use Our Quizzy?</h2>
        <p className="features-subtitle">
          Discover the benefits of using our quiz app to enhance your learning experience.
        </p>
        <div className="features-grid">
          {features.map((feature) => (
            <div key={feature.title} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features;
