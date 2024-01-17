import { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isDarkMode, setDarkMode] = useLocalStorage("darkTheme");

  const toggleTheme = () => setDarkMode((pre) => !pre);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const theme = useContext(ThemeContext);
  if (theme === undefined)
    throw new Error("you're not in Theme provider context");
  return theme;
}
