'use client';

import { useMemo, useRef } from 'react';
import dynamic from 'next/dynamic';
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useSpring,
} from 'framer-motion';
import { Button } from '@/components/ui/button';
import AnimatedTitle from '@/components/AnimatedTitle';
import { sendGTMEvent } from '@next/third-parties/google';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Users, Star } from 'lucide-react';
import elevatingCube from '@/public/rubiks-cube-elevating.json';

// Dynamic import with SSR disabled to prevent "document is not defined" error during static export
const LottiePlayer = dynamic(
  () => import('@/components/LottiePlayer').then((mod) => mod.LottiePlayer),
  { ssr: false }
);

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

  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const mxSmooth = useSpring(mx, { stiffness: 120, damping: 22, mass: 0.9 });
  const mySmooth = useSpring(my, { stiffness: 120, damping: 22, mass: 0.9 });

  const handleCTAClick = (ctaText: string) => {
    sendGTMEvent({
      event: 'cta_click',
      cta_location: 'hero',
      cta_text: ctaText,
    });
  };

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
    <section
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
      className="relative w-full min-h-[75vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/50 to-white" />
      
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0"
        style={{
          opacity: 0.3,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cpath d='M 40 0 L 0 0 0 40' fill='none' stroke='rgba(0,0,0,0.08)' stroke-width='1'/%3E%3C/svg%3E\")",
          backgroundSize: '40px 40px',
        }}
      />

      {/* Decorative blur shapes - Rubik's cube colors at very low opacity */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-shape-blue blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-shape-orange blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full blur-shape-red blur-3xl pointer-events-none opacity-50" />

      {/* Floating icons layer - hidden on mobile */}
      <div className="absolute inset-0 overflow-visible hidden lg:block">
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

      {/* Center fade for text readability */}
      <div
        className="pointer-events-none absolute inset-0 z-[3] hidden lg:block"
        style={{
          background:
            'radial-gradient(circle at center, rgba(255,255,255,1) 0%, rgba(255,255,255,0.98) 30%, rgba(255,255,255,0) 60%)',
        }}
      />

      {/* Center content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 pt-10 sm:pt-0">
        <div className="mx-auto max-w-4xl text-center">

        <LottiePlayer
                src={elevatingCube}
                height="150px"
                width="150px"
                speed={1}
                aria-label="Animated Rubik's cube representing social media strategy"
              />
          {/* Social Proof Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <Badge variant="secondary" className="px-4 py-2 text-sm font-medium gap-2">
              <Users className="h-4 w-4" />
              Trusted by 35+ South African Businesses
            </Badge>
          </motion.div>

          {/* Main Headline */}
          <AnimatedTitle text="Solve Your Social Media Puzzle" />
          
          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 mx-auto max-w-2xl text-lg sm:text-xl text-muted-foreground"
          >
            Hi, I&apos;m Nadia! I help small businesses transform their social media 
            presence into a powerful growth engine. Like solving a Rubik&apos;s Cube, 
            I align every platform to work together seamlessly.
          </motion.p>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground"
          >
            <span className="flex items-center gap-1">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              Free Consultation
            </span>
            <span className="flex items-center gap-1">
              <Star className="h-4 w-4 text-primary" />
              5-Star Reviews
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              Stilbaai Based
            </span>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto text-base px-8 shadow-lg hover:shadow-xl transition-shadow"
              onClick={() => handleCTAClick('Get a Free Quote')}
            >
              <a href="/contact">Get a Free Quote</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto text-base px-8"
              onClick={() => handleCTAClick('View Pricing')}
            >
              <a href="/pricing">View Pricing</a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
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
  const xTarget = useMotionValue(0);
  const yTarget = useMotionValue(0);

  const x = useSpring(xTarget, { stiffness: 200, damping: 22, mass: 0.7 });
  const y = useSpring(yTarget, { stiffness: 200, damping: 22, mass: 0.7 });

  const fx = useMotionValue(0);
  const fy = useMotionValue(0);

  useAnimationFrame((t) => {
    const fxMouse = clamp(mx.get() * def.strength, -def.strength, def.strength);
    const fyMouse = clamp(my.get() * def.strength, -def.strength, def.strength);

    xTarget.set(fxMouse);
    yTarget.set(fyMouse);

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
      <div className="w-full h-full rounded-2xl bg-white shadow-md ring-1 ring-black/5 flex items-center justify-center">
        <def.Render size={def.icon} className="text-foreground/80" />
      </div>
    </motion.div>
  );
}
