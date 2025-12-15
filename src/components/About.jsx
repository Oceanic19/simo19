// src/components/About.jsx

import React from 'react';
// IMAGE FIX: Import your image from src/assets
import profileImage from '../assets/ME.jpg'; 

// Data structure for the skills boxes
const skillsData = [
  { 
    title: "FRONTEND", 
    items: [
      { text: "HTML", icon: "fab fa-html5 text-orange-500" }, 
      { text: "CSS", icon: "fab fa-css3-alt text-blue-500" },
      { text: "JavaScript", icon: "fab fa-js-square text-yellow-400" },
      { text: "React", icon: "fab fa-react text-cyan-600" }
    ] 
  },
  { 
    title: "UI / UX DESIGN", 
    items: [
      { text: "CSS", icon: "fab fa-css3-alt text-blue-500" }, 
      { text: "Figma", icon: "fab fa-figma text-purple-600" },
      { text: "Tailwind CSS", icon: "fab fa-tailwind css text-purple-600" }
      
    ] 
  },
  { 
    title: "DATABASES / SERVICES", 
    items: [
      { text: "MySQL", icon: "fas fa-database text-blue-800" }, 
      { text: "Firebase", icon: "fas fa-fire text-yellow-600" }
    ] 
  },
  { 
    title: "TOOLS & LANGUAGES", 
    items: [
      { text: "Android Studio", icon: "fab fa-android text-green-600" }, 
      { text: "Java", icon: "fab fa-java text-red-700" }, 
      { text: "Python", icon: "fab fa-python text-yellow-500" }, 
      { text: "C++", icon: "fas fa-code text-blue-500" }
    ] 
  },
];

// Helper Component for the Skill Boxes
const SkillBox = ({ title, items }) => (
  <div className="flex flex-col border border-neutral-400 dark:border-neutral-600 rounded-md shadow-lg dark:shadow-neutral-700/50 h-full overflow-hidden">
    {/* Title Bar */}
    <div className="bg-neutral-200 dark:bg-neutral-800 border-b border-neutral-400 dark:border-neutral-600 p-2 text-center font-semibold text-sm">
      {title}
    </div>
    
    {/* Icons/Text Content */}
    <div className="flex flex-wrap justify-center items-center gap-4 p-4 flex-grow">
      {items.map((item, index) => (
        <div key={index} className="flex flex-col items-center text-xs space-y-1">
          <i className={`${item.icon} text-3xl`}></i>
          <span className="text-neutral-600 dark:text-neutral-300">{item.text}</span>
        </div>
      ))}
    </div>
  </div>
);


export default function About() {
  return (
    <section id="about" className="px-10 py-16 scroll-mt-24">
      
      {/* Breadcrumb Navigation */}
      <div className="flex items-center mb-10 text-lg">
        <span className="text-neutral-500 dark:text-neutral-400 mr-2">/ /</span>
        <a href="#about" className="text-indigo-600 dark:text-indigo-300 hover:underline">About</a>
      </div>
      
      {/* 1. MAIN CONTENT (Image & Text) */}
      <div className="flex flex-col md:flex-row gap-12">
        
        {/* LEFT COLUMN: Image Container */}
        <div className="md:w-1/3 flex-shrink-0">
          <div className="relative border-4 border-neutral-400 h-80 w-full overflow-hidden">
            
            <img
                src={profileImage} // Loads the imported image
                alt="Melgen Simo Profile Picture" 
                className="w-full h-full object-cover object-center" 
            />

          </div>
        </div>

        {/* RIGHT COLUMN: About Text */}
        <div className="md:w-2/3 space-y-6 text-base leading-relaxed">
          <p>
            Hello, I'm Melgen, a 3rd-year BS Information Technology student passionate about front-end development, UI design and networking. I enjoy transforming ideas into clean, responsive, and user-friendly interfaces.
          </p>
          <p>
            As I grow in the field of IT, I aim to build projects that combine both creativity and functionality. I'm currently sharpening my skills in HTML, CSS, JavaScript and modern design tools, while also practicing network configuration and security fundamentals.
          </p>
          <p>
            I've discovered that my strengths and interests truly align with front-end (UI design and networking). I enjoy figuring out how things work, solving connectivity issues, and exploring new technologies that challenge me to grow and enhance my capabilities.
          </p>
            Aside from my studies, I aspire to serve in the Armed Forces of the Philippines or build a career in the IT industry, where I can apply my skills, discipline, and passion for technology to make a meaningful impact.
          <p className="border-t border-neutral-300 dark:border-neutral-700 pt-4 mt-6">
          
          </p>
        </div>
      </div>
      
      {/* 2. SKILLS / TECH BOXES */}
      <div className="mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((skill, index) => (
            <SkillBox key={index} title={skill.title} items={skill.items} />
          ))}
        </div>
      </div>
      
    </section>
  );
}