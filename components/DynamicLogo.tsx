/* eslint-disable @next/next/no-img-element */
"use client";

import { useTheme } from "next-themes";
import Link from "next/link";

import { useState, useEffect } from "react";

export function DynamicLogo() {
  const { theme } = useTheme();
  const [logoWidth, setLogoWidth] = useState(200);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 50) {
        setLogoWidth(120); // smaller width
      } else {
        setLogoWidth(200); // original width
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Directly reference the public path for images
  const logoSrc = theme === "dark" ? "/logo-white.webp" : "/logo-black.webp";

  return (
    <Link href="/">
      <div className="w-24 sm:w-32 md:w-40 lg:w-48 xl:w-56 2xl:w-64">
        <img
          className="transition-all duration-200 w-full"
          src={logoSrc}
          alt="NS MediaLAB Logo"
          style={{ width: `${logoWidth}px` }} // Inline style for dynamic width
        />
      </div>
    </Link>
  );
}
