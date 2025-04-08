"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { MenuButton } from "./menu-button";

interface MenuLayoutProps {
  children: React.ReactNode;
}

export function MenuLayout({ children }: MenuLayoutProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuVisible, setIsMenuVisible] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const isHomePage = pathname === "/";
  const [chainsMounted, setChainsMounted] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Handle navigation with animation
  const handleNavigation = (path: string) => {
    if (path === pathname) return;

    setIsTransitioning(true);
    setIsMenuVisible(false);
    setChainsMounted(false);

    // Wait for menu to animate out before navigating
    setTimeout(() => {
      router.push(path);
    }, 800);
  };

  // When route changes, animate menu back in
  useEffect(() => {
    if (!isHomePage) {
      // First show chains
      setChainsMounted(true);
      // Then show menu after a short delay
      setTimeout(() => {
        setIsMenuVisible(true);
        setIsTransitioning(false);
      }, 300);
    } else {
      // For home page, show chains immediately
      setChainsMounted(true);
      // Then show menu after a short delay
      setTimeout(() => {
        setIsMenuVisible(true);
      }, 300);
    }
  }, [pathname, isHomePage]);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/frozen-throne-bg.jpg"
          alt="Frozen Throne Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Logo */}
      <div className="absolute top-10 left-10 z-10 w-64 h-32">
        <Image
          src="/images/warcraft-logo.png"
          alt="Warcraft III Logo"
          width={256}
          height={128}
          className="object-contain"
        />
      </div>

      {/* Menu Panel with Chains */}
      <AnimatePresence mode="wait">
        {/* Chains */}
        {chainsMounted && (
          <>
            {/* Left chain */}
            <motion.div
              key="left-chain"
              style={{
                position: "absolute",
                top: "0",
                left: "calc(100% - 28rem + var(--chain-offset, 80px))",
                zIndex: 20,
                pointerEvents: "none",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                height: "calc(50vh - 200px)",
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
              {/* Top anchor */}
              <div className="w-12 h-6 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 rounded-b-sm border-2 border-t-0 border-gray-800">
                <div className="w-6 h-2 bg-gray-500 rounded-full mx-auto mt-1"></div>
              </div>

              {/* Chain links */}
              <div className="flex-1 flex flex-col items-center gap-6 pt-5">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={`left-chain-link-${i}`}
                    style={{
                      width: "2.5rem",
                      height: "2.5rem",
                      background:
                        "linear-gradient(to bottom right, #4B5563, #4B5563, #1F2937)",
                      borderRadius: "9999px",
                      border: "2px solid #111827",
                      boxShadow:
                        "inset 2px 2px 4px rgba(255,255,255,0.2), inset -2px -2px 4px rgba(0,0,0,0.6)",
                    }}
                    animate={{
                      rotateZ: [0, -1, 0, 1, 0],
                    }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 4,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </div>

              {/* Bottom connector */}
              <div className="w-10 h-4 bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600 rounded-t-sm border-2 border-gray-800">
                <div className="w-4 h-1 bg-gray-400 rounded-full mx-auto mt-0.5"></div>
              </div>
            </motion.div>

            {/* Right chain */}
            <motion.div
              key="right-chain"
              style={{
                position: "absolute",
                top: "0",
                right: "calc(4rem + var(--chain-offset, 80px))",
                zIndex: 20,
                pointerEvents: "none",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                height: "calc(50vh - 200px)",
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
              {/* Top anchor */}
              <div className="w-12 h-6 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 rounded-b-sm border-2 border-t-0 border-gray-800">
                <div className="w-6 h-2 bg-gray-500 rounded-full mx-auto mt-1"></div>
              </div>

              {/* Chain links */}
              <div className="flex-1 flex flex-col items-center gap-6 pt-5">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={`right-chain-link-${i}`}
                    style={{
                      width: "2.5rem",
                      height: "2.5rem",
                      background:
                        "linear-gradient(to bottom right, #4B5563, #4B5563, #1F2937)",
                      borderRadius: "9999px",
                      border: "2px solid #111827",
                      boxShadow:
                        "inset 2px 2px 4px rgba(255,255,255,0.2), inset -2px -2px 4px rgba(0,0,0,0.6)",
                    }}
                    animate={{
                      rotateZ: [0, 1, 0, -1, 0],
                    }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 4,
                      delay: i * 0.2 + 0.5,
                    }}
                  />
                ))}
              </div>

              {/* Bottom connector */}
              <div className="w-10 h-4 bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600 rounded-t-sm border-2 border-gray-800">
                <div className="w-4 h-1 bg-gray-400 rounded-full mx-auto mt-0.5"></div>
              </div>
            </motion.div>
          </>
        )}

        {/* Menu Panel */}
        {isMenuVisible && (
          <motion.div
            ref={menuRef}
            key="menu-panel"
            style={{
              position: "absolute",
              right: "4rem",
              top: "calc(50vh - 200px)",
              transform: "translateY(0)",
              zIndex: 10,
              width: "24rem",
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
            <div className="relative">
              {/* Menu Panel */}
              <div
                className="metal-panel p-6 pt-10 pb-10 rounded-lg border-4 border-gray-800 relative"
                ref={menuRef}
              >
                {/* Metal bar at the top of the panel for chain attachment */}
                <div className="absolute -top-2 left-0 right-0 h-4 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 border-t border-gray-500 border-b border-gray-900"></div>

                {/* Chain attachment points */}
                <div className="absolute -top-2 left-[80px] w-10 h-2 bg-gray-600"></div>
                <div className="absolute -top-2 right-[80px] w-10 h-2 bg-gray-600"></div>

                {isHomePage ? (
                  <>
                    {/* Menu Buttons */}
                    <div className="space-y-4">
                      <MenuButton
                        label="Single Player"
                        onClick={() => handleNavigation("/single-player")}
                      />
                      <MenuButton
                        label="Battle.net"
                        hasIcon
                        onClick={() => handleNavigation("/battle-net")}
                      />
                      <MenuButton
                        label="Local Area Network"
                        onClick={() => handleNavigation("/lan")}
                      />
                      <MenuButton
                        label="Options"
                        onClick={() => handleNavigation("/options")}
                      />
                      <MenuButton
                        label="Credits"
                        onClick={() => handleNavigation("/credits")}
                      />
                    </div>
                  </>
                ) : (
                  <div className="space-y-4">
                    <MenuButton
                      label="Back to Main Menu"
                      onClick={() => handleNavigation("/")}
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Quit Button in separate panel */}
            {isHomePage && (
              <div className="metal-panel p-6 rounded-lg border-4 border-gray-800 mt-4">
                <MenuButton label="Quit" onClick={() => window.close()} />
              </div>
            )}
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
