import React from "react";
import profileImage from "../assets/Najjar.png";

const About = () => {
  // Define your color constants
  const BLACK = "#000000";
  const DEEP_RED = "#8E1616";
  const CHAMPAGNE = "#E8C999";
  const CREAM = "#F8EEDF";

  return (
    <section id="about" className="py-20" style={{ backgroundColor: BLACK }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-3xl font-bold text-center mb-16 relative"
          style={{ color: CHAMPAGNE }}
        >
          About Me
          <span
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-4 h-1 w-20 rounded"
            style={{
              background: `linear-gradient(to right, ${DEEP_RED}, ${CHAMPAGNE})`,
            }}
          ></span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div
              className="absolute inset-0 transform rotate-6 rounded-2xl"
              style={{
                background: `linear-gradient(to top right, ${DEEP_RED}, ${CHAMPAGNE})`,
              }}
            ></div>
            <img
              src={profileImage}
              alt="Ahmad Alnajjar - Full Stack Developer"
              className="relative z-10 rounded-2xl shadow-xl w-70 h-auto object-cover transform -rotate-3"
              style={{ borderColor: DEEP_RED, borderWidth: "4px" }}
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4" style={{ color: DEEP_RED }}>
              Hello, I'm Ahmad Alnajjar!
            </h3>
            <p className="mb-4" style={{ color: CREAM }}>
              I'm a passionate Full-Stack Web Developer specializing in the MERN
              stack (MongoDB, Express.js, React.js, Node.js). I hold a degree in
              Computer Science from Hashemite University and have further
              refined my skills through an intensive web development bootcamp.
            </p>
            <p className="mb-4" style={{ color: CREAM }}>
              My expertise lies in creating dynamic and responsive web
              applications. I am proficient in front-end technologies like HTML,
              CSS, JavaScript, React, and Next.js, as well as back-end
              technologies like Node.js and Express. I also have experience with
              databases like MongoDB, PostgreSQL, and Firebase.
            </p>
            <p className="mb-6" style={{ color: CREAM }}>
              When I'm not coding, I enjoy exploring new technologies,
              collaborating with teams, and contributing to open-source
              projects. I thrive in agile environments and take pride in
              delivering high-quality, user-centric solutions.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/ahmadalnajjar01"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-md inline-flex items-center transition-colors"
                style={{
                  backgroundColor: BLACK,
                  color: CHAMPAGNE,
                  border: `1px solid ${DEEP_RED}`,
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = DEEP_RED;
                  e.currentTarget.style.color = CREAM;
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = BLACK;
                  e.currentTarget.style.color = CHAMPAGNE;
                }}
              >
                <i className="fab fa-github mr-2"></i> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/ahmad-alnajjar-77b635284/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-md inline-flex items-center transition-colors"
                style={{
                  backgroundColor: DEEP_RED,
                  color: CREAM,
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor = "#701212")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = DEEP_RED)
                }
              >
                <i className="fab fa-linkedin mr-2"></i> LinkedIn
              </a>
              <a
                href="mailto:Ahmadalnajjar609@gmail.com"
                className="px-4 py-2 rounded-md inline-flex items-center transition-colors"
                style={{
                  backgroundColor: CHAMPAGNE,
                  color: BLACK,
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor = "#d9ba8a")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = CHAMPAGNE)
                }
              >
                <i className="fas fa-envelope mr-2"></i> Email Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
