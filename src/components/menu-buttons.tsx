import { usePathname } from "next/navigation";
import MenuButton from "./menu-button";

type RouteConfig = {
  label: string;
  href: string;
  hasIcon?: boolean;
  icon?: React.ReactNode;
};

const MENU_ROUTES: Record<string, RouteConfig[]> = {
  "/": [
    { label: "Single Player", href: "/single-player" },
    {
      label: "Multiplayer",
      href: "/multiplayer",
    },
    { label: "Local Area Network", href: "/lan" },
    { label: "Options", href: "/options" },
    { label: "Credits", href: "/credits" },
  ],
  "/single-player": [
    { label: "Campaign", href: "/single-player/campaign" },
    { label: "Custom Game", href: "/single-player/custom" },
    { label: "Load Game", href: "/single-player/load" },
    { label: "Back to Main Menu", href: "/" },
  ],
  "/Multiplayer": [
    { label: "Login", href: "/Multiplayer/login", hasIcon: true },
    { label: "Create Account", href: "/Multiplayer/create" },
    { label: "Back to Main Menu", href: "/" },
  ],
  "/lan": [
    { label: "Create Game", href: "/lan/create" },
    { label: "Join Game", href: "/lan/join" },
    { label: "Back to Main Menu", href: "/" },
  ],
};

const DEFAULT_ROUTE: RouteConfig[] = [
  { label: "Back to Main Menu", href: "/" },
];

export default function MenuButtons() {
  const pathname = usePathname();
  const buttons = MENU_ROUTES[pathname] ?? DEFAULT_ROUTE;

  return (
    <div className="space-y-4">
      {buttons.map((button) => (
        <MenuButton
          key={button.href}
          label={button.label}
          href={button.href}
          hasIcon={button.hasIcon}
        />
      ))}
    </div>
  );
}
