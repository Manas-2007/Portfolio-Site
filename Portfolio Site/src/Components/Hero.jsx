import React from 'react';
import { motion } from "framer-motion";
import { FiArrowRight, FiSend, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript } from 'react-icons/si';
import AnimatedHeading from './AnimatedHeading'; 
import { FadeUp, PopIn, MagneticHover, HolographicBloom, NeonPulseGlow } from './Animations'; 

const Hero = () => {
  return (
    <section id='home' className="relative min-h-screen flex items-center justify-center pt-32 pb-12 lg:pt-16 lg:pb-0 px-6 md:px-12 lg:px-20 overflow-hidden bg-[#030303]">
      
      <div className="absolute top-1/4 -left-20 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-purple-600/10 rounded-full blur-[100px] md:blur-[150px] pointer-events-none -z-20"></div>
      <div className="absolute bottom-1/4 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-cyan-500/10 rounded-full blur-[100px] md:blur-[150px] pointer-events-none -z-20"></div>
      
      <div className="w-full max-w-[1300px] mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-8">

        {/* LEFT COLUMN - TEXT & CONTENT */}
        <div className="w-full lg:flex-1 flex flex-col items-center lg:items-start text-center lg:text-left justify-center relative z-10 gap-6 lg:max-w-[600px]">
          
          {/* Minimal Role Badge */}
          <FadeUp delay={0.1} className="flex items-center gap-3 mb-1 lg:mb-2">
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse shadow-[0_0_8px_rgba(168,85,247,0.8)]"></span>
            <span className="text-xs font-semibold tracking-[0.2em] text-gray-300 uppercase">
              AI-Assisted Full Stack Developer
            </span>
          </FadeUp>

          {/* Main Heading */}
          <AnimatedHeading 
            text="Welcome, I'm Manas" 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-bold text-white tracking-tight justify-center lg:justify-start" 
          />

          {/* Short Bio */}
          <FadeUp delay={0.3} className="flex flex-col gap-2 text-gray-400 max-w-[440px]">
            <p className="text-[15px] sm:text-lg font-medium text-gray-100 leading-snug">
              I build scalable, modern, and user-friendly web applications.
            </p>
            <p className="text-base sm:text-base md:text-xl lg:text-base text-gray-400/90 leading-relaxed md:leading-relaxed hidden sm:block">
              Turning complex ideas into elegant, high-performance digital experiences. I focus on writing clean code and building products that drive real-world impact.
            </p>
          </FadeUp>

          {/* Action Buttons*/}
          <FadeUp delay={0.5} className="flex flex-col sm:flex-row items-center gap-4 mt-4 w-full sm:w-auto">
            
            {/* View Work (Primary) */}
            <MagneticHover className="w-full sm:w-auto">
              <a href="#projects" className="group relative flex items-center justify-center w-full sm:w-auto gap-2 px-8 py-3 rounded-xl font-semibold text-sm text-white overflow-hidden shadow-[0_0_15px_rgba(168,85,247,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] transition-all duration-300 active:scale-95">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 via-fuchsia-600 to-cyan-600"></span>
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 animate-[shimmer_1.5s_infinite]"></span>
                <span className="relative flex items-center gap-2 z-10">
                  View Work 
                  <FiArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </a>
            </MagneticHover>

            {/* Contact Button */}
            <MagneticHover className="w-full sm:w-auto">
              <a href="#contact" className="group relative flex items-center justify-center w-full sm:w-auto gap-2 px-8 py-3 rounded-xl font-semibold text-sm text-white transition-all duration-300 active:scale-95 shadow-[0_0_10px_rgba(255,255,255,0.05)]">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/50 via-cyan-500/50 to-purple-500/50 p-[1px] animate-[gradient-shift_3s_linear_infinite] -z-10">
                  <div className="h-full w-full rounded-xl bg-[#030303] group-hover:bg-black/40 transition-colors duration-300"></div>
                </div>
                <span className="relative flex items-center gap-2 z-10 text-gray-100 group-hover:text-white">
                  Contact 
                  <FiSend size={16} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </a>
            </MagneticHover>

          </FadeUp>

          {/* Social Links */}
          <FadeUp delay={0.7} className="flex items-center justify-center lg:justify-start gap-6 mt-6 w-full">
            {[
              { icon: <FiGithub size={20} />, link: "https://github.com/manas-2007" },
              { icon: <FiLinkedin size={20} />, link: "http://www.linkedin.com/in/manas-kumar-patidar-73954a374" },
              { icon: <FiMail size={20} />, link: "mailto:patidarmanas01@gmail.com" },
            ].map((social, index) => (
              <MagneticHover key={index}>
                <NeonPulseGlow color={index === 0 ? "rgba(34, 211, 238, 0.4)" : "rgba(168, 85, 247, 0.4)"} className="rounded-full">
                  <a href={social.link} target="_blank" rel="noreferrer" className="w-11 h-11 flex items-center justify-center rounded-full transition-all duration-300 border text-gray-400 border-gray-700 hover:text-white hover:border-transparent hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-500">
                    {social.icon}
                  </a>
                </NeonPulseGlow>
              </MagneticHover>
            ))}
          </FadeUp>
        </div>

        {/* RIGHT COLUMN - IMAGE & GRAPHICS  */}
        <PopIn delay={0.4} className="w-full lg:flex-1 relative flex items-center justify-center lg:justify-end min-h-[350px] sm:min-h-[400px] lg:min-h-[500px] z-10 mt-8 lg:mt-0">
          
          {/* Base Glow Effects */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] lg:w-[500px] h-[350px] lg:h-[500px] bg-purple-600/30 rounded-full blur-[70px] lg:blur-[120px] animate-pulse -z-10"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] lg:w-[350px] h-[250px] lg:h-[350px] bg-cyan-500/20 rounded-full blur-[50px] lg:blur-[90px] -z-10"></div>

          {/* Premium Orbital Animations */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[320px] lg:w-[480px] h-[280px] sm:h-[320px] lg:h-[480px] border border-white/10 rounded-full animate-[spin_15s_linear_infinite] -z-5">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_15px_rgba(34,211,238,1)]"></div>
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] sm:w-[400px] lg:w-[620px] h-[360px] sm:h-[400px] lg:h-[620px] border border-dashed border-white/10 rounded-full animate-[spin_25s_linear_infinite_reverse] -z-5">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-4 h-4 bg-purple-500 rounded-full shadow-[0_0_20px_rgba(168,85,247,1)]"></div>
          </div>

          
        {/* 🔥 Profile Image (FULL BODY, NO CROPPING) 🔥 */}
          <div className="relative z-10 w-full max-w-[300px] sm:max-w-[340px] md:max-w-[380px] lg:max-w-[460px] flex justify-center items-center">
            
            {/* RGB Glowing Aura (Image ke piche chamkegi) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[80%] bg-gradient-to-r from-purple-600 via-cyan-500 to-fuchsia-500 rounded-full blur-[60px] animate-[gradient-shift_4s_linear_infinite] opacity-60 -z-10"></div>

            {/* Floating Full Image */}
            <motion.img 
              animate={{ y: [-12, 12, -12] }} // Hawa mein float karne ka effect
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              src="/profile.jpg" 
              alt="Manas" 
              className="relative z-10 w-full h-auto object-contain drop-shadow-[0_0_20px_rgba(168,85,247,0.7)]"
            />
          </div>

          {/* Floating Tech Icons */}
          <div className="absolute top-[5%] lg:top-[10%] right-[75%] lg:right-[85%] p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md animate-[bounce_4s_infinite] shadow-[0_0_20px_rgba(34,211,238,0.2)] z-20">
            <FaReact className="text-xl lg:text-3xl text-cyan-400" />
          </div>

          <div className="absolute top-[20%] lg:top-[25%] right-[5%] lg:right-[5%] p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md animate-[bounce_5s_infinite_reverse] shadow-[0_0_20px_rgba(56,189,248,0.2)] z-20">
            <SiTailwindcss className="text-xl lg:text-3xl text-sky-400" />
          </div>

          <div className="absolute bottom-[25%] lg:bottom-[30%] right-[10%] lg:right-[15%] p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md animate-[bounce_6s_infinite] shadow-[0_0_20px_rgba(253,224,71,0.2)] z-20">
            <SiJavascript className="text-xl lg:text-3xl text-yellow-400" />
          </div>

          <div className="absolute bottom-[10%] lg:bottom-[15%] right-[70%] lg:right-[80%] p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md animate-[bounce_4.5s_infinite_reverse] shadow-[0_0_20px_rgba(34,197,94,0.2)] z-20">
            <FaNodeJs className="text-xl lg:text-3xl text-green-500" />
          </div>

        </PopIn>
      </div>
    </section>
  );
};

export default Hero;