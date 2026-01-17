import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col sm:items-center justify-between relative w-full h-full py-16">
      <section className="w-full sm:text-center flex flex-col justify-start sm:items-center space-y-6 sm:space-y-12">
        <div className="flex flex-col items-start justify-center space-y-4">
          <div className="space-y-2">
            <Link href="/">
              <Badge>Oh No!</Badge>
            </Link>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              404 - Page Not Found
            </h2>
            <p className="max-w-[40ch] sm:max-w-[900px] text-neutral-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              The page you are looking for does not exist. Please check the URL
              and try again.
            </p>
          </div>
        </div>

        <Button asChild className="self-start sm:self-center">
          <Link href="/">Back to Home</Link>
        </Button>
      </section>
    </div>
  );
}
