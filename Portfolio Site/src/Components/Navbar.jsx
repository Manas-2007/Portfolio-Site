import React, { useState } from 'react';
import { FiDownload, FiHexagon, FiMenu, FiX } from 'react-icons/fi'; // Added FiMenu and FiX

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu

  const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'];

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10 py-4 px-6 md:px-16 flex justify-between items-center transition-all duration-300">
      
      {/* 1. Premium Logo Section with Uploaded Image */}
      <div className="flex items-center gap-1 cursor-pointer group z-50">
        
        {/* Uploaded Logo Image with subtle glow */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-500 rounded-full"></div>
          
          <img 
            src="/logo.jpg" 
            alt="Manas Logo" 
            className="relative w-14 h-14 object-contain rounded-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 ease-out"
          />
        </div>
        
        {/* Brand Name */}
        <span className="text-2xl font-bold tracking-wide text-white transition-colors duration-300 -ml-1">
          Manas<span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-cyan-400">.</span>
        </span>
      </div>

      {/* 2. Desktop Tabs (Hidden on Mobile) */}
      <div className="hidden md:flex items-center gap-10 text-sm font-medium">
        {navLinks.map((link) => {
          const isActive = activeSection === link.toLowerCase();

          return (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setActiveSection(link.toLowerCase())}
              className={`group relative py-2.5 px-1 transition-all duration-500 ${isActive ? "text-white" : "text-gray-100 hover:text-white"}`}
            >
              {/* Text */}
              <span className={`relative z-10 transition-all duration-500 ${isActive ? "tracking-wider font-semibold drop-shadow-[0_0_12px_rgba(34,211,238,0.9)]" : ""}`}>
                {link}
              </span>

              {/* Active Glow */}
              {isActive && (
                <>
                  {/* Background Blur */}
                  <span className="absolute inset-0 blur-lg bg-gradient-to-r from-purple-500/40 to-cyan-500/40 animate-pulse rounded-full"></span>
                  
                  {/* Animated Line */}
                  <span className="absolute left-0 bottom-0 h-[3px] w-full overflow-hidden rounded-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-400 shadow-[0_0_15px_rgba(168,85,247,0.8)]">
                    <span className="absolute inset-0 animate-[shimmer_2s_linear_infinite] bg-gradient-to-r from-transparent via-white/80 to-transparent"></span>
                  </span>
                  
                  {/* Circular Dot - Reduced size (w-2 h-2), adjusted bottom alignment (-2.5px), and softened shadow */}
                  <span className="absolute left-1/2 -translate-x-1/2 bottom-[-2.5px] w-2.5 h-2.5 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400 shadow-[0_0_10px_rgba(34,211,238,1)] animate-pulse"></span>
                </>
              )}
            </a>
          );
        })}
      </div>

      {/* 3. Desktop Interactive Button (Hidden on Mobile) */}
      <div className="hidden md:block z-50">
        <button className="relative group flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-sm text-white overflow-hidden shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] transition-shadow duration-300">
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 via-fuchsia-600 to-cyan-600 opacity-90 group-hover:opacity-100 transition-opacity duration-300"></span>
          <span className="relative flex items-center gap-2">
            Download CV 
            <FiDownload size={16} className="group-hover:rotate-[360deg] transition-transform duration-[0.5s]" />
          </span>
        </button>
      </div>

      {/* 4. Mobile Menu Toggle Icon */}
      <div className="md:hidden flex items-center z-50">
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="relative w-10 h-10 flex items-center justify-center focus:outline-none rounded-full bg-white/5 border border-white/10 active:scale-90 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:bg-white/10"
        >
          {/* Hamburger Icon (Animates OUT when open) */}
          <FiMenu 
            size={24} 
            className={`absolute transition-all duration-500 text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] ${
              isMobileMenuOpen ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"
            }`} 
          />
          
          {/* Close (X) Icon (Animates IN when open) */}
          <FiX 
            size={24} 
            className={`absolute transition-all duration-500 text-fuchsia-500 drop-shadow-[0_0_8px_rgba(217,70,239,0.8)] ${
              isMobileMenuOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"
            }`} 
          />
        </button>
      </div>

      {/* 5. Mobile Offcanvas Menu (Ultra Premium Dropdown) */}
      <div 
        className={`absolute top-full left-0 w-full bg-[#050505]/95 backdrop-blur-xl border-b border-white/10 transition-all duration-500 ease-in-out overflow-hidden md:hidden shadow-[0_20px_40px_rgba(0,0,0,0.8)] z-40
          ${isMobileMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="flex flex-col px-6 py-8 gap-3">
          {navLinks.map((link) => {
            const isActive = activeSection === link.toLowerCase();

            return (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => {
                  setActiveSection(link.toLowerCase());
                  setIsMobileMenuOpen(false); // Close menu automatically when a link is clicked
                }}
                className={`relative px-5 py-4 rounded-xl text-base font-medium transition-all duration-300 overflow-hidden group
                  ${isActive 
                    ? "text-white border border-purple-500 shadow-[0_0_25px_rgba(168,85,247,0.3)]" 
                    : "text-gray-200 border border-white/5 bg-white/5 hover:text-white hover:border-cyan-500/30 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)]"
                  }
                `}
              >
                {/* Active State Premium Effects */}
                {isActive && (
                  <>
                    {/* Glowing Theme Background */}
                    <span className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-fuchsia-500/20 to-cyan-500/20"></span>
                    
                    {/* Shining Pulse Animation inside Tab */}
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></span>
                    
                    {/* Ultra Glowing Left Border Indicator */}
                    <span className="absolute left-0 top-0 h-full w-[4px] bg-gradient-to-b from-purple-400 to-cyan-400 shadow-[0_0_20px_rgba(34,211,238,1)] rounded-r-md"></span>
                  </>
                )}
                
                {/* Text Styling */}
                <span className={`relative z-10 block transition-all duration-300 
                  ${isActive 
                    ? "tracking-widest font-semibold drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" 
                    : "tracking-wide group-hover:tracking-widest group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]"
                  }`
                }>
                  {link}
                </span>
              </a>
            );
          })}

          {/* Ultra Premium Mobile Download Button (Kept EXACTLY as it is!) */}
          <button className="relative mt-6 w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-bold text-base text-white overflow-hidden shadow-[0_0_30px_rgba(168,85,247,0.7)] border border-white/20 active:scale-95 transition-all duration-300">
            
            {/* 1. Exact Desktop Background Gradient */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 via-fuchsia-600 to-cyan-600"></span>
            
            {/* 2. Continuous Shining/Pulsing Effect (No click needed) */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></span>
            
            {/* 3. Button Content */}
            <span className="relative z-10 flex items-center gap-2 tracking-wide drop-shadow-md">
              Download CV 
              <FiDownload size={18} />
            </span>
            
          </button>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;