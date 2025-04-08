"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { usePathname, useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

interface MenuLayoutProps {
  children: React.ReactNode
}

export function MenuLayout({ children }: MenuLayoutProps) {
  const router = useRouter()
  const pathname = usePathname()
  const [isMenuVisible, setIsMenuVisible] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const isHomePage = pathname === "/"
  const [chainsMounted, setChainsMounted] = useState(false)

  // Handle navigation with animation
  const handleNavigation = (path: string) => {
    if (path === pathname) return

    setIsTransitioning(true)
    setIsMenuVisible(false)
    setChainsMounted(false) // Hide chains during transition

    // Wait for menu to animate out before navigating
    setTimeout(() => {
      router.push(path)
    }, 800)
  }

  // When route changes, animate menu back in
  useEffect(() => {
    if (!isHomePage) {
      setIsMenuVisible(true)
      // Delay showing chains until menu is in position
      setTimeout(() => {
        setChainsMounted(true)
        setIsTransitioning(false)
      }, 800)
    } else {
      // For home page, show chains after a short delay
      setTimeout(() => {
        setChainsMounted(true)
      }, 100)
    }
  }, [pathname, isHomePage])

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
      <AnimatePresence>
        {isMenuVisible && (
          <motion.div
            className="absolute right-16 top-1/2 -translate-y-1/2 z-10 w-96"
            initial={{ y: "-100vh" }}
            animate={{ y: "-50%" }}
            exit={{ y: "-100vh" }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              mass: 1,
            }}
          >
            {/* Chains - now part of the menu animation */}
            {chainsMounted && (
              <>
                {/* Left chain */}
                <motion.div
                  className="absolute -top-[50vh] left-[80px] z-20 pointer-events-none flex flex-col items-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Top anchor */}
                  <div className="w-12 h-6 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 rounded-b-sm border-2 border-t-0 border-gray-800">
                    <div className="w-6 h-2 bg-gray-500 rounded-full mx-auto mt-1"></div>
                  </div>

                  {/* Chain links - with fixed height to ensure they end at the top of the card */}
                  <div className="flex flex-col items-center justify-between h-[calc(50vh-30px)]">
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-10 h-16 bg-gradient-to-br from-gray-700 via-gray-600 to-gray-800 rounded-full border-2 border-gray-900 shadow-inner"
                        style={{
                          boxShadow: "inset 2px 2px 4px rgba(255,255,255,0.2), inset -2px -2px 4px rgba(0,0,0,0.6)",
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

                  {/* Bottom connector - positioned at the bottom of the chain */}
                  <div className="w-10 h-4 bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600 rounded-t-sm border-2 border-gray-800">
                    <div className="w-4 h-1 bg-gray-400 rounded-full mx-auto mt-0.5"></div>
                  </div>
                </motion.div>

                {/* Right chain */}
                <motion.div
                  className="absolute -top-[50vh] right-[80px] z-20 pointer-events-none flex flex-col items-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Top anchor */}
                  <div className="w-12 h-6 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 rounded-b-sm border-2 border-t-0 border-gray-800">
                    <div className="w-6 h-2 bg-gray-500 rounded-full mx-auto mt-1"></div>
                  </div>

                  {/* Chain links */}
                  <div className="flex flex-col items-center justify-between h-[calc(50vh-30px)]">
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-10 h-16 bg-gradient-to-br from-gray-700 via-gray-600 to-gray-800 rounded-full border-2 border-gray-900 shadow-inner"
                        style={{
                          boxShadow: "inset 2px 2px 4px rgba(255,255,255,0.2), inset -2px -2px 4px rgba(0,0,0,0.6)",
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

            {/* Main Menu Panel */}
            <div className="relative">
              {/* Menu Panel */}
              <div className="metal-panel p-6 pt-10 pb-10 rounded-lg border-4 border-gray-800 relative">
                {/* Metal bar at the top of the panel for chain attachment */}
                <div className="absolute -top-2 left-0 right-0 h-4 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 border-t border-gray-500 border-b border-gray-900"></div>

                {/* Chain attachment points */}
                <div className="absolute -top-2 left-[80px] w-10 h-2 bg-gray-600"></div>
                <div className="absolute -top-2 right-[80px] w-10 h-2 bg-gray-600"></div>

                {isHomePage ? (
                  <>
                    {/* Menu Buttons */}
                    <div className="space-y-4">
                      <MenuButton label="Single Player" onClick={() => handleNavigation("/single-player")} />
                      <MenuButton label="Battle.net" hasIcon onClick={() => handleNavigation("/battle-net")} />
                      <MenuButton label="Local Area Network" onClick={() => handleNavigation("/lan")} />
                      <MenuButton label="Options" onClick={() => handleNavigation("/options")} />
                      <MenuButton label="Credits" onClick={() => handleNavigation("/credits")} />
                    </div>
                  </>
                ) : (
                  <div className="space-y-4">
                    <MenuButton label="Back to Main Menu" onClick={() => handleNavigation("/")} />
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-5 h-full"
        >
          {!isTransitioning && children}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

function MenuButton({
  label,
  hasIcon = false,
  onClick,
}: {
  label: string
  hasIcon?: boolean
  onClick?: () => void
}) {
  return (
    <motion.button
      className="w-full relative group"
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      <div className="absolute inset-0 bg-blue-900 rounded-md border-2 border-gray-700 transform translate-x-1 translate-y-1"></div>
      <div className="relative bg-blue-800 hover:bg-blue-700 text-yellow-300 font-warcraft py-3 px-5 rounded-md border-2 border-gray-700 transition-all duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5 flex items-center justify-between text-lg">
        <span className="pixel-text">{label}</span>
        {hasIcon && (
          <div className="w-7 h-7 rounded-full bg-blue-500 border border-blue-300 flex items-center justify-center">
            <div className="w-5 h-5 bg-blue-300 rounded-full"></div>
          </div>
        )}
      </div>
    </motion.button>
  )
}
