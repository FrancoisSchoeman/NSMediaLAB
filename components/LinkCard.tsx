'use client';

import Link from 'next/link';
import { useMotionValue, motion, useMotionTemplate } from 'motion/react';
import { cn } from '@/lib/utils';
import React from 'react';

export function LinkCard({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const background = useMotionTemplate`radial-gradient(200px circle at ${mouseX}px ${mouseY}px, rgba(244, 114, 182, 0.15), transparent 80%)`;

  return (
    <div className="relative inline-flex overflow-hidden rounded-xl p-px">
      <span
        className={cn(
          'absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,#4e4e4e_0%,#d4d4d4_50%,#414141_100%)]',
          'animate-[spin_2s_linear_infinite] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#c2c2c2_0%,#505050_50%,#bebebe_100%)]'
        )}
      />
      <Link
        href={href}
        onMouseMove={(e) => {
          const { left, top } = e.currentTarget.getBoundingClientRect();

          mouseX.set(e.clientX - left);
          mouseY.set(e.clientY - top);
        }}
        className="group relative w-full overflow-hidden rounded-xl bg-neutral-50 text-left dark:bg-gray-950 dark:text-neutral-100"
      >
        <div className="absolute right-5 top-0 h-px w-full bg-gradient-to-l from-transparent via-neutral-400/30 via-10% to-transparent dark:via-white/30" />
        <motion.div
          className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background: background,
          }}
        />
        <div className="relative flex flex-col gap-3 min-h-36 px-4 py-5">
          {children}
        </div>
      </Link>
    </div>
  );
}
