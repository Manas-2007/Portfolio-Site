import React from 'react';
import { FiArrowRight, FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiArrowUp } from 'react-icons/fi';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const contactInfo = [
    { icon: <FiMail />, text: "Gmail", link: "mailto:patidarmanas01@gmail.com" },
    { icon: <FiPhone />, text: "Phone", link: "tel:+918269824724" },
    { icon: <FiMapPin />, text: "Mumbai, MH", link: "#" },
    { icon: <FiLinkedin />, text: "Linkedin", link: "http://www.linkedin.com/in/manas-kumar-patidar-73954a374" },
    { icon: <FiGithub />, text: "Github", link: "https://github.com/manas-2007" },
  ];

  return (
    <footer id='contact' className="relative bg-[#0a0d14] border-t border-white/5 pt-5 lg:pt-10 pb-6 overflow-hidden z-10">
      
      <style>
        {`
          @keyframes scan {
            0% { top: 0%; opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { top: 100%; opacity: 0; }
          }
        `}
      </style>

      {/* Background ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-600/10 blur-[100px] rounded-full pointer-events-none -z-10"></div>

      <div className="w-full max-w-[1300px] mx-auto">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6 mb-10">
          
          {/* LEFT COLUMN: CTA & Heading */}
          <div className="flex flex-col items-start text-left pr-0 lg:pr-8 sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-2 lg:gap-3 mb-3">
            <span className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)] animate-pulse"></span>
            <span className="text-[11px] font-bold tracking-[0.2em] text-purple-400 uppercase">
              Let's Connect
            </span>
          </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">
              Have a Project in mind?
            </h2>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed max-w-md">
              Let's build something amazing together. I'm currently open for new opportunities and exciting projects.
            </p>
            <a 
              href="mailto:patidarmanas01@gmail.com"
              className="group relative flex items-center gap-2 px-6 py-2.5 rounded-xl font-semibold text-sm text-white overflow-hidden 
                         shadow-[0_0_25px_rgba(34,211,238,0.6)] lg:shadow-[0_0_15px_rgba(168,85,247,0.3)] lg:hover:shadow-[0_0_25px_rgba(34,211,238,0.6)] 
                         transition-all duration-300 active:scale-95 w-fit"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 via-fuchsia-500 to-cyan-500"></span>
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent 
                               opacity-100 lg:opacity-0 lg:group-hover:opacity-100 animate-[shimmer_1.5s_infinite]"></span>
              <span className="relative flex items-center gap-2 z-10">
                Get In Touch
                <FiArrowRight className="translate-x-1 lg:translate-x-0 lg:group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </a>
          </div>


          {/* MIDDLE COLUMN: */}
     <div className="grid grid-cols-2 gap-y-4 gap-x-3 pt-4 lg:pt-2 sm:col-span-1">
  {contactInfo.map((info, index) => (
    <a 
      key={index}
      href={info.link}
      target={info.link.startsWith('http') ? "_blank" : "_self"}
      rel="noreferrer"
      className="group flex items-center gap-2 lg:gap-3 text-gray-400 hover:text-gray-100 transition-colors duration-300 min-w-0"
    >
      <span className="shrink-0 w-7 h-7 lg:w-8 lg:h-8 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-purple-400 group-hover:bg-purple-500/20 group-hover:text-cyan-400 group-hover:border-purple-500/30 transition-all duration-300">
        {info.icon}
      </span>
      <span className="text-[11px] sm:text-[13px] md:text-[14px] font-medium group-hover:translate-x-1 transition-transform duration-300 truncate">
        {info.text}
      </span>
    </a>
  ))}
    </div>


{/* RIGHT COLUMN: 8x8 Animated Tech Grid */}
<div className="flex items-center justify-center relative min-h-[150px] sm:col-span-1 lg:pt-0">
  
  <div className="relative w-[140px] h-[140px] lg:w-[180px] lg:h-[180px] transition-all duration-500">
    
    {/* Grid of Dots */}
    <div className="grid grid-cols-8 gap-3 w-full h-full">
      {[...Array(64)].map((_, i) => (
        <div 
          key={i} 
          className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-white/40 hover:bg-cyan-400 shadow-[0_0_5px_rgba(255,255,255,0.2)] hover:shadow-[0_0_10px_rgba(34,211,238,0.8)] transition-all duration-300"
        ></div>
      ))}
    </div>

    {/* Scanning Line */}
    <div 
      className="absolute left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_#22d3ee]"
      style={{ animation: 'scan 3s ease-in-out infinite' }}
    ></div>

    {/* Badge in Center */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="px-3 py-1 bg-[#0a0d14]/80 backdrop-blur-md border border-cyan-500/50 rounded text-cyan-300 text-[10px] font-bold tracking-widest shadow-[0_0_15px_rgba(34,211,238,0.4)]">
        INDIA
      </div>
    </div>
  </div>

</div>

        </div>

        {/* BOTTOM BAR: Copyright & Scroll to Top */}
        <div className="relative pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          
          <p className="text-gray-500 text-[12px] md:text-[13px] font-medium text-center md:text-left">
            © {new Date().getFullYear()} Manas. All rights reserved.
          </p>

          <button 
            onClick={scrollToTop}
            className="group absolute right-0 -top-6 md:relative md:top-0 w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-tr from-purple-600 to-cyan-500 shadow-[0_0_20px_rgba(168,85,247,0.5)] hover:shadow-[0_0_30px_rgba(34,211,238,0.8)] hover:-translate-y-1 transition-all duration-300 z-20"
            aria-label="Scroll to top"
          >
            <FiArrowUp className="text-white text-lg group-hover:animate-bounce" />
          </button>
          
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;