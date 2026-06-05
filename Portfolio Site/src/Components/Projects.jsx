import React from 'react';
import { FiArrowRight, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: "Garbage Management System",
      description: "A web application to manage garbage collection, complaints, and awareness.",
      techStack: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
      placeholderBg: "bg-gradient-to-br from-[#0f5132] to-[#042f1c]",
      liveLink: "https://your-project-link.vercel.app", 
    },
    {
      id: 2,
      title: "Online Voting System",
      description: "A secure online voting platform with real-time results and admin dashboard.",
      techStack: ["React", "Node.js", "MongoDB", "JWT"],
      placeholderBg: "bg-gradient-to-br from-[#2563eb] to-[#1e3a8a]",
      liveLink: "https://your-project-link.vercel.app",
    },
    {
      id: 3,
      title: "Job Portal",
      description: "A job portal connecting job seekers with employers. Easy to search and apply.",
      techStack: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
      placeholderBg: "bg-[#16181d]",
      liveLink: "https://your-project-link.vercel.app",
    }
  ];

  return (
    <section id="projects" className="relative py-8 lg:py-10 px-5 md:px-12 lg:px-20 xl:px-28 w-full flex justify-center z-10 bg-[#0a0d14]">
      
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
            {/* Heading responsive scaling */}
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Some Projects I've Built
            </h2>
          </div>

          <a 
            href="https://github.com/manas-2007" 
            target="_blank"
            rel="noreferrer"
            // Mobile Optimization: w-full and justify-center added for phone, auto on sm+ screens
            className="group flex items-center justify-center w-full sm:w-auto gap-2 px-5 py-2.5 mt-2 sm:mt-0 rounded-lg font-medium text-[13px] text-gray-300 border border-white/40 hover:bg-white/5 hover:text-white transition-all duration-300"
          >
            View All Projects 
            <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>

        </div>
        
        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 w-full">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
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
              transition-all
              duration-500
              hover:-translate-y-1
              hover:border-purple-500/30
              hover:shadow-[0_20px_50px_rgba(0,0,0,0.45)]

              ${
                projectsData.length % 2 !== 0 &&
                index === projectsData.length - 1
                  ? "md:col-span-2 md:max-w-[400px] md:mx-auto lg:col-span-1 lg:max-w-none"
                  : ""
              }
              `}
            >
              {/* Premium Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-purple-500/[0.05] via-transparent to-cyan-500/[0.05] pointer-events-none"></div>

              {/* IMAGE SECTION */}
              <a
                href={project.liveLink}
                target="_blank"
                rel="noreferrer"
                className="relative w-full h-[180px] md:h-[190px] overflow-hidden block border-b border-white/[0.05]"
              >
                <div
                  className={`w-full h-full transition-transform duration-700 group-hover:scale-105 ${project.placeholderBg}`}
                >
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] [background-size:18px_18px]"></div>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_0_15px_rgba(168,85,247,0.4)]">
                    <FiExternalLink size={20} className="text-white" />
                  </div>
                </div>

                {/* Top Badge */}
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[10px] text-white font-medium tracking-wide">
                  Live
                </div>
              </a>

              {/* CONTENT SECTION */}
              <div className="relative z-10 flex flex-col flex-grow p-5">

                {/* Title */}
                <h3 className="text-white font-semibold text-[17px] md:text-[18px] tracking-wide mb-2.5 group-hover:text-purple-400 transition-colors duration-300">
                  <a
                    href={project.liveLink}
                    target="_blank"
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
                      className="
                      px-2.5
                      py-1
                      text-[10px]
                      md:text-[11px]
                      font-medium
                      text-gray-300
                      bg-white/[0.03]
                      border
                      border-white/[0.08]
                      rounded-full
                      hover:border-purple-500/30
                      transition-colors
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Highlighted Footer Button */}
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  w-full
                  px-4
                  py-2.5
                  text-[13px]
                  font-medium
                  text-gray-300
                  bg-white/[0.03]
                  border
                  border-white/10
                  rounded-xl
                  hover:bg-purple-500/10
                  hover:border-purple-500/40
                  hover:text-purple-300
                  hover:shadow-[0_0_15px_rgba(168,85,247,0.15)]
                  transition-all
                  duration-300
                  group/link
                  "
                >
                  <FiExternalLink size={14} />
                  <span>View Project</span>
                  <FiArrowRight
                    size={14}
                    className="group-hover/link:translate-x-1 transition-transform duration-300"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;