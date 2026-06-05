import React from 'react';
import { FiArrowRight, FiSend, FiGithub, FiLinkedin, FiInstagram, FiMail } from 'react-icons/fi';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript } from 'react-icons/si';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col lg:flex-row items-center justify-between pt-24 lg:pt-5 pb-0 px-6 md:px-12 lg:px-28 gap-12 lg:gap-4 overflow-hidden">
      
      {/* LEFT COLUMN - TEXT & CONTENT */}
      <div className="w-full lg:flex-1 flex flex-col items-center lg:items-start text-center lg:text-left justify-center relative z-10 gap-5">
        
        {/* Minimal Role Badge */}
        <div className="flex items-center gap-3 mb-1 lg:mb-2">
          <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse shadow-[0_0_8px_rgba(168,85,247,0.8)]"></span>
          <span className="text-xs font-semibold tracking-[0.2em] text-gray-300 uppercase">
            AI-Assisted Full Stack Developer
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] text-white leading-tight flex flex-wrap gap-x-3 items-center tracking-tight justify-center lg:justify-start">
          <span className="font-semibold text-gray-100">Welcome, I'm</span>
          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-500 to-cyan-400 drop-shadow-[0_0_12px_rgba(168,85,247,0.4)]">
            Manas
          </span>
        </h1>

        {/* Short Bio */}
        <div className="flex flex-col gap-2 text-gray-400 max-w-[440px]">
          <p className="text-[15px] sm:text-lg font-medium text-gray-100 leading-snug">
          I build scalable, modern, and user-friendly web applications.
        </p>
          <p className="text-base sm:text-base md:text-xl lg:text-base text-gray-400/90 leading-relaxed md:leading-relaxed hidden sm:block">
            Turning complex ideas into elegant, high-performance digital experiences. I focus on writing clean code and building products that drive real-world impact.
          </p>
        </div>

      {/* Action Buttons*/}
<div className="flex flex-col sm:flex-row items-center gap-4 mt-4 w-full sm:w-auto">
  
  {/* View Work (Primary) */}
  <a href="#projects" className="group relative flex items-center justify-center w-full sm:w-auto gap-2 px-8 py-3 rounded-xl font-semibold text-sm text-white overflow-hidden shadow-[0_0_15px_rgba(168,85,247,0.3)] hover:shadow-[0_0_25px_rgba(34,211,238,0.4)] transition-all duration-300 active:scale-95">
    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 via-fuchsia-600 to-cyan-600"></span>
    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 animate-[shimmer_1.5s_infinite]"></span>
    <span className="relative flex items-center gap-2 z-10">
      View Work 
      <FiArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
    </span>
  </a>

  {/* Contact */}
  <a 
    href="#contact" 
    className="group relative flex items-center justify-center w-full sm:w-auto gap-2 px-8 py-3 rounded-xl font-semibold text-sm text-white bg-black/20 hover:bg-black/40 border border-transparent transition-all duration-300 active:scale-95 shadow-[0_0_10px_rgba(255,255,255,0.05)]"
  >
    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/50 to-cyan-500/50 p-[1px] -z-10">
      <div className="h-full w-full rounded-xl bg-[#030303]"></div>
    </div>
    
    <span className="relative flex items-center gap-2 z-10">
      Contact 
      <FiSend size={16} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300" />
    </span>
  </a>

</div>

{/* Social Links */}
<div className="flex items-center gap-6 mt-6">
  {[
    { icon: <FiGithub size={20} />, link: "https://github.com/manas-2007" },
    { icon: <FiLinkedin size={20} />, link: "http://www.linkedin.com/in/manas-kumar-patidar-73954a374" },
    { icon: <FiMail size={20} />, link: "mailto:patidarmanas01@gmail.com" },
  ].map((social, index) => (
    <a 
      key={index} 
      href={social.link} 
      target="_blank" 
      rel="noreferrer"
      className="w-11 h-11 flex items-center justify-center rounded-full transition-all duration-300 border 
      text-cyan-400 border-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.4)] 
      lg:hover:text-purple-400 lg:hover:border-purple-400 lg:hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] lg:hover:-translate-y-1"
    >
      {social.icon}
    </a>
  ))}
</div>


        
      </div>


      {/* RIGHT COLUMN - IMAGE & GRAPHICS */}
      <div className="w-full lg:flex-1 relative flex items-end justify-center lg:justify-end min-h-[300px] sm:min-h-[350px] lg:min-h-[calc(100vh-7rem)] z-10">
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[350px] lg:w-[450px] h-[350px] md:h-[350px] lg:h-[450px] bg-purple-600/30 rounded-full blur-[50px] md:blur-[100px] lg:blur-[100px] animate-pulse -z-10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] md:w-[250px] lg:w-[280px] h-[250px] md:h-[250px] lg:h-[280px] bg-cyan-500/20 rounded-full blur-[40px] md:blur-[80px] lg:blur-[80px] -z-10"></div>

        {/* Premium Orbital Animations */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[320px] md:w-[320px] lg:w-[420px] h-[280px] sm:h-[320px] md:h-[320px] lg:h-[420px] border border-white/10 rounded-full animate-[spin_15s_linear_infinite] -z-5">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_15px_rgba(34,211,238,1)]"></div>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] sm:w-[400px] md:w-[420px] lg:w-[560px] h-[360px] sm:h-[400px] md:h-[420px] lg:h-[560px] border border-dashed border-white/10 rounded-full animate-[spin_25s_linear_infinite_reverse] -z-5">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-4 h-4 bg-purple-500 rounded-full shadow-[0_0_20px_rgba(168,85,247,1)]"></div>
        </div>

        {/* Profile Image */}
        <img 
          src="/profile.jpg" 
          alt="Manas" 
          className="relative z-10 w-full max-w-[300px] sm:max-w-[340px] md:max-w-[380px] lg:max-w-[420px] h-auto object-contain object-bottom drop-shadow-[0_0_6px_rgba(168,85,247,0.9)]"
        />

        {/* Floating Tech Icons */}
        <div className="absolute top-[10%] lg:top-[20%] right-[75%] lg:right-[85%] p-2.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md animate-[bounce_4s_infinite] shadow-[0_0_15px_rgba(34,211,238,0.2)] z-20">
          <FaReact className="text-xl md:text-2xl text-cyan-400" />
        </div>

        <div className="absolute top-[25%] lg:top-[30%] right-[5%] md:right-[5%] lg:right-[10%] p-2.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md animate-[bounce_5s_infinite_reverse] shadow-[0_0_15px_rgba(56,189,248,0.2)] z-20">
          <SiTailwindcss className="text-xl md:text-2xl text-sky-400" />
        </div>

        <div className="absolute bottom-[35%] lg:bottom-[40%] right-[10%] md:right-[10%] lg:right-[15%] p-2.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md animate-[bounce_6s_infinite] shadow-[0_0_15px_rgba(253,224,71,0.2)] z-20">
          <SiJavascript className="text-xl md:text-2xl text-yellow-400" />
        </div>

        <div className="absolute bottom-[20%] lg:bottom-[25%] right-[70%] lg:right-[80%] p-2.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md animate-[bounce_4.5s_infinite_reverse] shadow-[0_0_15px_rgba(34,197,94,0.2)] z-20">
          <FaNodeJs className="text-xl md:text-2xl text-green-500" />
        </div>

      </div>
    </section>
  );
};

export default Hero;