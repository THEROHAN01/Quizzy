import React from 'react';
import './style.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-info">
            <h2 className="footer-title">Quizzy.</h2>
            <p className="footer-description">
              Expand your knowledge and challenge yourself with our engaging quizzes.
            </p>
          </div>
          <div className="footer-contact">
            <h3 className="footer-heading">Contact Us</h3>
            <ul className="footer-list">
              <li><a href="mailto:support@quizzybapp.com">support@quizzy.com</a></li>
              <li><a href="tel:+15551234567">+91 0000000000</a></li>
            </ul>
          </div>
          <div className="footer-social">
            <h3 className="footer-heading">Follow Us</h3>
          

            <div className="footer-social-icons">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebook size={24} />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <FaTwitter size={24} />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={24} />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={24} />
                  </a>
                </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Quizzy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;