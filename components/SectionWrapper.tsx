'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useRef, useEffect } from 'react';
import { sendGTMEvent } from '@next/third-parties/google';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  trackView?: boolean;
  sectionName?: string;
  background?: 'white' | 'gray' | 'gradient';
}

export function SectionWrapper({
  children,
  className,
  id,
  trackView = false,
  sectionName,
  background = 'white',
}: SectionWrapperProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const hasTracked = useRef(false);

  useEffect(() => {
    if (!trackView || !sectionName || hasTracked.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTracked.current) {
            hasTracked.current = true;
            sendGTMEvent({
              event: 'section_view',
              section_name: sectionName,
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [trackView, sectionName]);

  const bgClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50/50',
    gradient: 'bg-gradient-cta',
  };

  return (
    <motion.section
      ref={sectionRef}
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={cn(
        'py-16 md:py-24',
        bgClasses[background],
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </motion.section>
  );
}

// Section header component for consistent styling
interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export function SectionHeader({
  badge,
  title,
  description,
  centered = true,
}: SectionHeaderProps) {
  return (
    <div className={cn('mb-12', centered && 'text-center')}>
      {badge && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full"
        >
          {badge}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className={cn(
            'mt-4 text-lg text-muted-foreground',
            centered && 'max-w-2xl mx-auto'
          )}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
