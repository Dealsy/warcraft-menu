import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type RivetProps = HTMLAttributes<HTMLDivElement>;

export default function Rivet({ className, ...props }: RivetProps) {
  return (
    <div
      className={cn(
        "w-3 h-3 rounded-full",
        "bg-[#414241]",
        "border border-gray-200 shadow-2xl",
        "shadow-[inset_0_5px_5px_rgba(255,255,255,0.2),0_5px_5px_rgba(0,0,0,0.3)]",
        className
      )}
      {...props}
    />
  );
}
