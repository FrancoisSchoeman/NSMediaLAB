'use client';

import { AnimatedCounter } from '@/components/AnimatedCounter';
import { motion } from 'framer-motion';

export default function StatsSection() {
  const years = new Date().getFullYear() - new Date('2021').getFullYear();

  const stats = [
    { end: 35, suffix: '+', label: 'Happy Clients' },
    { end: years, suffix: '', label: 'Years Experience' },
    { end: 100, suffix: '%', label: 'Client Satisfaction' },
    { end: 24, suffix: '/7', label: 'Support Available' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8"
    >
      {stats.map((stat, index) => (
        <AnimatedCounter
          key={index}
          end={stat.end}
          suffix={stat.suffix}
          label={stat.label}
          duration={1.5}
        />
      ))}
    </motion.div>
  );
}
