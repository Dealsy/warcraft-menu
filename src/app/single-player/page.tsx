"use client";

import { MenuLayout } from "@/components/menu-layout";
import { motion } from "framer-motion";

export default function SinglePlayerPage() {
  return (
    <MenuLayout>
      <div className="flex items-center justify-center h-full">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="bg-black/70 p-8 rounded-lg border-2 border-gray-700 max-w-3xl">
            <h1 className="text-4xl font-warcraft text-yellow-300 mb-6">
              Single Player
            </h1>{" "}
            {/* Increased text size and margin */}
            <div className="grid grid-cols-2 gap-6">
              {" "}
              {/* Increased gap */}
              <div className="metal-panel p-5 rounded-lg border-2 border-gray-800">
                {" "}
                {/* Increased padding */}
                <h2 className="text-2xl font-warcraft text-blue-300 mb-3">
                  Campaign
                </h2>{" "}
                {/* Increased text size */}
                <p className="text-gray-300 text-lg">
                  Continue your journey through the frozen wastes of Northrend.
                </p>{" "}
                {/* Increased text size */}
              </div>
              <div className="metal-panel p-5 rounded-lg border-2 border-gray-800">
                <h2 className="text-2xl font-warcraft text-blue-300 mb-3">
                  Custom Game
                </h2>
                <p className="text-gray-300 text-lg">
                  Create your own battlefield and challenge the computer.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </MenuLayout>
  );
}
