import React, { useState } from "react";

const projectsData = [
  {
    id: 1,
    title: "Mishkah - Charity Donation & Assistance Management System",
    description:
      "A platform that connects individuals with meaningful project ideas to potential donors, enabling them to fund initiatives and make a difference.",
    image: "Mishkah.png", // Image name in the assets folder
    tech: [
      "React.js",
      "PostgreSQL",
      "Tailwind CSS",
      "React Router",
      "React Redux",
      "Node.js",
    ],
    github: "https://github.com/ahmadalnajjar01/charity.git",
  },
  {
    id: 2,
    title: "Office Rent",
    description:
      "An intuitive platform that allows users to easily browse, explore, and rent office spaces. It ensures a seamless experience for both renters and landlords.",
    image: "Flexora.png", // Image name in the assets folder
    tech: ["React.js", "Firebase", "Tailwind CSS", "React Router"],
    github: "https://github.com/ahmadalnajjar01/najjaroffices.git",
  },
  {
    id: 3,
    title: "Task Manager",
    description:
      "A Kanban-style project management tool designed to help individuals and teams manage tasks, track progress, and meet deadlines.",
    image: "Taskmanager.png", // Image name in the assets folder
    tech: ["React.js", "Firebase", "Tailwind CSS", "React Router"],
    github: "https://github.com/ahmadalnajjar01/Task-manager--najjar.git",
  },
  {
    id: 4,
    title: "EliteFit - AI-Powered E-commerce Platform",
    description:
      "An innovative e-commerce platform for clothing that offers AI-powered body sizing and personalized recommendations for a perfect fit.",
    image: "EliteFit.png", // Image name in the assets folder
    tech: ["React.js", "Node.js", "PostgreSQL", "Tailwind CSS", "Redux", "MVC"],
    github: "https://github.com/ahmadalnajjar01/EliteFitMasterO.git",
  },
  {
    id: 5,
    title: "Crime News",
    description:
      "A comprehensive news platform that provides crime-related stories, investigative reports, and community safety updates.",
    image: "Crimegazette.png", // Image name in the assets folder
    tech: ["React.js", "Node.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/ahmadalnajjar01/CrimeNews.git",
  },
  {
    id: 6,
    title: "VetNova - Veterinary Health Platform",
    description:
      "A platform designed for pet healthcare, offering online consultations, video calls with vets, and messaging services.",
    image: "Vetnova.png", // Image name in the assets folder
    tech: ["MongoDB", "Next.js", "Tailwind CSS"],
    github: "https://github.com/ahmadalnajjar01/petsHospitalSystem.git",
  },
];

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-[#F8EEDF] rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 border border-[#E8C999]">
      <div className="h-48 overflow-hidden">
        <img
          src={`/src/assets/${project.image}`} // Using the correct path to load images from the assets folder
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-[#000000]">
          {project.title}
        </h3>
        <p className="text-gray-700 mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className="bg-[#E8C999] text-[#8E1616] text-xs font-medium px-2.5 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8E1616] hover:text-black transition-colors font-medium inline-flex items-center"
          >
            <svg
              className="w-4 h-4 mr-1"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
            </svg>
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? projectsData
      : projectsData.filter((project) =>
          project.tech.some((tech) =>
            tech.toLowerCase().includes(filter.toLowerCase())
          )
        );

  return (
    <section id="projects" className="py-20 bg-[#000000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8 relative text-[#F8EEDF]">
          My Projects
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-4 h-1 w-20 bg-gradient-to-r from-[#8E1616] to-[#E8C999] rounded"></span>
        </h2>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-full border ${
              filter === "all"
                ? "bg-[#8E1616] text-[#F8EEDF] border-[#8E1616]"
                : "bg-transparent text-[#F8EEDF] border-[#E8C999] hover:bg-[#E8C999] hover:text-[#000000]"
            }`}
          >
            All Projects
          </button>
          <button
            onClick={() => setFilter("react")}
            className={`px-4 py-2 rounded-full border ${
              filter === "react"
                ? "bg-[#8E1616] text-[#F8EEDF] border-[#8E1616]"
                : "bg-transparent text-[#F8EEDF] border-[#E8C999] hover:bg-[#E8C999] hover:text-[#000000]"
            }`}
          >
            React
          </button>
          <button
            onClick={() => setFilter("next")}
            className={`px-4 py-2 rounded-full border ${
              filter === "next"
                ? "bg-[#8E1616] text-[#F8EEDF] border-[#8E1616]"
                : "bg-transparent text-[#F8EEDF] border-[#E8C999] hover:bg-[#E8C999] hover:text-[#000000]"
            }`}
          >
            Next.js
          </button>
          <button
            onClick={() => setFilter("node")}
            className={`px-4 py-2 rounded-full border ${
              filter === "node"
                ? "bg-[#8E1616] text-[#F8EEDF] border-[#8E1616]"
                : "bg-transparent text-[#F8EEDF] border-[#E8C999] hover:bg-[#E8C999] hover:text-[#000000]"
            }`}
          >
            Node.js
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
