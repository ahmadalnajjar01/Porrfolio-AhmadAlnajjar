// components/Navbar.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CV from "../assets/Ahmad Alnajjar - Full Stack Web Developer.pdf";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Define your color constants
  const BLACK = "#000000";
  const DEEP_RED = "#8E1616";
  const CHAMPAGNE = "#E8C999";
  const CREAM = "#F8EEDF";
  const white = "#FFFFFF";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navbarStyle = {
    backgroundColor: scrolled ? white : "transparent",
    boxShadow: scrolled ? "0 4px 6px rgba(0, 0, 0, 0.1)" : "none",
  };

  const logoStyle = {
    color: CHAMPAGNE,
  };

  const logoSpanStyle = {
    color: DEEP_RED,
  };

  // Changed link color to DEEP_RED instead of CREAM
  const linkStyle = {
    color: DEEP_RED,
    transition: "color 0.3s ease",
  };

  const activeLinkStyle = {
    ...linkStyle,
    borderBottom: `2px solid ${DEEP_RED}`,
  };

  const buttonStyle = {
    backgroundColor: DEEP_RED,
    color: CREAM,
    transition: "background-color 0.3s ease",
  };

  const hamburgerStyle = {
    color: scrolled ? CREAM : DEEP_RED, // Also updated hamburger color for visibility
  };

  const mobileMenuStyle = {
    backgroundColor: BLACK,
    borderTop: `1px solid ${DEEP_RED}`,
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
      style={navbarStyle}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold" style={logoStyle}>
                Ahmad<span style={logoSpanStyle}>Alnajjar</span>
              </span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link
                to="/about"
                className="font-medium hover:text-opacity-80"
                style={linkStyle}
                onMouseOver={(e) => (e.currentTarget.style.color = CHAMPAGNE)}
                onMouseOut={(e) => (e.currentTarget.style.color = DEEP_RED)}
              >
                About
              </Link>
              <Link
                to="/projects"
                className="font-medium hover:text-opacity-80"
                style={linkStyle}
                onMouseOver={(e) => (e.currentTarget.style.color = CHAMPAGNE)}
                onMouseOut={(e) => (e.currentTarget.style.color = DEEP_RED)}
              >
                Projects
              </Link>
              <Link
                to="/skills"
                className="font-medium hover:text-opacity-80"
                style={linkStyle}
                onMouseOver={(e) => (e.currentTarget.style.color = CHAMPAGNE)}
                onMouseOut={(e) => (e.currentTarget.style.color = DEEP_RED)}
              >
                Skills
              </Link>
              <Link
                to="/contact"
                className="font-medium hover:text-opacity-80"
                style={linkStyle}
                onMouseOver={(e) => (e.currentTarget.style.color = CHAMPAGNE)}
                onMouseOut={(e) => (e.currentTarget.style.color = DEEP_RED)}
              >
                Contact
              </Link>
              <a
                href={CV}
                download=""
                className="px-4 py-2 rounded font-medium"
                style={buttonStyle}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor = "#701212")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = DEEP_RED)
                }
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
              style={hamburgerStyle}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div
            className="px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-lg"
            style={mobileMenuStyle}
          >
            <Link
              to="/#about"
              className="block px-3 py-2 rounded-md font-medium"
              style={linkStyle}
              onClick={() => setIsOpen(false)}
              onMouseOver={(e) => (e.currentTarget.style.color = CHAMPAGNE)}
              onMouseOut={(e) => (e.currentTarget.style.color = DEEP_RED)}
            >
              About
            </Link>
            <Link
              to="/#projects"
              className="block px-3 py-2 rounded-md font-medium"
              style={linkStyle}
              onClick={() => setIsOpen(false)}
              onMouseOver={(e) => (e.currentTarget.style.color = CHAMPAGNE)}
              onMouseOut={(e) => (e.currentTarget.style.color = DEEP_RED)}
            >
              Projects
            </Link>
            <Link
              to="/#skills"
              className="block px-3 py-2 rounded-md font-medium"
              style={linkStyle}
              onClick={() => setIsOpen(false)}
              onMouseOver={(e) => (e.currentTarget.style.color = CHAMPAGNE)}
              onMouseOut={(e) => (e.currentTarget.style.color = DEEP_RED)}
            >
              Skills
            </Link>
            <Link
              to="/#contact"
              className="block px-3 py-2 rounded-md font-medium"
              style={linkStyle}
              onClick={() => setIsOpen(false)}
              onMouseOver={(e) => (e.currentTarget.style.color = CHAMPAGNE)}
              onMouseOut={(e) => (e.currentTarget.style.color = DEEP_RED)}
            >
              Contact
            </Link>
            <a
              href={CV}
              download="Ahmad-Alnajjar-CV.pdf"
              className="block px-3 py-2 rounded-md font-medium mt-2"
              style={buttonStyle}
              onClick={() => setIsOpen(false)}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = "#701212")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = DEEP_RED)
              }
            >
              Download CV
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
