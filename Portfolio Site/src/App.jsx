import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import FinalUI from './Components/FinalUI';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,   
      once: false,  
      mirror:true, 
    });
 window.addEventListener('hashchange', () => {
      setTimeout(() => AOS.refresh(), 100);
    });
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#050505] text-white font-sans overflow-x-hidden">
      <FinalUI />
    </div>
  );
}

export default App;