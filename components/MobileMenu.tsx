'use client';

import { useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { Button } from '@/components/ui/button';

interface MobileMenuProps {
  menuItems: Array<{ href: string; label: string }>;
  onCTAClick?: () => void;
}

export const MobileMenu = ({ menuItems, onCTAClick }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="h-10 w-10">
          <HamburgerMenuIcon className="h-5 w-5" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:w-80 p-0">
        <SheetHeader className="p-6 border-b">
          <div className="flex items-center justify-between">
            <img
              src="/logo-black.webp"
              alt="NS MediaLAB"
              width={120}
              height={30}
              className="h-8 w-auto"
            />
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
          </div>
        </SheetHeader>
        
        <nav className="flex flex-col p-6">
          <ul className="flex flex-col gap-2">
            {menuItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={handleLinkClick}
                  className="flex items-center px-4 py-3 text-lg font-medium text-foreground hover:text-primary hover:bg-secondary/50 rounded-lg transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-8 pt-6 border-t">
            <Button
              asChild
              className="w-full h-12 text-base"
              onClick={() => {
                handleLinkClick();
                onCTAClick?.();
              }}
            >
              <a href="/contact">Get a Free Quote</a>
            </Button>
          </div>

          {/* Contact Info */}
          <div className="mt-8 pt-6 border-t space-y-3">
            <p className="text-sm text-muted-foreground">Get in touch</p>
            <a
              href="mailto:nadia@nsmedialab.co.za"
              className="block text-sm text-foreground hover:text-primary transition-colors"
            >
              nadia@nsmedialab.co.za
            </a>
            <a
              href="tel:+27826191100"
              className="block text-sm text-foreground hover:text-primary transition-colors"
            >
              082 619 1100
            </a>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
};
