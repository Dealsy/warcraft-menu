"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { FrozenRouter } from "./frozen-router";
import MenuButtons from "./menu-buttons";
import { cn } from "@/lib/utils";
import VerticalChain from "./chain";
import Rivet from "./rivet";

interface MenuLayoutProps {
  children?: React.ReactNode;
}

export function MenuLayout({ children }: MenuLayoutProps) {
  const pathname = usePathname();
  const [isMenuVisible, setIsMenuVisible] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const isHomePage = pathname === "/";
  const [chainsMounted, setChainsMounted] = useState(false);
  const [exit, setExit] = useState(false);

  // Reset exit state when route changes
  useEffect(() => {
    setExit(false);
  }, [pathname]);

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
        {isMenuVisible && !exit && (
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
              duration: 0.5,
              ease: "easeInOut",
            }}
          >
            {/* Chains */}
            {chainsMounted && (
              <>
                {/* Left chain */}
                <motion.div
                  style={{
                    position: "absolute",
                    top: "calc(-50vh + 450px)",
                    left: "120px",
                    zIndex: 20,
                    pointerEvents: "none",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    height: "calc(50vh - 450px)",
                    viewTransitionName: "left-chain",
                  }}
                  initial={{ y: 0 }}
                  animate={{ y: 0 }}
                  exit={{ y: "-100vh" }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
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
                    top: "calc(-50vh + 450px)",
                    right: "100px",
                    zIndex: 20,
                    pointerEvents: "none",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    height: "calc(50vh - 450px)",
                    viewTransitionName: "right-chain",
                  }}
                  initial={{ y: 0 }}
                  animate={{ y: 0 }}
                  exit={{ y: "-100vh" }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
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

            {/* Main Menu Panel */}
            <div
              className={cn(
                "relative p-[var(--menu-padding)] rounded-[var(--menu-radius)] border-4 border-gray-700 bg-gray-800",
                "bg-[#2b2d2c] shadow-[inset_0_0_10px_rgba(0,0,0,0.8),0_0_15px_rgba(0,0,0,0.7)]",
                "[--menu-padding:1.5rem] [--menu-radius:1rem]"
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

                <MenuButtons setExit={setExit} />
              </div>
            </div>
          </motion.div>
        )}
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
