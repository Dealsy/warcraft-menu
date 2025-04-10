"use client";

import Container from "@/components/container";
import MenuContainer from "@/components/menu-container";
import { MenuLayout } from "@/components/menu-layout";
import { motion } from "motion/react";

export default function CreditsPage() {
  return (
    <Container additionalContent={<MenuLayout />}>
      <MenuContainer width={600} boxHeight="550">
        <div className="flex items-center justify-center h-full">
          <div className="bg-black/70 p-8 rounded-lg border-2 border-gray-700 max-w-2xl">
            <h1 className="text-3xl font-warcraft text-yellow-300 mb-4">
              Credits
            </h1>
            <div className="metal-panel p-4 rounded-lg border-2 border-gray-800 h-80 overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              <motion.div
                initial={{ y: 300 }}
                animate={{ y: -500 }}
                transition={{
                  duration: 20,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                }}
              >
                <h2 className="text-xl font-warcraft text-blue-300 mb-4 text-center">
                  Warcraft III: The Frozen Throne
                </h2>
                <h3 className="text-lg font-warcraft text-yellow-300 mb-2 text-center">
                  Development Team
                </h3>
                <p className="text-gray-300 text-center mb-6">
                  Game Director: John Doe
                </p>
                <p className="text-gray-300 text-center mb-6">
                  Lead Designer: Jane Smith
                </p>
                <p className="text-gray-300 text-center mb-6">
                  Art Director: Bob Johnson
                </p>
                <p className="text-gray-300 text-center mb-6">
                  Lead Programmer: Alice Williams
                </p>
                <p className="text-gray-300 text-center mb-6">
                  Sound Designer: Tom Brown
                </p>
                <h3 className="text-lg font-warcraft text-yellow-300 mb-2 text-center mt-8">
                  Special Thanks
                </h3>
                <p className="text-gray-300 text-center mb-6">
                  To all the fans who have supported us through the years
                </p>
                <p className="text-gray-300 text-center mb-6">
                  And to you for recreating this interface!
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </MenuContainer>
    </Container>
  );
}
