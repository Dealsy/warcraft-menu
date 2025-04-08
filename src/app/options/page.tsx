"use client"

import { MenuLayout } from "@/components/menu-layout"
import { motion } from "framer-motion"
import { useState } from "react"

export default function OptionsPage() {
  const [videoSettings, setVideoSettings] = useState(75)
  const [audioSettings, setAudioSettings] = useState(50)

  return (
    <MenuLayout>
      <div className="flex items-center justify-center h-full">
        <motion.div
          className="bg-black/70 p-8 rounded-lg border-2 border-gray-700 max-w-2xl"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h1 className="text-3xl font-warcraft text-yellow-300 mb-4">Options</h1>
          <div className="grid grid-cols-1 gap-4">
            <div className="metal-panel p-4 rounded-lg border-2 border-gray-800">
              <h2 className="text-xl font-warcraft text-blue-300 mb-2">Video Settings</h2>
              <div className="flex items-center gap-4">
                <span className="text-gray-300 w-20">Quality:</span>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={videoSettings}
                  onChange={(e) => setVideoSettings(Number.parseInt(e.target.value))}
                  className="flex-1"
                />
                <span className="text-gray-300 w-10">{videoSettings}%</span>
              </div>
            </div>
            <div className="metal-panel p-4 rounded-lg border-2 border-gray-800">
              <h2 className="text-xl font-warcraft text-blue-300 mb-2">Audio Settings</h2>
              <div className="flex items-center gap-4">
                <span className="text-gray-300 w-20">Volume:</span>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={audioSettings}
                  onChange={(e) => setAudioSettings(Number.parseInt(e.target.value))}
                  className="flex-1"
                />
                <span className="text-gray-300 w-10">{audioSettings}%</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </MenuLayout>
  )
}
