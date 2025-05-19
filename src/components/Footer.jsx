import React from "react";
import { FaGithub, FaTiktok } from "react-icons/fa";
import "../css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h2 className="footer-title">Movie Discovery</h2>
          <p className="footer-text">
            Discover trending and popular movies with a modern, responsive UI. Powered by TMDb API.
          </p>
          <div className="footer-icons">
            <a
              href="https://github.com/fannul/movie-discovery"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.tiktok.com/@programminghub1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
            >
              <FaTiktok size={24} />
            </a>
          </div>
        </div>
        {/* Quick Links */}
        <div className="footer-section">
          <h3 className="footer-subtitle">Quick Links</h3>
          <ul className="footer-links">
            <li>
              <a href="/" className="footer-link">
                Home
              </a>
            </li>
            <li>
              <a
                href="https://github.com/fannul/movie-discovery"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.themoviedb.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                TMDb
              </a>
            </li>
          </ul>
        </div>
        {/* About */}
        <div className="footer-section">
          <h3 className="footer-subtitle">About</h3>
          <p className="footer-text">
            Built by <a href="https://github.com/programer-ke" target="_blank" rel="noopener noreferrer" className="footer-link">programer-ke</a>.<br />
            Movie data from <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer" className="footer-link">TMDb API</a>.
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Movie Discovery. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;