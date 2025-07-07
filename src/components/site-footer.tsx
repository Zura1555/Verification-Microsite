import { cn } from '@/lib/utils';

export function SiteFooter({ className }: { className?: string }) {
    return (
        <footer className={cn("w-full border-t bg-background", className)}>
            <div className="mx-auto max-w-7xl py-6 px-4 text-center text-sm text-muted-foreground md:px-6">
                <p>&copy; {new Date().getFullYear()} MAISON RETAIL. All rights reserved.</p>
                <p className="mt-1">Your trust is our priority.</p>
            </div>
        </footer>
    );
}
