import React from "react";

export default function Footer() {
  return (
    <footer className="footer-layout">
      <div className="scanline"></div>
      <div className="footer-content mono-label">
        <p>&copy; {new Date().getFullYear()} // ALEXANDER UKWUEZE</p>
        <div className="footer-socials">
          <a href="https://github.com/lexizuchenna" target="_blank">
            GH
          </a>
          <a href="https://linkedin.com/in/lexizuchenna">LI</a>
          <a href="https://twitter.com/lexiz_tech">X</a>
        </div>
      </div>
    </footer>
  );
}
