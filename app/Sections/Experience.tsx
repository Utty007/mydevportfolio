import React from 'react'
import { TbBrandNextjs, TbBrandTypescript, TbBrandTailwind, TbBrandReact } from 'react-icons/tb'
import { SiStorybook, SiSwagger } from 'react-icons/si'

// Define a type for Experience data
interface ExperienceItemProps {
  company: string;
  role: string;
  duration: string;
  responsibilities: string[];
  technologies: React.ElementType[];
}

// Individual Experience Item Component
const ExperienceItem: React.FC<{
  experience: ExperienceItemProps, 
  side: 'left' | 'right'
}> = ({ experience, side }) => {
  return (
    <div className={`
      w-full md:w-1/2 md:absolute 
      ${side === 'left' ? 'md:left-0 md:pr-16' : 'md:right-0 md:pl-16'}
    `}>
      <div className={`
        bg-white dark:bg-gray-900 
        p-6 rounded-lg shadow-lg 
        ${side === 'left' ? 'md:mr-auto' : 'md:ml-auto'}
        relative z-10
      `}>
        <h2 className="text-xl font-bold text-[#fa043d] mb-2">{experience.company}</h2>
        <h3 className="text-lg font-semibold mb-1 text-black dark:text-white">{experience.role}</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-3">{experience.duration}</p>
        
        <ul className="list-disc list-inside text-gray-800 dark:text-white space-y-2">
          {experience.responsibilities.map((resp, index) => (
            <li key={index} className="text-sm">{resp}</li>
          ))}
        </ul>
        
        <div className="flex items-center gap-3 mt-4">
          {experience.technologies.map((Icon, index) => (
            <Icon 
              key={index} 
              className="w-8 h-8 p-1 bg-gray-100 dark:bg-gray-700 rounded text-black dark:text-white" 
            />
          ))}
        </div>
      </div>
    </div>
  )
}

// Main Experience Component
const Experience: React.FC = () => {
  // Experience data
  const experiences: ExperienceItemProps[] = [
    {
      company: "Cimpla Africa",
      role: "Junior Frontend Engineer",
      duration: "July 2024 - Present",
      responsibilities: [
        "Developed and maintained reusable component libraries",
        "Implemented robust frontend solutions for fintech platform",
        "Integrated backend APIs using Swagger for seamless data communication",
        "Documented components using Storybook for team collaboration"
      ],
      technologies: [TbBrandReact, TbBrandTypescript, SiStorybook, SiSwagger]
    },
    {
      company: "Tiaago",
      role: "Junior Frontend Developer",
      duration: "June 2024 - October 2024",
      responsibilities: [
        "Designed and implemented responsive authentication interfaces",
        "Created modular and reusable UI components",
        "Developed interactive dashboard and portfolio pages",
        "Collaborated on job application platform frontend architecture"
      ],
      technologies: [TbBrandNextjs, TbBrandTailwind, TbBrandReact]
    },
    {
      company: "KekeCruise",
      role: "Freelance Web Developer",
      duration: "Project-based",
      responsibilities: [
        "Designed and developed responsive landing page for transportation startup",
        "Implemented modern web design principles",
        "Optimized website for performance and user experience"
      ],
      technologies: [TbBrandNextjs, TbBrandTypescript, TbBrandTailwind]
    }
  ];

  return (
    <div id="Experience" className="px-6 md:px-12 bg-gray-50 dark:bg-black py-16">
      <h1 className="text-center text-5xl text-[#fa043d] mb-12">Professional Experience</h1>
      
      <div className="relative max-w-6xl mx-auto md:h-[1200px]">
        {/* Central Timeline */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full border-r-2 border-gray-300 dark:border-gray-700"></div>
        
        {experiences.map((exp, index) => (
          <div 
            key={exp.company} 
            className="relative md:h-[400px] flex items-center"
          >
            {/* Timeline Dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 z-10 
              bg-[#fa043d] w-4 h-4 rounded-full 
              hidden md:block top-1/2 -translate-y-1/2"></div>
            
            <ExperienceItem 
              experience={exp} 
              side={index % 2 === 0 ? 'left' : 'right'}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience