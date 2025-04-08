"use client"

import { MenuLayout } from "@/components/menu-layout"
import { motion } from "framer-motion"

export default function CreditsPage() {
  return (
    <MenuLayout>
      <div className="flex items-center justify-center h-full">
        <motion.div
          className="bg-black/70 p-8 rounded-lg border-2 border-gray-700 max-w-2xl"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h1 className="text-3xl font-warcraft text-yellow-300 mb-4">Credits</h1>
          <div className="metal-panel p-4 rounded-lg border-2 border-gray-800 h-80 overflow-auto">
            <motion.div
              initial={{ y: 300 }}
              animate={{ y: -500 }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
            >
              <h2 className="text-xl font-warcraft text-blue-300 mb-4 text-center">Warcraft III: The Frozen Throne</h2>
              <h3 className="text-lg font-warcraft text-yellow-300 mb-2 text-center">Development Team</h3>
              <p className="text-gray-300 text-center mb-6">Game Director: John Doe</p>
              <p className="text-gray-300 text-center mb-6">Lead Designer: Jane Smith</p>
              <p className="text-gray-300 text-center mb-6">Art Director: Bob Johnson</p>
              <p className="text-gray-300 text-center mb-6">Lead Programmer: Alice Williams</p>
              <p className="text-gray-300 text-center mb-6">Sound Designer: Tom Brown</p>
              <h3 className="text-lg font-warcraft text-yellow-300 mb-2 text-center mt-8">Special Thanks</h3>
              <p className="text-gray-300 text-center mb-6">To all the fans who have supported us through the years</p>
              <p className="text-gray-300 text-center mb-6">And to you for recreating this interface!</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </MenuLayout>
  )
}
