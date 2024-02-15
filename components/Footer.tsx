import { Separator } from "@/components/ui/separator";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center w-full h-24">
      <Separator className="mb-6" />
      <p className="text-sm text-muted-foreground">
        Copyright &copy; {currentYear} NS MediaLAB
      </p>
    </footer>
  );
}
