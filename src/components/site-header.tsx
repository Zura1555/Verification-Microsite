import { MaisonLogo } from '@/components/maison-logo';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export function SiteHeader({ className }: { className?: string }) {
  return (
    <header className={cn("sticky top-0 z-40 w-full border-b bg-background", className)}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center">
          <MaisonLogo className="h-8 w-8" />
        </Link>
        <div className="hidden sm:block text-sm text-muted-foreground">
            Official Channel Verification
        </div>
      </div>
    </header>
  );
}
