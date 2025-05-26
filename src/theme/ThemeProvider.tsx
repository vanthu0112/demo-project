import { createContext, useContext, useEffect, useState } from "react";
import { ConfigProvider, App } from "antd";
import { darkTheme, lightTheme } from "./AntdTheme";
import saveThemeToLocalStorage, {
  getThemeFromLocalStorage,
} from "@/utils/localStorageHelper";
import { ThemeMode } from "@/constants/enums";

type Theme = "dark" | "light" | "system";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  isDark: boolean;
};

const initialState: ThemeProviderState = {
  theme: ThemeMode.SYSTEM,
  setTheme: () => null,
  isDark: false,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = ThemeMode.LIGHT,
  storageKey = ThemeMode.KEY_STORAGE,
  ...props
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(defaultTheme);
  const [isDark, setIsDark] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Initialize theme from local storage if available
  useEffect(() => {
    setIsMounted(true);
    const storedTheme = getThemeFromLocalStorage(storageKey);
    if (storedTheme) setThemeState(storedTheme as Theme);
  }, [storageKey]);

  useEffect(() => {
    if (!isMounted) return;
    // Update isDark based on the current theme
    const updateTheme = () => {
      if (theme === ThemeMode.SYSTEM) {
        const systemTheme = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;
        setIsDark(systemTheme);
      } else {
        setIsDark(theme === ThemeMode.DARK);
      }
    };

    updateTheme();

    // Save the theme to local storage whenever it changes
    if (theme === ThemeMode.SYSTEM) {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      mediaQuery.addEventListener("change", updateTheme);
      return () => mediaQuery.removeEventListener("change", updateTheme);
    }
  }, [theme, isMounted]);

  // Function to set the theme and save it to local storage
  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    saveThemeToLocalStorage(storageKey, newTheme);
  };

  if (!isMounted) return null; // Prevent rendering until mounted

  return (
    <ThemeProviderContext.Provider
      {...props}
      value={{
        theme,
        isDark,
        setTheme: (theme: Theme) => {
          setTheme(theme);
        },
      }}
    >
      <ConfigProvider theme={isDark ? darkTheme : lightTheme}>
        <App>{children}</App>
      </ConfigProvider>
    </ThemeProviderContext.Provider>
  );
}

// Export the context to be used in other components
export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};
