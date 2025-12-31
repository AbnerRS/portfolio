'use client';

import Section from './ui/Section';
import Card from './ui/Card';
import { GraduationCap } from 'lucide-react';
import type { Education } from '@/app/types';

interface EducationProps {
  education: Education[];
}

export default function Education({ education }: EducationProps) {
  return (
    <Section id="education">
       <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
        <span className="text-secondary">04.</span> Education
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {education.map((edu, index) => (
          <Card key={index} className="flex flex-col gap-4">
             <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-2">
               <GraduationCap size={24} />
             </div>
             <div>
               <h3 className="text-xl font-bold">{edu.institution}</h3>
               <p className="text-secondary font-medium">{edu.degree}</p>
             </div>
             <p className="text-sm font-mono text-gray-400 mt-auto pt-4 border-t border-white/5">
                {edu.period}
             </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
