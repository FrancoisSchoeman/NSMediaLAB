'use client';

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const MobileMenu = ({
  menuItems,
}: {
  menuItems: Array<{ href: string; label: string }>;
}) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <HamburgerMenuIcon style={{ height: '20px', width: '20px' }} />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-nowrap gap-4 items-center">
          <ul className="flex flex-col gap-4">
            {menuItems.map((item, i) => (
              <li key={i}>
                <Link
                  href={item.href}
                  className="dark:text-white hover:text-primary transition-colors text-neutral-800 dark:hover:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
};
