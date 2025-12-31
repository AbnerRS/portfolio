'use client';

import { motion } from 'framer-motion';
import Section from './ui/Section';
import Card from './ui/Card';
import { Briefcase } from 'lucide-react';
import type { Experience } from '@/app/types';

interface ExperienceProps {
  experiences: Experience[];
}

export default function Experience({ experiences }: ExperienceProps) {
  return (
    <Section id="experience">
      <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
        <span className="text-secondary">02.</span> Experience
      </h2>

      <div className="relative border-l border-white/10 ml-3 md:ml-6 space-y-12 pb-4">
        {experiences.map((job, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: index * 0.1 }}
            className="relative pl-8 md:pl-12"
          >
            {/* Timeline dot */}
            <div className="absolute -left-[5px] top-2 w-3 h-3 rounded-full bg-secondary shadow-[0_0_10px_rgba(236,72,153,0.5)]" />
            
            <Card className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                    {job.title}
                  </h3>
                  <div className="flex items-center gap-2 text-secondary font-medium">
                    <Briefcase size={16} />
                    <span>{job.company}</span>
                  </div>
                </div>
                <span className="text-sm font-mono text-gray-400 bg-white/5 px-3 py-1 rounded-full w-fit">
                  {job.period}
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                {job.description}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
