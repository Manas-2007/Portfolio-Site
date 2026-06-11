import React from "react";
import { motion } from "framer-motion";

export const FadeUp = ({ children, delay = 0, className = "" }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, margin: "-50px" }}
    transition={{ duration: 0.8, delay: delay, ease: [0.2, 0.65, 0.3, 0.9] }}
  >
    {children}
  </motion.div>
);

export const PopIn = ({ children, delay = 0, className = "" }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
    whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
    viewport={{ once: false, margin: "-50px" }}
    transition={{ duration: 1, delay: delay, ease: [0.2, 0.65, 0.3, 0.9] }}
  >
    {children}
  </motion.div>
);

export const MagneticHover = ({ children, className = "" }) => (
  <motion.div
    className={`inline-block ${className}`}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
  >
    {children}
  </motion.div>
);

export const HolographicBloom = ({ children, className = "" }) => (
  <div className={`relative group p-[2px] rounded-full overflow-hidden ${className}`}>
    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 via-fuchsia-600 to-cyan-500 bg-[length:300%_300%] animate-[gradient-shift_3s_ease_infinite] group-hover:blur-[8px] transition-all -z-10"></div>
    
    <div className="relative z-10 w-full h-full rounded-full bg-[#030303]">
      {children}
    </div>
  </div>
);

export const NeonPulseGlow = ({ children, color = "rgba(168, 85, 247, 0.4)", className = "" }) => (
  <motion.div
    className={className}
    animate={{
      boxShadow: [
        `0 0 10px ${color}`,
        `0 0 30px ${color}`,
        `0 0 10px ${color}`,
      ],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    {children}
  </motion.div>
);