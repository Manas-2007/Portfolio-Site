import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Ye line jaruri hai animations chalne ke liye
import FinalUI from './Components/FinalUI';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation kitni der chalegi (800ms ekdum premium lagta hai)
      offset: 100,   // Element thoda screen me aane ke baad animate hoga
      once: false,   // 'false' matlab jab bhi scroll karoge, animation dobara chalegi
    });
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#050505] text-white font-sans overflow-x-hidden">
      <FinalUI />
    </div>
  );
}

export default App;