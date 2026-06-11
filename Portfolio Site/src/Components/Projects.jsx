import React, { useState, useEffect, useRef } from "react";
import { FiArrowRight, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";
import AnimatedHeading from "./AnimatedHeading";

// 👇 FRAMER MOTION VARIANTS (Cards ko ek-ek karke laane ke liye)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }, // Har card 0.2s ke gap par aayega
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const ProjectCard = ({ project, index, totalProjects }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // 👇 3D TILT LOGIC SETUP
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20; // X-axis par jhukana
    const rotateY = -(x - centerX) / 20; // Y-axis par jhukana

    // 3D Transform apply karna
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    card.style.transition = "transform 0.1s ease";
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    // Mouse hatne par wapas normal position par lana
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
    card.style.transition = "transform 0.5s ease";
  };

  useEffect(() => {
    if (!project.images || project.images.length === 0) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === project.images.length - 1 ? 0 : prevIndex + 1,
      );
    }, 3500);

    return () => clearInterval(interval);
  }, [project.images]);

  return (
    <motion.div
      variants={itemVariants} // Animation sequence ke liye
      ref={cardRef} // 3D Tilt ke liye
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ willChange: "transform" }}
      className={`
        group
        relative
        flex
        flex-col
        rounded-3xl
        bg-[#0d1018]
        border
        border-white/[0.06]
        overflow-hidden
        transition-colors /* Removed transition-all so it doesn't fight with 3D tilt */
        duration-500
        hover:border-purple-500/30
        hover:shadow-[0_20px_50px_rgba(168,85,247,0.15)]
        ${
          totalProjects % 2 !== 0 && index === totalProjects - 1
            ? "md:col-span-2 md:max-w-[400px] md:mx-auto lg:col-span-1 lg:max-w-none"
            : ""
        }
      `}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-purple-500/[0.05] via-transparent to-cyan-500/[0.05] pointer-events-none"></div>

      {/* IMAGE SECTION WITH SLIDER */}
      <a
        href={project.liveLink}
        target={project.liveLink !== "#" ? "_blank" : "_self"}
        rel="noreferrer"
        className="relative w-full aspect-video overflow-hidden block border-b border-white/[0.05]"
      >
        <div
          className={`w-full h-full transition-transform duration-700 group-hover:scale-105 ${project.placeholderBg}`}
        >
          {/* Images mapping */}
          {project.images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`${project.title} screenshot ${i + 1}`}
              className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-1000 ${
                i === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] [background-size:18px_18px] mix-blend-overlay"></div>
        </div>

        {/* Slider Indicators (Dots) */}
        {project.images.length > 1 && (
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-20">
            {project.images.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === currentImageIndex ? "w-4 bg-white" : "w-1.5 bg-white/40"
                }`}
              ></div>
            ))}
          </div>
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_0_15px_rgba(168,85,247,0.4)]">
            <FiExternalLink size={20} className="text-white" />
          </div>
        </div>

        {/* Top Badge */}
        <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[10px] text-white font-medium tracking-wide">
          {project.statusBadge}
        </div>
      </a>

      {/* CONTENT SECTION */}
      <div className="relative z-10 flex flex-col flex-grow p-5">
        {/* Title */}
        <h3 className="text-white font-semibold text-[17px] md:text-[18px] tracking-wide mb-2.5 group-hover:text-purple-400 transition-colors duration-300">
          <a
            href={project.liveLink}
            target={project.liveLink !== "#" ? "_blank" : "_self"}
            rel="noreferrer"
          >
            {project.title}
          </a>
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-[13px] md:text-[14px] leading-relaxed mb-5 flex-grow">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.techStack.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-2.5 py-1 text-[10px] md:text-[11px] font-medium text-gray-300 bg-white/[0.03] border border-white/[0.08] rounded-full hover:border-purple-500/30 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Footer Button */}
        <a
          href={project.liveLink}
          target={project.liveLink !== "#" ? "_blank" : "_self"}
          rel="noreferrer"
          className="flex items-center justify-center gap-2 w-full px-4 py-2.5 text-[13px] font-medium text-gray-300 bg-white/[0.03] border border-white/10 rounded-xl hover:bg-purple-500/10 hover:border-purple-500/40 hover:text-purple-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.15)] transition-all duration-300 group/link"
        >
          {project.liveLink !== "#" ? <FiExternalLink size={14} /> : null}
          <span>
            {project.liveLink !== "#" ? "View Project" : "In Development"}
          </span>
          <FiArrowRight
            size={14}
            className="group-hover/link:translate-x-1 transition-transform duration-300"
          />
        </a>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: "LifeBridge Health Network",
      description:
        "A centralized MERN ecosystem bridging patients with registered blood donors. Patients can broadcast urgent requirements, enabling direct acceptance and hospital donations.",
      techStack: ["React", "Express.js", "Node.js", "MongoDB", "Tailwind"],
      placeholderBg: "bg-[#16181d]",
      liveLink: "https://life-bridge-health-network.vercel.app",
      statusBadge: "Live",
      images: ["P1_1.jpg", "P1_2.jpg", "P1_3.jpg"],
    },
    {
      id: 2,
      title: "TradeBridge Financial Network",
      description:
        "An advanced paper-trading platform with real-time WebSocket charts. It features an intelligent algorithm that automatically detects and highlights candlestick patterns to assist user decisions.",
      techStack: ["React", "Tailwind", "WebSockets", "Trading APIs", "Vite"],
      placeholderBg: "bg-gradient-to-br from-[#2563eb] to-[#1e3a8a]",
      liveLink: "#",
      statusBadge: "In Development",
      images: ["P3_1.jpg", "P3_3.jpg", "P3_2.jpg"],
    },
    {
      id: 3,
      title: "ReCircle Sustainability Network",
      description:
        "A Full-Stack platform connecting households with waste collectors to promote a circular economy. Features role-based auth and secure JWT cookies.",
      techStack: ["React", "Tailwind", "Node.js", "MongoDB", "Render"],
      placeholderBg: "bg-gradient-to-br from-[#0f5132] to-[#042f1c]",
      liveLink: "https://re-circle-sustainability-network.vercel.app",
      statusBadge: "Live",
      images: ["P2_1.jpg", "P2_2.jpg", "P2_3.jpg"],
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-8 lg:py-10 px-5 md:px-12 lg:px-20 xl:px-28 w-full flex justify-center z-10 bg-[#0a0d14]"
    >
      <div className="w-full max-w-[1300px] flex flex-col">
        {/* HEADER SECTION */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-5 mb-8 lg:mb-7 w-full">
          <div className="flex flex-col items-start w-full sm:w-auto">
            <div className="flex items-center gap-2 mb-2 lg:mb-3">
              <span className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)] animate-pulse"></span>
              <span className="text-[10px] lg:text-[11px] font-bold tracking-[0.2em] text-purple-400 uppercase">
                Featured Projects
              </span>
            </div>
            <AnimatedHeading 
              text="Some Projects I've Built" 
              className="text-2xl sm:text-3xl" 
            />
          </div>

          <a
            href="https://github.com/manas-2007"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-center w-full sm:w-auto gap-2 px-5 py-2.5 mt-2 sm:mt-0 rounded-lg font-medium text-[13px] text-gray-300 border border-white/40 hover:bg-white/5 hover:text-white transition-all duration-300"
          >
            View All Projects
            <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>

        {/* 👇 PROJECTS GRID (motion.div wrap kiya hai taki cards ek-ek karke aayein) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 w-full"
        >
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              totalProjects={projectsData.length}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;