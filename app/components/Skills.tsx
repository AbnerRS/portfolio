'use client';

import { motion } from 'framer-motion';
import Section from './ui/Section';
import { Code2 } from 'lucide-react';

interface SkillsProps {
  skills: ReadonlyArray<string>;
}

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 20 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills({ skills }: SkillsProps) {
  return (
    <Section id="skills">
      <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
        <span className="text-secondary">03.</span> Skills & Technologies
      </h2>

      <ul className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <motion.li
            key={skill}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
            className="list-none"
          >
            <div className="px-5 py-3 rounded-lg bg-card border border-white/5 font-mono text-sm text-gray-300 hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-default flex items-center gap-2">
              <Code2 size={16} className="text-accent/50 group-hover:text-accent" />
              {skill}
            </div>
          </motion.li>
        ))}
      </ul>
    </Section>
  );
}
