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
        src="https://mdm.maisonrmi.com/assets/858c71b3-5aff-4c3f-b485-a07a9953097c?key=system-small-cover"
        alt="Maison Logo"
        fill
        className="object-contain"
      />
    </div>
  );
}
