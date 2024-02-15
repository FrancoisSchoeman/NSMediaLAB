import { ModeToggle } from "./ModeToggle";
import { DynamicLogo } from "./DynamicLogo";

export function Header() {
  return (
    <header className="z-50 sticky top-0 bg-background/50 backdrop-blur-md border-b py-4">
      <div className="max-w-[1300px] mx-auto flex items-center justify-between ">
        <DynamicLogo />

        <div className="flex flex-nowrap gap-4 items-center">
          <ul className="flex gap-4">
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>

          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
