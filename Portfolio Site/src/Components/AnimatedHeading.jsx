import React from "react";
import { motion } from "framer-motion";

const AnimatedHeading = ({ text, className = "" }) => {
  return (
    <motion.h2
      style={{ perspective: "1000px" }}
      className={`font-bold text-white tracking-tight flex flex-wrap ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: "-50px" }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.05,
            delayChildren: 0.1,
          },
        },
      }}
    >
      {Array.from(text).map((char, index) => (
        <motion.span
          key={index}
          className="inline-block origin-center"
          variants={{
            hidden: {
              opacity: 0,
              y: 40,
              scale: 0.5,
              rotateX: -90, 
              rotateZ: -15,
              filter: "blur(10px)",
            },
            visible: {
              opacity: 1,
              y: 0,
              scale: 1,
              rotateX: 0,
              rotateZ: 0,
              filter: "blur(0px)",
              color: [
                "rgb(255, 0, 0)",    
                "rgb(0, 255, 0)",    
                "rgb(0, 0, 255)",    
                "rgb(255, 0, 255)",  
                "rgb(0, 255, 255)",  
                "rgb(255, 0, 0)",  
              ],
              transition: {
                opacity: { duration: 0.8 },
                y: { duration: 0.8, ease: "easeOut" },
                scale: { duration: 0.8, ease: "easeOut" },
                rotateX: { duration: 0.8, ease: "easeOut" },
                rotateZ: { duration: 0.8, ease: "easeOut" },
                filter: { duration: 0.8, ease: "easeOut" },
                
                // Color animation ( INFINITE LOOP)
                color: {
                  duration: 4, 
                  ease: "linear",
                  repeat: Infinity, 
                  repeatType: "loop"
                }
              },
            },
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.h2>
  );
};

export default AnimatedHeading;