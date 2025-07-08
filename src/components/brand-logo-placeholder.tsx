import { cn } from "@/lib/utils";

export function BrandLogoPlaceholder({ className }: { className?: string }) {
  return (
    <div className={cn("flex justify-center", className)}>
      <div className="flex h-16 w-40 items-center justify-center rounded-lg bg-muted text-sm text-muted-foreground">
        Brand Logo
      </div>
    </div>
  );
}
