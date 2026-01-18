'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { sendGTMEvent } from '@next/third-parties/google';

interface LinkCardProps {
  children: React.ReactNode;
  href: string;
  className?: string;
  trackingLabel?: string;
}

export function LinkCard({ children, href, className, trackingLabel }: LinkCardProps) {
  const handleClick = () => {
    if (trackingLabel) {
      sendGTMEvent({
        event: 'service_click',
        service_name: trackingLabel,
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -4 }}
      className="h-full"
    >
      <a
        href={href}
        onClick={handleClick}
        className={cn(
          'group block h-full p-6 rounded-xl',
          'bg-white border border-border/50',
          'shadow-sm hover:shadow-lg',
          'transition-all duration-300',
          className
        )}
      >
        <div className="flex flex-col gap-3 h-full">{children}</div>
      </a>
    </motion.div>
  );
}

// Service Card variant with icon
interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
}

export function ServiceCard({ title, description, icon, href }: ServiceCardProps) {
  return (
    <LinkCard href={href} trackingLabel={title}>
      <div className="p-3 rounded-lg bg-primary/10 w-fit text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </LinkCard>
  );
}
