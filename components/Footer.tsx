"use client";

import { Separator } from "@/components/ui/separator";
import { useEffect } from "react";

const currentYear = new Date().getFullYear();

export default function Footer() {
  useEffect(() => {
    console.log("Hi, there!  👋");
    console.log(
      "I built this website with Next.js 14 - the link to the GitHub Repo is here: https://github.com/FrancoisSchoeman/NSMediaLAB"
    );
    console.log(
      "Feel free to send me an email to francois.schoeman15@gmail.com if you'd like to chat...🙂"
    );
  }, []);

  return (
    <footer className="flex flex-col items-center justify-center w-full h-24">
      <Separator className="mb-6" />
      <p className="text-sm text-muted-foreground">
        Copyright &copy; {currentYear}{" "}
        <a
          href="https://nsmedialab.co.za/"
          className="text-accent-foreground hover:underline"
        >
          NS MediaLAB
        </a>{" "}
        | Made with 💖 by{" "}
        <a
          href="https://github.com/FrancoisSchoeman"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent-foreground hover:underline"
        >
          this guy
        </a>
      </p>
    </footer>
  );
}
