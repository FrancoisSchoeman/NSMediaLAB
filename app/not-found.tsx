import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col sm:items-center justify-between py-16">
      <section className="w-full sm:text-center flex flex-col justify-start sm:items-center space-y-16">
        <div className="flex flex-col items-start justify-center space-y-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              404 | Not Found
            </h2>
            <p className="max-w-[40ch] sm:max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              The page you are looking for does not exist. Please return to the
              home page.
            </p>
          </div>
        </div>
        <Button asChild className="self-start sm:self-center">
          <Link href="/">Return Home</Link>
        </Button>
      </section>
    </div>
  );
}
