'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type AnimatedTitleProps = {
  text: string;
  duration?: number;
  className?: string;
};

export default function AnimatedTitle({
  text,
  duration = 0.3,
  className,
}: AnimatedTitleProps) {
  return (
    <h1 className="inline-block lg:leading-tight text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl xl:text-6xl">
      {text.split(' ').map((word, wordIndex) => (
        <span key={wordIndex} className="inline-flex flex-wrap">
          {word.split('').map((char, index) => (
            <motion.span
              key={char + index}
              className={cn('inline-block text-foreground', className)}
              initial={{ opacity: 0, filter: 'blur(4px)', rotateX: 90, y: 5 }}
              animate={{
                opacity: 1,
                filter: 'blur(0px)',
                rotateX: 0,
                y: 0,
              }}
              transition={{
                ease: 'easeOut',
                duration: duration,
                delay: (wordIndex * word.length + index) * 0.015,
              }}
            >
              {char}
            </motion.span>
          ))}
          {wordIndex !== text.split(' ').length - 1 && (
            <span className="inline-block">&nbsp;</span>
          )}
        </span>
      ))}
    </h1>
  );
}
