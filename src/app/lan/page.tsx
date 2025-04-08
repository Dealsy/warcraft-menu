"use client"

import { MenuLayout } from "@/components/menu-layout"
import { motion } from "framer-motion"

export default function LANPage() {
  return (
    <MenuLayout>
      <div className="flex items-center justify-center h-full">
        <motion.div
          className="bg-black/70 p-8 rounded-lg border-2 border-gray-700 max-w-2xl"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h1 className="text-3xl font-warcraft text-yellow-300 mb-4">Local Area Network</h1>
          <div className="metal-panel p-4 rounded-lg border-2 border-gray-800">
            <p className="text-gray-300 mb-4">Searching for local games...</p>
            <div className="h-4 bg-gray-700 rounded overflow-hidden">
              <motion.div
                className="h-full bg-blue-600"
                initial={{ width: "0%" }}
                animate={{ width: "60%" }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </MenuLayout>
  )
}
