'use client';

import Section from './ui/Section';
import Card from './ui/Card';
import { User, MapPin } from 'lucide-react';
import type { PersonalInfo } from '@/app/types';

interface AboutProps {
  personalInfo: PersonalInfo;
}

export default function About({ personalInfo }: AboutProps) {
  return (
    <Section id="about">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="text-secondary">01.</span> About Me
          </h2>
        </div>
        <div className="md:col-span-2 space-y-6">
          <Card>
            <p className="text-lg text-gray-300 leading-relaxed whitespace-pre-line">
              {personalInfo.about}
            </p>

            <div className="mt-8 flex flex-wrap gap-6 text-sm font-medium text-gray-400">
              <div className="flex items-center gap-2">
                <User className="text-primary" size={20} />
                <span>{personalInfo.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="text-secondary" size={20} />
                <span>{personalInfo.location || 'Remote'}</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
}
