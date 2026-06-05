import React from 'react';
import { FiArrowRight, FiSend, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript } from 'react-icons/si';

const Hero = () => {
  return (
    <section id='home' className="relative min-h-screen flex items-center justify-center pt-32 pb-12 lg:pt-16 lg:pb-0 px-6 md:px-12 lg:px-20 overflow-hidden">
    <div className="w-full max-w-[1300px] mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-8">

        {/* LEFT COLUMN - TEXT & CONTENT */}
    <div className="w-full lg:flex-1 flex flex-col items-center lg:items-start text-center lg:text-left justify-center relative z-10 gap-6 lg:max-w-[600px]">
          
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
          <div className="flex items-center justify-center lg:justify-start gap-6 mt-6 w-full">
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
        {/* FIX: Changed items-end to items-center and fixed height limits so it perfectly aligns with the text */}
        <div className="w-full lg:flex-1 relative flex items-center justify-center lg:justify-end min-h-[350px] sm:min-h-[400px] lg:min-h-[500px] z-10 mt-8 lg:mt-0">
          
          {/* Glow Effects */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] lg:w-[500px] h-[350px] lg:h-[500px] bg-purple-600/30 rounded-full blur-[70px] lg:blur-[120px] animate-pulse -z-10"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] lg:w-[350px] h-[250px] lg:h-[350px] bg-cyan-500/20 rounded-full blur-[50px] lg:blur-[90px] -z-10"></div>

          {/* Premium Orbital Animations */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[320px] lg:w-[480px] h-[280px] sm:h-[320px] lg:h-[480px] border border-white/10 rounded-full animate-[spin_15s_linear_infinite] -z-5">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_15px_rgba(34,211,238,1)]"></div>
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] sm:w-[400px] lg:w-[620px] h-[360px] sm:h-[400px] lg:h-[620px] border border-dashed border-white/10 rounded-full animate-[spin_25s_linear_infinite_reverse] -z-5">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-4 h-4 bg-purple-500 rounded-full shadow-[0_0_20px_rgba(168,85,247,1)]"></div>
          </div>

          {/* Profile Image - Increased max-w for desktop to fill space nicely */}
          <img 
            src="/profile.jpg" 
            alt="Manas" 
            className="relative z-10 w-full max-w-[300px] sm:max-w-[340px] md:max-w-[380px] lg:max-w-[460px] h-auto object-contain drop-shadow-[0_0_15px_rgba(168,85,247,0.4)]"
            // Optional: Agar profile pic ko bottom se fade karna ho toh ye style uncomment kar lena
            // style={{ WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 15%)' }}
          />

          {/* Floating Tech Icons - Adjusted positions to scale better with the new center alignment */}
          <div className="absolute top-[5%] lg:top-[10%] right-[75%] lg:right-[85%] p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md animate-[bounce_4s_infinite] shadow-[0_0_15px_rgba(34,211,238,0.2)] z-20">
            <FaReact className="text-xl lg:text-3xl text-cyan-400" />
          </div>

          <div className="absolute top-[20%] lg:top-[25%] right-[5%] lg:right-[5%] p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md animate-[bounce_5s_infinite_reverse] shadow-[0_0_15px_rgba(56,189,248,0.2)] z-20">
            <SiTailwindcss className="text-xl lg:text-3xl text-sky-400" />
          </div>

          <div className="absolute bottom-[25%] lg:bottom-[30%] right-[10%] lg:right-[15%] p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md animate-[bounce_6s_infinite] shadow-[0_0_15px_rgba(253,224,71,0.2)] z-20">
            <SiJavascript className="text-xl lg:text-3xl text-yellow-400" />
          </div>

          <div className="absolute bottom-[10%] lg:bottom-[15%] right-[70%] lg:right-[80%] p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md animate-[bounce_4.5s_infinite_reverse] shadow-[0_0_15px_rgba(34,197,94,0.2)] z-20">
            <FaNodeJs className="text-xl lg:text-3xl text-green-500" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;