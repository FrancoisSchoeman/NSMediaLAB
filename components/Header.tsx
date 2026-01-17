// import { ModeToggle } from '@/components/ModeToggle';
import { DynamicLogo } from '@/components/DynamicLogo';
import { MobileMenu } from '@/components/MobileMenu';
import bgHeader from '@/public/bg-header.webp';
import Link from 'next/link';

const menuItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/faqs', label: 'FAQs' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  return (
    // TODO: Use shadcn for menu
    <header className="z-50 sticky top-4 mx-4 sm:mx-8">
      <div className="relative rounded-full shadow-lg border border-white/20 overflow-hidden backdrop-blur-xl">
        <div
          className="pointer-events-none absolute inset-0 rounded-full bg-cover bg-center"
          style={{
            opacity: 0.7,
            backgroundImage: `url(${bgHeader.src})`,
            transform: 'scale(1.05)',
          }}
        />
        <div className="relative rounded-full py-4 px-6">
          <div className="pointer-events-none absolute inset-0 rounded-full bg-background/25" />
          <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-transparent via-background/20 to-background/45" />
          <div className="max-w-[1300px] mx-auto flex items-center justify-between px-4 sm:px-0">
          <DynamicLogo />

          <div className="flex flex-nowrap gap-4 items-center">
            <ul className="hidden sm:flex gap-4">
              {menuItems.map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.href}
                    className="hover:text-primary transition-colors text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* TODO: Add Mobile Menu */}
            <div className="sm:hidden">
              <MobileMenu menuItems={menuItems} />
            </div>

            {/* <ModeToggle /> */}
          </div>
          </div>
        </div>
      </div>
    </header>
  );
}
