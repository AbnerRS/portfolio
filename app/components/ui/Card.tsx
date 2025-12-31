'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export default function Card({ children, className, hoverEffect = true }: CardProps) {
  return (
    <motion.div
      whileHover={hoverEffect ? { y: -5 } : undefined}
      className={cn(
        "relative group rounded-xl border border-card-border bg-card/50 backdrop-blur-sm p-6 overflow-hidden transition-colors",
        "hover:border-primary/50",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
