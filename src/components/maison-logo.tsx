import { cn } from "@/lib/utils";
import Image from "next/image";

export function MaisonLogo({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg bg-primary",
        className
      )}
      {...props}
    >
      <Image
        src="https://placehold.co/100x100.png"
        alt="Maison Logo"
        fill
        className="object-cover"
        data-ai-hint="logo"
      />
    </div>
  );
}
