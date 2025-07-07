'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { LayoutGrid } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export function PageSwitcher() {
  const pathname = usePathname();

  const versions = [
    { name: 'Version 1', href: '/' },
    { name: 'Version 2', href: '/v2' },
    { name: 'Version 3', href: '/v3' },
  ];

  return (
    <div className="fixed top-4 right-4 z-50">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <LayoutGrid className="h-4 w-4" />
            <span className="sr-only">Switch Version</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {versions.map((version) => (
            <DropdownMenuItem key={version.href} asChild className="cursor-pointer">
              <Link href={version.href} className={cn('w-full', pathname === version.href && 'font-bold text-primary')}>
                {version.name}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
