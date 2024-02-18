"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

export const MobileMenu = ({
  menuItems,
}: {
  menuItems: Array<{ href: string; label: string }>;
}) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <HamburgerMenuIcon style={{ height: "20px", width: "20px" }} />
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
                <a
                  href={item.href}
                  className="dark:text-white hover:text-primary transition-colors text-gray-800 dark:hover:text-primary"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
};
