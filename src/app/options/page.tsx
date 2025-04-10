"use client";

import Container from "@/components/container";
import MenuContainer from "@/components/menu-container";
import { MenuLayout } from "@/components/menu-layout";

import { useState } from "react";

export default function OptionsPage() {
  const [videoSettings, setVideoSettings] = useState(75);
  const [audioSettings, setAudioSettings] = useState(50);

  return (
    <Container additionalContent={<MenuLayout />}>
      <MenuContainer width={680} height={900} boxHeight="800">
        <h1 className="text-2xl text-yellow-300 font-warcraft mb-8">Options</h1>
        <div className="grid grid-cols-1 gap-8">
          <div className="metal-panel p-6 rounded-lg border-2 border-gray-800">
            <h2 className="text-xl font-warcraft text-blue-300 mb-6">
              Video Settings
            </h2>
            <div className="flex items-center gap-4">
              <span className="text-gray-300 w-24">Quality:</span>
              <input
                type="range"
                min="0"
                max="100"
                value={videoSettings}
                onChange={(e) =>
                  setVideoSettings(Number.parseInt(e.target.value))
                }
                className="flex-1"
              />
              <span className="text-gray-300 w-16">{videoSettings}%</span>
            </div>
          </div>
          <div className="metal-panel p-6 rounded-lg border-2 border-gray-800">
            <h2 className="text-xl font-warcraft text-blue-300 mb-6">
              Audio Settings
            </h2>
            <div className="flex items-center gap-4">
              <span className="text-gray-300 w-24">Volume:</span>
              <input
                type="range"
                min="0"
                max="100"
                value={audioSettings}
                onChange={(e) =>
                  setAudioSettings(Number.parseInt(e.target.value))
                }
                className="flex-1"
              />
              <span className="text-gray-300 w-16">{audioSettings}%</span>
            </div>
          </div>
        </div>
      </MenuContainer>
    </Container>
  );
}
