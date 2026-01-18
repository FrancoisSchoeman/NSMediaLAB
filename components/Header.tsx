'use client';

import { DynamicLogo } from '@/components/DynamicLogo';
import { MobileMenu } from '@/components/MobileMenu';
import { Button } from '@/components/ui/button';
import { sendGTMEvent } from '@next/third-parties/google';
import { useEffect, useState } from 'react';

const menuItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/faqs', label: 'FAQs' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCTAClick = () => {
    sendGTMEvent({
      event: 'cta_click',
      cta_location: 'header',
      cta_text: 'Get a Free Quote',
    });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4">
      <div className="max-w-7xl mx-auto">
        <div
          className={`glass-card !rounded-full px-4 sm:px-6 transition-all duration-300 ${
            isScrolled ? 'shadow-lg' : ''
          }`}
        >
          <div className="flex items-center justify-between h-14 md:h-16">
            {/* Logo */}
            <DynamicLogo />

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors rounded-full hover:bg-white/50"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* CTA Button + Mobile Menu */}
            <div className="flex items-center gap-3">
              <Button
                asChild
                className="hidden sm:inline-flex shadow-sm hover:shadow-md transition-shadow rounded-full"
                onClick={handleCTAClick}
              >
                <a href="/contact">Get a Free Quote</a>
              </Button>

              {/* Mobile Menu */}
              <div className="md:hidden">
                <MobileMenu menuItems={menuItems} onCTAClick={handleCTAClick} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
