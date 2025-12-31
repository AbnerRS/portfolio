'use client';

import { motion } from 'framer-motion';

export default function Divider() {
  return (
    <div className="relative w-full py-6 -my-4 flex items-center justify-center overflow-hidden z-0">
      {/* Glowing Line with Flicker */}
      <motion.div 
        initial={{ width: "0%", opacity: 0 }}
        whileInView={{ width: "100%", opacity: 1 }}
        animate={{ opacity: [1, 0.8, 1, 0.9, 1] }}
        viewport={{ once: true }}
        transition={{ 
            opacity: { repeat: Infinity, duration: 0.2, repeatType: "reverse" },
            width: { duration: 1, ease: "easeInOut" }
        }}
        className="absolute h-[2px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full max-w-4xl shadow-[0_0_15px_rgba(139,92,246,0.5)]"
      />
      
      {/* Central Electric Core */}
      <div className="relative flex items-center justify-center">
        {/* Shockwave Ring */}
        <motion.div
            animate={{ scale: [1, 2, 3], opacity: [0.8, 0, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeOut" }}
            className="absolute w-4 h-4 rounded-full border border-violet-400"
        />
        
        {/* Main Jittering Dot */}
        <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            animate={{ 
                boxShadow: [
                    "0 0 10px #8b5cf6", 
                    "0 0 30px #a78bfa", 
                    "0 0 10px #8b5cf6",
                    "0 0 50px #c4b5fd",
                    "0 0 10px #8b5cf6"
                ],
                scale: [1, 1.2, 0.9, 1.3, 1],
            }}
            viewport={{ once: true }}
            transition={{ 
                scale: { repeat: Infinity, duration: 0.3, repeatType: "reverse" }, // Fast jitter
                boxShadow: { repeat: Infinity, duration: 0.5 }, // Rapid pulsing
            }}
            className="w-4 h-4 rounded-full bg-white z-10 shadow-[0_0_20px_#8b5cf6]"
        />
      </div>

      {/* High speed particles */}
       <motion.div 
        animate={{ x: ["-100%", "100%"] }}
        transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }} // Increased speed
        className="absolute h-[2px] w-40 bg-gradient-to-r from-transparent via-cyan-400 to-transparent blur-[1px]"
      />
      <motion.div 
        animate={{ x: ["100%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 1.2, ease: "linear", delay: 0.5 }} // Opposing high speed particle
        className="absolute h-[2px] w-40 bg-gradient-to-r from-transparent via-fuchsia-400 to-transparent blur-[1px]"
      />
    </div>
  );
}
