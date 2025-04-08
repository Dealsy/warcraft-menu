import type React from "react"
import { cn } from "@/lib/utils"

interface PanelProps {
  children: React.ReactNode
  className?: string
  variant?: "metal" | "dark" | "light"
}

export function EightBitPanel({ children, className, variant = "metal", ...props }: PanelProps) {
  const baseStyles = "relative p-4 border-4"

  const variantStyles = {
    metal: "bg-gray-700 border-t-gray-500 border-l-gray-500 border-r-gray-900 border-b-gray-900",
    dark: "bg-gray-800 border-t-gray-700 border-l-gray-700 border-r-black border-b-black",
    light: "bg-gray-300 border-t-white border-l-white border-r-gray-500 border-b-gray-500",
  }

  return (
    <div className={cn(baseStyles, variantStyles[variant], className)} {...props}>
      {children}
    </div>
  )
}
