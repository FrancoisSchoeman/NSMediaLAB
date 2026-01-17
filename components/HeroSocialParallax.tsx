'use client';

import { useMemo, useRef } from 'react';
import Link from 'next/link';
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useSpring,
} from 'framer-motion';
import { Button } from '@/components/ui/button';
import AnimatedTitle from '@/components/AnimatedTitle';

import {
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from '@radix-ui/react-icons';

import {
  Youtube,
  Facebook,
  PinIcon,
  AtSign,
  MessageCircle,
} from 'lucide-react';

type IconDef = {
  key: string;
  label: string;
  xPct: number;
  yPct: number;
  box: number;
  icon: number;
  strength: number;
  floatAmp: number;
  floatSpeed: number;
  Render: (p: { size: number; className?: string }) => JSX.Element;
};

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

export default function HeroSocialParallax() {
  const wrapRef = useRef<HTMLDivElement | null>(null);

  // mouse in [-1..1]
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  // smooth the mouse signal (global)
  const mxSmooth = useSpring(mx, { stiffness: 120, damping: 22, mass: 0.9 });
  const mySmooth = useSpring(my, { stiffness: 120, damping: 22, mass: 0.9 });

  const icons = useMemo<IconDef[]>(
    () => [
      // LEFT SIDE (cluster)
      {
        key: 'x',
        label: 'X',
        xPct: 6,
        yPct: 16,
        box: 54,
        icon: 30,
        strength: 18,
        floatAmp: 7,
        floatSpeed: 0.8,
        Render: ({ size, className }) => (
          <TwitterLogoIcon width={size} height={size} className={className} />
        ),
      },
      {
        key: 'yt',
        label: 'YouTube',
        xPct: 5,
        yPct: 42,
        box: 58,
        icon: 32,
        strength: 24,
        floatAmp: 8,
        floatSpeed: 0.95,
        Render: ({ size, className }) => (
          <Youtube size={size} className={className} />
        ),
      },
      {
        key: 'li',
        label: 'LinkedIn',
        xPct: 7,
        yPct: 72,
        box: 52,
        icon: 28,
        strength: 16,
        floatAmp: 6,
        floatSpeed: 0.7,
        Render: ({ size, className }) => (
          <LinkedInLogoIcon width={size} height={size} className={className} />
        ),
      },
      {
        key: 'msg',
        label: 'Messages',
        xPct: 18,
        yPct: 86,
        box: 52,
        icon: 28,
        strength: 12,
        floatAmp: 6,
        floatSpeed: 0.65,
        Render: ({ size, className }) => (
          <MessageCircle size={size} className={className} />
        ),
      },

      // RIGHT SIDE (cluster)
      {
        key: 'pin',
        label: 'Pinterest',
        xPct: 92,
        yPct: 18,
        box: 54,
        icon: 30,
        strength: 18,
        floatAmp: 7,
        floatSpeed: 0.8,
        Render: ({ size, className }) => (
          <PinIcon size={size} className={className} />
        ),
      },
      {
        key: 'threads',
        label: 'Threads',
        xPct: 91,
        yPct: 42,
        box: 52,
        icon: 28,
        strength: 16,
        floatAmp: 7,
        floatSpeed: 0.85,
        Render: ({ size, className }) => (
          <AtSign size={size} className={className} />
        ),
      },
      {
        key: 'fb',
        label: 'Facebook',
        xPct: 90,
        yPct: 70,
        box: 56,
        icon: 30,
        strength: 24,
        floatAmp: 8,
        floatSpeed: 1.0,
        Render: ({ size, className }) => (
          <Facebook size={size} className={className} />
        ),
      },
      {
        key: 'ig',
        label: 'Instagram',
        xPct: 78,
        yPct: 86,
        box: 56,
        icon: 30,
        strength: 14,
        floatAmp: 7,
        floatSpeed: 0.85,
        Render: ({ size, className }) => (
          <InstagramLogoIcon width={size} height={size} className={className} />
        ),
      },
    ],
    []
  );

  return (
    <div
      ref={wrapRef}
      onMouseMove={(e) => {
        const el = wrapRef.current;
        if (!el) return;

        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;

        mx.set(clamp((px - 0.5) * 2, -1, 1));
        my.set(clamp((py - 0.5) * 2, -1, 1));
      }}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      className="relative w-full min-h-[72vh] flex items-center justify-center overflow-visible"
    >
      {/* Background (Buffer-ish) */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-zinc-50 dark:from-zinc-950 dark:to-zinc-900" />
      <div
        className="absolute inset-0"
        style={{
          opacity: 0.42,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='28' viewBox='0 0 28 28'%3E%3Cpath d='M 28 0 L 0 0 0 28' fill='none' stroke='rgba(0,0,0,0.22)' stroke-width='1'/%3E%3C/svg%3E\")",
          backgroundSize: '28px 28px',
        }}
      />
      <div
        className="absolute inset-0 hidden dark:block"
        style={{
          opacity: 0.34,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='28' viewBox='0 0 28 28'%3E%3Cpath d='M 28 0 L 0 0 0 28' fill='none' stroke='rgba(255,255,255,0.22)' stroke-width='1'/%3E%3C/svg%3E\")",
          backgroundSize: '28px 28px',
        }}
      />

      {/* Floating icons layer */}
      <div className="absolute inset-0 overflow-visible">
        {icons.map((def, idx) => (
          <FloatingIcon
            key={def.key}
            def={def}
            mx={mxSmooth}
            my={mySmooth}
            seed={idx * 997 + 1337}
          />
        ))}
      </div>

      {/* fade icons near the center so they don't sit behind text */}
      <div
        className="pointer-events-none absolute inset-0 z-[3]"
        style={{
          background:
            'radial-gradient(circle at center, rgba(255,255,255,1) 0%, rgba(255,255,255,0.96) 34%, rgba(255,255,255,0) 64%)',
          mixBlendMode: 'screen',
          opacity: 0.9,
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 z-[3] hidden dark:block"
        style={{
          background:
            'radial-gradient(circle at center, rgba(0,0,0,1) 0%, rgba(0,0,0,0.92) 40%, rgba(0,0,0,0) 65%)',
          mixBlendMode: 'multiply',
          opacity: 0.85,
        }}
      />

      {/* Center content (your existing hero copy) */}
      <div className="relative z-10 w-full px-6">
        <div className="mx-auto max-w-3xl text-center">
          <AnimatedTitle text="Solve the Social Media Cube with Social Media Marketing" />

          <p className="mt-4 mx-auto max-w-[70ch] text-neutral-600 md:text-xl">
            Hi there! I&apos;m Nadia, and this is NS MediaLAB. I approach social
            media as a multidimensional system - much like a Rubik’s Cube. Each
            face represents a critical platform: Facebook, Instagram, YouTube,
            and beyond. Individually, they hold potential. When strategically
            aligned, they unlock powerful brand momentum.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/pricing">Our Pricing</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* soft vignette to keep text readable */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.0)_0%,rgba(255,255,255,0.85)_55%,rgba(255,255,255,0.95)_100%)] dark:bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.0)_0%,rgba(0,0,0,0.55)_60%,rgba(0,0,0,0.75)_100%)]" />
    </div>
  );
}

function FloatingIcon({
  def,
  mx,
  my,
  seed,
}: {
  def: IconDef;
  mx: ReturnType<typeof useSpring>;
  my: ReturnType<typeof useSpring>;
  seed: number;
}) {
  // Follow offsets (each icon has its own spring, feels independent)
  const xTarget = useMotionValue(0);
  const yTarget = useMotionValue(0);

  const x = useSpring(xTarget, { stiffness: 200, damping: 22, mass: 0.7 });
  const y = useSpring(yTarget, { stiffness: 200, damping: 22, mass: 0.7 });

  // Float offsets
  const fx = useMotionValue(0);
  const fy = useMotionValue(0);

  useAnimationFrame((t) => {
    // mouse follow
    const fxMouse = clamp(mx.get() * def.strength, -def.strength, def.strength);
    const fyMouse = clamp(my.get() * def.strength, -def.strength, def.strength);

    xTarget.set(fxMouse);
    yTarget.set(fyMouse);

    // deterministic float
    const phase = seed * 0.001;
    const s = def.floatSpeed;

    fx.set(Math.sin((t / 1000) * s + phase) * (def.floatAmp * 0.7));
    fy.set(Math.cos((t / 1000) * s + phase) * def.floatAmp);
  });

  return (
    <motion.div
      className="absolute pointer-events-none z-[2]"
      style={{
        left: `${def.xPct}%`,
        top: `${def.yPct}%`,
        width: def.box,
        height: def.box,
        x,
        y,
        translateX: fx,
        translateY: fy,
      }}
    >
      <div className="w-full h-full rounded-2xl bg-white/85 dark:bg-zinc-900/70 shadow-sm ring-1 ring-black/5 dark:ring-white/10 flex items-center justify-center">
        <def.Render
          size={def.icon}
          className="text-zinc-800 dark:text-zinc-100"
        />
      </div>
    </motion.div>
  );
}
