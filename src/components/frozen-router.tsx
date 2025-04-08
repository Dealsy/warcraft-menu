import { useRef, createContext } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

type RouterContextType = {
  push: (href: string) => void;
  pathname: string;
  searchParams: URLSearchParams;
};

const RouterContext = createContext<RouterContextType | null>(null);

type FrozenRouterProps = {
  children: React.ReactNode;
};

export function FrozenRouter({ children }: FrozenRouterProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const frozen = useRef({
    push: router.push,
    pathname,
    searchParams,
  }).current;

  return (
    <RouterContext.Provider value={frozen}>{children}</RouterContext.Provider>
  );
}
