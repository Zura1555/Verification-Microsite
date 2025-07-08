import { cn } from "@/lib/utils";
import Image from "next/image";

export function BrandLogoPlaceholder({ className }: { className?: string }) {
  return (
    <div className={cn("flex justify-center", className)}>
      <div className="relative h-20 w-60">
        <Image
          src="https://th.mlb-korea.com/cdn/shop/files/Logo_New-02.png?v=1684485771&width=309"
          alt="Brand Logo"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}
