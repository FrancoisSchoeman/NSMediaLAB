'use client';

import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

type AnimatedTitleProps = {
  text: string;
  duration?: number;
} & React.ComponentProps<'h1'>;

export default function AnimatedTitle({
  text,
  duration = 0.3,
  className,
}: AnimatedTitleProps) {
  return (
    <motion.div className="inline-block lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
      {text.split(' ').map((word, wordIndex) => (
        <span key={wordIndex} className="inline-flex flex-wrap">
          {word.split('').map((char, index) => (
            <motion.h1
              key={char + index}
              className={cn(
                'inline-block text-neutral-700',
                className
              )}
              initial={{ opacity: 0, filter: 'blur(4px)', rotateX: 90, y: 5 }}
              whileInView={{
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
              viewport={{ once: true }}
            >
              {char}
            </motion.h1>
          ))}
          {wordIndex !== text.split(' ').length - 1 && (
            <span className="inline-block">&nbsp;</span>
          )}
        </span>
      ))}
    </motion.div>
  );
}
