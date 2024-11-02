import React, { useState } from 'react';

const skillsData = [
  { name: 'C', description: 'C is a powerful, low-level programming language.' },
  { name: 'C++', description: 'Experience in object-oriented programming and data structures.' },
  { name: 'Python', description: 'Skilled in data analysis and machine learning using Python libraries.' },
  { name: 'JavaScript', description: 'A versatile language for interactive web development.' },
  { name: 'Typescript', description: 'TypeScript is a typed superset of JavaScript.' },
  { name: 'HTML', description: 'HTML is the standard markup language for web pages.' },
  { name: 'CSS', description: 'CSS (Cascading Style Sheets) styles web page layouts.' },
  { name: 'Bootstrap', description: 'Bootstrap is a popular front-end framework for responsive design.' },
  { name: 'Node.js', description: 'Experience in server-side JavaScript development.' },
  { name: 'React', description: 'Expert in building user interfaces with React.' },
  { name: 'Next.js', description: 'Familiar with server-side rendering and static site generation.' },
  { name: 'REST API', description: 'Experience in building RESTful APIs using Node.js.' },
  { name: 'Redux Toolkit', description: 'Proficient in state management using Redux.' },
  { name: 'SQL', description: 'Knowledge in relational databases and SQL queries.' },
  { name: 'MongoDB', description: 'Proficient in NoSQL database management.' },
  { name: 'TailwindCSS', description: 'A utility-first CSS framework for rapid UI development.' },
  { name: 'ShadCN UI/UX', description: 'Elegant, intuitive designs for modern applications.' },
];

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <div className="w-full bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {skillsData.map((skill, index) => (
          <div 
            key={index}
            className={`bg-gray-700 hover:bg-gray-600 transition duration-300 p-4 rounded-md cursor-pointer 
            ${hoveredSkill === skill.description ? 'shadow-lg glow' : ''}`} // Add glow class on hover
            onMouseEnter={() => setHoveredSkill(skill.description)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <h3 className="text-xl font-semibold">{skill.name}</h3>
            {hoveredSkill === skill.description && (
              <p className="text-sm mt-2">{skill.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
