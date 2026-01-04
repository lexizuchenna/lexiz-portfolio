"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`site-nav ${isOpen ? "nav-open" : ""}`}>
      <div className="nav-inner">
        <Link href="/" className="logo mono-label">
          [ DEV.SYS / LEXIZ ]
        </Link>

        {/* Desktop & Mobile Menu */}
        <div className={`nav-links-container ${isOpen ? "menu-active" : ""}`}>
          <div className="menu-header mono-label">System_Navigation</div>
          <div className="nav-links">
            <Link href="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link href="/work" onClick={() => setIsOpen(false)}>
              Work
            </Link>
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </div>
          <div className="menu-footer">
            <span className="mono-label">
              © {new Date().getFullYear()} // LOGGED_IN
            </span>
          </div>
        </div>

        {/* Status on Desktop / Hamburger on Mobile */}
        <div className="nav-action-area">
          <div className="nav-status">
            <span className="pulse"></span>
            <span className="mono-label">System Active</span>
          </div>

          <button
            className="hamburger"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div className="nav-overlay" onClick={() => setIsOpen(false)}></div>
      )}
    </nav>
  );
}
