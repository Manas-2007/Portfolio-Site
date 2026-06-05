import React from 'react';
import { FaRobot, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';

const Certifications = () => {
  const certData = [
    {
      id: 1,
      title: "e-Yantra Robotics", // Shortened slightly for better mobile fit
      issuer: "IIT Bombay",
      icon: <FaRobot className="text-orange-400 drop-shadow-[0_0_12px_rgba(251,146,60,0.8)]" />,
      borderStyle: "border-orange-500/30 shadow-[0_0_15px_rgba(249,115,22,0.1] group-hover:border-orange-500/60 group-hover:shadow-[0_0_30px_rgba(249,115,22,0.25)]",
      description: "Participated in this prestigious national-level robotics competition and successfully qualified for Stage 2.",
      date: "First Year"
    },
    {
      id: 2,
      title: "Complete JavaScript",
      issuer: "KnowledgeGate",
      icon: <SiJavascript className="text-yellow-400 drop-shadow-[0_0_12px_rgba(250,204,21,0.8)]" />,
      borderStyle: "border-yellow-500/30 shadow-[0_0_15px_rgba(234,179,8,0.1)] group-hover:border-yellow-500/60 group-hover:shadow-[0_0_30px_rgba(234,179,8,0.25)]",
      description: "Mastered core JavaScript concepts, ES6+, and DOM manipulation. Completed with a score of 80%.",
      date: "First Year"
    },
    {
      id: 3,
      title: "React.js Mastery",
      issuer: "KnowledgeGate",
      icon: <FaReact className="text-cyan-400 drop-shadow-[0_0_12px_rgba(34,211,238,0.8)] animate-[spin_4s_linear_infinite]" />,
      borderStyle: "border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.1)] group-hover:border-cyan-500/60 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.25)]",
      description: "Advanced training in functional components, React Hooks, state management, and modern frontend practices.",
      date: "First Year"
    },
    {
      id: 4,
      title: "Backend Development",
      issuer: "KnowledgeGate",
      icon: <FaNodeJs className="text-green-500 drop-shadow-[0_0_12px_rgba(34,197,94,0.8)]" />,
      borderStyle: "border-green-500/30 shadow-[0_0_15px_rgba(34,197,94,0.1)] group-hover:border-green-500/60 group-hover:shadow-[0_0_30px_rgba(34,197,94,0.25)]",
      description: "Comprehensive learning of Node.js, Express.js, server-side architecture, and API integration.",
      date: "First Year"
    }
  ];

  return (
    <section id="certifications" className="relative py-8 lg:py-10 px-5 md:px-12 lg:px-20 xl:px-28 w-full flex justify-center z-10 bg-[#0a0d14]">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/5 blur-[100px] rounded-full pointer-events-none -z-10"></div>

      <div className="w-full max-w-[1300px] flex flex-col">
        
        {/* ======================================= */}
        {/* HEADER SECTION */}
        {/* ======================================= */}
        <div className="flex flex-col items-start mb-8 lg:mb-7">
          <div className="flex items-center gap-2 mb-2 lg:mb-3">
            <span className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)] animate-pulse"></span>
            <span className="text-[10px] lg:text-[11px] font-bold tracking-[0.2em] text-purple-400 uppercase">
              Achievements
            </span>
          </div>
          <h2 className="text-2xl  sm:text-3xl font-bold text-white tracking-tight">
            Certifications & Awards
          </h2>
        </div>

        {/* ======================================= */}
        {/* CERTIFICATIONS GRID */}
        {/* ======================================= */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-6 w-full">
          {certData.map((cert) => (
            <div 
              key={cert.id}
              // Applied cert.borderStyle and adjusted padding (p-4) for mobile
              className={`group relative flex flex-col p-4 sm:p-6 rounded-2xl bg-gradient-to-b from-[#161a24] to-[#0a0d14] border overflow-hidden transition-all duration-500 hover:-translate-y-1 ${cert.borderStyle} shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]`}
            >
              
              {/* Top Section: Icon & Date Badge */}
              <div className="flex justify-between items-start mb-4 sm:mb-6 w-full">
                {/* Scaled icon box down for mobile */}
                <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/5 border border-white/30 flex items-center justify-center text-[18px] sm:text-[22px]">
                  {cert.icon}
                </div>
                {/* Scaled badge text - Now strictly on the top right */}
                <span className="shrink-0 px-2.5 py-1 text-[9px] sm:text-[10px] font-medium text-gray-200 bg-white/5 rounded-full border border-white/40 mt-1 sm:mt-0">
                  {cert.date}
                </span>
              </div>

              {/* Title & Issuer - Adjusted font sizes so they don't break in 2-col mobile */}
              <h3 className="text-white font-semibold text-[13px] sm:text-[17px] tracking-wide mb-1 group-hover:text-gray-100 transition-colors">
                {cert.title}
              </h3>
              <p className="text-purple-400 text-[10px] sm:text-[12px] font-medium tracking-wider uppercase mb-3 sm:mb-4 truncate">
                {cert.issuer}
              </p>

              {/* Description - Made text smaller and tight for mobile */}
              <p className="text-gray-400 text-[11px] sm:text-[13px] leading-relaxed flex-grow">
                {cert.description}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;