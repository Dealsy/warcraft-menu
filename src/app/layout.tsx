import type React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { MenuLayout } from "@/components/menu-layout";
import { ExitAnimationProvider } from "@/contexts/exit-animation-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Warcraft III Menu",
  description: "A recreation of the Warcraft III menu system",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ExitAnimationProvider>
          {/* Background Image */}
          <div className="fixed inset-0 z-0">
            <Image
              src="/images/warcraft_background.webp"
              alt="Frozen Throne Background"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Menu Layout */}
          <div className="relative z-10">
            <MenuLayout>{children}</MenuLayout>
          </div>

          {/* Quit Button */}
          <div className="fixed bottom-8 left-8 z-50">
            <div
              className={cn(
                "relative p-3 border-4 rounded-3xl border-red-500 bg-gray-800 w-48",
                "bg-gradient-to-br from-[#333333] via-[#555555] to-[#333333] shadow-[inset_0_0_10px_rgba(0,0,0,0.8),0_0_15px_rgba(0,0,0,0.7)]"
              )}
            >
              <button type="button" className="w-full">
                <div
                  className={cn(
                    "bg-blue-700 text-center text-yellow-300 font-warcraft",
                    "py-3 px-5 rounded-2xl border-2 border-gray-700",
                    "transition-all duration-300 hover:scale-105",
                    "flex items-center justify-center text-lg",
                    "shadow-[inset_0_5px_5px_rgba(255,255,255,0.5),inset_0_-8px_20px_rgba(0,0,0)]"
                  )}
                >
                  <span className="pixel-text">EXIT</span>
                </div>
              </button>
            </div>
          </div>
        </ExitAnimationProvider>
      </body>
    </html>
  );
}
