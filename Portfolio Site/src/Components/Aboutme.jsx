import React from 'react';
import { FiArrowRight, FiMapPin, FiBriefcase, FiMail } from 'react-icons/fi';
import { FaGraduationCap } from 'react-icons/fa';

const AboutMe = () => {
  const cardsData = [
    {
      id: 1,
      title: "Education",
      // Default white (mobile), blue on desktop, white on desktop hover
      icon: <FaGraduationCap className="text-[18px] lg:text-[20px] text-white lg:text-blue-400 lg:group-hover:text-white transition-colors duration-500" />,
      // Default active bg (mobile), subtle on desktop, active on desktop hover
      iconBg: "bg-blue-500/20 lg:bg-blue-500/10 lg:group-hover:bg-blue-500/20",
      line1: "B.Tech in Artificial Intelligence",
      line2: "2025 - 2029"
    },
    {
      id: 2,
      title: "Location",
      icon: <FiMapPin className="text-[18px] lg:text-[20px] text-white lg:text-purple-400 lg:group-hover:text-white transition-colors duration-500" />,
      iconBg: "bg-purple-500/20 lg:bg-purple-500/10 lg:group-hover:bg-purple-500/20",
      line1: "Mumbai, Maharashtra (India)",
      line2: "Open to Remote"
    },
    {
      id: 3,
      title: "Experience",
      icon: <FiBriefcase className="text-[18px] lg:text-[20px] text-white lg:text-fuchsia-400 lg:group-hover:text-white transition-colors duration-500" />,
      iconBg: "bg-fuchsia-500/20 lg:bg-fuchsia-500/10 lg:group-hover:bg-fuchsia-500/20",
      line1: "Fresher",
      line2: "Building amazing projects"
    },
    {
      id: 4,
      title: "Email",
      icon: <FiMail className="text-[18px] lg:text-[20px] text-white lg:text-indigo-400 lg:group-hover:text-white transition-colors duration-500" />,
      iconBg: "bg-indigo-500/20 lg:bg-indigo-500/10 lg:group-hover:bg-indigo-500/20",
      line1: "manas@example.com",
      line2: "Let's connect!"
    }
  ];

  return (
    <section id="about" className="relative py-8 lg:py-12 px-5 md:px-12 lg:px-20 xl:px-28 w-full flex justify-center">
      
      {/* Main Container - EXACT Proportions */}
      <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-10 lg:gap-10 w-full max-w-[1300px]">
        
        {/* ======================================= */}
        {/* LEFT SIDE - TEXT CONTENT (35% Width) */}
        {/* ======================================= */}
        <div className="w-full lg:w-[35%] flex flex-col items-start justify-center">
          
          {/* Badge */}
          <div className="flex items-center gap-2 lg:gap-3 mb-4 lg:mb-5">
            <span className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)] animate-pulse"></span>
            <span className="text-[10px] lg:text-[11px] font-bold tracking-[0.2em] text-purple-400 uppercase">
              About Me
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white mb-4 lg:mb-6 tracking-tight">
            Who I Am
          </h2>

          {/* Bio Text */}
          <div className="flex flex-col gap-3 lg:gap-4 text-gray-400 mb-6 lg:mb-8 w-full max-w-[400px]">
            <p className="text-[13px] sm:text-[14px] lg:text-[15px] leading-relaxed text-gray-300">
              I'm a passionate Full Stack Developer who loves turning ideas into reality through code.
            </p>
            <p className="text-[13px] sm:text-[14px] lg:text-[15px] leading-relaxed text-gray-400">
              I enjoy building web applications that are fast, scalable, and provide great user experiences.
            </p>
          </div>

          {/* Action Button */}
          <button className="group flex items-center gap-2 px-5 py-2 lg:py-2.5 rounded-lg font-medium text-[13px] lg:text-[14px] text-white border border-white/10 bg-transparent hover:bg-white/5 hover:border-white/20 transition-all duration-300 active:scale-95">
            Know More 
            <FiArrowRight className="text-[14px] lg:text-[16px] group-hover:translate-x-1 transition-transform duration-300 text-gray-300" />
          </button>

        </div>


        {/* ======================================= */}
        {/* RIGHT SIDE - CARDS GRID (65% Width) */}
        {/* ======================================= */}
        <div className="w-full lg:w-[65%] grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
          {cardsData.map((card) => (
            <div 
              key={card.id} 
              // Active shadow/border/translate by default (mobile), reset on lg, active on lg:hover
              className="group relative flex flex-col items-start p-4 sm:p-5 lg:p-6 rounded-xl lg:rounded-2xl bg-[#13151c] overflow-hidden min-h-[190px] sm:min-h-[220px] lg:min-h-[280px] cursor-pointer transition-all duration-500 
                         border border-purple-500/30 lg:border-white/5 lg:hover:border-purple-500/30
                         shadow-[0_0_20px_rgba(168,85,247,0.15)] lg:shadow-lg lg:hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]
                         -translate-y-1 lg:translate-y-0 lg:hover:-translate-y-1"
            >
              {/* Premium Background Hover Layer - Active by default on mobile */}
              <div className="absolute inset-0 bg-white/[0.02] opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 z-0"></div>

              {/* Bottom to Top Fill Animation - Filled by default on mobile (translate-y-0) */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-500/15 via-cyan-500/5 to-transparent translate-y-0 lg:translate-y-full lg:group-hover:translate-y-0 transition-transform duration-700 ease-out z-0"></div>
              
              <div className="relative z-10 w-full flex flex-col h-full">
                
                {/* Icon Circle - Scaled up by default on mobile */}
                <div className={`w-8 h-8 lg:w-10 lg:h-10 rounded-full flex items-center justify-center mb-3 lg:mb-5 transition-transform duration-500 scale-110 lg:scale-100 lg:group-hover:scale-110 ${card.iconBg}`}>
                  {card.icon}
                </div>

                {/* Card Title */}
                <h3 className="text-white font-semibold text-[13px] sm:text-[14px] lg:text-[16px] mb-1 lg:mb-2">
                  {card.title}
                </h3>

                {/* Main Line */}
                <p className="text-[11px] sm:text-[12px] lg:text-[13px] text-gray-300 leading-snug lg:leading-relaxed pr-1 flex-grow mt-1">
                  {card.line1}
                </p>

                {/* Sub Line - Bright default on mobile, dim on desktop unless hovered */}
                <p className="text-[10px] sm:text-[11px] lg:text-[12px] font-medium mt-auto pt-2 transition-colors duration-300 text-gray-300 lg:text-gray-500 lg:group-hover:text-gray-300">
                  {card.line2}
                </p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutMe;