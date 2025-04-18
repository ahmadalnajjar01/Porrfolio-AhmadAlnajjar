// components/Hero.js
import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  // Define your color constants
  const BLACK = "#000000";
  const DEEP_RED = "#8E1616";
  const CHAMPAGNE = "#E8C999";
  const CREAM = "#F8EEDF";

  return (
    <section
      className="relative pt-32 pb-20"
      style={{
        background: "Black",
        color: CREAM,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          <span
            style={{
              background: `linear-gradient(to right, ${DEEP_RED}, ${CHAMPAGNE})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Full-Stack Web Developer
          </span>
        </h1>
        <p className="text-xl max-w-2xl mx-auto mb-10" style={{ color: CREAM }}>
          Crafting exceptional web experiences with modern technologies
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <div
            className="flex items-center rounded-lg px-4 py-2.5"
            style={{
              backgroundColor: BLACK,
              border: `1px solid ${DEEP_RED}`,
              color: CHAMPAGNE,
            }}
          >
            <i className="fab fa-html5 mr-2" style={{ color: DEEP_RED }}></i>
            <span>HTML</span>
          </div>
          <div
            className="flex items-center rounded-lg px-4 py-2.5"
            style={{
              backgroundColor: BLACK,
              border: `1px solid ${DEEP_RED}`,
              color: CHAMPAGNE,
            }}
          >
            <i className="fab fa-css3-alt mr-2" style={{ color: DEEP_RED }}></i>
            <span>CSS</span>
          </div>
          <div
            className="flex items-center rounded-lg px-4 py-2.5"
            style={{
              backgroundColor: BLACK,
              border: `1px solid ${DEEP_RED}`,
              color: CHAMPAGNE,
            }}
          >
            <i className="fab fa-js mr-2" style={{ color: DEEP_RED }}></i>
            <span>JavaScript</span>
          </div>
          <div
            className="flex items-center rounded-lg px-4 py-2.5"
            style={{
              backgroundColor: BLACK,
              border: `1px solid ${DEEP_RED}`,
              color: CHAMPAGNE,
            }}
          >
            <i className="fab fa-react mr-2" style={{ color: DEEP_RED }}></i>
            <span>React</span>
          </div>
          <div
            className="flex items-center rounded-lg px-4 py-2.5"
            style={{
              backgroundColor: BLACK,
              border: `1px solid ${DEEP_RED}`,
              color: CHAMPAGNE,
            }}
          >
            <i className="fab fa-node-js mr-2" style={{ color: DEEP_RED }}></i>
            <span>Node.js</span>
          </div>
          <div
            className="flex items-center rounded-lg px-4 py-2.5"
            style={{
              backgroundColor: BLACK,
              border: `1px solid ${DEEP_RED}`,
              color: CHAMPAGNE,
            }}
          >
            <i className="fas fa-database mr-2" style={{ color: DEEP_RED }}></i>
            <span>PostgreSQL</span>
          </div>
          <div
            className="flex items-center rounded-lg px-4 py-2.5"
            style={{
              backgroundColor: BLACK,
              border: `1px solid ${DEEP_RED}`,
              color: CHAMPAGNE,
            }}
          >
            <i className="fas fa-leaf mr-2" style={{ color: DEEP_RED }}></i>
            <span>MongoDB</span>
          </div>
          <div
            className="flex items-center rounded-lg px-4 py-2.5"
            style={{
              backgroundColor: BLACK,
              border: `1px solid ${DEEP_RED}`,
              color: CHAMPAGNE,
            }}
          >
            <i className="fab fa-react mr-2" style={{ color: DEEP_RED }}></i>
            <span>Next.js</span>
          </div>
          <div
            className="flex items-center rounded-lg px-4 py-2.5"
            style={{
              backgroundColor: BLACK,
              border: `1px solid ${DEEP_RED}`,
              color: CHAMPAGNE,
            }}
          >
            <i className="fas fa-cube mr-2" style={{ color: DEEP_RED }}></i>
            <span>Odoo</span>
          </div>
        </div>

        <div className="mt-12">
          <Link
            to="/projects"
            className="px-8 py-3 rounded-lg font-medium inline-flex items-center"
            style={{
              backgroundColor: DEEP_RED,
              color: CREAM,
              transition: "background-color 0.3s ease",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "#701212")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = DEEP_RED)
            }
          >
            View My Work
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
