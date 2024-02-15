import type { Metadata } from "next";
import "./globals.css";
// GeistSans: --font-geist-sans
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "@/components/theme-provider";

import { Header } from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "NS MediaLAB",
  description: "Social Media Marketing Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${GeistSans.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main className="max-w-[1300px] mx-auto">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
