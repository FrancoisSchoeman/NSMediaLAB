'use client';

import { useEffect } from 'react';
import { sendGTMEvent } from '@next/third-parties/google';
import { Button } from '@/components/ui/button';
import {
  EnvelopeClosedIcon,
  MobileIcon,
} from '@radix-ui/react-icons';
import { Facebook, Instagram, Linkedin, MapPin } from 'lucide-react';

const currentYear = new Date().getFullYear();

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/faqs', label: 'FAQs' },
  { href: '/contact', label: 'Contact' },
];

const legalLinks = [
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/terms-of-service', label: 'Terms of Service' },
];

export default function Footer() {
  useEffect(() => {
    console.log('Hi, there! 👋');
    console.log(
      'I built this website with Next.js 14 - the link to the GitHub Repo is here: https://github.com/FrancoisSchoeman/NSMediaLAB'
    );
    console.log(
      "Feel free to send me an email to francois.schoeman15@gmail.com if you'd like to chat...🙂"
    );
  }, []);

  const handleCTAClick = () => {
    sendGTMEvent({
      event: 'cta_click',
      cta_location: 'footer',
      cta_text: 'Get Started Today',
    });
  };

  return (
    <footer className="bg-secondary/30 border-t border-border/40">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a href="/" className="inline-block mb-4">
              <img
                src="/logo-black.webp"
                alt="NS MediaLAB"
                width={150}
                height={40}
                className="h-10 w-auto"
              />
            </a>
            <p className="text-sm text-muted-foreground mb-4">
              Professional social media marketing services for small businesses.
              Based in Stilbaai, Western Cape.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/nsmedialab"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/nsmedialab"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/ns-medialab/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:nadia@nsmedialab.co.za"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <EnvelopeClosedIcon className="h-4 w-4 flex-shrink-0" />
                  nadia@nsmedialab.co.za
                </a>
              </li>
              <li>
                <a
                  href="tel:+27826191100"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <MobileIcon className="h-4 w-4 flex-shrink-0" />
                  082 619 1100
                </a>
              </li>
              <li>
                <span className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 flex-shrink-0" />
                  Stilbaai, Western Cape
                </span>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/services"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Social Media Management
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Content Creation
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Advertising Campaigns
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Strategy Consultation
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Photography
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/40">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              &copy; {currentYear} NS MediaLAB. All rights reserved. Made with 💖 by{' '}
              <a
                href="https://www.fsdev.co.za/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                this guy
              </a>
            </p>
            <div className="flex gap-4">
              {legalLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
