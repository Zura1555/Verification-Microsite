import { cn } from "@/lib/utils";
import Image from "next/image";

export function MaisonLogo({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "relative",
        className
      )}
      {...props}
    >
      <Image
        src="https://i0.wp.com/maisonrmi.com/wp-content/uploads/2022/04/Maison-Retail-Management-INT_Logo_horizontal-ver-1.png?fit=218%2C90&ssl=1"
        alt="Maison Logo"
        fill
        className="object-contain"
      />
    </div>
  );
}
