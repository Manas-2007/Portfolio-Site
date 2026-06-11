import React from 'react';
import { FiActivity, FiCoffee } from 'react-icons/fi';
import { FaFileCode, FaRocket } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Stats = () => {
  const statsData = [
    {
      id: 1,
      // Enhanced Icon Glow
      icon: <FaFileCode className="text-[26px] lg:text-[40px] text-blue-500 drop-shadow-[0_0_20px_rgba(59,130,246,0.9)]" />,
      value: "10",
      label: "Projects Completed",
      borderClasses: "border-b lg:border-b-0 border-r border-white/5",
      hoverColor: "from-blue-500/25 to-transparent",
      // Permanent Gradient Text
      textColor: "from-blue-400 via-cyan-300 to-blue-500" 
    },
    {
      id: 2,
      icon: <FiActivity className="text-[26px] lg:text-[40px] text-purple-400 drop-shadow-[0_0_20px_rgba(168,85,247,0.9)]" />,
      value: "3",
      label: "Active Projects",
      borderClasses: "border-b lg:border-b-0 lg:border-r border-white/5",
      hoverColor: "from-purple-500/25 to-transparent",
      textColor: "from-purple-400 via-fuchsia-300 to-purple-500"
    },
    {
      id: 3,
      icon: <FiCoffee className="text-[26px] lg:text-[40px] text-fuchsia-500 drop-shadow-[0_0_20px_rgba(217,70,239,0.9)]" />,
      value: "350+",
      label: "Code Commits",
      borderClasses: "border-r border-white/5",
      hoverColor: "from-fuchsia-500/25 to-transparent",
      textColor: "from-fuchsia-400 via-pink-300 to-fuchsia-500"
    },
    {
      id: 4,
      icon: <FaRocket className="text-[26px] lg:text-[40px] text-indigo-400 drop-shadow-[0_0_20px_rgba(129,140,248,0.9)]" />,
      value: "60+",
      label: "GFG Problems",
      borderClasses: "",
      hoverColor: "from-indigo-500/25 to-transparent",
      textColor: "from-indigo-400 via-blue-300 to-indigo-500"
    }
  ];

  // PowerPoint Slide-Up entrance
  const containerVariants = {
    hidden: { opacity: 0, y: 70 },
    visible: {
      opacity: 1, y: 0,
      transition: { duration: 0.8, staggerChildren: 0.15, ease: "easeOut" }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <section className="relative pb-8 lg:pb-10 px-5 md:px-12 lg:px-20 xl:px-28 w-full flex justify-center z-10 overflow-hidden">
      
      {/* 🛠️ CSS KEYFRAMES (Rotate Border ke liye - isi file mein embed kiya hai) 🛠️ */}
      <style>{`
        @keyframes spin-border {
          100% { transform: rotate(360deg); }
        }
        @keyframes holographic-aura {
          0%, 100% { background-position: 0% 50%; opacity: 0.1; }
          50% { background-position: 100% 50%; opacity: 0.2; }
        }
      `}</style>

      {/* Main entrance motion wrapper */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-50px" }}
        className="relative w-full max-w-[1300px] group"
      >
        
        {/* 🔥 ULTIMATE UPGRADE: SPINNING NEON BORDER 🔥 */}
        {/* Is layer par p-[2px] hai aur rounded-full rounded-2xl taki niche spin dikhe */}
        <div className="absolute inset-0 p-[2px] rounded-2xl overflow-hidden -z-10">
          {/* Ye div actually spin karega full speed mein, colorful edges create karega */}
          <div 
            style={{ 
              animation: 'spin-border 4s linear infinite', 
              background: 'conic-gradient(from 0deg, #3b82f6, #a855f7, #d946ef, #3b82f6)' 
            }} 
            className="absolute top-1/2 left-1/2 w-[200%] h-[200%] origin-center -translate-x-1/2 -translate-y-1/2 group-hover:duration-1000 group-hover:scale-125 transition-transform"
          />
        </div>
        
        {/* Glow behind the spinning border to blend it */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-fuchsia-500/20 blur-[15px] animate-pulse"></div>

        {/* 🛠️ INNER CONTENT CONTAINER 🛠️ */}
        <div className="relative bg-[#0d1018]/95 backdrop-blur-xl rounded-2xl overflow-hidden w-full h-full p-px">
          
          {/* 🔥 HOLOGRAPHIC BACKGROUND AURA (Background hamesha color change karega) 🔥 */}
          <div 
            style={{ 
              background: 'linear-gradient(270deg, rgba(59,130,246,0.1), rgba(168,85,247,0.1), rgba(217,70,239,0.1))',
              backgroundSize: '400% 400%',
              animation: 'holographic-aura 8s ease infinite'
            }}
            className="absolute inset-0 z-0"
          ></div>

          <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 w-full h-full">
            {statsData.map((stat) => (
              
              <motion.div 
                key={stat.id}
                variants={itemVariants}
                className={`group/stat relative flex items-center justify-center gap-3 lg:gap-5 py-8 lg:py-10 px-4 overflow-hidden ${stat.borderClasses}`}
              >
                
                {/* Intensified Hover Color Fill */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.hoverColor} opacity-0 group-hover/stat:opacity-100 transition-all duration-500 z-0`}></div>

                <div className="relative z-10 flex items-center justify-center gap-3 lg:gap-4 w-full max-w-[200px] mx-auto">
                  
                  {/* 🔥 CONTINUOUS ICON PULSE 🔥 */}
                  <motion.div 
                    animate={{ 
                      scale: [1, 1.05, 1],
                      filter: [
                        'drop-shadow(0 0 10px rgba(168,85,247,0))',
                        `drop-shadow(0 0 15px rgba(255,255,255,0.4))`,
                        'drop-shadow(0 0 10px rgba(168,85,247,0))'
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="flex-shrink-0"
                  >
                    {stat.icon}
                  </motion.div>

                  <div className="flex flex-col text-left">
                    {/* 🔥 Permanent Gradient Numbers 🔥 */}
                    <h4 className={`text-[23px] lg:text-[29px] font-bold tracking-tight mb-0.5 leading-none text-transparent bg-clip-text bg-gradient-to-r ${stat.textColor} drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)]`}>
                      {stat.value}
                    </h4>
                    <p className="text-gray-300 text-[10px] lg:text-[12px] font-medium tracking-wide group-hover/stat:text-white transition-colors duration-300">
                      {stat.label}
                    </p>
                  </div>
                  
                </div>

              </motion.div>
            ))}
          </div>
          
        </div>
      </motion.div>
      
    </section>
  );
};

export default Stats;