import { motion } from "framer-motion";

type MenuButtonProps = {
  label: string;
  hasIcon?: boolean;
  onClick?: () => void;
};

export function MenuButton({
  label,
  hasIcon = false,
  onClick,
}: MenuButtonProps) {
  return (
    <motion.button
      style={{
        width: "100%",
        position: "relative",
      }}
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      <div className="absolute inset-0 bg-blue-900 rounded-md border-2 border-gray-700 transform translate-x-1 translate-y-1"></div>
      <div className="relative bg-blue-800 hover:bg-blue-700 text-yellow-300 font-warcraft py-3 px-5 rounded-md border-2 border-gray-700 transition-all duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5 flex items-center justify-between text-lg">
        <span className="pixel-text">{label}</span>
        {hasIcon && (
          <div className="w-7 h-7 rounded-full bg-blue-500 border border-blue-300 flex items-center justify-center">
            <div className="w-5 h-5 bg-blue-300 rounded-full"></div>
          </div>
        )}
      </div>
    </motion.button>
  );
}
