import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#000000] text-[#F8EEDF] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold">
                Ahmad<span className="text-[#E8C999]">Alnajjar</span>
              </span>
            </Link>
            <p className="mt-4 text-[#E8C999] max-w-md">
              Full-stack web developer with expertise in building modern,
              responsive web applications using MERN stack and other
              cutting-edge technologies.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#E8C999]">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/#about"
                  className="text-[#F8EEDF] hover:text-[#E8C999] transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/#projects"
                  className="text-[#F8EEDF] hover:text-[#E8C999] transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/#skills"
                  className="text-[#F8EEDF] hover:text-[#E8C999] transition-colors"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  to="/#contact"
                  className="text-[#F8EEDF] hover:text-[#E8C999] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#E8C999]">
              Connect
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/ahmadalnajjar01"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#8E1616] rounded-full flex items-center justify-center text-[#F8EEDF] hover:bg-[#E8C999] hover:text-[#000000] transition-colors"
              >
                <i className="fab fa-github text-xl"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/ahmad-alnajjar-77b635284/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#8E1616] rounded-full flex items-center justify-center text-[#F8EEDF] hover:bg-[#E8C999] hover:text-[#000000] transition-colors"
              >
                <i className="fab fa-linkedin-in text-xl"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#8E1616] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#E8C999]">
            &copy; {new Date().getFullYear()} Ahmad Alnajjar. All rights
            reserved.
          </p>
          <div className="mt-4 md:mt-0">
          
           
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
