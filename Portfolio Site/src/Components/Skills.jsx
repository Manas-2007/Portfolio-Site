import React from 'react';
import AnimatedHeading from './AnimatedHeading';
import { 
  SiTailwindcss, SiBootstrap, SiJavascript, 
  SiExpress, SiMongodb, SiC, SiCplusplus, 
  SiVercel, SiRender 
} from 'react-icons/si';
import { 
  FaGithub, FaCube, FaHtml5, FaCss3Alt, 
  FaReact, FaNodeJs, FaPython 
} from 'react-icons/fa';

const Skills = () => {
  const skillCategories = [
    {
      id: 1,
      title: "Languages & Core",
      cardStyle: "border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.5)]",
      floatDelay: "0s",
      skills: [
        { name: "C/C++", icon: <SiCplusplus className="text-blue-400 drop-shadow-[0_0_12px_rgba(96,165,250,0.8)]" /> },
        { name: "Python", icon: <FaPython className="text-yellow-400 drop-shadow-[0_0_12px_rgba(250,204,21,0.8)]" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-300 drop-shadow-[0_0_12px_rgba(253,224,71,0.8)]" /> },
        { name: "OOP", icon: <FaCube className="text-fuchsia-400 drop-shadow-[0_0_12px_rgba(232,121,249,0.8)]" /> }
      ]
    },
    {
      id: 2,
      title: "Frontend & UI",
      cardStyle: "border-cyan-500/40 shadow-[0_0_20px_rgba(34,211,238,0.5)]",
      floatDelay: "0.2s",
      skills: [
        { name: "React.js", icon: <FaReact className="text-cyan-400 animate-[spin_4s_linear_infinite] drop-shadow-[0_0_12px_rgba(34,211,238,0.8)]" /> },
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500 drop-shadow-[0_0_12px_rgba(249,115,22,0.8)]" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 drop-shadow-[0_0_12px_rgba(59,130,246,0.8)]" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400 drop-shadow-[0_0_12px_rgba(56,189,248,0.8)]" /> },
        { name: "Bootstrap 5", icon: <SiBootstrap className="text-purple-500 drop-shadow-[0_0_12px_rgba(168,85,247,0.8)]" /> }
      ]
    },
    {
      id: 3,
      title: "Backend & Database",
      cardStyle: "border-green-500/40 shadow-[0_0_20px_rgba(34,197,94,0.5)]",
      floatDelay: "0.4s",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-500 drop-shadow-[0_0_12px_rgba(34,197,94,0.8)]" /> },
        { name: "Express.js", icon: <SiExpress className="text-gray-200 drop-shadow-[0_0_12px_rgba(229,231,235,0.6)]" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-400 drop-shadow-[0_0_12px_rgba(74,222,128,0.8)]" /> }
      ]
    },
    {
      id: 4,
      title: "Tools & Deployment",
      cardStyle: "border-orange-500/40 shadow-[0_0_20px_rgba(249,115,22,0.5)]",
      floatDelay: "0.6s",
      skills: [
        { name: "Git & GitHub", icon: <FaGithub className="text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.8)]" /> },
        { name: "Vercel", icon: <SiVercel className="text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.8)]" /> },
        { name: "Render", icon: <SiRender className="text-teal-400 drop-shadow-[0_0_12px_rgba(45,212,191,0.8)]" /> }
      ]
    }
  ];

  return (
    <section id="skills" className="relative py-5 lg:py-10 px-5 md:px-12 lg:px-20 xl:px-28 w-full flex justify-center z-10 bg-[#0a0d14]">
      
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
          }
        `}
      </style>

      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      <div className="w-full max-w-[1300px] flex flex-col items-start">
        
        {/* Header Section */}
        <div className="mb-10 lg:mb-10">
          <div className="flex items-center gap-2 lg:gap-3 mb-3">
            <span className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)] animate-pulse"></span>
            <span className="text-[11px] font-bold tracking-[0.2em] text-purple-400 uppercase">
              My Skills
            </span>
          </div>
         <AnimatedHeading 
        text="Technologies I Work With" 
        className="text-2xl lg:text-3xl mt-1" 
      />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 md:gap-6 w-full">
          {skillCategories.map((category) => (
            <div 
              key={category.id} 
              className={`flex flex-col p-4 sm:p-6 md:p-7 rounded-2xl bg-[#13151c] border ${category.cardStyle}`}
              style={{ animation: `float 4s ease-in-out infinite ${category.floatDelay}` }}
            >
              {/* Category Title - Scaled for mobile */}
              <h3 className="text-white font-semibold text-[13px] sm:text-[16px] md:text-[18px] tracking-wide mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-white/50">
                {category.title}
              </h3>

              {/* Skills List inside the Category */}
              <div className="flex flex-col gap-3 sm:gap-4 md:gap-5">
                {category.skills.map((skill, index) => (
                  <div 
                    key={index}
                    data-aos="fade-up"
                    data-aos-delay={index * 200}
                    className="flex items-center gap-2.5 sm:gap-4 cursor-default"
                  >
                    <div className="text-[18px] sm:text-[24px] md:text-[26px]">
                      {skill.icon}
                    </div>
                    <span className="text-gray-100 text-[11px] sm:text-[14px] md:text-[15px] font-medium tracking-wide truncate">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;