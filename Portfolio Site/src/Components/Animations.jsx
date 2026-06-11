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