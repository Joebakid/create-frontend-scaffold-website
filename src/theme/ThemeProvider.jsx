import { createContext, useContext, useEffect, useState } from "react";

const THEME_STORAGE_KEY = "create-bawo-theme";

const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
});

function getInitialTheme() {
  if (typeof window === "undefined") {
    return "light";
  }

  const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  const value = {
    theme,
    toggleTheme: () => {
      setTheme((currentTheme) =>
        currentTheme === "light" ? "dark" : "light"
      );
    },
  };

  return <ThemeContext value={value}>{children}</ThemeContext>;
}

export function useTheme() {
  return useContext(ThemeContext);
}
