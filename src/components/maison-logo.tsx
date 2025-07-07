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
        src="https://i0.wp.com/maisonrmi.com/wp-content/uploads/2023/04/MicrosoftTeams-image.png?fit=2560%2C1062&ssl=1"
        alt="Maison Logo"
        fill
        className="object-contain"
      />
    </div>
  );
}
