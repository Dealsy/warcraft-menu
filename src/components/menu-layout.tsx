"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FrozenRouter } from "./frozen-router";
import MenuButtons from "./menu-buttons";
import { cn } from "@/lib/utils";
import VerticalChain from "./chain";

interface MenuLayoutProps {
  children?: React.ReactNode;
}

export function MenuLayout({ children }: MenuLayoutProps) {
  const pathname = usePathname();
  const [isMenuVisible, setIsMenuVisible] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const isHomePage = pathname === "/";
  const [chainsMounted, setChainsMounted] = useState(false);

  // When route changes, animate menu back in
  useEffect(() => {
    if (!isHomePage) {
      setChainsMounted(true);
      const timer = setTimeout(() => {
        setIsMenuVisible(true);
        setIsTransitioning(false);
      }, 300);
      return () => clearTimeout(timer);
    } else {
      setChainsMounted(true);
      const timer = setTimeout(() => {
        setIsMenuVisible(true);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [pathname, isHomePage]);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Menu Panel with Chains */}
      <AnimatePresence mode="wait">
        <FrozenRouter>
          {/* Chains */}
          {chainsMounted && (
            <>
              {/* Left chain */}
              <motion.div
                key="left-chain"
                style={{
                  position: "absolute",
                  top: "0",
                  left: "calc(100% - 28rem + var(--chain-offset, 20px))",
                  zIndex: 20,
                  pointerEvents: "none",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  height: "calc(50vh - 450px)",
                  viewTransitionName: "left-chain",
                }}
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-100%" }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  mass: 1,
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
                key="right-chain"
                style={{
                  position: "absolute",
                  top: "0",
                  right: "calc(4rem + var(--chain-offset, 120px))",
                  zIndex: 20,
                  pointerEvents: "none",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  height: "calc(50vh - 450px)",
                  viewTransitionName: "right-chain",
                }}
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-100%" }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  mass: 1,
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
          )}

          {/* Menu Panel */}
          {isMenuVisible && (
            <motion.div
              key="menu-panel"
              style={{
                position: "absolute",
                right: "4rem",
                top: "calc(50vh - 450px)",
                transform: "translateY(0)",
                zIndex: 12,
                width: "30rem",
                viewTransitionName: "menu-panel",
              }}
              initial={{ y: "-100vh" }}
              animate={{ y: 0 }}
              exit={{ y: "-100vh" }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 15,
                mass: 1,
              }}
            >
              {/* Main Menu Panel */}
              <div
                className={cn(
                  "relative p-[var(--menu-padding)] rounded-[var(--menu-radius)] border-4 border-red-500 bg-gray-800",
                  "bg-[#2b2d2c] shadow-[inset_0_0_10px_rgba(0,0,0,0.8),0_0_15px_rgba(0,0,0,0.7)]",
                  "[--menu-padding:1rem] [--menu-radius:2rem]"
                )}
              >
                {/* Menu Panel */}
                <div
                  className="rounded-[calc(var(--menu-radius)-var(--menu-padding))] min-h-200 relative z-10 bg-[#221510] backdrop-blur-sm p-8 border-2 border-gray-700 w-full max-w-xl flex flex-col gap-10 shadow-[inset_0_0_10px_10px_rgba(0,0,0,0.9)]"
                  style={{
                    backgroundImage: `
                      repeating-linear-gradient(
                        180deg,
                        transparent,
                        transparent 98px,
                        rgba(0, 0, 0, 0.4) 98px,
                        rgba(0, 0, 0, 0.4) 100px
                      )
                    `,
                  }}
                >
                  {/* Logo */}
                  <div className="z-10 w-64 mx-auto">
                    <Image
                      src="/images/warcraft_logo.webp"
                      alt="Warcraft III Logo"
                      width={256}
                      height={128}
                      className="object-contain"
                    />
                  </div>

                  <MenuButtons />
                </div>
              </div>
            </motion.div>
          )}
        </FrozenRouter>
      </AnimatePresence>

      {/* Page Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          style={{
            position: "relative",
            zIndex: 5,
            height: "100%",
            viewTransitionName: "page-content",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {!isTransitioning && children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
