import React from "react";

const SkillCategory = ({ title, icon, skills }) => {
  return (
    <div className="bg-[#F8EEDF] rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-[#E8C999]">
      <h3 className="text-xl font-bold mb-4 flex items-center text-[#000000]">
        {icon}
        {title}
      </h3>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center text-gray-800">
            <svg
              className="w-4 h-4 mr-2 text-[#8E1616]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: (
        <svg
          className="w-5 h-5 mr-2 text-[#8E1616]"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
        </svg>
      ),
      skills: [
        "HTML5 / CSS3 / SASS",
        "JavaScript (ES6+)",
        "React.js",
        "Next.js",
        "Responsive Design",
        "Tailwind CSS",
        "Redux / Context API",
      ],
    },
    {
      title: "Backend",
      icon: (
        <svg
          className="w-5 h-5 mr-2 text-[#8E1616]"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M4 15h16v-2H4v2zm0 4h16v-2H4v2zm0-8h16V9H4v2zm0-6v2h16V5H4z" />
        </svg>
      ),
      skills: [
        "Node.js",
        "Express.js",
        "RESTful APIs",
        "Authentication & Security",
        "API Design",
      ],
    },
    {
      title: "Database",
      icon: (
        <svg
          className="w-5 h-5 mr-2 text-[#8E1616]"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 3C7.58 3 4 4.79 4 7s3.58 4 8 4 8-1.79 8-4-3.58-4-8-4M4 9v3c0 2.21 3.58 4 8 4s8-1.79 8-4V9c0 2.21-3.58 4-8 4s-8-1.79-8-4m0 5v3c0 2.21 3.58 4 8 4s8-1.79 8-4v-3c0 2.21-3.58 4-8 4s-8-1.79-8-4z" />
        </svg>
      ),
      skills: [
        "PostgreSQL",
        "MongoDB",
        "SQL",
        "Database Design",
        "Data Modeling",
        "Query Optimization",
        "ORM / ODM",
      ],
    },
    {
      title: "ERP & CMS",
      icon: (
        <svg
          className="w-5 h-5 mr-2 text-[#8E1616]"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18-.21 0-.41-.06-.57-.18l-7.9-4.44A.991.991 0 013 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18.21 0 .41.06.57.18l7.9 4.44c.32.17.53.5.53.88v9M12 4.15L5 8.09v7.82l7 3.94 7-3.94V8.09l-7-3.94z" />
        </svg>
      ),
      skills: [
        "Odoo "
      ],
    },
    {
      title: "DevOps & Tools",
      icon: (
        <svg
          className="w-5 h-5 mr-2 text-[#8E1616]"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" />
        </svg>
      ),
      skills: [
        "Git / GitHub",
      
      ],
    },
    {
      title: "Soft Skills",
      icon: (
        <svg
          className="w-5 h-5 mr-2 text-[#8E1616]"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
        </svg>
      ),
      skills: [
        "Critical Thinking",
        "Team Collaboration",
        "Communication",
        "Time Management",
        "Adaptability",
        "Problem Solving",
        "Continuous Learning",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-[#000000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16 relative text-[#F8EEDF]">
          Skills & Expertise
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-4 h-1 w-20 bg-gradient-to-r from-[#8E1616] to-[#E8C999] rounded"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={index}
              title={category.title}
              icon={category.icon}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
