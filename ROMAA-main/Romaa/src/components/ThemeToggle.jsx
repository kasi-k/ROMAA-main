import { Sun } from "lucide-react";
import { useTheme } from "../components/ThemeContext"; 
import { TbMoonStars } from "react-icons/tb";

const ThemeToggle = () => {
  const { isDark, setIsDark } = useTheme();

  return (
    <button
      onClick={() => setIsDark((prev) => !prev)}
      className="p-2 w-9 h-9 rounded-full bg-light-blue transition"
    >
      {isDark ? (
        <TbMoonStars className="h-5 w-5 text-darkest-blue" />
      ) : (
        <Sun className="h-5 w-5 text-darkest-blue" />
      )}
    </button>
  );
};

export default ThemeToggle;
