"use client"

import { MenuLayout } from "@/components/menu-layout"
import { motion } from "framer-motion"

export default function BattleNetPage() {
  return (
    <MenuLayout>
      <div className="flex items-center justify-center h-full">
        <motion.div
          className="bg-black/70 p-8 rounded-lg border-2 border-gray-700 max-w-3xl" // Increased max-width
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h1 className="text-4xl font-warcraft text-yellow-300 mb-6">Battle.net</h1>{" "}
          {/* Increased text size and margin */}
          <div className="metal-panel p-5 rounded-lg border-2 border-gray-800">
            {" "}
            {/* Increased padding */}
            <div className="mb-5">
              {" "}
              {/* Increased margin */}
              <label className="block text-blue-300 text-xl mb-2">Username</label>{" "}
              {/* Increased text size and margin */}
              <input
                type="text"
                className="w-full bg-gray-900 border-2 border-gray-700 p-3 text-white rounded text-lg" // Increased padding and text size
                placeholder="Enter username"
              />
            </div>
            <div className="mb-5">
              <label className="block text-blue-300 text-xl mb-2">Password</label>
              <input
                type="password"
                className="w-full bg-gray-900 border-2 border-gray-700 p-3 text-white rounded text-lg"
                placeholder="Enter password"
              />
            </div>
            <button className="bg-blue-800 hover:bg-blue-700 text-yellow-300 font-warcraft py-3 px-5 rounded-md border-2 border-gray-700 w-full text-xl">
              {" "}
              {/* Increased padding and text size */}
              Connect
            </button>
          </div>
        </motion.div>
      </div>
    </MenuLayout>
  )
}
