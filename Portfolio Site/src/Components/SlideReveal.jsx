// src/components/SlideReveal.jsx
import React from "react";
import { motion } from "framer-motion";

const SlideReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }} // Niche se start hoga (PowerPoint Slide-up)
      whileInView={{ opacity: 1, y: 0 }} // Screen par aate hi apni jagah par aayega
      viewport={{ once: true, margin: "-100px" }} // Jab element thoda screen ke andar aaye tabhi chalega
      transition={{ 
        duration: 0.8, // Smooth aur aaram se aayega
        ease: [0.25, 0.1, 0.25, 1] // Classic PowerPoint easing
      }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

export default SlideReveal;