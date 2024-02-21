/* eslint-disable @next/next/no-img-element */
"use client";

import { useTheme } from "next-themes";
import Link from "next/link";

import { useState, useEffect } from "react";

export function DynamicLogo() {
  const { theme } = useTheme();
  const [logoWidth, setLogoWidth] = useState(200);
  const [scrollPos, setScrollPos] = useState(0);
  const [logoSrc, setLogoSrc] = useState("/logo-white.webp");

  useEffect(() => {
    if (theme === "light") {
      setLogoSrc("/logo-black.webp");
    } else {
      setLogoSrc("/logo-white.webp");
    }
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollPos(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (scrollPos >= 70) {
      setLogoWidth(120); // smaller width
    } else if (scrollPos <= 30) {
      setLogoWidth(200); // original width
    }
  }, [scrollPos]);

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
