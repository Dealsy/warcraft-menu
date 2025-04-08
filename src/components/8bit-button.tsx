import type React from "react"
import { cn } from "@/lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary"
  size?: "sm" | "md" | "lg"
  children: React.ReactNode
  className?: string
}

export function EightBitButton({ variant = "primary", size = "md", children, className, ...props }: ButtonProps) {
  const baseStyles = "relative font-pixel text-center transition-transform active:translate-y-1 active:shadow-none"

  const variantStyles = {
    primary: "bg-blue-800 text-yellow-300 border-b-4 border-blue-900 hover:bg-blue-700",
    secondary: "bg-gray-700 text-white border-b-4 border-gray-800 hover:bg-gray-600",
  }

  const sizeStyles = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2",
    lg: "px-6 py-3 text-lg",
  }

  // Pixel border effect
  const pixelBorder = "border-2 border-t-gray-500 border-l-gray-500 border-r-black border-b-black"

  return (
    <button className={cn(baseStyles, variantStyles[variant], sizeStyles[size], pixelBorder, className)} {...props}>
      {children}
    </button>
  )
}
