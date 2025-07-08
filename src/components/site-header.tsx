import { MaisonLogo } from '@/components/maison-logo';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navLinks = [
  { text: 'Giới Thiệu', href: '#' },
  { text: 'Thương Hiệu', href: '#' },
  { text: 'Sản Phẩm', href: '#' },
  { text: 'Tin Tức', href: '#' },
  { text: 'Cơ Hội Nghề Nghiệp', href: '#' },
  { text: 'Đối Tác', href: '#' },
  { text: 'Liên Hệ', href: '#' },
  { text: 'Hỏi Đáp', href: '#' },
];

export function SiteHeader({ className }: { className?: string }) {
  return (
    <header className={cn("sticky top-0 z-40 w-full border-b bg-background", className)}>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center">
          <MaisonLogo className="h-12 w-48" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.text}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.text}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
                <Link href="/" className="mb-8 flex items-center">
                  <MaisonLogo className="h-10 w-40" />
                </Link>
                <div className="h-px bg-border my-6" />
                <nav className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.text}
                      href={link.href}
                      className="text-lg font-medium text-foreground transition-colors hover:text-primary"
                    >
                      {link.text}
                    </Link>
                  ))}
                </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
