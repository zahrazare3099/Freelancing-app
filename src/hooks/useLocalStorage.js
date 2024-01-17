import { useEffect, useState } from "react";

export default function useLocalStorage(
  key,
  initialState = window.matchMedia("(prefers-color-scheme)").matches
) {
  const [value, setValue] = useState(
    () => JSON.parse(localStorage.getItem(key)) || initialState
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  // asign theme to parent Node
  useEffect(() => {
    if (value) {
      document.documentElement.classList.add("dark-mode");
      document.documentElement.classList.remove("light-mode");
    } else {
      document.documentElement.classList.add("light-mode");
      document.documentElement.classList.remove("dark-mode");
    }
  }, [value]);

  return [value, setValue];
}

//   const [isDarkMode, setDarkMode] = useState(
//     () =>
//       JSON.parse(localStorage.getItem("darkTheme")) ||
//       window.matchMedia("(prefers-color-scheme)").matches
//   );
//   useEffect(() => {
//     localStorage.setItem("darkTheme", JSON.stringify(isDarkMode));
//   }, [isDarkMode]);
