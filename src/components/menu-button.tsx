"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";

type MenuButtonProps = {
  label: string;
  hasIcon?: boolean;
  icon?: React.ReactNode;
  href?: string;
  onClick?: () => void;
};

export default function MenuButton({
  label,
  hasIcon = false,
  icon,
  href,
  onClick,
}: MenuButtonProps) {
  console.log(hasIcon && icon, "hasIcon && icon");
  console.log(icon, "icon");
  console.log(hasIcon, "hasIcon");
  const ButtonContent = (
    <div className="w-full mb-4">
      <div className="relative">
        <motion.div
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <button type="button" onClick={onClick} className="w-full">
            <div
              className={cn(
                "bg-blue-700 text-center text-yellow-300 font-warcraft",
                "py-3 px-5 rounded-2xl border-2 border-gray-700",
                "transition-all duration-300 hover:scale-105",
                "flex items-center justify-center text-lg",
                "shadow-[inset_0_5px_5px_rgba(255,255,255,0.5),inset_0_-8px_20px_rgba(0,0,0)]"
              )}
            >
              <span className="pixel-text">
                {label === "Local Area Network" ? (
                  <>
                    Local <span className="text-white">A</span>rea Network
                  </>
                ) : (
                  <>
                    <span className="text-white">{label[0]}</span>
                    {label.slice(1)}
                  </>
                )}
              </span>
              {hasIcon && icon && (
                <div className="w-7 h-7 ml-2 text-yellow-300">{icon}</div>
              )}
            </div>
          </button>
        </motion.div>
      </div>
    </div>
  );

  if (href) {
    return <Link href={href}>{ButtonContent}</Link>;
  }

  return ButtonContent;
}
