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
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_KEEuWPcYceF0Alytq23y_kPRxFaFenewwQ&s"
        alt="Maison Logo"
        fill
        className="object-contain"
      />
    </div>
  );
}
