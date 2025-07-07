import { cn } from "@/lib/utils";
import type { SVGProps } from "react";

export function MaisonLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-lg bg-primary text-primary-foreground",
        props.className
      )}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-[55%] w-[55%]"
      >
        <path d="M4 20V4l8 8 8-8v16" />
      </svg>
    </div>
  );
}
