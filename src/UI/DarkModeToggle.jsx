import React from "react";
import { HiOutlineMoon, HiSun } from "react-icons/hi2";
import { useTheme } from "../context/themeProvider";

export default function DarkModeToggle() {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme}>
      {isDarkMode ? (
        <HiSun className="w-5 h-5 text-primary-500 hover:text-yellow-100" />
      ) : (
        <HiOutlineMoon className="w-5 h-5 text-primary-500 hover:text-yellow-100" />
      )}
    </button>
  );
}
