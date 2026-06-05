import React from 'react';
import { FiActivity, FiCoffee } from 'react-icons/fi';
import { FaFileCode, FaRocket } from 'react-icons/fa';

const Stats = () => {
  const statsData = [
    {
      id: 1,
      icon: <FaFileCode className="text-[26px] lg:text-[40px] text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.8)]" />,
      value: "10",
      label: "Projects Completed",
      borderClasses: "border-b lg:border-b-0 border-r border-white/5" 
    },
    {
      id: 2,
      icon: <FiActivity className="text-[26px] lg:text-[40px] text-purple-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.8)]" />,
      value: "3",
      label: "Active Projects",
      borderClasses: "border-b lg:border-b-0 lg:border-r border-white/5"
    },
    {
      id: 3,
      icon: <FiCoffee className="text-[26px] lg:text-[40px] text-fuchsia-500 drop-shadow-[0_0_15px_rgba(217,70,239,0.8)]" />,
      value: "350+",
      label: "Code Commits",
      borderClasses: "border-r border-white/5"
    },
    {
      id: 4,
      icon: <FaRocket className="text-[26px] lg:text-[40px] text-indigo-400 drop-shadow-[0_0_15px_rgba(129,140,248,0.8)]" />,
      value: "60+",
      label: "GFG Problems",
      borderClasses: ""
    }
  ];

  return (
<section className="relative pb-8 lg:pb-10 px-5 md:px-12 lg:px-20 xl:px-28 w-full flex justify-center z-10">
      
      {/* Main Container */}
      <div className="w-full max-w-[1300px] bg-[#101219] border border-white/30 rounded-2xl shadow-2xl overflow-hidden">
        
        {/* Grid setup: 2 cols on mobile, 4 cols on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 w-full">
          
          {statsData.map((stat) => (
            <div 
              key={stat.id}
              className={`group relative flex items-center justify-center gap-3 lg:gap-5 py-8 lg:py-10 px-4 overflow-hidden ${stat.borderClasses}`}
            >
              
              <div className="hidden lg:block absolute inset-0 bg-gradient-to-b from-white/[0.08] via-white/[0.03] to-transparent -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>

              {/* Internal Content (Icon + Text) */}
              <div className="relative z-10 flex items-center justify-center gap-3 lg:gap-4 w-full max-w-[200px] mx-auto">
                
                {/* Icon Container */}
                <div className="flex-shrink-0 transition-transform duration-300 lg:group-hover:scale-110">
                  {stat.icon}
                </div>

                {/* Text Container */}
                <div className="flex flex-col text-left">
                  <h4 className="text-gray-100 text-[22px] lg:text-[28px] font-semibold tracking-wide mb-0.5 leading-none">
                    {stat.value}
                  </h4>
                  <p className="text-gray-400 text-[10px] lg:text-[12px] font-medium tracking-wide">
                    {stat.label}
                  </p>
                </div>
                
              </div>

            </div>
          ))}

        </div>
      </div>
      
    </section>
  );
};

export default Stats;