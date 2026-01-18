'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Clock, Shield, Star, Users, MessageCircle } from 'lucide-react';

interface TrustBadgeProps {
  icon: React.ReactNode;
  text: string;
}

function TrustBadge({ icon, text }: TrustBadgeProps) {
  return (
    <div className="flex items-center gap-2 text-sm text-muted-foreground">
      <span className="text-primary">{icon}</span>
      {text}
    </div>
  );
}

interface TrustBadgesProps {
  variant?: 'inline' | 'grid';
  badges?: Array<{ icon: string; text: string }>;
}

const defaultBadges = [
  { icon: 'check', text: 'Free Consultation' },
  { icon: 'star', text: '5-Star Reviews' },
  { icon: 'users', text: '35+ Happy Clients' },
  { icon: 'clock', text: 'Quick Response' },
];

const iconMap: Record<string, React.ReactNode> = {
  check: <CheckCircle2 className="h-4 w-4" />,
  star: <Star className="h-4 w-4" />,
  users: <Users className="h-4 w-4" />,
  clock: <Clock className="h-4 w-4" />,
  shield: <Shield className="h-4 w-4" />,
  message: <MessageCircle className="h-4 w-4" />,
};

export function TrustBadges({ variant = 'inline', badges = defaultBadges }: TrustBadgesProps) {
  const containerClass =
    variant === 'inline'
      ? 'flex flex-wrap items-center justify-center gap-4 md:gap-6'
      : 'grid grid-cols-2 md:grid-cols-4 gap-4';

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={containerClass}
    >
      {badges.map((badge, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <TrustBadge icon={iconMap[badge.icon] || iconMap.check} text={badge.text} />
        </motion.div>
      ))}
    </motion.div>
  );
}

// Compact trust section with background
export function TrustSection() {
  const stats = [
    { value: '35+', label: 'Happy Clients' },
    { value: '4+', label: 'Years Experience' },
    { value: '100%', label: 'Satisfaction' },
    { value: '24/7', label: 'Support' },
  ];

  return (
    <section className="bg-gray-50/50 py-8 border-y border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
