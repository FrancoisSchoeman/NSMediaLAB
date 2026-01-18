'use client';

export function DynamicLogo() {
  return (
    <a href="/" className="flex-shrink-0">
      <img
        className="transition-all duration-300 h-auto"
        src="/logo-black.webp"
        alt="NS MediaLAB - Social Media Marketing"
        width={120}
        height={40}
        style={{ width: '120px', height: 'auto' }}
      />
    </a>
  );
}
