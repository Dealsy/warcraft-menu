"use client";

import type React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import VerticalChain from "./chain";
import Rivet from "./rivet";

type MenuContainerProps = {
  children: React.ReactNode;
  width?: number;
  height?: number;
  className?: string;
};

export default function MenuContainer({
  children,
  width = 480,
  height = 900,
  className,
}: MenuContainerProps) {
  const halfHeight = height / 2;

  return (
    <motion.div
      key="sub-menu-panel"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        viewTransitionName: "sub-menu-panel",
      }}
      initial={{ y: "-100vh" }}
      animate={{ y: 0 }}
      exit={{ y: "-100vh" }}
      transition={{
        type: "spring",
        stiffness: 110,
        damping: 12,
        mass: 0.5,
      }}
    >
      {/* Chains */}
      <>
        {/* Left chain */}
        <motion.div
          style={{
            position: "absolute",
            top: `calc(-50vh + ${halfHeight}px)`,
            left: "120px",
            zIndex: 20,
            pointerEvents: "none",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: `calc(50vh - ${halfHeight}px)`,
            viewTransitionName: "left-chain",
          }}
          initial={{ y: 0 }}
          animate={{ y: 0 }}
          exit={{ y: 0 }}
          transition={{
            type: "spring",
            stiffness: 110,
            damping: 12,
            mass: 0.5,
          }}
        >
          <div className="flex-1 flex flex-col items-center">
            <VerticalChain />
          </div>

          {/* Bottom connector */}
          <div className="w-10 h-4 p-2 bg-zinc-800 rounded-t-sm border-2 border-gray-800 relative z-20">
            <div className="w-4 h-1 bg-gray-400 rounded-full mx-auto"></div>
          </div>
        </motion.div>

        {/* Right chain */}
        <motion.div
          style={{
            position: "absolute",
            top: `calc(-50vh + ${halfHeight}px)`,
            right: "100px",
            zIndex: 20,
            pointerEvents: "none",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: `calc(50vh - ${halfHeight}px)`,
            viewTransitionName: "right-chain",
          }}
          initial={{ y: 0 }}
          animate={{ y: 0 }}
          exit={{ y: 0 }}
          transition={{
            type: "spring",
            stiffness: 110,
            damping: 12,
            mass: 0.5,
          }}
        >
          <div className="flex-1 flex flex-col items-center">
            <VerticalChain />
          </div>

          {/* Bottom connector */}
          <div className="w-10 h-4 p-2 bg-zinc-800 rounded-t-sm border-2 border-gray-800 relative z-20">
            <div className="w-4 h-1 bg-gray-400 rounded-full mx-auto"></div>
          </div>
        </motion.div>
      </>

      {/* Main Menu Panel */}
      <div
        className={cn(
          "relative p-[var(--menu-padding)] rounded-[var(--menu-radius)] border-4 border-gray-700 bg-gray-800",
          "bg-[#2b2d2c] shadow-[inset_0_0_10px_rgba(0,0,0,0.8),0_0_15px_rgba(0,0,0,0.7)]",
          "[--menu-padding:1.5rem] [--menu-radius:1rem]",
          className
        )}
      >
        {/* Corner Rivets */}
        <Rivet className="absolute top-3 left-2" />
        <Rivet className="absolute top-3 right-2" />
        <Rivet className="absolute bottom-4 left-2" />
        <Rivet className="absolute bottom-4 right-2" />

        {/* Top Edge Rivets */}
        <Rivet className="absolute top-2 left-[20%]" />
        <Rivet className="absolute top-2 left-[40%]" />
        <Rivet className="absolute top-2 left-[60%]" />
        <Rivet className="absolute top-2 left-[80%]" />

        {/* Bottom Edge Rivets */}
        <Rivet className="absolute bottom-2 left-[20%]" />
        <Rivet className="absolute bottom-2 left-[40%]" />
        <Rivet className="absolute bottom-2 left-[60%]" />
        <Rivet className="absolute bottom-2 left-[80%]" />

        {/* Left Edge Rivets */}
        <Rivet className="absolute left-2 top-[20%]" />
        <Rivet className="absolute left-2 top-[40%]" />
        <Rivet className="absolute left-2 top-[60%]" />
        <Rivet className="absolute left-2 top-[80%]" />

        {/* Right Edge Rivets */}
        <Rivet className="absolute right-2 top-[20%]" />
        <Rivet className="absolute right-2 top-[40%]" />
        <Rivet className="absolute right-2 top-[60%]" />
        <Rivet className="absolute right-2 top-[80%]" />

        {/* Menu Content */}
        <div
          className="rounded-[calc(var(--menu-radius)-var(--menu-padding))] min-h-200 relative z-10 bg-[#221510] backdrop-blur-sm p-8 border-2 border-gray-700 w-full flex flex-col gap-10 shadow-[inset_0_0_10px_10px_rgba(0,0,0,0.9)]"
          style={{
            backgroundImage: `repeating-linear-gradient(
                180deg,
                transparent,
                transparent 98px,
                rgba(0, 0, 0, 0.4) 98px,
                rgba(0, 0, 0, 0.4) 100px
              )
            `,
          }}
        >
          {children}
        </div>
      </div>
    </motion.div>
  );
}
