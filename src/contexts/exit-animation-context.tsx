"use client";

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import { useRouter, usePathname } from "next/navigation";

type ExitAnimationContextType = {
  exit: boolean;
  entering: boolean;
  handleExit: (href: string) => Promise<void>;
};

const ExitAnimationContext = createContext<
  ExitAnimationContextType | undefined
>(undefined);

export function ExitAnimationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [exit, setExit] = useState(false);
  const [entering, setEntering] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  // Handle initial page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setEntering(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []); // Empty dependency array for initial load only

  // Handle route changes
  useEffect(() => {
    setEntering(true);
    setExit(false);

    const timer = setTimeout(() => {
      setEntering(false);
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  const handleExit = useCallback(
    async (href: string) => {
      setExit(true);
      await new Promise((resolve) => setTimeout(resolve, 500));
      router.push(href);
    },
    [router]
  );

  return (
    <ExitAnimationContext.Provider
      value={{
        exit,
        entering,
        handleExit,
      }}
    >
      {children}
    </ExitAnimationContext.Provider>
  );
}

export function useExitAnimation() {
  const context = useContext(ExitAnimationContext);
  if (context === undefined) {
    throw new Error(
      "useExitAnimation must be used within an ExitAnimationProvider"
    );
  }
  return context;
}
