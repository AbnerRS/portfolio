'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import type { PersonalInfo } from '@/app/types';

interface HeroProps {
  personalInfo: PersonalInfo;
}

export default function Hero({ personalInfo }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-[128px] animate-blob" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/10 rounded-full blur-[128px] animate-blob animation-delay-2000" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-secondary font-medium tracking-wider text-sm uppercase mb-2 block">
              Portfolio
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Hi, I&apos;m <br />
              <span className="text-gradient">{personalInfo.name}</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-lg leading-relaxed">
              {personalInfo.headline}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-medium transition-all flex items-center gap-2 hover:gap-3"
              >
                Get in touch <ArrowRight size={18} />
              </a>
              <div className="flex items-center gap-4 px-4">
                <a href="https://github.com/AbnerRS" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://linkedin.com/in/abner-rodrigues-dev" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="mailto:abner.rds01@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Creative Terminal Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-white/5 backdrop-blur-sm p-8 flex items-center justify-center relative group">
             
             {/* Creative Avatar - Floating Badge */}
             <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="absolute -top-14 -right-10 z-20 w-40 h-40 rounded-full border-4 border-[#030014] shadow-xl overflow-hidden cursor-pointer"
             >
                <img 
                  src="/images/profile.jpg" 
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
             </motion.div>

             {/* Code snippet decoration */}
             <div className="w-full h-full bg-[#1e1e2e] rounded-xl p-6 shadow-2xl overflow-hidden font-mono text-sm border border-slate-700/50 transform group-hover:-rotate-2 transition-transform duration-500 relative">
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="space-y-2 text-slate-300">
                  <p><span className="text-pink-400">const</span> <span className="text-blue-400">developer</span> = <span className="text-yellow-300">{`{`}</span></p>
                  <p className="pl-4">name: <span className="text-green-400">&apos;{personalInfo.name}&apos;</span>,</p>
                  <p className="pl-4">role: <span className="text-green-400">&apos;Senior Engineer&apos;</span>,</p>
                  <p className="pl-4">stack: [<span className="text-green-400">&apos;React&apos;</span>, <span className="text-green-400">&apos;Next.js&apos;</span>],</p>
                  <p className="pl-4">passion: <span className="text-purple-400">true</span></p>
                  <p className="text-yellow-300">{`}`};</p>
                </div>
             </div>
             
             {/* Abstract circle decoration behind */}
             <div className="absolute -z-10 -bottom-10 -right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-pulse" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
