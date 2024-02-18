import { ModeToggle } from "@/components/ModeToggle";
import { DynamicLogo } from "@/components/DynamicLogo";
import { MobileMenu } from "@/components/MobileMenu";

const menuItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/faqs", label: "FAQs" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    // TODO: Use shadcn for menu
    <header className="z-50 sticky top-0 bg-background/50 backdrop-blur-md border-b py-4">
      <div className="max-w-[1300px] mx-auto flex items-center justify-between px-4 sm:px-0">
        <DynamicLogo />

        <div className="flex flex-nowrap gap-4 items-center">
          <ul className="hidden sm:flex gap-4">
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

          {/* TODO: Add Mobile Menu */}
          <div className="sm:hidden">
            <MobileMenu menuItems={menuItems} />
          </div>

          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
