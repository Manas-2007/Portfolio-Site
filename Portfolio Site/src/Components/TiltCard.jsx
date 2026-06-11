// src/components/TiltCard.jsx
import React, { useRef } from "react";

const TiltCard = ({ children, className = "" }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // Mouse position inside card
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 25; // Rotation on X axis
    const rotateY = -(x - centerX) / 25; // Rotation on Y axis

    // perspective daalna important hai 3D effect ke liye
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    card.style.transition = "transform 0.1s ease"; // Smooth movement
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    // reset position
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
    card.style.transition = "transform 0.5s ease"; // Slow reset
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden group ${className}`}
      style={{ willChange: "transform" }} // Optimize animation performance
    >
      {/* Glow Effect on Hover (Opitonal par bohot premium lagta hai) */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-purple-600/10 via-cyan-500/10 to-purple-600/10 bg-[length:200%_200%] opacity-0 group-hover:opacity-100 animate-gradient-xy transition-opacity duration-300"></div>
      
      {/* Aapka card content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default TiltCard;