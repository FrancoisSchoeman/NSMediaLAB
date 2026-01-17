'use client';

import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { useEffect } from 'react';

const currentYear = new Date().getFullYear();

export default function Footer() {
  useEffect(() => {
    console.log('Hi, there!  👋');
    console.log(
      'I built this website with Next.js 14 - the link to the GitHub Repo is here: https://github.com/FrancoisSchoeman/NSMediaLAB'
    );
    console.log(
      "Feel free to send me an email to francois.schoeman15@gmail.com if you'd like to chat...🙂"
    );
  }, []);

  return (
    <footer className="flex flex-col items-center justify-center w-full h-24">
      <Separator className="mb-6" />
      <span className="text-sm text-muted-foreground flex flex-wrap justify-center gap-1 items-center">
        Copyright &copy; {currentYear}{' '}
        <Link
          href="https://nsmedialab.co.za/"
          className="text-accent-foreground hover:underline"
        >
          NS MediaLAB
        </Link>{' '}
        | Made with 💖 by{' '}
        <a
          href="https://www.fsdev.co.za/"
          target="_blank"
          className="text-accent-foreground hover:underline"
        >
          this guy
        </a>
      </span>
      <span className="text-sm text-muted-foreground flex flex-wrap justify-center gap-1 items-center mt-4">
        <Link
          href="/privacy-policy"
          className="text-accent-foreground hover:underline"
        >
          Privacy Policy
        </Link>
        {' | '}
        <Link
          href="/terms-of-service"
          className="text-accent-foreground hover:underline"
        >
          Terms of Service
        </Link>
      </span>
    </footer>
  );
}
