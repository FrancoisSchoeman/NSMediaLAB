import localFont from "@next/font/local";

export const vintageModern = localFont({
  src: [
    {
      path: "../public/fonts/Vintage Modern.ttf",
      weight: "400",
    },
  ],
  variable: "--font-vintage-modern",
});
